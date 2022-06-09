import {
  GET_PATIENTS_LIST,
  FETCH_PAITENT_APPOINTMENTS,
  PAITENT_CANCEL_APPOINTMENT,
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

function* getExpertPatients({ data }) {
  try {
    yield put(showApiLoader());
    const appointments = yield getAppointmentsAsync(data.uid);
    const allApponitments = yield getUserAppointments(appointments);
    yield put({
      type: FETCH_PAITENT_APPOINTMENTS,
      data: allApponitments,
    });
    yield put(hideApiLoader());
  } catch (error) {
    console.error(error);
    yield put(hideApiLoader());
  }
}

function* cancelAppointment(data) {
  const {
    data: { expert, credits },
  } = data;

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
      yield updateCredits(credits, data, true);
    }

    yield put({ type: FETCH_PAITENT_APPOINTMENTS, data: allApponitments });
    yield put(hideApiLoader());
  } catch (error) {
    console.error(error);
  }
}

export default function* expertPatientsSaga() {
  yield takeEvery(GET_PATIENTS_LIST, getExpertPatients);
  yield takeEvery(PAITENT_CANCEL_APPOINTMENT, cancelAppointment);
}
