import {call, put, takeEvery, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {firebaseRealTimeFetch} from '../../../utils/firebase';
import {collections} from '../../../utils/constants';
import {
  GET_EXPERT_ACTIVE_QUESTIONS,
  GET_EXPERT_ACTIVE_QUESTIONS_FULFILLED,
  GET_EXPERT_RESOLVED_QUESTIONS,
  GET_EXPERT_RESOLVED_QUESTIONS_FULFILLED,
} from '../../../redux/types';

function getQuestions(collection, conditions) {
  return eventChannel((emit) => {
    const unsubscribe = firebaseRealTimeFetch(
      collection,
      conditions,
      (questions) => emit(questions),
    );
    return () => unsubscribe();
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
        data: questions,
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
        data: questions,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* askExpertSaga() {
  yield takeEvery(GET_EXPERT_ACTIVE_QUESTIONS, getActiveQuestions);
  yield takeEvery(GET_EXPERT_RESOLVED_QUESTIONS, getResolvedQuestions);
}
