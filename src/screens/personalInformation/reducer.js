import {
  SAVE_PERSONAL_INFORMATION_PENDING,
  SAVE_PERSONAL_INFORMATION_REJECTED,
  SAVE_PERSONAL_INFORMATION_FULFILLED,
  GET_PERSONAL_INFORMATION_PENDING,
  GET_PERSONAL_INFORMATION_REJECTED,
  GET_PERSONAL_INFORMATION_FULFILLED,
  UPDATE_PERSONAL_INFORMATION,
} from '../../redux/types';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {
    fullName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    primaryCarePhysician: '',
  },
  error: null,
};

export default createReducer(initialState, {
  [UPDATE_PERSONAL_INFORMATION]: (state, {data: {dataKey, value}}) => {
    state.data[dataKey] = value;
  },
  [SAVE_PERSONAL_INFORMATION_PENDING]: (state) => {
    state.error = null;
    state.loading = true;
  },
  [SAVE_PERSONAL_INFORMATION_REJECTED]: (_, {data: details}) => ({
    ...initialState,
    error: 'Failed to save data.',
    details,
  }),
  [SAVE_PERSONAL_INFORMATION_FULFILLED]: (_, {data}) => ({
    ...initialState,
    data,
  }),
  [GET_PERSONAL_INFORMATION_PENDING]: (state) => {
    state.error = null;
    state.loading = true;
  },
  [GET_PERSONAL_INFORMATION_REJECTED]: (_, {data: details}) => ({
    ...initialState,
    error: 'Failed to get data.',
    details,
  }),
  [GET_PERSONAL_INFORMATION_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
});
