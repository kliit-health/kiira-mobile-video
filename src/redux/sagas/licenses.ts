import {
  GET_LICENSES,
  GET_LICENSES_FULFILLED,
  GET_LICENSES_PENDING,
  GET_LICENSES_REJECTED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch} from '../../utils/firebase';

function* getLicenses() {
  try {
    yield put({type: GET_LICENSES_PENDING});
    const licenses = yield firebaseSingleFetch('licenses', 'states');
    yield put({
      type: GET_LICENSES_FULFILLED,
      data: licenses,
    });
  } catch (error) {
    yield put({type: GET_LICENSES_REJECTED, data: error});
  }
}

export default function* () {
  yield takeEvery(GET_LICENSES, getLicenses);
}
