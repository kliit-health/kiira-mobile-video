import {FETCH_APPOINTMENTS} from '../../redux/types';

const initialState = {
  history: [],
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      console.log(action.data);
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

export default appointmentsReducer;
