import {put, takeEvery} from 'redux-saga/effects';
import {
  GET_CHAT_HISTORY,
  GET_CHAT_HISTORY_ASYNC,
  GET_VIDEO_HISTORY,
  GET_VIDEO_HISTORY_ASYNC,
} from '../../../../../redux/types';
import {collections} from '../../../../../utils/constants';
import {
  auth,
  firebaseFetch,
  getAppointments,
} from '../../../../../utils/firebase';

function* getChatHistoryAsync() {
  const uid = auth.currentUser.uid;
  const condition = [{key: 'uid', operator: '==', value: uid}];

  try {
    const chatHistory = yield firebaseFetch(collections.questions, condition);
    yield put({
      type: GET_CHAT_HISTORY,
      data: chatHistory,
    });
  } catch (error) {
    console.error(error);
  }
}

function* getVideoHistoryAsync() {
  const uid = auth.currentUser.uid;

  try {
    const appointments = yield getAppointments(uid);
    yield put({
      type: GET_VIDEO_HISTORY,
      data: appointments.history,
    });
  } catch (error) {
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_CHAT_HISTORY_ASYNC, getChatHistoryAsync);
  yield takeEvery(GET_VIDEO_HISTORY_ASYNC, getVideoHistoryAsync);
}
