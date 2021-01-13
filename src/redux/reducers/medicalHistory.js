import {createReducer} from '@reduxjs/toolkit';
import {
  GET_CLIENT_MEDICAL_HISTORY_FULFILLED,
  GET_CLIENT_MEDICAL_HISTORY_PENDING,
  GET_CLIENT_MEDICAL_HISTORY_REJECTED,
} from '../types';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export default createReducer(initialState, {
  [GET_CLIENT_MEDICAL_HISTORY_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_CLIENT_MEDICAL_HISTORY_FULFILLED]: (state, {data}) => {
    state.data = data.history;
  },
  [GET_CLIENT_MEDICAL_HISTORY_REJECTED]: (state) => {
    state.error = 'Failed to get medical history.';
  },
});
