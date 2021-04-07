import {FETCH_APPOINTMENTS} from 'redux/types';

const initialState = {
  history: [],
};

const appointments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      return {
        ...state,
        history: [...action.data.history],
      };
    default:
      return {
        ...state,
      };
  }
};

export default appointments;
