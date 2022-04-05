import { createReducer } from '@reduxjs/toolkit';
import {
    GET_PLANS_FULFILLED,
    GET_PLANS_PENDING,
    GET_PLANS_REJECTED,
} from '../types';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export default createReducer(initialState, {
    [GET_PLANS_PENDING]: state => {
        state.loading = true;
    },
    [GET_PLANS_FULFILLED]: (_, { data }) => ({
        ...initialState,
        data,
    }),
    [GET_PLANS_REJECTED]: (state, { data }) => {
        state.loading = false;
        state.error = {
            message: 'Failed to get Kiira plans',
            details: data,
        };
    },
});
