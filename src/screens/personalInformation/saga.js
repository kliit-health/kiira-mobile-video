import {
  SAVE_PERSONAL_INFORMATION,
  SAVE_PERSONAL_INFORMATION_FULFILLED,
  SAVE_PERSONAL_INFORMATION_PENDING,
  SAVE_PERSONAL_INFORMATION_REJECTED,
  GET_PERSONAL_INFORMATION,
  GET_PERSONAL_INFORMATION_PENDING,
  GET_PERSONAL_INFORMATION_FULFILLED,
  GET_PERSONAL_INFORMATION_REJECTED,
} from '../../redux/types';
import moment from 'moment';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch, updateSingleDocument} from '../../utils/firebase';

function* savePersonalInformation({data: {uid, data: details, navigation}}) {
  try {
    yield put({type: SAVE_PERSONAL_INFORMATION_PENDING});
    const data = yield updateSingleDocument(uid, 'patient', {
      personalInformation: {
        updatedAt: Date.now(),
        ...details,
      },
    });
    yield put({
      type: SAVE_PERSONAL_INFORMATION_FULFILLED,
      data: data.personalInformation,
    });
    navigation.goBack();
  } catch (error) {
    yield put({
      type: SAVE_PERSONAL_INFORMATION_REJECTED,
      data: error,
    });
  }
}

function* getPersonalInformation({data: {uid}}) {
  try {
    yield put({
      type: GET_PERSONAL_INFORMATION_PENDING,
    });

    const patient = yield firebaseSingleFetch('patient', uid);
    const data = patient.personalInformation;

    yield put({
      type: GET_PERSONAL_INFORMATION_FULFILLED,
      data,
    });
  } catch (error) {
    try {
      const user = yield firebaseSingleFetch('users', uid);
      const {firstName, lastName, dob} = user.profileInfo;

      const dateOfBirth = moment(dob).unix();
      const data = {
        fullName: `${firstName} ${lastName}`,
        dateOfBirth,
      };

      yield put({
        type: GET_PERSONAL_INFORMATION_FULFILLED,
        data,
      });
    } catch (error) {
      yield put({
        type: GET_PERSONAL_INFORMATION_REJECTED,
        data: error,
      });
    }
  }
}

export default function* () {
  yield takeEvery(SAVE_PERSONAL_INFORMATION, savePersonalInformation);
  yield takeEvery(GET_PERSONAL_INFORMATION, getPersonalInformation);
}
