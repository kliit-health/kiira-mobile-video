import {
  GET_PRIVACY_POLICY,
  GET_PRIVACY_POLICY_PENDING,
  GET_PRIVACY_POLICY_FULFILLED,
  GET_PRIVACY_POLICY_REJECTED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch} from '../../utils/firebase';

function* getPrivacyPolicy() {
  try {
    yield put({type: GET_PRIVACY_POLICY_PENDING});
    const privacyPolicy = yield firebaseSingleFetch('legal', 'privacy');
    yield put({
      type: GET_PRIVACY_POLICY_FULFILLED,
      data: privacyPolicy,
    });
  } catch (error) {
    yield put({type: GET_PRIVACY_POLICY_REJECTED, data: error});
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_PRIVACY_POLICY, getPrivacyPolicy);
}
