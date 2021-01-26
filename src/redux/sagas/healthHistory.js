import {
  GET_HEALTH_HISTORY,
  GET_HEALTH_HISTORY_PENDING,
  GET_HEALTH_HISTORY_REJECTED,
  GET_HEALTH_HISTORY_FULFILLED,
  UPDATE_HEALTH_HISTORY,
  UPDATE_HEALTH_HISTORY_PENDING,
  UPDATE_HEALTH_HISTORY_REJECTED,
  UPDATE_HEALTH_HISTORY_FULFILLED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch, firebaseSingleUpdate} from '../../utils/firebase';

function* getHealthHistory({data: {uid}}) {
  try {
    yield put({type: GET_HEALTH_HISTORY_PENDING});
    const healthHistory = yield firebaseSingleFetch('healthHistory', uid);
    yield put({
      type: GET_HEALTH_HISTORY_FULFILLED,
      data: healthHistory,
    });
  } catch (error) {
    yield put({type: GET_HEALTH_HISTORY_REJECTED, data: error});
  }
}

function* updateHealthHistory({data: {navigation, uid, ...rest}}) {
  try {
    yield put({type: UPDATE_HEALTH_HISTORY_PENDING});
    yield firebaseSingleUpdate(uid, 'healthHistory', {
      ...rest,
    });
    navigation && navigation.goBack();

    yield put({type: UPDATE_HEALTH_HISTORY_FULFILLED, data: {...rest}});
  } catch (error) {
    yield put({type: UPDATE_HEALTH_HISTORY_REJECTED, data: error});
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_HEALTH_HISTORY, getHealthHistory);
  yield takeEvery(UPDATE_HEALTH_HISTORY, updateHealthHistory);
}
