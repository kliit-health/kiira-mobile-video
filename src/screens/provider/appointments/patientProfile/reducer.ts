import {
  GET_PATIENT_DETAILS_PENDING,
  GET_PATIENT_DETAILS_FULFILLED,
  GET_PATIENT_DETAILS_REJECTED,
  UPDATE_PATIENT_DETAILS_PENDING,
  UPDATE_PATIENT_DETAILS_FULFILLED,
  UPDATE_PATIENT_DETAILS_REJECTED,
  UPDATE_MEDICAL_HISTORY_EXPERT,
  LOCK_VISIT,
  SET_MEDICAL_HISTORY,
  CLEAR_MEDICAL_HISTORY,
} from 'redux/types';
import {createReducer} from '@reduxjs/toolkit';
import {isArray} from 'lodash';

const initialState = {
  loading: false,
  history: [],
  data: {
    personalInformation: {},
    consentAgreements: [],
  },
  error: null,
  appointment: {
    visit: {},
    patientInfo: {},
  },
  allergies: {
    allergic: false,
    notes: '',
    complete: false,
  },
  physical: {
    notes: '',
    complete: false,
  },
  plan: {
    notes: '',
    complete: false,
  },
  medications: {
    history: false,
    notes: '',
    complete: false,
  },
  surgical: {
    surgeries: false,
    notes: '',
    complete: false,
  },
  summary: {
    notes: '',
    complete: false,
  },
  social: {
    smoke: {
      history: false,
      notes: '',
    },
    alcohol: {
      history: false,
      notes: '',
    },
    drugs: {
      history: false,
      notes: '',
    },
    caffine: {
      history: false,
      notes: '',
    },
    safe: {
      history: false,
      notes: '',
    },
    abuse: {
      history: false,
      notes: '',
    },
    currentAbuse: {
      history: false,
      notes: '',
    },
    status: {
      married: false,
      single: false,
      divorced: false,
      widowed: false,
      involved: false,
      partner: false,
    },
    education: {
      highSchool: false,
      college: false,
      graduate: false,
      other: false,
    },
    exercise: {
      history: false,
      notes: '',
    },
    diet: {
      history: false,
      notes: '',
    },
    complete: false,
  },
  family: {
    cancer: {
      history: false,
      notes: '',
    },
    rareDisease: {
      history: false,
      notes: '',
    },
    illnesses: {
      diabetes: false,
      highBloodPressure: false,
      giReflux: false,
      giDisease: false,
      fibroids: false,
      endometriosos: false,
      osteopenia: false,
      osteoporosis: false,
      heartDisease: false,
      highCholesterol: false,
      hepatitis: false,
      liverProblems: false,
      kidneyProblems: false,
      arthritis: false,
      jointPain: false,
      fracture: false,
      anxiety: false,
      depression: false,
      seizures: false,
      asthma: false,
      lungProblems: false,
      tuberculosis: false,
      thyroidDisease: false,
      clottingDisorder: false,
      none: false,
    },
    complete: false,
  },
  pmh: {
    cancer: {
      history: false,
      notes: '',
    },
    rareDisease: {
      history: false,
      notes: '',
    },
    disease: {
      diabetes: false,
      highBloodPressure: false,
      giReflux: false,
      giDisease: false,
      fibroids: false,
      endometriosos: false,
      osteopenia: false,
      osteoporosis: false,
      heartDisease: false,
      highCholesterol: false,
      hepatitis: false,
      liverProblems: false,
      kidneyProblems: false,
      arthritis: false,
      jointPain: false,
      fracture: false,
      anxiety: false,
      depression: false,
      seizures: false,
      asthma: false,
      lungProblems: false,
      tuberculosis: false,
      thyroidDisease: false,
      clottingDisorder: false,
      none: false,
    },
    complete: false,
  },
  gyn: {
    lastPeriod: {
      notes: '',
    },
    periodLength: {
      lessThan: false,
      moreThan: false,
    },
    abnormalPap: {
      history: false,
      notes: '',
    },
    cycleLength: {
      lessThan: false,
      about: false,
      moreThan: false,
    },
    menarche: {
      notes: '',
    },
    papDate: {
      notes: '',
    },
    sti: {
      chlamydia: false,
      gonorrhea: false,
      genitalWarts: false,
      herpes: false,
      trichomonas: false,
      syphilis: false,
      none: false,
    },
    hiv: {
      history: false,
      notes: '',
    },
    des: {
      history: false,
      notes: '',
    },
    sexuallyActive: {
      history: false,
      notes: '',
    },
    underAge: {
      history: false,
      notes: '',
    },
    multiplePartners: {
      history: false,
      notes: '',
    },
    useContraception: {
      history: false,
      notes: '',
    },
    useBirthControl: {
      history: false,
      notes: '',
    },
    contraceptions: {
      condoms: false,
      thePill: false,
      pullOut: false,
      tubesTied: false,
      diaphram: false,
      patch: false,
      flim: false,
      other: false,
    },
    active: {
      history: false,
      notes: '',
    },
    activeCurrent: {
      history: false,
      notes: '',
    },
    sexualPartners: {
      men: false,
      women: false,
      other: false,
    },
    currentlyActive: {
      history: false,
      notes: '',
    },
    numberOfPartners: {
      male: {
        number: '0',
        visible: false,
      },
      female: {
        number: '0',
        visible: false,
      },
      other: {
        number: '0',
        visible: false,
      },
    },
    complete: false,
  },
  pregnancy: {
    pregnancies: {
      number: '',
    },
    miscarriages: {
      number: '',
    },
    fullTermBirths: {
      number: '',
    },
    abortions: {
      number: '',
    },
    cesarean: {
      number: '',
    },
    livingChildren: {
      number: '',
    },
    pregnancyIssues: {
      history: false,
      notes: '',
    },
    complete: false,
  },
  privateNotes: {
    summary: '',
  },
  patientNotes: {
    summary: '',
  },
};

export default createReducer(initialState, {
  [GET_PATIENT_DETAILS_PENDING]: (state) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [GET_PATIENT_DETAILS_REJECTED]: (_, {data: details}) => ({
    ...state,
    error: 'Failed to get data.',
    details,
  }),
  [GET_PATIENT_DETAILS_FULFILLED]: (state, {data}) => ({
    ...state,
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
    ...state,
    error: 'Failed to update details.',
    details,
  }),
  [UPDATE_PATIENT_DETAILS_FULFILLED]: (state, {data: {updates, dataKey}}) => ({
    ...state,
    data: {
      ...state.data,
      [dataKey]: isArray(updates)
        ? [...state.data[dataKey], ...updates]
        : {...state.data[dataKey], ...updates},
    },
  }),
  [UPDATE_MEDICAL_HISTORY_EXPERT]: (state, {payload}) => ({
    ...state,
    ...payload,
  }),
  [LOCK_VISIT]: (state, {payload}) => ({
    ...state,
    ...payload,
  }),
  [SET_MEDICAL_HISTORY]: (state, {payload}) => ({
    ...state,
    ...payload,
  }),
  [CLEAR_MEDICAL_HISTORY]: (state) => {
    const {appointment} = state;
    return {
      ...initialState,
      ...appointment,
    };
  },
});
