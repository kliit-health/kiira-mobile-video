import {GET_RESOLVED_QUESTIONS, GET_UNRESOLVED_QUESTIONS} from '../types';

export const getResolvedQuestion = (data) => ({
  type: GET_RESOLVED_QUESTIONS,
  data,
});

export const getUnresolvedQuestions = (data) => ({
  type: GET_UNRESOLVED_QUESTIONS,
  data,
});
