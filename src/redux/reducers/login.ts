import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

const initialState = {
  loginFailure: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginApi: (state, action: PayloadAction<object>) => {
      return state;
    },
    loginFailure: (state, action: PayloadAction<object>) => {
      return state;
    },
    resetLoginState: (state, action: PayloadAction<object>) => {
      return state;
    },
  },
});

export const { loginApi, loginFailure, resetLoginState } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
