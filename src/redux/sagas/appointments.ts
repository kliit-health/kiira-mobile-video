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
    sendSms,
    sendNotification,
} from '~/utils/firebase';

import moment from 'moment';

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

function* updateAppointment({
    data,
    data: {
        data: { time, appointmentType },
        navigation,
    },
}) {
    const { assessment, profileInfo, uid, enableText } = yield select(
        state => state.user.data,
    );
    const title = 'Reschedule';
    const message = `Your appointment has been rescheduled \n\n ${moment(
        time,
    ).format('llll')}`;
    try {
        yield put(showApiLoader());
        let appointment = yield changeAppointmentAsync(data);
        yield put(hideApiLoader());

        if (appointment && !appointment.availible) {
            yield put(
                showOrHideModal(
                    'Appointment is unavailable please select a different time.',
                ),
            );
            navigation.navigate('Appointments');
        }

        if (assessment && appointmentType.title === 'Health Check') {
            yield put(updateUser({ assessment: { ...assessment, time } }));
        }

        yield showOrHideModal(
            'Your appointment has been sucessfully rescheduled.',
        );
        yield put(getAppointmentsList({ uid: data.data.uid }));
        if (profileInfo.phoneNumber.length && enableText) {
            yield sendSms(message, profileInfo.phoneNumber);
        }

        yield sendNotification(uid, title, message);
        yield put(getAppointmentsList(uid));

        navigation.navigate('Appointments');
    } catch (error) {
        console.error(error);
    }
}

function* getAppointments() {
    const user = yield select(state => state.user.data);
    try {
        const appointments = yield getAppointmentsAsync(user.uid);
        if (appointments) {
            yield put(fetchAppointments(appointments));
        }
    } catch (error) {
        console.error(error);
    }
}

function* cancelTheAppointment(data) {
    const {
        data: { uid, credits, expert },
    } = data;

    const title = 'Cancellation';
    const message = 'An appointment has been canceled';

    const totals = {
        creditsRequired: 1,
        monthlyCredits: 0,
        prepaidCredits: 0,
        purchasedCredits: 1,
        redeemCredits: 0,
        availibleCredits: 1,
    };

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

            yield updateCredits(data, totals, true);
            yield put(getUser());
            if (expert.profileInfo.phoneNumber.length) {
                yield sendSms(message, expert.profileInfo.phoneNumber);
            }

            yield sendNotification(expert.uid, title, message);
        }
        yield getAppointments();
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
    const { time, reason, expert, visits, prepaid } = payload;

    const {
        sessionType: { credits },
    } = reason;
    const { uid } = expert;

    const totals = {
        required: credits,
        monthly: visits,
        prepaid: prepaid,
        purchased: credits - (visits + prepaid),
        redeemPurchased: credits - prepaid,
        redeemMonthly: credits - (visits + prepaid),
        availible: visits + prepaid,
        isPrepaid: credits > visits + prepaid,
    };

    payload.prepaidInfo = {
        isPrePaid: totals.required > totals.availible,
        amount: totals.purchased,
    };

    if (payload.prepaidInfo.isPrePaid) {
        console.log('isPrepaid');
        yield updateCredits({ data: payload }, totals, true);
        yield put(getUser());
    }

    try {
        yield put(hideApiLoader());
        yield put(showApiLoader());
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
            yield updateCredits({ data: payload }, totals, false);
            yield put(getUser());
            yield getAppointments();
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
