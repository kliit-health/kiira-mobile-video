import {put, takeEvery, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../components/customLoader/action';
import {showOrHideModal} from '../../../components/customModal/action';
import {SIGN_OUT_API_HIT} from '../../../redux/types';
import {logout, updateStatus} from '../../../utils/firebase';
import Constant from '../../../utils/constants';
import {clearAskState} from '../dashboard/ask/action';

function* signout({data}) {
  const {navigation, isLoaderShow} = data;
  const lang = yield select((state) => state.language);
  try {
    const state = yield select();
    const userData = state.authLoading.userData;
    if (isLoaderShow) {
      yield put(showApiLoader(lang.apiLoader.loadingText));
    }
    const updateStatusParams = {
      uid: userData.uid,
      updatedData: {
        isOnline: false,
      },
    };
    yield updateStatus(updateStatusParams);
    const response = yield logout(userData);
    if (isLoaderShow) {
      yield put(hideApiLoader());
    }
    if (response.success) {
      if (navigation) {
        yield put(clearAskState());
        navigation.navigate(Constant.App.stack.AuthStack);
      }
    }
  } catch (error) {
    console.log('error', error);
    if (isLoaderShow) {
      yield put(hideApiLoader());
    }
    if (navigation) {
      navigation.navigate(Constant.App.stack.AuthStack);
    }
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}
export default function* accountSaga() {
  yield takeEvery(SIGN_OUT_API_HIT, signout);
}
