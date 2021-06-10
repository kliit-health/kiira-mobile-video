import {put, takeEvery, select} from 'redux-saga/effects';
import {CHANGE_PASSWORD} from '~/redux/types';
import {
  showApiLoader,
  hideApiLoader,
} from '~/components/customLoader/action';
import {changePassword, reAunthenticate} from '~/utils/firebase';
import {showOrHideModal} from '~/components/customModal/action';
import {displayConsole} from '~/utils/helper';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* changeUserPassword({data}) {
  const lang = yield select((state) => state.language);
  try {
    const {params, navigation} = data;
    displayConsole('data', data);
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const responseReAunthenticate = yield reAunthenticate(
      params.currentPassword,
    );
    displayConsole('responseReAunthenticate', responseReAunthenticate);
    if (responseReAunthenticate.success) {
      const responseChangePassword = yield changePassword(params.newPassword);
      displayConsole('responseChangePassword', responseChangePassword);
      yield delay(500);
      yield put(hideApiLoader());
      yield delay(500);
      if (responseChangePassword.success) {
        yield put(
          showOrHideModal(lang.changePassword.passwordUpdateSuccessfullyMsg),
        );
        navigation.goBack();
      } else {
        yield put(
          showOrHideModal(
            responseChangePassword.message
              ? responseChangePassword.message
              : lang.errorMessage.serverError,
          ),
        );
      }
    } else {
      yield delay(500);
      yield put(hideApiLoader());
      yield delay(500);
      yield put(
        showOrHideModal(
          responseReAunthenticate.message
            ? responseReAunthenticate.message
            : lang.errorMessage.serverError,
        ),
      );
    }
  } catch (error) {
    yield delay(500);
    yield put(hideApiLoader());
    yield delay(500);
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* changePasswordSaga() {
  yield takeEvery(CHANGE_PASSWORD, changeUserPassword);
}
