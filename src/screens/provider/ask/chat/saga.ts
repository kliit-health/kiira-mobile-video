import { put, takeEvery, select } from 'redux-saga/effects';
import {
  sendMessage,
  loadMessages,
  uploadImage,
  checkStatus,
  updateStatus,
  updateReadMessageStatus,
  updateUnreadCount,
  checkQuestionStatus,
  resolvedQuestion,
  sendChatUpdateNotification,
} from '~/utils/firebase';
import {
  loadExpertMessagesSuccess,
  loadExpertMessagesError,
  chatMessageExpertSuccess,
  chatMessageExpertError,
  checkUserStatusSuccess,
  checkQuestionExpertStatusSuccess,
} from './action';
import { showOrHideModal } from '~/components/customModal/action';
import { displayConsole } from '~/utils/helper';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import Constant from '../../../../utils/constants';
import {
  CHAT_MESSAGE_EXPERT_LOADING,
  CHAT_MESSAGE_EXPERT_SENDING,
  CHECK_USER_STATUS,
  TOGGLE_EXPERT_STATUS,
  RESOLVE_QUESTION,
  STOP_OBSERVER_CHAT,
} from '~/redux/types';

const delay = ms => new Promise(res => setTimeout(res, ms));
let delayTime = 100,
  loadMessagesObserver,
  checkStatusObserver,
  checkQuestionStatusObserver;

