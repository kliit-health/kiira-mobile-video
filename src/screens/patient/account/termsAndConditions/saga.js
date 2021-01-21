import { GET_TERMS } from "../../redux/types";
import { call, put, takeLatest } from "redux-saga/effects";
import Language from "../../utils/localization";
import {
  showApiLoader,
  hideApiLoader,
} from "../../components/customLoader/action";
import { getTermsFromFirebase } from "../../utils/firebase";
import { showOrHideModal } from "../../components/customModal/action";
import { setTerms } from "./action";

let Lang = Language["en"];

function* getTerms() {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const res = yield call(getTermsFromFirebase);
    yield put(setTerms(res));
    yield put(hideApiLoader());
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(error));
  }
}
export default function* termsSaga() {
  yield takeLatest(GET_TERMS, getTerms);
}
