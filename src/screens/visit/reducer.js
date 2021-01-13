import {SET_VISIT} from '../../redux/types';

const initialState = {
  visit: {},
};

const visitReducer = (state = initialState, {type, data}) => {
  switch (type) {
    case SET_VISIT:
      return {
        ...state,
        visit: data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default visitReducer;
