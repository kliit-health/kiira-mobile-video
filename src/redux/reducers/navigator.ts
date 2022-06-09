import { createReducer } from '@reduxjs/toolkit';
import { SET_CURRENT_ROUTE, SET_PREVIOUS_ROUTE } from '../types';

const initialState = {
  currentRoute: undefined,
  previousRoute: undefined,
};

export default createReducer(initialState, {
  [SET_CURRENT_ROUTE]: (state, { route }) => {
    state.currentRoute = route;
  },
  [SET_PREVIOUS_ROUTE]: (state, { route }) => {
    state.previousRoute = route;
  },
});
