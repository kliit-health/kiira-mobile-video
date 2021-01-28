import {createReducer} from '@reduxjs/toolkit';
import i18n from '../../i18n';
import {SET_LANGUAGE} from '../types';

const initialState = {
  ...i18n.en,
};

export default createReducer(initialState, {
  [SET_LANGUAGE]: (state, {data}) => ({
    ...state,
    ...data,
  }),
});
