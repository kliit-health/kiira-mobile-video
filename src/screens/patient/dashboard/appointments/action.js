import {
  GET_APPOINTMENTS,
  CANCEL_APPOINTMENT,
  RATE_VISIT,
} from '../../redux/types';

export const getAppointmentsList = (data) => ({
  type: GET_APPOINTMENTS,
  data,
});

export const cancelAppointment = (data) => ({
  type: CANCEL_APPOINTMENT,
  data,
});

export const rateVisit = (data) => ({
  type: RATE_VISIT,
  data,
});
