import {createReducer} from '@reduxjs/toolkit';
import {
  GET_EXPERT_ACTIVE_QUESTIONS_PENDING,
  GET_EXPERT_ACTIVE_QUESTIONS_REJECTED,
  GET_EXPERT_ACTIVE_QUESTIONS_FULFILLED,
  GET_EXPERT_RESOLVED_QUESTIONS_PENDING,
  GET_EXPERT_RESOLVED_QUESTIONS_REJECTED,
  GET_EXPERT_RESOLVED_QUESTIONS_FULFILLED,
} from '../../../redux/types';

const initialState = {
  active: [],
  resolved: [],
};

export default createReducer(initialState, {
  [GET_EXPERT_ACTIVE_QUESTIONS_FULFILLED]: (state, {data}) => {
    state.active = data;
  },
  [GET_EXPERT_RESOLVED_QUESTIONS_FULFILLED]: (state, {data}) => {
    state.resolved = data;
  },
});
