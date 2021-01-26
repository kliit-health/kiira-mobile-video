import {
  GET_CLIENT_MEDICAL_HISTORY,
  GET_CLIENT_MEDICAL_HISTORY_FULFILLED,
  GET_CLIENT_MEDICAL_HISTORY_PENDING,
  GET_CLIENT_MEDICAL_HISTORY_REJECTED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch, auth} from '../../utils/firebase';

function* getMedicalHistory() {
  const uid = auth.currentUser.uid;
  try {
    yield put({type: GET_CLIENT_MEDICAL_HISTORY_PENDING});
    const medicalHistory = yield firebaseSingleFetch('medicalHistory', uid);

    yield put({
      type: GET_CLIENT_MEDICAL_HISTORY_FULFILLED,
      data: medicalHistory,
    });
  } catch (error) {
    yield put({type: GET_CLIENT_MEDICAL_HISTORY_REJECTED, data: error});
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_CLIENT_MEDICAL_HISTORY, getMedicalHistory);
}
