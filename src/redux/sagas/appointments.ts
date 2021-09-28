import { put, takeEvery, select } from 'redux-saga/effects';
import { getUser, updateUser } from '~/redux/actions';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { NavigationService as navigation } from '~/navigation';
import { showOrHideModal } from '~/components/customModal/action';

import {
    getExpertsData,
    getExpertsDataSuccess,
    getAppointmentsByDay,
    setTimes,
    setAppointmentDates,
    getAppointmentDates,
    getAppointmentsForToday,
    getAppointmentsList,
    updateVisit,
    cancelAppointment,
    rateVisit,
    fetchAppointments,
    bookAppointment,
} from '~/redux/reducers/appointments';

import {
    getAppointmentsByDayAsync,
    getAppointmentDatesAsync,
    changeAppointmentAsync,
    getAppointmentsAsync,
    cancelAppointmentAsync,
    updateCredits,
    setVideoVisitRating,
    getDataFromTable,
    makeAppointment,
    sendAppointmentNotification,
} from '~/utils/firebase';

function* getExperts({ payload }) {
    const lang = yield select(state => state.language);
    try {
        const { expertsParams } = payload;
        yield put(showApiLoader());
        const response = yield getDataFromTable(expertsParams);
        yield put(hideApiLoader());
        if (response) {
            yield put(getExpertsDataSuccess(response));
        } else {
            yield put(showOrHideModal(lang.errorMessage.serverError));
        }
    } catch (error) {
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* getAppointmentsToday({ payload }) {
    const lang = yield select(state => state.language);
    try {
        yield put(showApiLoader());
        const response = yield getAppointmentsByDayAsync(payload);
        yield put(setTimes(response));
        yield put(hideApiLoader());
        return;
    } catch (error) {
        console.log(error);
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* getAppointmentsForDay({ payload }) {
    const lang = yield select(state => state.language);
    try {
        yield put(showApiLoader());
        const response = yield getAppointmentsByDayAsync(payload);
        yield put(setTimes(response));
        yield put(hideApiLoader());
        return;
    } catch (error) {
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* getAllAppointmentDates({ payload }) {
    const lang = yield select(state => state.language);
    try {
        yield put(showApiLoader());
        const response = yield getAppointmentDatesAsync(payload);
        yield put(setAppointmentDates(response));
        yield put(hideApiLoader());
        return;
    } catch (error) {
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* updateAppointment({ payload }) {
    const {
        data: { time, reason, uid },
        navigation,
    } = payload;
    const { assessment } = yield select(state => state.user.data);
    try {
        yield put(showApiLoader());
        let appointment = yield changeAppointmentAsync(payload);
        yield put(hideApiLoader());

        if (appointment && !appointment.availible) {
            yield put(
                showOrHideModal(
                    'Appointment is unavailable please select a different time.',
                ),
            );
            navigation.navigate('Appointments');
        }

        if (assessment && reason.title === 'Health Check') {
            yield put(updateUser({ assessment: { ...assessment, time } }));
        }

        yield showOrHideModal(
            'Your appointment has been sucessfully rescheduled.',
        );

        yield put(getAppointmentsList({ uid }));

        navigation.navigate('Appointments');
    } catch (error) {
        console.error(error);
    }
}

function* getAppointments({ payload }) {
    try {
        const appointments = yield getAppointmentsAsync(payload.uid);
        if (appointments) {
            yield put(fetchAppointments(appointments));
        }
    } catch (error) {
        console.error(error);
    }
}

function* cancelTheAppointment({ payload }) {
    const { credits, prepaid } = payload;
    console.log('CANCEL', payload);
    try {
        yield put(showApiLoader());
        const result = yield cancelAppointmentAsync(payload);
        if (result) {
            yield put(
                showOrHideModal(
                    'Appointments must be canceled at least 24 hours in advance.',
                ),
            );
        } else {
            if (credits === 0) {
                yield put(updateUser({ assessment: null }));
            }
            if (prepaid.isPrePaid) {
                yield updateCredits(credits, payload, true);
                yield put(getUser());
            } else {
                yield updateCredits(credits, payload);
                yield put(getUser());
            }
        }
        yield getAppointments({ payload });
        yield put(hideApiLoader());
    } catch (error) {
        yield put(hideApiLoader());
        console.error(error);
    }
}

function* setExpertRating({ payload }) {
    try {
        yield setVideoVisitRating(payload);
    } catch (error) {
        console.error(error);
    }

    navigation.navigate('BottomTab');
}

function* setAppointment({ payload }) {
    const { time, reason, expert, visits } = payload;

    const {
        sessionType: { credits },
    } = reason;
    const { uid } = expert;

    let total = credits - visits;

    payload.prepaid = {
        isPrePaid: credits > visits,
        amount: total,
    };

    if (credits > visits) {
        yield updateCredits(total, { data: payload });
        yield put(getUser());
    }

    try {
        let appointment = yield makeAppointment(payload);

        if (appointment && !appointment.availible) {
            yield put(hideApiLoader());
            yield put(
                showOrHideModal(
                    'Appointment is unavailable please select a different time.',
                ),
            );
            navigation.goBack();
        } else {
            yield updateCredits(-total, { data: payload });
            yield put(getUser());
            yield getAppointments({ payload });
            yield sendAppointmentNotification(uid, time);
            navigation.navigate('Home');
            yield put(hideApiLoader());
        }
    } catch (error) {
        console.error(error);
        yield put(hideApiLoader());
    }
}

export default function* appointmentsSaga() {
    yield takeEvery(getExpertsData, getExperts);
    yield takeEvery(getAppointmentsByDay, getAppointmentsForDay);
    yield takeEvery(getAppointmentDates, getAllAppointmentDates);
    yield takeEvery(getAppointmentsForToday, getAppointmentsToday);
    yield takeEvery(updateVisit, updateAppointment);
    yield takeEvery(getAppointmentsList, getAppointments);
    yield takeEvery(cancelAppointment, cancelTheAppointment);
    yield takeEvery(rateVisit, setExpertRating);
    yield takeEvery(bookAppointment, setAppointment);
}
