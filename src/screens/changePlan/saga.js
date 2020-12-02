import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_PLANS,
  GET_PLANS_FULFILLED,
  GET_PLANS_PENDING,
  GET_PLANS_REJECTED,
  CHANGE_PLAN,
  CHANGE_PLAN_FULFILLED,
  CHANGE_PLAN_PENDING,
  CHANGE_PLAN_REJECTED,
} from '../../redux/types';
import { firebaseFetch, changeSubscriptionPlan } from '../../utils/firebase';

function* getPlans() {
  const condition = [{ key: 'active', operator: '==', value: true }];

  try {
    yield put({ type: GET_PLANS_PENDING });
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
    console.error(error);
  }
}

function* changePlan({ data: { subscriptionId, planId } }) {
  try {
    yield put({ type: CHANGE_PLAN_PENDING });
    const plan = yield changeSubscriptionPlan({ subscriptionId, planId });
    yield put({
      type: CHANGE_PLAN_FULFILLED,
      data: plan,
    });
  } catch (error) {
    yield put({
      type: CHANGE_PLAN_REJECTED,
      data: error,
    });
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_PLANS, getPlans);
  yield takeEvery(CHANGE_PLAN, changePlan);
}
