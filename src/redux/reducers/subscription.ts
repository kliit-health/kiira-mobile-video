import { createReducer } from '@reduxjs/toolkit';
import {
    GET_SUBSCRIPTION_PENDING,
    GET_SUBSCRIPTION_FULFILLED,
    GET_SUBSCRIPTION_REJECTED,
    CANCEL_SUBSCRIPTION_PENDING,
    CANCEL_SUBSCRIPTION_FULFILLED,
    CANCEL_SUBSCRIPTION_REJECTED,
} from '../types';

const initialState = {
    data: {
        id: '',
        plan: {
            id: '',
        },
    },
    get: {
        loading: false,
        error: null,
    },
    cancel: {
        loading: false,
        error: null,
    },
};

export default createReducer(initialState, {
    [GET_SUBSCRIPTION_PENDING]: state => {
        state.get.loading = true;
    },
    [GET_SUBSCRIPTION_FULFILLED]: (state, { data }) => ({
        ...initialState,
        data: { ...state.data, ...data },
    }),
    [GET_SUBSCRIPTION_REJECTED]: (state, { data }) => {
        state.get.loading = false;
        state.get.error = {
            message: 'Failed to get subscription details',
            details: data,
        };
    },
    [CANCEL_SUBSCRIPTION_PENDING]: state => {
        state.cancel.loading = true;
    },
    [CANCEL_SUBSCRIPTION_FULFILLED]: (state, { data }) => ({
        ...initialState,
        data: { ...state.data, ...data },
    }),
    [CANCEL_SUBSCRIPTION_REJECTED]: (state, { data }) => {
        state.cancel.loading = false;
        state.cancel.error = {
            message: 'Failed to cancel subscription details',
            details: data,
        };
    },
});
