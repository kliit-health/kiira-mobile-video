import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const activateSlice = createSlice({
    name: 'activate',
    initialState,
    reducers: {
        sendVerification: (state, action: PayloadAction<object>) => {
            return state;
        },
    },
});

export const { sendVerification } = activateSlice.actions;

export const selectForgotPassword = state => state;

export default activateSlice.reducer;
