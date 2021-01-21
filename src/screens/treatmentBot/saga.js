import {UPDATE_NEW_USER_DETAIL_DATA} from '../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import Language from '../../utils/localization';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';
import {addUserData, getDataFromTable} from '../../utils/firebase';
import {showOrHideModal} from '../../components/customModal/action';
import Constant from '../../utils/constants';
import {displayConsole} from '../../utils/helper';
import firebase from 'react-native-firebase';
import {setUserData} from '../authLoading/action';

let Lang = Language['en'];

function* updateNewUserData({data}) {
  try {
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const {userParams, navigation} = data;
    const user = firebase.auth().currentUser;
    const userRegistrationParams = {
      uid: user.uid,
      role: 'User',
      isActive: false,
      firstLogin: false,
      signUpDate: userParams.signUpDate,
      profileInfo: {
        profileImageUrl: userParams.profileImageUrl,
        firstName: userParams.firstName,
        lastName: userParams.lastName,
        email: userParams.email,
        dob: userParams.dob,
        pronouns: userParams.pronouns,
        isActive: false,
        state: userParams.state,
      },
    };
    const response = yield addUserData(userRegistrationParams);
    displayConsole('response', response);
    yield put(hideApiLoader());
    if (response.success) {
      const obj = {
        tableName: Constant.App.firebaseTableNames.users,
        uid: user.uid,
      };
      const userData = yield getDataFromTable(obj);
      yield put(setUserData(userData));
      navigation.navigate(Constant.App.screenNames.NewUser, {
        userData,
      });
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

export default function* newUserSaga() {
  yield takeEvery(UPDATE_NEW_USER_DETAIL_DATA, updateNewUserData);
}
