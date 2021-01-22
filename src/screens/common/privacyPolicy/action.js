import {GET_POLICY, SET_POLICY} from '../../../redux/types';

export const getPolicies = () => ({
  type: GET_POLICY,
});

export const setPolicies = (data) => ({
  type: SET_POLICY,
  payload: data,
});
