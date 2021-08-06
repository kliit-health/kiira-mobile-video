import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

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

export const selectForgotPassword = (state: RootState) => state.activate;

export default activateSlice.reducer;
