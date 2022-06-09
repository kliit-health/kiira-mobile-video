import { put, call, takeEvery, select } from 'redux-saga/effects';
import { sendVerification } from '~/redux/reducers/activate';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { sendEmailVerification } from '~/utils/firebase';
import {
  showOrHideModal,
  showMemberModal,
} from '~/components/customModal/action';

function* sendVerificationEmail({ payload }) {
  const lang = yield select(state => state.language);
  const { email } = payload;

  try {
    yield put(showApiLoader());
    yield call(sendEmailVerification, email);
    yield put(hideApiLoader());
    yield put(showMemberModal(lang.login.MemberHelp));
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* verificationSaga() {
  yield takeEvery(sendVerification, sendVerificationEmail);
}
