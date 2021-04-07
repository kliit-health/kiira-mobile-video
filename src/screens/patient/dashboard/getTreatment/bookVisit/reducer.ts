import {SET_PREPAID} from 'redux/types';

const initialState = {
  prepaid: false,
};

const bookVisit = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREPAID:
      return {
        ...state,
        prepaid: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default bookVisit;
