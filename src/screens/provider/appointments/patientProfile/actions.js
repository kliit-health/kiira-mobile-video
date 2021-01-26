import {
  GET_PATIENT_DETAILS,
  LOCK_VISIT,
  UPDATE_PATIENT_DETAILS,
  UPDATE_MEDICAL_HISTORY_EXPERT,
  GET_MEDICAL_HISTORY,
  SET_MEDICAL_HISTORY,
  CLEAR_MEDICAL_HISTORY,
} from '../../../../redux/types';

export const getPatientDetails = (data) => ({
  type: GET_PATIENT_DETAILS,
  data,
});

export const updatePatientDetails = (data) => ({
  type: UPDATE_PATIENT_DETAILS,
  data,
});

export const updateMedicalHistoryExpert = (data) => {
  return {
    type: UPDATE_MEDICAL_HISTORY_EXPERT,
    payload: data,
  };
};

export const lockVisit = (data) => {
  return {
    type: LOCK_VISIT,
    payload: data,
  };
};

export const getMedicalHistory = (data) => {
  return {
    type: GET_MEDICAL_HISTORY,
    payload: data,
  };
};

export const setMedicalHIstory = (data) => {
  return {
    type: SET_MEDICAL_HISTORY,
    payload: data,
  };
};

export const clearMedicalHistory = () => {
  return {
    type: CLEAR_MEDICAL_HISTORY,
  };
};
