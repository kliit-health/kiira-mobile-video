import {
  SET_CALL_CONFIG,
  GET_CALL_TOKEN,
  SET_EXPERT_CALL_CONFIG,
  GET_EXPERT_CALL_TOKEN,
} from '../types';

export const setCallConfig = (data) => ({
  type: SET_CALL_CONFIG,
  data,
});

export const getCallToken = (data) => ({
  type: GET_CALL_TOKEN,
  data,
});

export const setExpertCallConfig = (data) => ({
  type: SET_EXPERT_CALL_CONFIG,
  data,
});

export const getExpertCallToken = (data) => ({
  type: GET_EXPERT_CALL_TOKEN,
  data,
});
