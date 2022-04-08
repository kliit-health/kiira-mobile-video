import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    prepaid: false,
    expertData: null,
    reason: null,
    prescription: false,
    calendarID: null,
    appointmentTypeID: 0,
    history: [],
    time: null,
    date: null,
    dates: [],
    appointments: {
        today: [],
        current: [],
        future: [],
        dates: [],
    },
    visit: null,
};

export type IAppointments = {
    prepaid: boolean;
    expertData: null | object;
    reason: null | string;
    prescription: boolean;
    calendarID: null | string;
    appointmentTypeID: number;
    history: Array<object>;
    time: null | string;
    date: null | string;
    dates: Array<string>;
    appointments: {
        today: Array<string>;
        current: Array<string>;
        future: Array<string>;
        dates: Array<string>;
    };
    visit: object;
};

export const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        getExpertsData: (state, action: PayloadAction<any>) => {
            return state;
        },
        getExpertsDataSuccess: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                expertData: action.payload,
            };
        },
        clearExpertProfileState: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                expertData: null,
            };
        },
        getAppointmentsForToday: (state, action: PayloadAction<any>) => {
            return state;
        },
        getAppointmentsByDay: (state, action: PayloadAction<any>) => {
            return state;
        },
        getAppointmentDates: (state, action: PayloadAction<any>) => {
            return state;
        },
        setAppointmentDates: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                dates: action.payload,
            };
        },
        needsPrescription: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                prescription: action.payload,
            };
        },
        reasonForVisit: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                reason: action.payload,
            };
        },
        setAppointmentDay: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                date: action.payload,
            };
        },
        setAppointmentTime: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                time: action.payload,
            };
        },
        setCalendarID: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                calendarID: action.payload,
            };
        },
        setTimes: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                appointments: { ...state.appointments, ...action.payload },
            };
        },
        updateVisit: (state, action: PayloadAction<any, string>) => {
            return state;
        },
        getAppointmentsList: (state, action: PayloadAction<any>) => {
            return state;
        },
        cancelAppointment: (state, action: PayloadAction<any>) => {
            return state;
        },
        rateVisit: (state, action: PayloadAction<any>) => {
            return state;
        },
        fetchAppointments: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                history: [...action.payload.history],
            };
        },
        setPrepaid: state => {
            return {
                ...state,
                prepaid: true,
            };
        },
        bookAppointment: (state, action: PayloadAction<any>) => {
            return state;
        },
        setVisit: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                visit: action.payload,
            };
        },
        setAppointmentDetails: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                visit: { ...state.visit, ...action.payload },
            };
        },
        setAppointmentExpert: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                visit: { ...state.visit, expert: { ...action.payload } },
            };
        },
        setAppointmentDayAndTime: (state, action: PayloadAction<any>) => {
            return {
                ...state,
                visit: {
                    ...state.visit,
                    day: action.payload.day,
                    time: action.payload.time,
                },
            };
        },
    },
});

export const {
    getExpertsData,
    getExpertsDataSuccess,
    clearExpertProfileState,
    getAppointmentsForToday,
    getAppointmentsByDay,
    getAppointmentDates,
    setAppointmentDates,
    needsPrescription,
    reasonForVisit,
    setAppointmentDay,
    setAppointmentTime,
    setCalendarID,
    setTimes,
    updateVisit,
    getAppointmentsList,
    cancelAppointment,
    rateVisit,
    fetchAppointments,
    bookAppointment,
    setPrepaid,
    setVisit,
    setAppointmentDetails,
    setAppointmentExpert,
    setAppointmentDayAndTime,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
