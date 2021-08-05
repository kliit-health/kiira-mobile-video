import { createReducer } from '@reduxjs/toolkit';
import { SHOW_MESSAGE_FULFILLED, HIDE_MESSAGE_FULFILLED } from '../types';

const initialState = {
    visible: false,
    message: '',
};

export default createReducer(initialState, {
    [SHOW_MESSAGE_FULFILLED]: (state, { data }) => {
        state.visible = true;
        state.message = data.message;
    },
    [HIDE_MESSAGE_FULFILLED]: state => {
        state.visible = false;
    },
});
