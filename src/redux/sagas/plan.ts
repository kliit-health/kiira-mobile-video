import {
  GET_PLAN,
  GET_PLAN_FULFILLED,
  GET_PLAN_PENDING,
  GET_PLAN_REJECTED,
  UPDATE_PLAN,
  UPDATE_PLAN_FULFILLED,
  UPDATE_PLAN_PENDING,
  UPDATE_PLAN_REJECTED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {
  firebaseSingleFetch,
  updateSubscriptionPlan,
} from '../../utils/firebase';

function* getPlan({data: {id}}) {
  try {
    yield put({type: GET_PLAN_PENDING});
    const plan = yield firebaseSingleFetch('plans', id);
    yield put({
      type: GET_PLAN_FULFILLED,
      data: plan,
    });
  } catch (error) {
    yield put({type: GET_PLAN_REJECTED, data: error});
  }
}

function* udpatePlan({data: {subscriptionId, planId}}) {
  try {
    yield put({type: UPDATE_PLAN_PENDING});
    const plan = yield updateSubscriptionPlan({subscriptionId, planId});
    yield put({
      type: UPDATE_PLAN_FULFILLED,
      data: plan,
    });
  } catch (error) {
    yield put({
      type: UPDATE_PLAN_REJECTED,
      data: error,
    });
  }
}

export default function* () {
  yield takeEvery(GET_PLAN, getPlan);
  yield takeEvery(UPDATE_PLAN, udpatePlan);
}
