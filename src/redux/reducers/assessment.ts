import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import {generateDateInfo} from '~/utils/helper'

const today = moment(new Date()).format('YYYY-MM-DD');
const current = generateDateInfo(today);

let addMonth = moment(`${current.year}-${current.monthNumber}`);
    addMonth = moment(addMonth).add(1, 'M').format('YYYY-MM');

interface AssessmentState {
    showModal: boolean
    loading: boolean
    details: object
    current: object
    addMonth: object
    selectedDate: string
    appointment: object
    appointments: any
}

const initialState: AssessmentState = {
    showModal: false,
    loading: true,
    details: {
      calendarID: '5213164',
      appointmentType: {
        appointmentType: '24164653',
        appointmentTypeID: '24164653',
        credits: 0,
        duration: 15,
        price: 0,
        title: "Health Check"
      }
    },
    current,
    addMonth,
    selectedDate: today,
    appointment: {},
    appointments: {
      current: [],
      today: [],
      future: [],
      dates: [],
    },
}

export const assessmentSlice = createSlice({
  name: 'assessment',
  initialState,
  reducers: {
    toogleModal: state => {
      state.showModal = !state.showModal
    },
    toggleLoading: state => {
      state.loading = !state.loading
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload
    },
    bookAppointment: (state, action: PayloadAction<object>) => {
      state.appointment = action.payload
    },
    cancelAppointment: (state) => state,
    getAppointmentDates: (state, action: PayloadAction<object>) => {
      return state
    },
    getAppointmentsByDay: (state, action: PayloadAction<object>) => {
      return state
    },
    setAppointmentDates: (state, action: PayloadAction<string>) => {
      state.appointments.dates = action.payload
    },
    setAppointmentTimes: (state, action: PayloadAction<string>) => {
      state.appointments.current = [...action.payload]
    },
  }
})

export const { 
  toogleModal, 
  toggleLoading, 
  setSelectedDate, 
  bookAppointment, 
  cancelAppointment, 
  getAppointmentDates, 
  getAppointmentsByDay,
  setAppointmentDates,
  setAppointmentTimes
} = assessmentSlice.actions;

export const selectAssessment = (state: AssessmentState) => state.assessment;

export default assessmentSlice.reducer