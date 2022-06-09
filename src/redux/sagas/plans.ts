import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_PLANS,
  GET_PLANS_FULFILLED,
  GET_PLANS_PENDING,
  GET_PLANS_REJECTED,
} from '../types';
import { firebaseFetch } from '../../utils/firebase';

function* getPlans() {
  try {
    yield put({
      type: GET_PLANS_PENDING,
    });
    const condition = [
      { key: 'active', operator: '==', value: true },
      { key: 'type', operator: '==', value: 'user' },
    ];
    const plans = yield firebaseFetch('plans', condition);
    yield put({
      type: GET_PLANS_FULFILLED,
      data: plans,
    });
  } catch (error) {
    yield put({
      type: GET_PLANS_REJECTED,
      data: error,
    });
  }
}

export default function* () {
  yield takeEvery(GET_PLANS, getPlans);
}
