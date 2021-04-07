import {put, takeEvery, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from 'components/customLoader/action';
import {showOrHideModal} from 'components/customModal/action';
import {getUser, updateUser} from 'redux/actions';
import {UPDATE_EXPERT_HOURS_DATA} from 'redux/types';

function* updateExpertData({data}) {
  const lang = yield select((state) => state.language);
  const user = yield select((state) => state.user.data);
  try {
    const {userParams, navigation} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));

    const userInfo = {
      ...user,
      clinicInfo: {
        ...userParams.clinicInfo,
        hours: userParams.hours,
      },
      profileInfo: {
        ...userParams.userData.profileInfo,
      },
    };

    yield put(updateUser({uid: user.uid, ...userInfo}));
    yield put(getUser());
    yield put(hideApiLoader());
    navigation.goBack();
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* updateExpertSaga() {
  yield takeEvery(UPDATE_EXPERT_HOURS_DATA, updateExpertData);
}
