import {createReducer} from '@reduxjs/toolkit';
import {
  GET_SUBSCRIPTION_FULFILLED,
  GET_SUBSCRIPTION_PENDING,
  GET_SUBSCRIPTION_REJECTED,
} from '../types';

const initialState = {
  data: {
    plan: {
      id: '',
    },
  },
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_SUBSCRIPTION_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_SUBSCRIPTION_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [GET_SUBSCRIPTION_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get subscription details',
      details: data,
    };
  },
});
