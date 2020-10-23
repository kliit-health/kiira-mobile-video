import { GET_TERMS } from "../../redux/types";
import { call, put, takeEvery } from "redux-saga/effects";
import Language from "../../utils/localization";
import {
  showApiLoader,
  hideApiLoader,
} from "../../components/customLoader/action";
import { getPolicyFromFirebase } from "../../utils/firebase";
import { showOrHideModal } from "../../components/customModal/action";
import { setPolicy } from "./action";

let Lang = Language["en"];

function* getPolicy() {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const res = yield call(getPolicyFromFirebase);
    yield put(setPolicy(res));
    yield put(hideApiLoader());
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(error));
  }
}
export default function* privacySaga() {
  yield takeEvery(GET_TERMS, getPolicy);
}
