import {GET_USER, UPDATE_USER} from '../types';

export const getUser = () => ({
  type: GET_USER,
});

export const updateUser = (data) => ({
  type: UPDATE_USER,
  data,
});
