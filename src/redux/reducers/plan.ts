import { createReducer } from '@reduxjs/toolkit';
import {
  GET_PLAN_FULFILLED,
  GET_PLAN_PENDING,
  GET_PLAN_REJECTED,
  UPDATE_PLAN_FULFILLED,
  UPDATE_PLAN_PENDING,
  UPDATE_PLAN_REJECTED,
} from '../types';

const initialState = {
  data: {
    id: '',
  },
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_PLAN_PENDING]: state => {
    state.loading = true;
  },
  [GET_PLAN_FULFILLED]: (state, { data }) => ({
    ...initialState,
    data: { ...state.data, ...data },
  }),
  [GET_PLAN_REJECTED]: (state, { data }) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get plan details',
      details: data,
    };
  },
  [UPDATE_PLAN_PENDING]: () => ({
    ...initialState,
    loading: true,
  }),
  [UPDATE_PLAN_REJECTED]: (_, { data }) => ({
    ...initialState,
    error: data,
  }),
  [UPDATE_PLAN_FULFILLED]: (_, { data }) => ({
    ...initialState,
    plan: data,
  }),
});
