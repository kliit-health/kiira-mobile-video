import {
  FORGOT_PASSWORD_SUCCESS,
  RESET_FORGOT_PASSWORD_STATE,
} from '~/redux/types';

const initialState = {
  forgotPasswordSuccess: null,
};
const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordSuccess: true,
      };
    case RESET_FORGOT_PASSWORD_STATE:
      return {
        ...state,
        forgotPasswordSuccess: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default forgotPassword;
