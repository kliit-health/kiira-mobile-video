import {FETCH_EXPERT_APPOINTMENTS} from '../../../redux/types';

const initialState = {
  history: [],
};

const expertAppointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERT_APPOINTMENTS:
      console.log(action.data);
      return {
        ...state,
        history: [...action.data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default expertAppointmentsReducer;
