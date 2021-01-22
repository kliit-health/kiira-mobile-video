import {createReducer} from '@reduxjs/toolkit';
import {
  GET_PLANS_FULFILLED,
  GET_PLANS_PENDING,
  GET_PLANS_REJECTED,
  CHANGE_PLAN_FULFILLED,
  CHANGE_PLAN_PENDING,
  CHANGE_PLAN_REJECTED,
} from '../../redux/types';

const initialState = {
  plans: [],
  plan: undefined,
  error: null,
  loading: false,
};

export default createReducer(initialState, {
  [GET_PLANS_PENDING]: () => ({
    ...initialState,
    loading: true,
  }),
  [GET_PLANS_REJECTED]: (_, {data}) => ({
    ...initialState,
    error: data,
  }),
  [GET_PLANS_FULFILLED]: (_, {data}) => ({
    ...initialState,
    plans: data,
  }),
  [CHANGE_PLAN_PENDING]: () => ({
    ...initialState,
    loading: true,
  }),
  [CHANGE_PLAN_REJECTED]: (_, {data}) => ({
    ...initialState,
    error: data,
  }),
  [CHANGE_PLAN_FULFILLED]: (_, {data}) => ({
    ...initialState,
    plan: data,
  }),
});
