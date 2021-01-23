import {createReducer} from '@reduxjs/toolkit';
import {
  GET_HEALTH_HISTORY_PENDING,
  GET_HEALTH_HISTORY_REJECTED,
  GET_HEALTH_HISTORY_FULFILLED,
  UPDATE_HEALTH_HISTORY_PENDING,
  UPDATE_HEALTH_HISTORY_REJECTED,
  UPDATE_HEALTH_HISTORY_FULFILLED,
} from '../types';

const initialState = {
  data: {
    basicInfo: {
      answers: {
        gender: '',
        dateOfBirth: new Date(),
        height: '',
        weight: '',
      },
      completed: false,
    },
    lifestyle: {
      answers: {
        sexuallyActive: '',
        partnersGender: [],
        malePartners: '',
        femalePartners: '',
        otherPartners: '',
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
  },
  loading: false,
  error: null,
};

export default createReducer(initialState, {
  [GET_HEALTH_HISTORY_PENDING]: (state) => {
    state.loading = true;
  },
  [GET_HEALTH_HISTORY_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {...state.data, ...data},
  }),
  [GET_HEALTH_HISTORY_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to get health history details',
      details: data,
    };
  },
  [UPDATE_HEALTH_HISTORY_PENDING]: (state) => {
    state.loading = true;
  },
  [UPDATE_HEALTH_HISTORY_FULFILLED]: (state, {data}) => {
    state.loading = false;
    state.error = null;
    state.data = {...state.data, ...data};
  },
  [UPDATE_HEALTH_HISTORY_REJECTED]: (state, {data}) => {
    state.loading = false;
    state.error = {
      message: 'Failed to update health history details',
      details: data,
    };
  },
});
