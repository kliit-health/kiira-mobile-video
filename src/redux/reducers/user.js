import {createReducer} from '@reduxjs/toolkit';
import {
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
  UPDATE_USER_PENDING,
  UPDATE_USER_REJECTED,
  UPDATE_USER_FULFILLED,
} from '../types';

const initialState = {
  data: {
    uid: '',
    subscription: {
      id: '',
    },
    chats: '',
    displayName: '',
    profileInfo: {
      firstName: '',
      email: '',
      profileImageUrl: '',
      lastName: '',
      role: '',
      organizationId: '',
      pronouns: '',
      title: '',
      insurance: '',
      dob: '',
      sexuality: {
        value: '',
        code: '',
      },
      state: {code: '', value: ''},
      pronouns: '',
      lastName: '',
    },
  },
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_USER_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_USER_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [GET_USER_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get user details',
      details: data,
    };
  },
  [UPDATE_USER_PENDING]: (state) => {
    state.loading = true;
  },
  [UPDATE_USER_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [UPDATE_USER_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to update user details',
      details: data,
    };
  },
});
