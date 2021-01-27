import {GET_EXPERTS_DETAIL_DATA} from '../../../redux/types';
import {put, takeEvery, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../components/customLoader/action';
import {getDataFromTable} from '../../../utils/firebase';
import {showOrHideModal} from '../../../components/customModal/action';
import {getExpertsDataSuccess} from './action';

function* getExperts({data}) {
  const lang = yield select((state) => state.language);
  try {
    const {expertsParams} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const response = yield getDataFromTable(expertsParams);
    yield put(hideApiLoader());
    if (response) {
      yield put(getExpertsDataSuccess(response));
    } else {
      yield put(
        showOrHideModal(
          responseImage.message
            ? responseImage.message
            : lang.errorMessage.serverError,
        ),
      );
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* expertProfileSaga() {
  yield takeEvery(GET_EXPERTS_DETAIL_DATA, getExperts);
}
