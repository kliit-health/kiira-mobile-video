import {SET_VISIT, SET_LOGIN} from '../../redux/types';

const initialState = {
  visit: {},
  details: {},
};

const visitReducer = (state = initialState, {type, data}) => {
  switch (type) {
    case SET_VISIT:
      return {
        ...state,
        visit: data,
      };
    case SET_LOGIN:
      return {
        ...state,
        details: data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default visitReducer;
