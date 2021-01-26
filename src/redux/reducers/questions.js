import {createReducer} from '@reduxjs/toolkit';
import {
  GET_RESOLVED_QUESTIONS_PENDING,
  GET_RESOLVED_QUESTIONS_FULFILLED,
  GET_RESOLVED_QUESTIONS_REJECTED,
  GET_UNRESOLVED_QUESTIONS_PENDING,
  GET_UNRESOLVED_QUESTIONS_FULFILLED,
  GET_UNRESOLVED_QUESTIONS_REJECTED,
} from '../types';

const initialState = {
  resolved: {
    data: [],
    loading: false,
    error: null,
  },
  unresolved: {
    data: [],
    loading: false,
    error: null,
  },
};

export default createReducer(initialState, {
  [GET_RESOLVED_QUESTIONS_PENDING]: (state) => {
    state.resolved.loading = true;
  },
  [GET_RESOLVED_QUESTIONS_FULFILLED]: (state, {data}) => {
    state.resolved = {
      ...initialState.resolved,
      data,
    };
  },
  [GET_RESOLVED_QUESTIONS_REJECTED]: (state, {data}) => {
    state.resolved = {
      ...initialState.resolved,
      error: {
        message: 'Failed to get resolved question',
        details: data,
      },
    };
  },
  [GET_UNRESOLVED_QUESTIONS_PENDING]: (state) => {
    state.unresolved.loading = true;
  },
  [GET_UNRESOLVED_QUESTIONS_FULFILLED]: (state, {data}) => {
    state.unresolved = {
      ...initialState.resolved,
      data,
    };
  },
  [GET_UNRESOLVED_QUESTIONS_REJECTED]: (state, {data}) => {
    state.unresolved = {
      ...initialState.resolved,
      error: {
        message: 'Failed to get unresolved question',
        details: data,
      },
    };
  },
});
