import {put, call, takeEvery, select} from 'redux-saga/effects';
import {SEND_VERIFICATION_EMAIL} from '~/redux/types';
import {
  showApiLoader,
  hideApiLoader,
} from '~/components/customLoader/action';
import {sendEmailVerification} from '~/utils/firebase';
import {showOrHideModal} from '~/components/customModal/action';

function* sendVerificationEmail({data}) {
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    yield call(sendEmailVerification, data);
    yield put(hideApiLoader());
    yield put(showOrHideModal('Check your email'));
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* verificationSaga() {
  yield takeEvery(SEND_VERIFICATION_EMAIL, sendVerificationEmail);
}
