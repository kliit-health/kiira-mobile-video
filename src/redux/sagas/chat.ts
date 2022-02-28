import { put, takeEvery, select } from 'redux-saga/effects';
import {
    CHAT_MESSAGE_SENDING,
    CHAT_MESSAGE_LOADING,
    SET_QUESTION,
    SET_EXPERT_RATING,
    CHECK_EXPERT_STATUS,
    TOGGLE_USER_STATUS,
    STOP_OBSERVER_CHAT,
    RESOLVE_QUESTION,
} from '~/redux/types';
import {
    sendMessage,
    loadMessages,
    uploadImage,
    saveQuestion,
    updateQuestion,
    updateUserData,
    checkStatus,
    updateStatus,
    updateReadMessageStatus,
    updateUnreadCount,
    checkQuestionStatus,
    sendNotification,
    sendSms,
    resolvedQuestion,
} from '~/utils/firebase';
import auth from '@react-native-firebase/auth';
import {
    chatMessageSuccess,
    chatMessageError,
    loadMessagesSuccess,
    loadMessagesError,
    setQuestionId,
    checkExpertStatusSuccess,
    checkQuestionStatusSuccess,
} from '../actions/chat';
import {
    getResolvedQuestion,
    getUnresolvedQuestions,
} from '~/redux/actions/questions';
import { getUser } from '~/redux/actions';
import { showOrHideModal } from '~/components/customModal/action';
import * as actions from '~/redux/actions';
import { displayConsole } from '~/utils/helper';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { clearQuestionValue } from '../actions/ask';
import moment from 'moment';

let loadMessagesObserver;
let checkStatusObserver;
let checkQuestionStatusObserver;
const delay = ms => new Promise(res => setTimeout(res, ms));
let delayTime = 100;

