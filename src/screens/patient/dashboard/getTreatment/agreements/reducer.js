import {
  GET_AGREEMENTS_PENDING,
  GET_AGREEMENTS_FULFILLED,
  GET_AGREEMENTS_REJECTED,
} from '../../redux/types';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default createReducer(initialState, {
  [GET_AGREEMENTS_PENDING]: () => ({
    initialState,
    loading: true,
  }),
  [GET_AGREEMENTS_REJECTED]: (_, {data}) => ({
    ...initialState,
    error: {
      message: 'Something went wrong. Please try again later.',
      details: data,
    },
  }),
  [GET_AGREEMENTS_FULFILLED]: (_, {data}) => ({...initialState, data}),
});
