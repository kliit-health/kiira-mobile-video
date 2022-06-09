import { GET_PLAN, UPDATE_PLAN } from '../types';

export const getPlan = data => ({
  type: GET_PLAN,
  data,
});

export const updatePlan = data => ({
  type: UPDATE_PLAN,
  data,
});
