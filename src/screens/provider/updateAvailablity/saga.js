import {put, takeEvery} from 'redux-saga/effects';
import Language from '../../../utils/localization';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../components/customLoader/action';
import {addUserData, getDataFromTable} from '../../../utils/firebase';
import {showOrHideModal} from '../../../components/customModal/action';
import Constant from '../../../utils/constants';
import firebase from 'react-native-firebase';
import {setUserData} from '../authLoading/action';
import {UPDATE_EXPERT_HOURS_DATA} from '../../../redux/types';

let Lang = Language['en'];

function* updateExpertData({data}) {
  try {
    const {userParams, navigation} = data;
    yield put(showApiLoader(Lang.apiLoader.loadingText));

    const user = firebase.auth().currentUser;
    const userRegistrationParams = {
      credits: userParams.credits,
      uid: user.uid,
      role: 'Expert',
      isActive: true,
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
          response.message ? response.message : Lang.errorMessage.serverError,
        ),
      );
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

export default function* updateExpertSaga() {
  yield takeEvery(UPDATE_EXPERT_HOURS_DATA, updateExpertData);
}
