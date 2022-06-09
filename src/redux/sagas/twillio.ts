import {
  GET_CALL_TOKEN,
  SET_CALL_CONFIG,
  GET_EXPERT_CALL_TOKEN,
  SET_EXPERT_CALL_CONFIG,
} from '../types';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';
import { put, takeEvery } from 'redux-saga/effects';
import { authorizeVideo } from '../../utils/firebase';

function* getToken({ data: { navigation, uid } }) {
  try {
    yield put(showApiLoader());
    const response = yield authorizeVideo(uid);
    yield put({
      type: SET_CALL_CONFIG,
      data: response.data,
    });
    yield put(hideApiLoader());
    navigation.navigate('TwillioCalling');
  } catch (error) {
    console.log(error);
    yield put(hideApiLoader());
    navigation.navigate('TwillioLogin');
  }
}

function* getExpertToken({ data: { navigation, euid } }) {
  try {
    yield put(showApiLoader());
    const response = yield authorizeVideo(euid);
    yield put({
      type: SET_EXPERT_CALL_CONFIG,
      data: response.data,
    });
    yield put(hideApiLoader());
    navigation.navigate('ExpertTwillioCalling');
  } catch (error) {
    console.log(error);
    yield put(hideApiLoader());
    navigation.navigate('ExpertTwillioLogin');
  }
}

export default function* () {
  yield takeEvery(GET_CALL_TOKEN, getToken);
  yield takeEvery(GET_EXPERT_CALL_TOKEN, getExpertToken);
}
