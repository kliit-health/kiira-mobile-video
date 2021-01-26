import {createReducer} from '@reduxjs/toolkit';
import {
  GET_EXPERTS_FULFILLED,
  GET_EXPERTS_PENDING,
  GET_EXPERTS_REJECTED,
} from '../types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_EXPERTS_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_EXPERTS_FULFILLED]: (_, {data}) => ({
    ...initialState,
    data,
  }),
  [GET_EXPERTS_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get experts',
      details: data,
    };
  },
});
