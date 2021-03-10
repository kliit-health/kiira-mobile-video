import {createReducer} from '@reduxjs/toolkit';
import {
  GET_PRIVACY_POLICY_PENDING,
  GET_PRIVACY_POLICY_FULFILLED,
  GET_PRIVACY_POLICY_REJECTED,
} from '../types';

const initialState = {
  data: undefined,
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_PRIVACY_POLICY_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_PRIVACY_POLICY_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [GET_PRIVACY_POLICY_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get terms and conditions',
      details: data,
    };
  },
});
