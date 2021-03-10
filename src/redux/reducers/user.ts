import {createReducer} from '@reduxjs/toolkit';
import models from '../models';
import merge from 'deepmerge';
import {
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
  UPDATE_USER_PENDING,
  UPDATE_USER_REJECTED,
  UPDATE_USER_FULFILLED,
} from '../types';

const initialState = {
  data: models.user,
  loading: false,
  error: null,
};

export default createReducer((state = initialState), {
  [GET_USER_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_USER_FULFILLED]: (state, {data}) => {
    state.loading = false;
    state.error = null;
    state.data = merge(models.user, data);
  },
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
  [UPDATE_USER_FULFILLED]: (state, {data}) => {
    state.loading = false;
    state.error = null;
    state.data = merge(state.data, data);
  },
  [UPDATE_USER_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to update user details',
      details: data,
    };
  },
});
