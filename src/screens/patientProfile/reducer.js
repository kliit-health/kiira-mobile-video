import {
  GET_PATIENT_DETAILS_PENDING,
  GET_PATIENT_DETAILS_FULFILLED,
  GET_PATIENT_DETAILS_REJECTED,
  UPDATE_PATIENT_DETAILS_PENDING,
  UPDATE_PATIENT_DETAILS_FULFILLED,
  UPDATE_PATIENT_DETAILS_REJECTED,
} from '../../redux/types';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {
    personalInformation: {},
    consentAgreements: [],
  },
  error: null,
};

export default createReducer(initialState, {
  [GET_PATIENT_DETAILS_PENDING]: (state) => {
    state.error = null;
    state.loading = true;
  },
  [GET_PATIENT_DETAILS_REJECTED]: (_, {data: details}) => ({
    ...initialState,
    error: 'Failed to get data.',
    details,
  }),
  [GET_PATIENT_DETAILS_FULFILLED]: (state, {data}) => ({
    ...initialState,
    data: {
      ...state.data,
      ...data,
    },
  }),
  [UPDATE_PATIENT_DETAILS_PENDING]: (state) => {
    state.error = null;
    state.loading = true;
  },
  [UPDATE_PATIENT_DETAILS_REJECTED]: (_, {data: details}) => ({
    ...initialState,
    error: 'Failed to update details.',
    details,
  }),
  [UPDATE_PATIENT_DETAILS_FULFILLED]: (state, {data: {updates, dataKey}}) => ({
    ...initialState,
    data: {
      ...state.data,
      [dataKey]:
        typeof updates === 'object'
          ? {...state.data[dataKey], ...updates}
          : [...state.data[dataKey], ...updates],
    },
  }),
});
