import {GET_USER, UPDATE_USER, TIME_OUT, CLEAR_TIME_OUT} from '../types';

export const clearTimeOut = () => ({
  type: CLEAR_TIME_OUT,
});

export const getUser = () => ({
  type: GET_USER,
});

export const timeOut = () => ({
  type: TIME_OUT,
});

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});
