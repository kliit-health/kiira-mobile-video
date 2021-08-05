import { createReducer } from '@reduxjs/toolkit';
import {
    GET_FAVORITE_EXPERTS_PENDING,
    GET_FAVORITE_EXPERTS_FULFILLED,
    GET_FAVORITE_EXPERTS_REJECTED,
    UPDATE_FAVORITE_EXPERTS_PENDING,
    UPDATE_FAVORITE_EXPERTS_FULFILLED,
    UPDATE_FAVORITE_EXPERTS_REJECTED,
} from '../types';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export default createReducer(initialState, {
    [GET_FAVORITE_EXPERTS_PENDING]: state => {
        state.loading = true;
    },
    [GET_FAVORITE_EXPERTS_FULFILLED]: (_, { data }) => ({
        ...initialState,
        data,
    }),
    [GET_FAVORITE_EXPERTS_REJECTED]: (state, { data }) => {
        state.loading = false;
        state.error = {
            message: 'Failed to get favorite experts',
            details: data,
        };
    },
    [UPDATE_FAVORITE_EXPERTS_PENDING]: state => {
        state.loading = true;
    },
    [UPDATE_FAVORITE_EXPERTS_FULFILLED]: (_, { data }) => ({
        ...initialState,
        data,
    }),
    [UPDATE_FAVORITE_EXPERTS_REJECTED]: (state, { data }) => {
        state.loading = false;
        state.error = {
            message: 'Failed to get favorite experts',
            details: data,
        };
    },
});
