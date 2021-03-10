import {SEND_VERIFICATION_EMAIL} from '../../../redux/types';

const verify = (state = {}, action) => {
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

export default verify;
