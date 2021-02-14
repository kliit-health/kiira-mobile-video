import {UPDATE_NEW_USER_DETAIL_DATA} from '../../../redux/types';
import {put, takeEvery, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../components/customLoader/action';
import {addUserData, getDataFromTable} from '../../../utils/firebase';
import {showOrHideModal} from '../../../components/customModal/action';
import Constant from '../../../utils/constants';
import {displayConsole} from '../../../utils/helper';
import firebase from 'react-native-firebase';
import {setUserData} from '../authLoading/action';

const defaultImage =
  'https://firebasestorage.googleapis.com/v0/b/kiira-health-app.appspot.com/o/Kiira%2Fplaceholder.png?alt=media&token=ea401fa3-3f5c-4c29-9109-f1d0e4bbffdf';

function* updateNewUserData({data}) {
  const lang = yield select((state) => state.language);
  try {
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const {userParams, navigation} = data;

    const user = firebase.auth().currentUser;
    const userRegistrationParams = {
      prepaid: userParams.prepaid,
      uid: user.uid,
      role: 'User',
      firstLogin: true,
      signUpDate: userParams.signUpDate,
      fcmToken: userParams.fcmToken,
      profileInfo: {
        profileImageUrl: defaultImage,
        firstName: userParams.firstName,
        lastName: userParams.lastName,
        dob: userParams.dob,
        pronouns: userParams.pronouns,
        gender: userParams.gender,
        state: userParams.state,
        sexuality: userParams.sexuality,
        insurance: userParams.insurance,
        plan: userParams.plan,
        ...(userParams.zipcode && {zipcode: userParams.zipcode}),
        ...(userParams.enrollment && {enrollment: userParams.enrollment}),
        ...(userParams.income && {income: userParams.income}),
        ...(userParams.homeSecure && {homeSecure: userParams.homeSecure}),
        ...(userParams.foodSecure && {foodSecure: userParams.foodSecure}),
        ...(userParams.ethnicity && {ethnicity: userParams.ethnicity}),
        lang: 'en',
        phoneNumber: userParams.phoneNumber,
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
          response.message ? response.message : lang.errorMessage.serverError,
        ),
      );
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* newUserSaga() {
  yield takeEvery(UPDATE_NEW_USER_DETAIL_DATA, updateNewUserData);
}
