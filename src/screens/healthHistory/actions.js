import {
  GET_HEALTH_HISTORY_ASYNC,
  UPDATE_HEALTH_HISTORY_ASYNC,
  UPDATE_HEALTH_HISTORY,
} from '../../redux/types';

export const getHealthHistoryAsync = () => ({
  type: GET_HEALTH_HISTORY_ASYNC,
});

export const updateHealthHistoryAsync = (data) => ({
  type: UPDATE_HEALTH_HISTORY_ASYNC,
  data,
});

export const updateHealthHistory = (data) => ({
  type: UPDATE_HEALTH_HISTORY,
  data,
});
