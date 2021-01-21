import {FETCH_PAITENT_APPOINTMENTS} from '../../redux/types';

const initialState = {
  history: [],
};

const expertPatientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAITENT_APPOINTMENTS:
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

export default expertPatientsReducer;
