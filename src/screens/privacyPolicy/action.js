import { GET_POLICY, SET_POLICY } from "../../redux/types";

export const getPolicy = () => ({
  type: GET_POLICY,
});

export const setPolicy = (data) => ({
  type: SET_POLICY,
  payload: data,
});
