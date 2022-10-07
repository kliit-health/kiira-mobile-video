import {
    GET_EXPERT_APPOINTMENTS,
    FETCH_EXPERT_APPOINTMENTS,
    EXPERT_CANCEL_APPOINTMENT,
} from '~/redux/types';

import {
  getAppointmentsAsync,
  smsNotifyPatientOnCancel,
  sendNotification,
  sendSms, cancelAppointmentAsync,
} from '~/utils/firebase'

import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';

function getUserAppointments(data) {
    let users = Object.values(data);
    let allApponitments = users.reduce((acc, item) => {
        if (Object.values(item).length) return [...acc, ...Object.values(item)];
    }, []);

    return allApponitments;
}

function* getAppointments({ data }) {
    try {
        yield put(showApiLoader());
        const appointments = yield getAppointmentsAsync(data.uid);
        const allApponitments = yield getUserAppointments(appointments);
        yield put({
            type: FETCH_EXPERT_APPOINTMENTS,
            data: allApponitments,
        });
        yield put(hideApiLoader());
    } catch (error) {
        console.error(error);
        yield put(hideApiLoader());
    }
}

function* cancelAppointment({ data }) {
    const lang = yield select(state => state.language);
    const { id, uid, expert, credits } = data;
        const title = 'Cancellation';
        const message = 'An appointment has been canceled';

    try {
        yield put(showApiLoader());
        yield cancelAppointmentAsync(data.uid, data);
        yield smsNotifyPatientOnCancel(data, message)
        yield sendNotification(uid, title, message);
        const appointments = yield getAppointmentsAsync(expert.uid);
        const allApponitments = yield getUserAppointments(appointments);
        yield put({ type: FETCH_EXPERT_APPOINTMENTS, data: allApponitments });
        yield put(hideApiLoader());
    } catch (error) {
        console.error(error);
    }
}

export default function* expertAppointmentsSaga() {
    yield takeEvery(GET_EXPERT_APPOINTMENTS, getAppointments);
    yield takeEvery(EXPERT_CANCEL_APPOINTMENT, cancelAppointment);
}
