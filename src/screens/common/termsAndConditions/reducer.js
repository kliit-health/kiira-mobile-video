import {SET_TERMS} from '../../../redux/types';
const initialState = {};

const termsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TERMS:
      const {payload} = action;
      return {
        ...state,
        legal: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default termsReducer;
