import { GET_USER_DETAILS, SET_USER_DETAILS } from '../types';

export const getUserDetails = (uid) => ({
  type: GET_USER_DETAILS,
  data: { uid },
});

export const setUserDetails = (data) => ({
  type: SET_USER_DETAILS,
  data,
});
