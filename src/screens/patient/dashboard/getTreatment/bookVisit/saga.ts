import {MAKE_APPOINTMENT} from '../../../../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {makeAppointment, updateCredits} from '../../../../../utils/firebase';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../../../components/customLoader/action';
import {NavigationService} from '../../../../../navigation';
import {getUser} from '../../../../../redux/actions';
import {showOrHideModal} from '../../../../../components/customModal/action';

function* setAppointment(data) {
  try {
    yield put(showApiLoader());
    let appointment = yield makeAppointment(data);
    yield put(hideApiLoader());

    if (appointment && !appointment.availible) {
      yield put(
        showOrHideModal('Appointment is unavailible please reschedule.'),
      );
      NavigationService.goBack();
    }

    yield updateCredits(-1, data);
    yield put(getUser());
  } catch (error) {
    console.error(error);
  }
}

export default function* bookVisitSaga() {
  yield takeEvery(MAKE_APPOINTMENT, setAppointment);
}
