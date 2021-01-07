import {UPDATE_APPOINTMENT, MAKE_APPOINTMENT} from '../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {navigation} from 'react-navigation';
import {
  addUserData,
  makeAppointment,
  updateCredits,
} from '../../utils/firebase';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';

import {showOrHideModal} from '../../components/customModal/action';

// function* updateAppointment({ data: { uid, navigation, ...rest } }) {
// 	try {
// 		yield appointment({ ...rest }, uid);
// 		yield put({ type: UPDATE_HEALTH_HISTORY, data: { ...rest } });
// 	} catch (error) {
// 		console.error(error);
// 	}
// 	navigation.goBack();
// }

function* setAppointment(data) {
  try {
    yield put(showApiLoader());

    let appointment = yield makeAppointment(data);
    yield put(hideApiLoader());

    if (appointment && !appointment.availible) {
      yield put(
        showOrHideModal('Appointment is unavailible please reschedule.'),
      );
      navigation.goBack();
    }

    yield put(updateCredits(-1, data));
  } catch (error) {
    console.error(error);
  }
}

export default function* bookVisitSaga() {
  // yield takeEvery(UPDATE_APPOINTMENT, updateAppointment);
  yield takeEvery(MAKE_APPOINTMENT, setAppointment);
}
