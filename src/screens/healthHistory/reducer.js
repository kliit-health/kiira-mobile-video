import {GET_HEALTH_HISTORY, UPDATE_HEALTH_HISTORY} from '../../redux/types';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  basicInfo: {
    answers: {
      gender: null,
      dateOfBirth: null,
      height: null,
      weight: null,
    },
    completed: false,
  },
  lifestyle: {
    answers: {
      sexuallyActive: null,
      partnersGender: [],
      malePartners: null,
      femalePartners: null,
      otherPartners: null,
    },
    completed: false,
  },
  allergies: {
    answers: {
      medicationAllergic: null,
      medicationAllergies: [],
      foodAllergic: null,
      foodAllergies: [],
    },
    completed: false,
  },
  medications: {
    answers: {
      currentMedications: null,
      previousMedications: null,
    },
    completed: false,
  },
  medicalHistory: {
    answers: {
      ongoingHealthConditions: null,
      medicalHistory: null,
    },
    completed: false,
  },
  insurance: {
    answers: {
      insuranceCompany: null,
    },
    completed: false,
  },
  pregnancyHistory: {
    answers: {
      pregnancies: null,
      fulltermBirths: null,
      pretermBirths: null,
      abortions: null,
      miscarriages: null,
    },
    completed: false,
  },
  pregnancyCurrent: {
    answers: {
      dueDate: null,
    },
    completed: false,
  },
  children: {
    answers: {
      children: [],
    },
    completed: false,
  },
};

export default createReducer(initialState, {
  [GET_HEALTH_HISTORY]: (state, {data}) => ({...state, ...data}),
  [UPDATE_HEALTH_HISTORY]: (state, {data}) => ({...state, ...data}),
});
