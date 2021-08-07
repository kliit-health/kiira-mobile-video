import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

const initialState = {};

export const account = createSlice({
    name: 'account',
    initialState,
    reducers: {
        signOut: (state, action: PayloadAction<object>) => {
            return state;
        },
        updateAccount: (state, action: PayloadAction<object>) => {
            return state;
        },
        updatePassword: (state, action: PayloadAction<object>) => {
            return state;
        },
    },
});

export const { signOut, updateAccount, updatePassword } = account.actions;

export const selectAccount = (state: RootState) => state.account;

export default account.reducer;
