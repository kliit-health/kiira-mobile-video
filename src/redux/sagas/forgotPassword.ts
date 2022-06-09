import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import { resetPassword } from '~/utils/firebase';
import {
  forgotPasswordApiHit,
  forgotPasswordApiHitSuccess,
} from '../reducers/forgotPassword';

function* forgotPassword({ payload }) {
  const lang = yield select(state => state.language);

  try {
    const { email } = payload;
    yield put(showApiLoader());
    const response = yield resetPassword(email);
    yield put(hideApiLoader());
    if (response.ok) {
      yield put(forgotPasswordApiHitSuccess());
      yield put(showOrHideModal(lang.forgotPassword.resetEmailSentMessage));
    } else {
      yield put(
        showOrHideModal(
          response.message ? response.message : lang.errorMessage.serverError,
        ),
      );
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* forgotPasswordSaga() {
  yield takeEvery(forgotPasswordApiHit, forgotPassword);
}
