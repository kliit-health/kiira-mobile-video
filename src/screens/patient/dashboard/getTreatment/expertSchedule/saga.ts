import {
  GET_EXPERTS_DETAIL_DATA,
  GET_APPOINTMENTS_BY_DAY,
  GET_APPOINTMENT_DATES,
  GET_APPOINTMENTS_FOR_TODAY,
} from 'redux/types';

import {put, takeEvery, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from 'components/customLoader/action';
import {
  getDataFromTable,
  getAppointmentsByDayAsync,
  getAppointmentDatesAsync,
} from 'utils/firebase';
import {showOrHideModal} from 'components/customModal/action';
import {setTimes, setAppointmentDates} from './action';

function* getExperts({data}) {
  const lang = yield select((state) => state.language);
  try {
    const {expertsParams} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    yield getDataFromTable(expertsParams);
    yield put(hideApiLoader());
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* getAppointmentsForToday({data}) {
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const isToday = true
    const response = yield getAppointmentsByDayAsync(data, isToday);
    yield put(setTimes(response));
    yield put(hideApiLoader());
    return;
  } catch (error) {
    console.log(error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* getAppointmentsByDay({data}) {
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const response = yield getAppointmentsByDayAsync(data);
    yield put(setTimes(response));
    yield put(hideApiLoader());
    return;
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* getAppointmentDates({data}) {
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const response = yield getAppointmentDatesAsync(data);
    yield put(setAppointmentDates(response));
    yield put(hideApiLoader());
    return;
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* expertScheduleSaga() {
  yield takeEvery(GET_EXPERTS_DETAIL_DATA, getExperts);
  yield takeEvery(GET_APPOINTMENTS_BY_DAY, getAppointmentsByDay);
  yield takeEvery(GET_APPOINTMENT_DATES, getAppointmentDates);
  yield takeEvery(GET_APPOINTMENTS_FOR_TODAY, getAppointmentsForToday);
}
