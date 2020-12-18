import {GET_PATIENT_DETAILS, UPDATE_PATIENT_DETAILS} from '../../redux/types';

export const getPatientDetails = (data) => ({
  type: GET_PATIENT_DETAILS,
  data,
});

export const updatePatientDetails = (data) => ({
  type: UPDATE_PATIENT_DETAILS,
  data,
});
