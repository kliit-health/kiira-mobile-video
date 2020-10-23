import { GET_TERMS, SET_TERMS } from "../../redux/types";

export const getTerms = () => ({
  type: GET_TERMS,
});

export const setTerms = (data) => ({
  type: SET_TERMS,
  payload: data,
});
