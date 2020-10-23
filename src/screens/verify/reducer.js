import { SEND_VERIFICATION_EMAIL } from "../../redux/types";

const verifyReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_VERIFICATION_EMAIL:
      return {
        ...state,
        data: action.data.params,
      };
    default:
      return {
        ...state,
      };
  }
};

export default verifyReducer;
