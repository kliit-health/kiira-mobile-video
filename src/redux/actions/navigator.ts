import {
    SET_CURRENT_ROUTE,
    SET_PREVIOUS_ROUTE,
    SET_APP_SCREEN,
} from '../types';

export const setCurrentRoute = route => ({
    type: SET_CURRENT_ROUTE,
    route,
});

export const setPreviousRoute = route => ({
    type: SET_PREVIOUS_ROUTE,
    route,
});

export const setAppScreen = data => ({
    type: SET_APP_SCREEN,
    data,
});
