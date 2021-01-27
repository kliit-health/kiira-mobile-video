import {put, takeEvery, select} from 'redux-saga/effects';
import {GET_LOGIN, SET_LOGIN} from '../../../../../redux/types';
import {NavigationService} from '../../../../../navigation';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../../../components/customLoader/action';
import {getCometChatDetailsAsync} from '../../../../../utils/firebase';
import {showOrHideModal} from '../../../../../components/customModal/action';

function* getCometChatDetails({data: {destination, visit}}) {
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const details = yield getCometChatDetailsAsync(visit);
    yield put({type: SET_LOGIN, data: details});
    yield put(hideApiLoader());
    NavigationService.navigate(destination, {visit});
  } catch (error) {
    console.log(error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* visitSaga() {
  yield takeEvery(GET_LOGIN, getCometChatDetails);
}
