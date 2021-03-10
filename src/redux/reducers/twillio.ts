import {SET_CALL_CONFIG, SET_EXPERT_CALL_CONFIG} from '../types';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isAudioEnabled: true,
  isVideoEnabled: true,
  status: 'disconnected',
  userName: '',
  roomName: '',
  token: '',
};

export default createReducer(initialState, {
  [SET_CALL_CONFIG]: (state, {data}) => ({
    ...state,
    ...data,
  }),
  [SET_EXPERT_CALL_CONFIG]: (state, {data}) => ({
    ...state,
    ...data,
  }),
});
