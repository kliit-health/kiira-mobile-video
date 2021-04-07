import {
  NEEDS_PRESCRIPTION,
  REASON_FOR_VISIT,
  SET_APPOINTMENT_DAY,
  SET_APPOINTMENT_TIME,
  SET_APPOINTMENT_DATES,
  SET_CALENDAR_ID,
  SET_TIMES,
} from 'redux/types';

const initialState = {
  reason: null,
  prescription: false,
  calendarID: null,
  appointmentTypeID: 16299344,
  time: null,
  date: null,
  appointments: {
    todayLoading: true,
    today: [],
    future: [],
    dates: [],
  },
};

const expertSchedule = (state = initialState, action) => {
  switch (action.type) {
    case NEEDS_PRESCRIPTION:
      return {
        ...state,
        prescription: action.data,
      };
    case REASON_FOR_VISIT:
      return {
        ...state,
        reason: action.data,
      };
    case SET_APPOINTMENT_DATES:
      return {
        ...state,
        dates: action.data,
      };
    case SET_APPOINTMENT_TIME:
      return {
        ...state,
        time: action.data,
      };
    case SET_APPOINTMENT_DAY:
      return {
        ...state,
        date: action.data,
      };
    case SET_CALENDAR_ID:
      return {
        ...state,
        calendarID: action.data,
      };
    case SET_TIMES:
      return {
        ...state,
        appointments: {
          ...state.appointments,
          ...action.data,
          todayLoading: false,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default expertSchedule;
