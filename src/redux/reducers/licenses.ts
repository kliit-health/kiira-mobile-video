import { createReducer } from '@reduxjs/toolkit';
import merge from 'deepmerge';

import {
    GET_LICENSES_PENDING,
    GET_LICENSES_FULFILLED,
    GET_LICENSES_REJECTED,
} from '../types';

const initialState = {
    data: {
        current: [],
    },
    loading: false,
    error: null,
};

export default createReducer(initialState, {
    [GET_LICENSES_PENDING]: state => {
        state.loading = true;
    },
    [GET_LICENSES_FULFILLED]: (state, { data }) => {
        state.loading = false;
        state.data = merge(state.data, data);
    },
    [GET_LICENSES_REJECTED]: (state, { data }) => {
        state.loading = false;
        state.error = {
            message: 'Failed to get licenses',
            details: data,
        };
    },
});
