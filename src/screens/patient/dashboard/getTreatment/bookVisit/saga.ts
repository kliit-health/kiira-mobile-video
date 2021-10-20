import { MAKE_APPOINTMENT } from '~/redux/types';
import { put, takeEvery, select } from 'redux-saga/effects';
import { makeAppointment, updateCredits } from '~/utils/firebase';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { NavigationService } from '~/navigation';
import { getUser } from '~/redux/actions';
import { showOrHideModal } from '~/components/customModal/action';
import { sendAppointmentNotification, sendSms } from '~/utils/firebase';
import moment from 'moment';

function* setAppointment(data) {
  const { phoneNumber, enableText } = yield select(
    state => state.user.data.profileInfo,
  );
  const {
    data: {
      time,
      appointmentType: { credits },
      expert: { uid },
    },
  } = data;

  try {
    yield put(showApiLoader());

    let appointment = yield makeAppointment(data);
    yield put(hideApiLoader());

    if (appointment && !appointment.availible) {
      yield put(
        showOrHideModal(
          'Appointment is unavailable please select a different time.',
        ),
      );
      NavigationService.goBack();
    } else {
      yield updateCredits(-credits, data);
      yield put(getUser());
      yield sendAppointmentNotification(uid, time);
      if (phoneNumber.length && enableText) {
        const message = `Your Kiira Health appointment has been confirmed, please return to the app 5 minutes before your appointment on: \n\n ${moment(
          time,
        ).format('llll')}`;
        yield sendSms(message, phoneNumber);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* bookVisitSaga() {
  yield takeEvery(MAKE_APPOINTMENT, setAppointment);
}
