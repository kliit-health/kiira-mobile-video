import { SET_POLICY } from "../../redux/types";
const initialState = {};

const privacyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POLICY:
      const { payload } = action;
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
export default privacyReducer;
