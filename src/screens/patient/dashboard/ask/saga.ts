import {put, takeEvery, select} from 'redux-saga/effects';
import {hideApiLoader} from '~/components/customLoader/action';
import {
  getRecentExpertsData,
  getQuestionsData,
  updateRefrealcodeForAllUsers,
  getDataFromTable,
} from '~/utils/firebase';
import {showOrHideModal} from '~/components/customModal/action';
import {
  getRecentExpertsDataSuccess,
  getQuestionDataSuccess,
  getPreviousQuestionDataSuccess,
} from './action';
import {GET_QUESTION_DATA, UPDATE_USER_DATA} from '~/redux/types';
import {displayConsole} from '~/utils/helper';
import auth from '@react-native-firebase/auth';
import {tables} from '~/utils/constants';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let delayTime = 100;

function* updateNewKeyToUserTable({id, data}) {
  console.log('updateNewKeyToUserTable*******', id);
  yield updateRefrealcodeForAllUsers(id, data);
}

function* getQuestions({data, dispatch}) {
  const lang = yield select((state) => state.language);
  try {
    const {expertsParams, questionParams, previousQuestionParams} = data;
    const user = auth().currentUser;
    const {uid} = user;
    const obj = {
      tableName: tables.users,
      uid,
    };
    const userData = yield getDataFromTable(obj);
    yield getQuestionsData(
      questionParams,
      (querySnapshot) => {
        dispatch(
          getQuestionDataSuccess(
            querySnapshot.docs && querySnapshot.docs.length > 0
              ? querySnapshot.docs[0].data()
              : null,
          ),
        );
      },
      (error) => {
        const {message, code} = error;
        if (code && code !== 'firestore/permission-denied') {
          dispatch(hideApiLoader());
          dispatch(
            showOrHideModal(message ? message : lang.errorMessage.serverError),
          );
        }
      },
    );

    if (expertsParams && previousQuestionParams) {
      yield delay(delayTime);
      yield getRecentExperts(expertsParams, previousQuestionParams, dispatch);
    }
  } catch (error) {
    console.log('ASK ERROR', error);
    yield put(hideApiLoader());
    yield delay(500);
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* getRecentExperts(expertsParams, previousQuestionParams, dispatch) {
  const lang = yield select((state) => state.language);
  try {
    yield getRecentExpertsData(
      expertsParams,
      (querySnapshot) => {
        dispatch(
          getRecentExpertsDataSuccess(
            querySnapshot.docs && querySnapshot.docs.length > 0
              ? querySnapshot.docs
              : [],
          ),
        );
      },
      (error) => {
        const {message, code} = error;
        if (code && code !== 'firestore/permission-denied') {
          dispatch(hideApiLoader());
          dispatch(
            showOrHideModal(message ? message : lang.errorMessage.serverError),
          );
        }
      },
    );

    if (previousQuestionParams) {
      yield delay(delayTime);
      yield getPreviousQuestions(previousQuestionParams, dispatch);
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield delay(500);
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* getPreviousQuestions(previousQuestionParams, dispatch) {
  const lang = yield select((state) => state.language);
  try {
    yield getQuestionsData(
      previousQuestionParams,
      (querySnapshot) => {
        dispatch(getPreviousQuestionDataSuccess(querySnapshot.docs));
        dispatch(hideApiLoader());
      },
      (error) => {
        const {message, code} = error;
        dispatch(hideApiLoader());
        if (code && code !== 'firestore/permission-denied') {
          dispatch(
            showOrHideModal(message ? message : lang.errorMessage.serverError),
          );
        }
      },
    );
  } catch (error) {
    yield put(hideApiLoader());
    yield delay(500);
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}
export default function* askSaga() {
  yield takeEvery(GET_QUESTION_DATA, getQuestions);
  yield takeEvery(UPDATE_USER_DATA, updateNewKeyToUserTable);
}
