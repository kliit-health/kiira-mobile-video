import {
  GET_APPOINTMENTS,
  FETCH_APPOINTMENTS,
  CANCEL_APPOINTMENT,
} from '../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {
  getAppointmentsAsync,
  cancelAppointmentAsync,
} from '../../utils/firebase';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';

import {showOrHideModal} from '../../components/customModal/action';

function* getAppointments(data) {
  try {
    yield put(showApiLoader());
    const appointments = yield getAppointmentsAsync(data);
    yield put({type: FETCH_APPOINTMENTS, data: appointments});
    yield put(hideApiLoader());
  } catch (error) {
    console.error(error);
  }
}

function* updateAppointment({data: {uid, navigation, ...rest}}) {
  try {
    yield appointment({...rest}, uid);
    yield put({type: UPDATE_HEALTH_HISTORY, data: {...rest}});
  } catch (error) {
    console.error(error);
  }
}

function* cancelAppointment(data) {
  console.log('CANCEL DATA', data);
  try {
    yield put(showApiLoader());
    const result = yield cancelAppointmentAsync(data);
    const appointments = yield getAppointmentsAsync(data);
    if (result) {
      yield put(
        showOrHideModal(
          'Appointments must be canceled at least 24 hours in advance.',
        ),
      );
    }
    yield put({type: FETCH_APPOINTMENTS, data: appointments});
    yield put(hideApiLoader());
  } catch (error) {
    console.error(error);
  }
}

export default function* appointmentsSaga() {
  yield takeEvery(GET_APPOINTMENTS, getAppointments);
  yield takeEvery(CANCEL_APPOINTMENT, cancelAppointment);
}
