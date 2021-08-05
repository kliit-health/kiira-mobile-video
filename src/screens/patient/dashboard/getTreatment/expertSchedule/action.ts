import {
    NEEDS_PRESCRIPTION,
    REASON_FOR_VISIT,
    GET_EXPERTS_DETAIL_DATA,
    SET_APPOINTMENT_DAY,
    SET_APPOINTMENT_TIME,
    SET_CALENDAR_ID,
    GET_APPOINTMENTS_BY_DAY,
    GET_APPOINTMENTS_FOR_TODAY,
    SET_APPOINTMENT_DATES,
    GET_APPOINTMENT_DATES,
    SET_TIMES,
} from '~/redux/types';

export const getAppointmentsForToday = data => ({
    type: GET_APPOINTMENTS_FOR_TODAY,
    data,
});

export const getAppointmentsByDay = data => ({
    type: GET_APPOINTMENTS_BY_DAY,
    data,
});

export const getExpertsData = data => ({
    type: GET_EXPERTS_DETAIL_DATA,
    data,
});

export const getAppointmentDates = data => ({
    type: GET_APPOINTMENT_DATES,
    data,
});

export const setAppointmentDates = data => ({
    type: SET_APPOINTMENT_DATES,
    data,
});

export const needsPrescription = data => ({
    type: NEEDS_PRESCRIPTION,
    data,
});

export const reasonForVisit = data => ({
    type: REASON_FOR_VISIT,
    data,
});

export const setAppointmentDay = data => ({
    type: SET_APPOINTMENT_DAY,
    data,
});

export const setAppointmentTime = data => ({
    type: SET_APPOINTMENT_TIME,
    data,
});

export const setCalendarID = data => ({
    type: SET_CALENDAR_ID,
    data,
});

export const setTimes = data => ({
    type: SET_TIMES,
    data,
});
