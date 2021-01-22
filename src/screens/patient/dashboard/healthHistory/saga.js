import firebase from 'react-native-firebase';
import {
  UPDATE_HEALTH_HISTORY,
  GET_HEALTH_HISTORY,
  GET_HEALTH_HISTORY_ASYNC,
  UPDATE_HEALTH_HISTORY_ASYNC,
} from '../../../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {getHealthHistory, addHealthHistory} from '../../../../utils/firebase';

function* getHealthHistoryAsync() {
  const {uid} = firebase.auth().currentUser;

  try {
    const healthHistory = yield getHealthHistory(uid);
    yield put({
      type: GET_HEALTH_HISTORY,
      data: healthHistory,
    });
  } catch (error) {
    console.error(error);
  }
}

function* updateHealthHistoryAsync({data: {navigation, ...rest}}) {
  const {uid} = firebase.auth().currentUser;
  try {
    yield addHealthHistory({...rest}, uid);
    yield put({type: UPDATE_HEALTH_HISTORY, data: {...rest}});
  } catch (error) {
    console.error(error);
  }
  navigation && navigation.goBack();
}

export default function* () {
  yield takeEvery(GET_HEALTH_HISTORY_ASYNC, getHealthHistoryAsync);
  yield takeEvery(UPDATE_HEALTH_HISTORY_ASYNC, updateHealthHistoryAsync);
}
