import {put, takeEvery, select} from 'redux-saga/effects';
import {GET_LICENSES, SET_LICENSES} from '../../redux/types';
import Language from '../../utils/localization';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';
import {getLicensesAsync} from '../../utils/firebase';
import {showOrHideModal} from '../../components/customModal/action';
import {setLicenses} from '../authLoading/action';
let Lang = Language['en'];

function* getLicenses() {
  try {
    const licenses = yield getLicensesAsync();
    yield put(setLicenses(licenses.current));
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

export default function* authLoadingSaga() {
  yield takeEvery(GET_LICENSES, getLicenses);
}
