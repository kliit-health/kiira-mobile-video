import {createReducer} from '@reduxjs/toolkit';
import {
  GET_LICENSES_PENDING,
  GET_LICENSES_FULFILLED,
  GET_LICENSES_REJECTED,
} from '../types';

const initialState = {
  data: undefined,
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_LICENSES_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_LICENSES_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [GET_LICENSES_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get licenses',
      details: data,
    };
  },
});
