import {call, put, takeEvery, take, select} from 'redux-saga/effects';
import {eventChannel, END} from 'redux-saga';
import {orderBy} from 'lodash';
import {firebaseRealTimeFetch} from '../../../utils/firebase';
import {collections} from '~/utils/constants';
import {
  GET_EXPERT_ACTIVE_QUESTIONS,
  GET_EXPERT_ACTIVE_QUESTIONS_FULFILLED,
  GET_EXPERT_RESOLVED_QUESTIONS,
  GET_EXPERT_RESOLVED_QUESTIONS_FULFILLED,
  SEARCH_EXPERT_QUESTIONS,
} from '~/redux/types';

function getQuestions(collection, conditions) {
  return eventChannel((emit) => {
    const unsubscribe = firebaseRealTimeFetch(
      collection,
      conditions,
      (questions) => emit(questions),
      (error) => {
        emit(END);
        console.log(error);
      },
    );
    return () => unsubscribe;
  });
}

function* getActiveQuestions({data: {uid}}) {
  const conditions = [
    {key: 'expertInfo.uid', operator: '==', value: uid},
    {key: 'isResolved', operator: '==', value: false},
  ];

  const channel = yield call(getQuestions, collections.questions, conditions);

  try {
    while (true) {
      let questions = yield take(channel);
      yield put({
        type: GET_EXPERT_ACTIVE_QUESTIONS_FULFILLED,
        data: orderBy(questions, 'modifiedDate', 'desc'),
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getResolvedQuestions({data: {uid}}) {
  const conditions = [
    {key: 'expertInfo.uid', operator: '==', value: uid},
    {key: 'isResolved', operator: '==', value: true},
  ];

  const channel = yield call(getQuestions, collections.questions, conditions);

  try {
    while (true) {
      let questions = yield take(channel);
      yield put({
        type: GET_EXPERT_RESOLVED_QUESTIONS_FULFILLED,
        data: orderBy(questions, 'modifiedDate', 'desc'),
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function* searchQuestions({data: {value, status}}) {
  const state = yield select();
  const questions = state.askExpert[status];

  if (questions.length > 0) {
    const searchResult = questions.filter((question) => {
      const {firstName, lastName} = question.userInfo.profileInfo;
      return `${firstName} ${lastName}`.includes(value);
    });

    yield put({
      type: `SEARCH_EXPERT_${status.toUpperCase()}_QUESTIONS_FULFILLED`,
      data: value ? searchResult : [],
    });
  }
}

export default function* askExpertSaga() {
  yield takeEvery(GET_EXPERT_ACTIVE_QUESTIONS, getActiveQuestions);
  yield takeEvery(GET_EXPERT_RESOLVED_QUESTIONS, getResolvedQuestions);
  yield takeEvery(SEARCH_EXPERT_QUESTIONS, searchQuestions);
}
