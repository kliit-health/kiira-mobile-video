import {
  GET_EXPERTS_DETAIL_DATA,
  GET_APPOINTMENTS_BY_DAY,
  GET_APPOINTMENT_DATES,
  GET_APPOINTMENTS_FOR_TODAY,
} from '../../../../../redux/types';

import {put, takeEvery} from 'redux-saga/effects';
import Language from '../../../../../utils/localization';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../../../components/customLoader/action';
import {
  getDataFromTable,
  getAppointmentsByDayAsync,
  getAppointmentDatesAsync,
  getAppointmentsForTodayAsync,
} from '../../../../../utils/firebase';
import {showOrHideModal} from '../../../../../components/customModal/action';
import {setTimes, setAppointmentDates} from './action';

let Lang = Language['en'];

function* getExperts({data}) {
  try {
    const {expertsParams} = data;
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    yield getDataFromTable(expertsParams);
    yield put(hideApiLoader());
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

function* getAppointmentsForToday({data}) {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const response = yield getAppointmentsForTodayAsync(data);
    yield put(setTimes(response));
    yield put(hideApiLoader());
    return;
  } catch (error) {
    console.log(error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

function* getAppointmentsByDay({data}) {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const response = yield getAppointmentsByDayAsync(data);
    yield put(setTimes(response));
    yield put(hideApiLoader());
    return;
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

function* getAppointmentDates({data}) {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const response = yield getAppointmentDatesAsync(data);
    yield put(setAppointmentDates(response));
    yield put(hideApiLoader());
    return;
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

export default function* expertScheduleSaga() {
  yield takeEvery(GET_EXPERTS_DETAIL_DATA, getExperts);
  yield takeEvery(GET_APPOINTMENTS_BY_DAY, getAppointmentsByDay);
  yield takeEvery(GET_APPOINTMENT_DATES, getAppointmentDates);
  yield takeEvery(GET_APPOINTMENTS_FOR_TODAY, getAppointmentsForToday);
}
