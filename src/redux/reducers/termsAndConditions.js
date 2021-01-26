import {createReducer} from '@reduxjs/toolkit';
import {
  GET_TERMS_AND_CONDITIONS_PENDING,
  GET_TERMS_AND_CONDITIONS_FULFILLED,
  GET_TERMS_AND_CONDITIONS_REJECTED,
} from '../types';

const initialState = {
  data: undefined,
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_TERMS_AND_CONDITIONS_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_TERMS_AND_CONDITIONS_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [GET_TERMS_AND_CONDITIONS_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get terms and conditions',
      details: data,
    };
  },
});
