import {put, takeEvery} from 'redux-saga/effects';
import {GET_LOGIN, SET_LOGIN} from '../../redux/types';
import {NavigationService} from '../../navigator';
import Language from '../../utils/localization';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';
import {getCometChatDetailsAsync} from '../../utils/firebase';
import {showOrHideModal} from '../../components/customModal/action';

let Lang = Language['en'];

function* getCometChatDetails({data: {destination, visit}}) {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const details = yield getCometChatDetailsAsync(visit);
    yield put({type: SET_LOGIN, data: details});
    yield put(hideApiLoader());
    NavigationService.navigate(destination, {visit});
  } catch (error) {
    console.log(error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

export default function* visitSaga() {
  yield takeEvery(GET_LOGIN, getCometChatDetails);
}
