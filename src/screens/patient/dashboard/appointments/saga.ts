import {
  GET_APPOINTMENTS,
  FETCH_APPOINTMENTS,
  CANCEL_APPOINTMENT,
  RATE_VISIT,
} from '~/redux/types';
import { getUser } from '~/redux/actions';
import { put, takeEvery } from 'redux-saga/effects';
import {
  getAppointmentsAsync,
  cancelAppointmentAsync,
  updateCredits,
  setVideoVisitRating,
  sendSms,
  sendNotification,
} from '~/utils/firebase';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import { updateUser } from '../../../../redux/actions';

function* getAppointments({ data }) {
  try {
    yield put(showApiLoader());
    const appointments = yield getAppointmentsAsync(data.uid);

    if (appointments)
      yield put({ type: FETCH_APPOINTMENTS, data: appointments });

    yield put(hideApiLoader());
  } catch (error) {
    console.error(error);
  }
}

function* cancelAppointment(data) {
  const {
    data: { uid, credits, expert },
  } = data;

  const title = 'Cancellation';
  const message = 'An appointment has been canceled';

  try {
    yield put(showApiLoader());
    const result = yield cancelAppointmentAsync(data);
    const appointments = yield getAppointmentsAsync(uid);
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

      yield updateCredits(credits, data);
      yield put(getUser());
      if (expert.profileInfo.phoneNumber.length) {
        yield sendSms(message, expert.profileInfo.phoneNumber);
      }

      yield sendNotification(expert.uid, title, message);
    }
    yield put({ type: FETCH_APPOINTMENTS, data: appointments });
    yield put(hideApiLoader());
  } catch (error) {
    yield put(hideApiLoader());
    console.error(error);
  }
}

function* setExpertRating({ data }) {
  const { navigation } = data;
  try {
    yield setVideoVisitRating(data);
  } catch (error) {
    console.error(error);
  }

  navigation.navigate('BottomTab');
}

export default function* appointmentsSaga() {
  yield takeEvery(GET_APPOINTMENTS, getAppointments);
  yield takeEvery(CANCEL_APPOINTMENT, cancelAppointment);
  yield takeEvery(RATE_VISIT, setExpertRating);
}

