import {MAKE_APPOINTMENT} from '../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {
  getDataFromTable,
  makeAppointment,
  updateCredits,
  createCometChatUser,
} from '../../utils/firebase';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';
import {setUserData} from '../authLoading/action';
import Constant from '../../utils/constants';
import {NavigationService} from '../../navigator';
import {showOrHideModal} from '../../components/customModal/action';

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
    const obj = {
      tableName: Constant.App.firebaseTableNames.users,
      uid: data.data.uid,
    };

    const userData = yield getDataFromTable(obj);
    yield createCometChatUser(userData);

    yield put(setUserData(userData));
  } catch (error) {
    console.error(error);
  }
}

export default function* bookVisitSaga() {
  yield takeEvery(MAKE_APPOINTMENT, setAppointment);
}
