import {
  GET_SUBSCRIPTION,
  GET_SUBSCRIPTION_FULFILLED,
  GET_SUBSCRIPTION_PENDING,
  GET_SUBSCRIPTION_REJECTED,
  CANCEL_SUBSCRIPTION,
  CANCEL_SUBSCRIPTION_PENDING,
  CANCEL_SUBSCRIPTION_FULFILLED,
  CANCEL_SUBSCRIPTION_REJECTED,
} from '../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {
  firebaseSingleFetch,
  cancelSubscription as invalidateSubscription,
} from '../../utils/firebase';

function* getSubscription({data: {id}}) {
  try {
    yield put({type: GET_SUBSCRIPTION_PENDING});
    const subscription = yield firebaseSingleFetch('subscriptions', id);
    yield put({
      type: GET_SUBSCRIPTION_FULFILLED,
      data: subscription,
    });
  } catch (error) {
    yield put({type: GET_SUBSCRIPTION_REJECTED, data: error});
    console.error(error);
  }
}

function* cancelSubscription({data: {subscriptionId, userId}}) {
  try {
    yield put({type: CANCEL_SUBSCRIPTION_PENDING});
    const updates = yield invalidateSubscription({subscriptionId, userId});
    yield put({
      type: CANCEL_SUBSCRIPTION_FULFILLED,
      data: updates,
    });
  } catch (error) {
    yield put({type: CANCEL_SUBSCRIPTION_REJECTED, data: error});
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_SUBSCRIPTION, getSubscription);
  yield takeEvery(CANCEL_SUBSCRIPTION, cancelSubscription);
}
