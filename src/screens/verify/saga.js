import { put, call, takeEvery } from "redux-saga/effects";
import { SEND_VERIFICATION_EMAIL } from "../../redux/types";
import Language from "../../utils/localization";
import {
  showApiLoader,
  hideApiLoader,
} from "../../components/customLoader/action";
import { sendEmailVerification } from "../../utils/firebase";
import { showOrHideModal } from "../../components/customModal/action";

let Lang = Language["en"];

function* sendVerificationEmail({ data }) {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    yield call(sendEmailVerification, data);
    yield put(hideApiLoader());
    yield put(showOrHideModal("Check your email"));
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

export default function* verificationSaga() {
  yield takeEvery(SEND_VERIFICATION_EMAIL, sendVerificationEmail);
}
