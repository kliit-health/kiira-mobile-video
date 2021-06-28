import {
  GET_EXPERT_APPOINTMENTS,
  EXPERT_CANCEL_APPOINTMENT,
} from '~/redux/types';

export const getAppointmentsList = (data) => ({
  type: GET_EXPERT_APPOINTMENTS,
  data,
});

export const cancelAppointment = (data) => ({
  type: EXPERT_CANCEL_APPOINTMENT,
  data,
});