function* sendMessageToUser({ data }) {
  const lang = yield select(state => state.language);
  try {
    const { messageParams, imageParams, id, lastMessage, questionId } = data;
    if (imageParams) {
      yield put(showApiLoader(lang.apiLoader.loadingText));
      const responseImage = yield uploadImage(imageParams);
      if (responseImage.success) {
        const { downloadURL } = responseImage.data;
        messageParams.image = downloadURL;
        const state = yield select();
        const userStatusData = state.chatExpert.userStatusData;
        const userData = state.user.data;
        const questionData = Object.assign({}, state.chatExpert.questionData);
        var unreadCount = questionData.userUnreadCount
          ? questionData.userUnreadCount
          : 0;
        if (
          userStatusData &&
          userStatusData.isActive &&
          userStatusData.toUserId === userData.uid
        ) {
          messageParams.isRead = true;
        } else {
          unreadCount = unreadCount + 1;
        }
        const params = {
          id,
          messageParams,
          lastMessage,
          questionId,
          unreadCount: {
            userUnreadCount: unreadCount,
          },
        };
        yield put(hideApiLoader());
        yield sendMessage(params);
        questionData.userUnreadCount = unreadCount;
        const dataResponse = {
          questionData,
        };
        yield put(chatMessageExpertSuccess(dataResponse));
      } else {
        yield put(
          showOrHideModal(
            responseImage.message
              ? responseImage.message
              : lang.errorMessage.serverError,
          ),
        );
      }
    } else {
      const state = yield select();
      const userStatusData = state.chatExpert.userStatusData;
      const userData = state.user.data;
      const questionData = Object.assign({}, state.chatExpert.questionData);
      var unreadCount = questionData.userUnreadCount
        ? questionData.userUnreadCount
        : 0;
      if (
        userStatusData &&
        userStatusData.isActive &&
        userStatusData.toUserId === userData.uid
      ) {
        messageParams.isRead = true;
      } else {
        unreadCount = unreadCount + 1;
      }
      const params = {
        id,
        messageParams,
        lastMessage,
        questionId,
        unreadCount: {
          userUnreadCount: unreadCount,
        },
      };
      yield sendMessage(params);
      questionData.userUnreadCount = unreadCount;
      const dataResponse = {
        questionData,
      };
      yield put(chatMessageExpertSuccess(dataResponse));
      yield sendChatUpdateNotification({ toUserId: userData.uid });
    }
  } catch (error) {
    yield put(chatMessageExpertError());
  }
}
function* loadMessagesOfExpert({ data, dispatch }) {
  const lang = yield select(state => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    let isFirstTime = true;
    loadMessagesObserver = yield loadMessages(
      data,
      querySnapshot => {
        const response = {
          success: true,
          messages: querySnapshot.docs,
        };
        dispatch(hideApiLoader());
        dispatch(loadExpertMessagesSuccess(response.messages));
        if (isFirstTime) {
          const obj = {
            id: data.id,
            key: 'type',
            value: 'User',
          };
          updateReadMessageStatus(obj);
          isFirstTime = false;
        }
      },
      error => {
        const { message } = error;

        const data = {
          success: false,
          message: message,
        };
        dispatch(loadExpertMessagesError(data.message));
      },
    );
  } catch (error) {
    displayConsole('loadMessagesOfExpert  error ', error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* checkUserStatus({ data, dispatch }) {
  const lang = yield select(state => state.language);
  try {
    const { userInfo, questionData } = data;
    checkStatusObserver = yield checkStatus(
      {
        id: userInfo.uid,
      },
      querySnapshot => {
        dispatch(checkUserStatusSuccess(querySnapshot.data()));
      },
      error => {
        const { message, code } = error;
        displayConsole('message', message);
        displayConsole('code', code);
        const data = {
          success: false,
          message: message,
        };
        dispatch(loadMessagesError(data.message));
      },
    );
    if (questionData) {
      yield delay(delayTime);
      yield checkQuestStatus({ data: { questionData }, dispatch });
    }
  } catch (error) {
    displayConsole('checkUserStatus  error ', error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* checkQuestStatus({ data, dispatch }) {
  const lang = yield select(state => state.language);
  try {
    const { questionData } = data;
    checkQuestionStatusObserver = yield checkQuestionStatus(
      {
        id: questionData.questionId,
      },
      querySnapshot => {
        dispatch(checkQuestionExpertStatusSuccess(querySnapshot.data()));
      },
      error => {
        const { message, code } = error;
        displayConsole('code', code);
        const data = {
          success: false,
          message: message,
        };
        displayConsole('data', data);
      },
    );
  } catch (error) {
    displayConsole('checkQuestStatus  error ', error);
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* toggleExpertStatus({ data }) {
  try {
    displayConsole('data', data);
    const { toggleStatusParams, questionData } = data;
    yield updateStatus(toggleStatusParams);
    if (questionData) {
      const params = {
        questionData,
        updateData: {
          expertUnreadCount: 0,
        },
      };
      yield delay(delayTime);
      yield updateUnreadCount(params);
    }
  } catch (error) {
    displayConsole('toggleUserStatus  error ', error);
  }
}

function* resolveQuestion({ data }) {
  try {
    displayConsole('data', data);
    const { resolveQuestionParams, navigation } = data;
    const responseResolvedQuestion = yield resolvedQuestion(
      resolveQuestionParams,
    );

    if (responseResolvedQuestion.success) {
      navigation.navigate(Constant.App.screenNames.BottomTabExpert);
    } else {
      yield put(
        showOrHideModal(
          responseResolvedQuestion.message
            ? responseResolvedQuestion.message
            : lang.errorMessage.serverError,
        ),
      );
    }
  } catch (error) {
    displayConsole('setExpertRating  error ', error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* stopObserver() {
  try {
    if (checkQuestionStatusObserver) {
      checkQuestionStatusObserver();
    }
    if (checkStatusObserver) {
      checkStatusObserver();
    }
    if (loadMessagesObserver) {
      loadMessagesObserver();
    }
  } catch (error) {
    displayConsole('stopOberver  error ', error);
  }
}

export default function* chatExpertSaga() {
  yield takeEvery(CHAT_MESSAGE_EXPERT_LOADING, loadMessagesOfExpert);
  yield takeEvery(CHAT_MESSAGE_EXPERT_SENDING, sendMessageToUser);
  yield takeEvery(CHECK_USER_STATUS, checkUserStatus);
  yield takeEvery(TOGGLE_EXPERT_STATUS, toggleExpertStatus);
  yield takeEvery(RESOLVE_QUESTION, resolveQuestion);
  yield takeEvery(STOP_OBSERVER_CHAT, stopObserver);
}
