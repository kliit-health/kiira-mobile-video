import { GET_HEALTH_HISTORY, UPDATE_HEALTH_HISTORY } from '../types';

export const getHealthHistory = data => ({
  type: GET_HEALTH_HISTORY,
  data,
});

export const updateHealthHistory = data => ({
  type: UPDATE_HEALTH_HISTORY,
  data,
});
