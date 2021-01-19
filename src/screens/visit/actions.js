import {SET_VISIT, GET_LOGIN} from '../../redux/types';

export const setVisit = (data) => ({
  type: SET_VISIT,
  data,
});

export const getLogin = (data) => ({
  type: GET_LOGIN,
  data,
});

export const setLogin = (data) => ({
  type: SET_LOGIN,
  data,
});
