import { createReducer } from '@reduxjs/toolkit';
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
                medicationAllergic: '',
                medicationAllergies: [],
                foodAllergic: '',
                foodAllergies: [],
            },
            completed: false,
        },
        medications: {
            answers: {
                currentMedications: '',
                previousMedications: '',
            },
            completed: false,
        },
        medicalHistory: {
            answers: {
                ongoingHealthConditions: '',
                medicalHistory: '',
            },
            completed: false,
        },
        insurance: {
            answers: {
                insuranceCompany: '',
            },
            completed: false,
        },
        pregnancyHistory: {
            answers: {
                pregnancies: '',
                fulltermBirths: '',
                pretermBirths: '',
                abortions: '',
                miscarriages: '',
            },
            completed: false,
        },
        pregnancyCurrent: {
            answers: {
                dueDate: '',
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
    error: '',
};

export default createReducer(initialState, {
    [GET_HEALTH_HISTORY_PENDING]: state => {
        state.loading = true;
    },
    [GET_HEALTH_HISTORY_FULFILLED]: (state, { data }) => ({
        ...initialState,
        data: { ...state.data, ...data },
    }),
    [GET_HEALTH_HISTORY_REJECTED]: (state, { data }) => {
        state.loading = false;
        state.error = {
            message: 'Failed to get health history details',
            details: data,
        };
    },
    [UPDATE_HEALTH_HISTORY_PENDING]: state => {
        state.loading = true;
    },
    [UPDATE_HEALTH_HISTORY_FULFILLED]: (state, { data }) => {
        state.loading = false;
        state.error = '';
        state.data = { ...state.data, ...data };
    },
    [UPDATE_HEALTH_HISTORY_REJECTED]: (state, { data }) => {
        state.loading = false;
        state.error = {
            message: 'Failed to update health history details',
            details: data,
        };
    },
});
