import {
    bookAppointment,
    setAppointmentDates,
    setAppointmentTimes,
    getAppointmentsByDay,
    getAppointmentDates,
    toggleLoading,
} from '../reducers/assessment';
import { select, put, takeEvery } from 'redux-saga/effects';
import { makeAppointment } from '~/utils/firebase';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { NavigationService } from '../../navigation';
import { getUser } from '~/redux/actions';
import { showOrHideModal } from '~/components/customModal/action';
import {
    sendAppointmentNotification,
    getAppointmentDatesAsync,
    getAppointmentsByDayAsync,
} from '../../utils/firebase';
import { updateUser } from '../actions';

function* setAppointment(data) {
    const {
        time,
        expert: { uid },
    } = data.payload;

    const details = {
        time,
        complete: false,
        expert: data.payload.expert,
    };

    try {
        yield put(showApiLoader());

        let appointment = yield makeAppointment({ data: data.payload });

        if (appointment && !appointment.availible) {
            yield put(
                showOrHideModal(
                    'Appointment is unavailable please select a different time.',
                ),
            );
            NavigationService.goBack();
        } else {
            yield put(updateUser({ assessment: details }));
            yield put(getUser());
            yield sendAppointmentNotification(uid, time);
            yield put(hideApiLoader());
            NavigationService.navigate('HealthAssessmentConfirmation');
        }
    } catch (error) {
        console.error(error);
    }
}

function* getAppointmentsForDay(data) {
    const lang = yield select(state => state.language);
    const { payload } = data;
    const isToday = false;
    yield put(toggleLoading());
    try {
        yield put(showApiLoader());
        const response = yield getAppointmentsByDayAsync(payload, isToday);
        yield put(setAppointmentTimes(response.current));
        yield put(hideApiLoader());
        yield put(toggleLoading());
        return;
    } catch (error) {
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
        yield put(toggleLoading());
    }
}

function* getAllAppointmentDates(data) {
    const lang = yield select(state => state.language);
    const { payload } = data;
    console.log('DATA', data);
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

export default function* assessmentSaga() {
    yield takeEvery(bookAppointment().type, setAppointment);
    yield takeEvery(getAppointmentDates().type, getAllAppointmentDates);
    yield takeEvery(getAppointmentsByDay().type, getAppointmentsForDay);
}
