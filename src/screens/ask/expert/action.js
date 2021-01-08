import {
  GET_EXPERT_ACTIVE_QUESTIONS,
  GET_EXPERT_RESOLVED_QUESTIONS,
} from '../../../redux/types';

export const getActiveQuestions = (data) => ({
  type: GET_EXPERT_ACTIVE_QUESTIONS,
  data,
});

export const getResolvedQuestions = (data) => ({
  type: GET_EXPERT_RESOLVED_QUESTIONS,
  data,
});
