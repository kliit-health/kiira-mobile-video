import {
  GET_AGREEMENTS,
  GET_AGREEMENTS_FULFILLED,
  GET_AGREEMENTS_PENDING,
  GET_AGREEMENTS_REJECTED,
} from '../types';
import { put, takeEvery } from 'redux-saga/effects';
import { firebaseSingleFetch } from '../../utils/firebase';

function* getAgreements() {
  try {
    yield put({ type: GET_AGREEMENTS_PENDING });
    const agreements = yield firebaseSingleFetch('agreements', 'treatment');

    yield put({
      type: GET_AGREEMENTS_FULFILLED,
      data: agreements,
    });
  } catch (error) {
    yield put({ type: GET_AGREEMENTS_REJECTED, data: error });

    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_AGREEMENTS, getAgreements);
}
