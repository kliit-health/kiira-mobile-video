import {
  GET_PATIENT_DETAILS,
  GET_PATIENT_DETAILS_PENDING,
  GET_PATIENT_DETAILS_FULFILLED,
  GET_PATIENT_DETAILS_REJECTED,
  UPDATE_PATIENT_DETAILS,
  UPDATE_PATIENT_DETAILS_PENDING,
  UPDATE_PATIENT_DETAILS_FULFILLED,
  UPDATE_PATIENT_DETAILS_REJECTED,
} from '../../redux/types';
import moment from 'moment';
import {put, takeEvery, select} from 'redux-saga/effects';
import {firebaseSingleFetch, updateSingleDocument} from '../../utils/firebase';

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
      const userDetails = yield select((state) => state.userDetails.data);
      const {
        uid,
        profileInfo: {firstName, lastName, dob},
      } = userDetails;

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

      const hasConsentAgreements = userDetails.hasOwnProperty(
        'consentAgreements',
      );
      if (hasConsentAgreements) {
        yield put({
          type: UPDATE_PATIENT_DETAILS,
          data: {
            dataKey: 'consentAgreements',
            updates: userDetails.consentAgreements,
            uid,
          },
        });
      }
    } catch (error) {
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
    yield updateSingleDocument(uid, 'patient', {[dataKey]: updates});
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

export default function* () {
  yield takeEvery(GET_PATIENT_DETAILS, getPatientDetails);
  yield takeEvery(UPDATE_PATIENT_DETAILS, updatePatientDetails);
}
