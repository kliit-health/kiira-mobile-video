import {
  GET_PATIENTS_LIST,
  PAITENT_CANCEL_APPOINTMENT,
} from '../../../redux/types';

export const getPatientsList = (data) => ({
  type: GET_PATIENTS_LIST,
  data,
});

export const cancelAppointment = (data) => ({
  type: PAITENT_CANCEL_APPOINTMENT,
  data,
});
