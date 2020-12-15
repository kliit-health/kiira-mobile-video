import {
  SET_PERSONAL_INFORMATION_PENDING,
  SET_PERSONAL_INFORMATION_REJECTED,
  SET_PERSONAL_INFORMATION_FULFILLED,
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
  [SET_PERSONAL_INFORMATION_PENDING]: () => ({
    initialState,
    loading: true,
  }),
  [SET_PERSONAL_INFORMATION_REJECTED]: (_, {data}) => {
    console.error(data);
    return {
      ...initialState,
      error: 'Failed to save data.',
    };
  },
  [SET_PERSONAL_INFORMATION_FULFILLED]: (_, {data}) => ({
    ...initialState,
    data,
  }),

  [GET_PERSONAL_INFORMATION_PENDING]: () => ({
    ...initialState,
    loading: true,
  }),
  [GET_PERSONAL_INFORMATION_REJECTED]: (_, {data}) => {
    console.error(data);
    return {
      ...initialState,
      error: 'Failed to get data.',
    };
  },
  [GET_PERSONAL_INFORMATION_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [UPDATE_PERSONAL_INFORMATION]: (state, {data: {dataKey, value}}) => {
    state.data[dataKey] = value;
  },
});
