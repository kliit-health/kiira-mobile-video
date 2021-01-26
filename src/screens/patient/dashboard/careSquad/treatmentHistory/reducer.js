import {createReducer} from '@reduxjs/toolkit';
import {GET_CHAT_HISTORY, GET_VIDEO_HISTORY} from '../../../../../redux/types';
import moment from 'moment';
import {orderBy} from 'lodash';

const initialState = {
  chatHistory: {
    questions: [],
  },
  videoHistory: {
    visits: [],
  },
};

export default createReducer(initialState, {
  [GET_CHAT_HISTORY]: (state, {data}) => {
    state.chatHistory.questions = orderBy(data, ['modifiedDate'], ['desc']);
  },
  [GET_VIDEO_HISTORY]: (state, {data}) => {
    const visits = data.map((visit) => ({
      ...visit,
      time: moment.utc(visit.time).unix(),
    }));
    state.videoHistory.visits = orderBy(visits, ['time'], ['desc']);
  },
});
