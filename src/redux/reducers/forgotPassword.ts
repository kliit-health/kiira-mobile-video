import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ForgotPasswordState {
    forgotPasswordSuccess: null | boolean;
}

const initialState: ForgotPasswordState = {
    forgotPasswordSuccess: null,
};

export const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {
        forgotPasswordApiHit: (state, action: PayloadAction<object>) => {
            return state;
        },
        forgotPasswordApiHitSuccess: state => {
            return {
                ...state,
                forgotPasswordSuccess: true,
            };
        },
        resetForgotPasswordState: state => {
            return {
                ...state,
                forgotPasswordSuccess: null,
            };
        },
    },
});

export const {
    forgotPasswordApiHit,
    forgotPasswordApiHitSuccess,
    resetForgotPasswordState,
} = forgotPasswordSlice.actions;

export const selectForgotPassword = (state: ForgotPasswordState) => state;

export default forgotPasswordSlice.reducer;
