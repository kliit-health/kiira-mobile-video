import {
  GET_PATIENT_DETAILS,
  GET_PATIENT_DETAILS_PENDING,
  GET_PATIENT_DETAILS_FULFILLED,
  GET_PATIENT_DETAILS_REJECTED,
  UPDATE_PATIENT_DETAILS,
  UPDATE_PATIENT_DETAILS_PENDING,
  UPDATE_PATIENT_DETAILS_FULFILLED,
  UPDATE_PATIENT_DETAILS_REJECTED,
  UPDATE_MEDICAL_HISTORY_EXPERT,
  LOCK_VISIT,
  GET_MEDICAL_HISTORY,
  SET_MEDICAL_HISTORY,
} from 'redux/types';
import {
  showApiLoader,
  hideApiLoader,
} from 'components/customLoader/action';
import moment from 'moment';
import {put, takeEvery, select, call} from 'redux-saga/effects';
import {
  firebaseSingleFetch,
  firebaseSingleUpdate,
  saveAndLock,
  getMedicalHistoryAsync,
  sendVisitRecap,
} from 'utils/firebase';
import * as actions from 'redux/actions';
import {clearMedicalHistory} from './actions';

function* getPatientDetails({data}) {
  try {
    yield put({type: GET_PATIENT_DETAILS_PENDING});
    const details = yield firebaseSingleFetch('patient', data.uid);

    yield put({
      type: GET_PATIENT_DETAILS_FULFILLED,
      data: details,
    });
  } catch (error) {
    try {
      const user = yield firebaseSingleFetch('users', data.uid);

      const {
        firstName,
        lastName,
        profileInfo: {dob},
        uid,
      } = user;
      yield put({
        type: UPDATE_PATIENT_DETAILS,
        data: {
          dataKey: 'personalInformation',
          updates: {
            fullName: `${firstName} ${lastName}`,
            dateOfBirth: moment(dob, 'MM/DD/YYYY').valueOf(),
          },
          uid,
        },
      });

      const hasConsentAgreements = user.hasOwnProperty('consentAgreements');

      if (hasConsentAgreements) {
        yield put({
          type: UPDATE_PATIENT_DETAILS,
          data: {
            dataKey: 'consentAgreements',
            updates: user.consentAgreements,
            uid,
          },
        });
      }
    } catch (error) {
      console.log('ERROR', error);
      yield put({
        type: GET_PATIENT_DETAILS_REJECTED,
        data: error,
      });
    }
  }
}

function* updatePatientDetails({data}) {
  const {uid, updates, dataKey} = data;
  const hasNavigation = data.hasOwnProperty('navigation');

  try {
    yield put({type: UPDATE_PATIENT_DETAILS_PENDING});
    yield firebaseSingleUpdate(uid, 'patient', {[dataKey]: updates});
    yield put({
      type: UPDATE_PATIENT_DETAILS_FULFILLED,
      data: {updates, dataKey},
    });

    if (hasNavigation) {
      data.navigation.goBack();
    }
  } catch (error) {
    yield put({
      type: UPDATE_PATIENT_DETAILS_REJECTED,
      data: error,
    });
  }
}

function* lockVisit(data) {
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const update = yield call(saveAndLock, data);
    yield call(sendVisitRecap, data);
    yield put(clearMedicalHistory());
    yield put({
      type: UPDATE_MEDICAL_HISTORY_EXPERT,
      payload: {
        appointment: {...update},
      },
    });
    yield put(hideApiLoader());
    data.navigation.navigate('ExpertAppointments');
  } catch (error) {
    yield put(hideApiLoader());
    yield put(
      actions.showMessage({message: lang.expertAppointments.lockError}),
    );
    console.error(error);
  }
}

function* getMedicalHistory(data) {
  try {
    const records = yield getMedicalHistoryAsync(data);
    yield put({
      type: SET_MEDICAL_HISTORY,
      payload: {
        history: [...records.history],
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield takeEvery(GET_PATIENT_DETAILS, getPatientDetails);
  yield takeEvery(UPDATE_PATIENT_DETAILS, updatePatientDetails);
  yield takeEvery(LOCK_VISIT, lockVisit);
  yield takeEvery(GET_MEDICAL_HISTORY, getMedicalHistory);
}
