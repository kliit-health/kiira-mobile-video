import {put, takeEvery, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../../components/customLoader/action';
import {addUserData, getDataFromTable} from '../../../../utils/firebase';
import {showOrHideModal} from '../../../../components/customModal/action';
import Constant from '../../../../utils/constants';
import firebase from 'react-native-firebase';
import {setUserData} from '../../../auth/authLoading/action';
import {UPDATE_EXPERT_HOURS_DATA} from '../../../../redux/types';

function* updateExpertData({data}) {
  const lang = yield select((state) => state.language);
  try {
    const {userParams, navigation} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));

    const user = firebase.auth().currentUser;
    const userRegistrationParams = {
      uid: user.uid,
      role: 'Expert',
      clinicInfo: {
        ...userParams.clinicInfo,
        hours: userParams.hours,
      },
      profileInfo: {
        ...userParams.userData.profileInfo,
      },
    };

    const response = yield addUserData(userRegistrationParams);

    yield put(hideApiLoader());
    if (response.success) {
      navigation.goBack();
      const obj = {
        tableName: Constant.App.firebaseTableNames.users,
        uid: user.uid,
      };
      const userData = yield getDataFromTable(obj);
      yield put(setUserData(userData));
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

export default function* updateExpertSaga() {
  yield takeEvery(UPDATE_EXPERT_HOURS_DATA, updateExpertData);
}
