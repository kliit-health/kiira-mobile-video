import { createReducer } from '@reduxjs/toolkit';
import {
  GET_USER_DETAILS_PENDING,
  GET_USER_DETAILS_FULFILLED,
  GET_USER_DETAILS_REJECTED,
  SET_USER_DETAILS_PENDING,
  SET_USER_DETAILS_REJECTED,
  SET_USER_DETAILS_FULFILLED,
} from '../types';

const initialState = {
  data: {
    uid: '',
    agreements: {
      treatment: false,
    },
  },
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_USER_DETAILS_PENDING]: () => (state) => {
    state.loading = true;
  },
  [GET_USER_DETAILS_FULFILLED]: (state, { data }) => ({
    ...initialState,
    data: { ...state.data, ...data },
  }),
  [GET_USER_DETAILS_REJECTED]: (state, { data }) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get user details',
      details: data,
    };
  },
  [SET_USER_DETAILS_PENDING]: (state) => {
    state.loading = true;
  },
  [SET_USER_DETAILS_FULFILLED]: (state, { data }) => ({
    ...initialState,
    data: { ...state.data, ...data },
  }),
  [SET_USER_DETAILS_REJECTED]: (state, { data }) => {
    state.loading = false;
    state.error = {
      message: 'Failed to update user details',
      details: data,
    };
  },
});
