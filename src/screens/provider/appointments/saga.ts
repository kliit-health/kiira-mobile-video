import {
    GET_EXPERT_APPOINTMENTS,
    FETCH_EXPERT_APPOINTMENTS,
    EXPERT_CANCEL_APPOINTMENT,
} from '~/redux/types';
import { put, takeEvery } from 'redux-saga/effects';
import {
    getAppointmentsAsync,
    cancelAppointmentAsync,
    updateCredits,
} from '~/utils/firebase';
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
    const { expert, prepaid } = data;
    try {
        yield put(showApiLoader());
        const result = yield cancelAppointmentAsync(data);
        const appointments = yield getAppointmentsAsync(expert.uid);
        const allApponitments = yield getUserAppointments(appointments);

        if (result) {
            yield put(
                showOrHideModal(
                    'Appointments must be canceled at least 24 hours in advance.',
                ),
            );
        } else {
            yield updateCredits(1, data);
        }

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
