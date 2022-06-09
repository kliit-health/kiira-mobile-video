import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_EXPERTS,
  GET_EXPERTS_FULFILLED,
  GET_EXPERTS_PENDING,
  GET_EXPERTS_REJECTED,
} from '../types';
import { firebaseFetch } from '../../utils/firebase';

function* getExperts() {
  try {
    yield put({
      type: GET_EXPERTS_PENDING,
    });
    const condition = [{ key: 'role', operator: '==', value: 'Expert' }];
    const experts = yield firebaseFetch('users', condition);
    yield put({
      type: GET_EXPERTS_FULFILLED,
      data: experts,
    });
  } catch (error) {
    yield put({
      type: GET_EXPERTS_REJECTED,
      data: error,
    });
  }
}

export default function* () {
  yield takeEvery(GET_EXPERTS, getExperts);
}
