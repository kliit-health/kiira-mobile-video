import {
  GET_RECENT_EXPERTS_DATA_SUCCESS,
  GET_PREVIOUS_QUESTION_DATA_SUCCESS,
  GET_QUESTION_DATA_SUCCESS,
  UPDATE_QUESTION,
  CLEAR_ASK_STATE,
  CLEAR_QUESTION_VALUE,
  SET_QUESTION_TOPIC,
} from '~/redux/types';

const initialState = {
  recentExpertData: [],
  previousQuestionData: [],
  questionData: null,
  question: '',
  reason: null,
};
const ask = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECENT_EXPERTS_DATA_SUCCESS:
      return {
        ...state,
        recentExpertData: action.data,
      };
    case GET_QUESTION_DATA_SUCCESS:
      return {
        ...state,
        questionData: action.data,
      };
    case GET_PREVIOUS_QUESTION_DATA_SUCCESS:
      return {
        ...state,
        previousQuestionData: action.data,
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        question: action.data,
      };
    case CLEAR_ASK_STATE:
      return {
        ...state,
        recentExpertData: [],
        previousQuestionData: [],
        questionData: null,
        question: '',
        reason: null,
      };
    case CLEAR_QUESTION_VALUE:
      return {
        ...state,
        question: '',
      };
    case SET_QUESTION_TOPIC:
      return {
        ...state,
        reason: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};
export default ask;