function* setQuestion({ data, dispatch }) {
    const lang = yield select(state => state.language);
    try {
        yield put(showApiLoader());
        const state = yield select();
        const { userInfo, expertInfo, question } = data;
        const message = 'You have a new question on Kiira';
        const title = 'New message received';
        const setQuestionParams = {
            question,
            isResolved: false,
            modifiedDate: '',
            resolvedDate: '',
            createdAt: moment().unix(),
            expertInfo,
            userInfo,
            expertUnreadCount: 1,
            userUnreadCount: 0,
            lastMessage: question,
            isRated: false,
            uid: userInfo.uid,
            reason: state.ask.reason,
        };
        const responseSaveQuestion = yield saveQuestion(setQuestionParams);
        if (responseSaveQuestion.success) {
            const questionData = {
                question,
                isResolved: false,
                createdAt: moment().unix(),
                modifiedDate: '',
                resolvedDate: '',
                expertInfo,
                userInfo,
                messageId: responseSaveQuestion.data.messageId,
                questionId: responseSaveQuestion.data.questionId,
                expertUnreadCount: 1,
                userUnreadCount: 0,
                lastMessage: question,
                isRated: false,
            };
            yield put(
                setQuestionId({
                    messageId: responseSaveQuestion.data.messageId,
                    questionId: responseSaveQuestion.data.questionId,
                    questionData,
                }),
            );

            const user = auth().currentUser;

            if (user && user.uid) {
                try {
                    yield put(getUser());
                } catch (error) {
                    displayConsole('getUserData  error ', error);
                }
                yield delay(delayTime);
                yield checkQuestStatus({ data: { questionData }, dispatch });
                const sendMessageParams = {
                    id: responseSaveQuestion.data.messageId,
                    messageParams: {
                        text: question,
                        type: 'User',
                        createdAt: moment().unix(),
                        questionId: '',
                        isRead: false,
                        image: '',
                    },
                    lastMessage: question,
                    questionId: responseSaveQuestion.data.questionId,
                    unreadCount: {
                        expertUnreadCount: 1,
                    },
                };
                yield delay(delayTime);
                yield sendMessage(sendMessageParams);
                yield put(clearQuestionValue());
                const payloadData = {
                    data: {
                        id: responseSaveQuestion.data.messageId,
                    },
                    dispatch,
                };
                yield delay(delayTime);
                yield loadMessagesOfUser(payloadData);
                if (expertInfo.profileInfo.phoneNumber) {
                    yield sendSms(message, expertInfo.profileInfo.phoneNumber);
                }

                yield sendNotification(expertInfo.uid, title, message);
            } else {
                yield delay(500);
                yield put(hideApiLoader());
                yield put(
                    showOrHideModal(
                        responseSaveQuestion.message
                            ? responseSaveQuestion.message
                            : lang.errorMessage.serverError,
                    ),
                );
            }
        }
    } catch (error) {
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* sendMessageToUser({ data }) {
    const lang = yield select(state => state.language);
    try {
        const { messageParams, imageParams, id, lastMessage, questionId } =
            data;
        const message = 'A question on Kiira has been updated';
        const title = 'Question Update';
        if (imageParams) {
            yield put(showApiLoader());
            yield delay(delayTime);
            const responseImage = yield uploadImage(imageParams);
            if (responseImage.success) {
                const { downloadURL } = responseImage.data;
                messageParams.image = downloadURL;
                const state = yield select();
                const expertStatusData = state.chat.expertStatusData;
                const userData = state.user.data;
                const uid = expertStatusData.uid;
                const questionData = Object.assign({}, state.chat.questionData);

                var unreadCount = questionData.unreadCount
                    ? questionData.unreadCount
                    : 0;

                if (
                    expertStatusData &&
                    expertStatusData.isActive &&
                    expertStatusData.toUserId === userData.uid
                ) {
                    messageParams.isRead = true;
                    unreadCount = 0;
                } else {
                    unreadCount = unreadCount + 1;
                }
                const params = {
                    id,
                    messageParams,
                    lastMessage,
                    questionId,
                    unreadCount: {
                        expertUnreadCount: unreadCount,
                    },
                };

                yield put(hideApiLoader());
                yield sendMessage(params);
              
                questionData.expertUnreadCount = unreadCount;
                const dataResponse = {
                    questionData,
                };

                yield put(chatMessageSuccess(dataResponse));
                yield sendNotification(uid, title, message);
                if (expertStatusData.profileInfo.phoneNumber && expertStatusData.profileInfo.phoneNumber.length) {
                    yield sendSms(
                        message,
                        expertStatusData.profileInfo.phoneNumber,
                    );
                }
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
            const expertStatusData = state.chat.expertStatusData;
            const uid = expertStatusData.uid;
            const userData = state.user.data;
            const questionData = Object.assign({}, state.chat.questionData);
            var unreadCount = questionData.expertUnreadCount
                ? questionData.expertUnreadCount
                : 0;
            if (
                expertStatusData &&
                expertStatusData.isActive &&
                expertStatusData.toUserId === userData.uid
            ) {
                messageParams.isRead = true;
                unreadCount = 0;
            } else {
                unreadCount = unreadCount + 1;
            }
            const params = {
                id,
                messageParams,
                lastMessage,
                questionId,
                unreadCount: {
                    expertUnreadCount: unreadCount,
                },
            };

            yield sendMessage(params); 
            if (expertStatusData.profileInfo.phoneNumber && expertStatusData.profileInfo.phoneNumber.length) {
                yield sendSms(
                    message,
                    expertStatusData.profileInfo.phoneNumber,
                );
            }
            questionData.expertUnreadCount = unreadCount;
            const dataResponse = {
                questionData,
            };

            yield put(chatMessageSuccess(dataResponse));
            yield sendNotification(uid, title, message);
        }
    } catch (error) {
        yield put(hideApiLoader());
        yield put(chatMessageError());
        console.error(error);
    }
}

function* loadMessagesOfUser({ data, dispatch }) {
    const lang = yield select(state => state.language);
    try {
        yield put(showApiLoader());
        let isFirstTime = true;
        loadMessagesObserver = yield loadMessages(
            data,
            querySnapshot => {
                displayConsole(
                    'inside loadMessagesOfUser message',
                    querySnapshot.docs,
                );
                const response = {
                    success: true,
                    messages: querySnapshot.docs,
                };
                dispatch(loadMessagesSuccess(response.messages));
                if (isFirstTime) {
                    const obj = {
                        id: data.id,
                        key: 'type',
                        value: 'Expert',
                    };
                    dispatch(hideApiLoader());
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
                dispatch(hideApiLoader());
                dispatch(loadMessagesError(data.message));
            },
        );
    } catch (error) {
        displayConsole('loadMessagesOfUser  error ', error);
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* setExpertRating({
    data: { questionId, userRating, expertId: uid, navigation },
}) {
    try {
        yield updateQuestion({ isRated: true }, questionId);
        yield updateUserData({ userRating }, uid);
    } catch (error) {
        console.error(error);
    }

    navigation.goBack();
}

function* checkExpertStatus({ data, dispatch }) {
    try {
        displayConsole('data', data);
        const { expertInfo, questionData } = data;
        checkStatusObserver = yield checkStatus(
            {
                id: expertInfo.uid,
            },
            querySnapshot => {
                dispatch(checkExpertStatusSuccess(querySnapshot.data()));
            },
            error => {
                const { message } = error;

                const data = {
                    success: false,
                    message: message,
                };
                dispatch(loadMessagesError(data.message));
                displayConsole('data', data);
            },
        );
        if (questionData) {
            yield delay(delayTime);
            yield checkQuestStatus({ data: { questionData }, dispatch });
        }
    } catch (error) {
        displayConsole('checkExpertStatus  error ', error);
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* checkQuestStatus({ data, dispatch }) {
    const lang = yield select(state => state.language);
    try {
        displayConsole('data', data);
        const { questionData } = data;
        checkQuestionStatusObserver = yield checkQuestionStatus(
            {
                id: questionData.questionId,
            },
            querySnapshot => {
                dispatch(checkQuestionStatusSuccess(querySnapshot.data()));
            },
            error => {
                const { message } = error;

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

function* toggleUserStatus({ data }) {
    try {
        const { toggleStatusParams, questionData } = data;
        yield updateStatus(toggleStatusParams);
        if (questionData) {
            const params = {
                questionData,
                updateData: {
                    userUnreadCount: 0,
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
    const lang = yield select(state => state.language);
    const user = yield select(state => state.user.data);

    try {
        const { resolveQuestionParams } = data;
        const responseResolvedQuestion = yield resolvedQuestion(
            resolveQuestionParams,
        );

        if (responseResolvedQuestion.success) {
            yield put(actions.getResolvedQuestion({ uid: user.uid }));
            yield put(actions.getUnresolvedQuestions({ uid: user.uid }));
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

function* stopOberver() {
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

export default function* chatSaga() {
    yield takeEvery(CHAT_MESSAGE_SENDING, sendMessageToUser);
    yield takeEvery(CHAT_MESSAGE_LOADING, loadMessagesOfUser);
    yield takeEvery(SET_EXPERT_RATING, setExpertRating);
    yield takeEvery(SET_QUESTION, setQuestion);
    yield takeEvery(CHECK_EXPERT_STATUS, checkExpertStatus);
    yield takeEvery(TOGGLE_USER_STATUS, toggleUserStatus);
    yield takeEvery(RESOLVE_QUESTION, resolveQuestion);
    yield takeEvery(STOP_OBSERVER_CHAT, stopOberver);
}
