import {
  GET_SUBSCRIPTION,
  GET_SUBSCRIPTION_FULFILLED,
  GET_SUBSCRIPTION_PENDING,
  GET_SUBSCRIPTION_REJECTED,
} from '../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch} from '../../utils/firebase';

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

export default function* () {
  yield takeEvery(GET_SUBSCRIPTION, getSubscription);
}
