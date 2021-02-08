import {
  GET_APPOINTMENTS,
  FETCH_APPOINTMENTS,
  CANCEL_APPOINTMENT,
  RATE_VISIT,
} from '../../../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {
  getAppointmentsAsync,
  cancelAppointmentAsync,
  updateCredits,
  setVideoVisitRating,
} from '../../../../utils/firebase';
import Constant from '../../../../utils/constants';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../../components/customLoader/action';
import {showOrHideModal} from '../../../../components/customModal/action';

function* getAppointments({data}) {
  try {
    yield put(showApiLoader());
    const appointments = yield getAppointmentsAsync(data.uid);

    if (appointments) yield put({type: FETCH_APPOINTMENTS, data: appointments});

    yield put(hideApiLoader());
  } catch (error) {
    console.error(error);
  }
}

function* cancelAppointment(data) {
  const {
    data: {uid},
  } = data;

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
      yield updateCredits(1, data);
    }
    yield put({type: FETCH_APPOINTMENTS, data: appointments});
    yield put(hideApiLoader());
  } catch (error) {
    console.error(error);
  }
}

function* setExpertRating({data}) {
  const {navigation} = data;
  try {
    yield setVideoVisitRating(data);
  } catch (error) {
    console.error(error);
  }
  navigation.navigate(Constant.App.stack.AppStack);
}

export default function* appointmentsSaga() {
  yield takeEvery(GET_APPOINTMENTS, getAppointments);
  yield takeEvery(CANCEL_APPOINTMENT, cancelAppointment);
  yield takeEvery(RATE_VISIT, setExpertRating);
}
