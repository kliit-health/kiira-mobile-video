import { createReducer } from '@reduxjs/toolkit';
import {
    SET_CURRENT_ROUTE,
    SET_PREVIOUS_ROUTE,
    SET_APP_SCREEN,
} from '../types';

const initialState = {
    currentRoute: undefined,
    previousRoute: undefined,
    appScreen: {
        currentScreen: '',
        prevScreen: '',
    },
};

export default createReducer(initialState, {
    [SET_CURRENT_ROUTE]: (state, { route }) => {
        state.currentRoute = route;
    },
    [SET_PREVIOUS_ROUTE]: (state, { route }) => {
        state.previousRoute = route;
    },
    [SET_APP_SCREEN]: state => {
        state.appScreen = action.data;
    },
});
