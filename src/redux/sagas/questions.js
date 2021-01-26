import {put, takeEvery} from 'redux-saga/effects';
import {
  GET_RESOLVED_QUESTIONS,
  GET_RESOLVED_QUESTIONS_PENDING,
  GET_RESOLVED_QUESTIONS_FULFILLED,
  GET_RESOLVED_QUESTIONS_REJECTED,
  GET_UNRESOLVED_QUESTIONS,
  GET_UNRESOLVED_QUESTIONS_PENDING,
  GET_UNRESOLVED_QUESTIONS_FULFILLED,
  GET_UNRESOLVED_QUESTIONS_REJECTED,
} from '../types';
import {firebaseFetch} from '../../utils/firebase';

function* getResolvedQuestions({data: {uid}}) {
  try {
    yield put({
      type: GET_RESOLVED_QUESTIONS_PENDING,
    });
    const condition = [
      {key: 'uid', operator: '==', value: uid},
      {key: 'isResolved', operator: '==', value: true},
    ];
    const questions = yield firebaseFetch('questions', condition);
    yield put({
      type: GET_RESOLVED_QUESTIONS_FULFILLED,
      data: questions,
    });
  } catch (error) {
    yield put({
      type: GET_RESOLVED_QUESTIONS_REJECTED,
      data: error,
    });
  }
}

function* getUnresolvedQuestions({data: {uid}}) {
  try {
    yield put({
      type: GET_UNRESOLVED_QUESTIONS_PENDING,
    });
    const condition = [
      {key: 'uid', operator: '==', value: uid},
      {key: 'isResolved', operator: '==', value: false},
    ];
    const questions = yield firebaseFetch('questions', condition);
    yield put({
      type: GET_UNRESOLVED_QUESTIONS_FULFILLED,
      data: questions,
    });
  } catch (error) {
    yield put({
      type: GET_UNRESOLVED_QUESTIONS_REJECTED,
      data: error,
    });
  }
}

export default function* () {
  yield takeEvery(GET_RESOLVED_QUESTIONS, getResolvedQuestions);
  yield takeEvery(GET_UNRESOLVED_QUESTIONS, getUnresolvedQuestions);
}
