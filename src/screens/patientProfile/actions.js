import {
  GET_PATIENT_DETAILS,
  UPDATE_PATIENT_DETAILS,
  UPDATE_MEDICAL_HISTORY_EXPERT,
} from '../../redux/types';

export const getPatientDetails = (data) => ({
  type: GET_PATIENT_DETAILS,
  data,
});

export const updatePatientDetails = (data) => ({
  type: UPDATE_PATIENT_DETAILS,
  data,
});

export const updateMedicalHistoryExpert = (data) => {
  console.log(data);
  return {
    type: UPDATE_MEDICAL_HISTORY_EXPERT,
    payload: data,
  };
};
