import {put, takeEvery, select} from 'redux-saga/effects';
import {LOGIN_FIREBASE_USER} from 'redux/types';
import messaging from '@react-native-firebase/messaging';
import {
  showApiLoader,
  hideApiLoader,
} from 'components/customLoader/action';
import {loginInWithFirebase} from 'utils/firebase';
import {showOrHideModal} from 'components/customModal/action';
import Constant from 'utils/constants';
import {loginFailure} from './action';
import {signoutApihit} from '../../patient/account/action';
import {getUser, updateUser} from 'redux/actions/user';
import {getTermsAndConditions} from 'redux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import * as Keychain from 'react-native-keychain';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//TODO: Refactor Login Saga

function* loginFirebase({data}) {
  const lang = yield select((state) => state.language);

  try {
    let token;

    const {params, navigation} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const response = yield loginInWithFirebase(params);

    const {uid} = response;

    if (uid) {
      Keychain.setGenericPassword(params.email, params.password, {
        service: 'kiira',
        accessControl: 'BiometryAny' as any,
        accessible: 'AccessibleWhenPasscodeSetThisDeviceOnly' as any
      })

      yield put(getUser());
      const enabled = yield messaging().hasPermission();
      const check = yield messaging().isDeviceRegisteredForRemoteMessages;
      yield delay(500);
      yield put(hideApiLoader());
      yield delay(500);

      if (enabled) {
        token = yield messaging().getToken();
        yield put(updateUser({uid, fcmToken: token}));
        yield AsyncStorage.setItem('fcmToken', token);
      } else {
        try {
          yield messaging().requestPermission();
          token = yield messaging().getToken();
          yield put(updateUser({uid, fcmToken: token}));
          yield AsyncStorage.setItem('fcmToken', token);
        } catch (error) {
          // User has rejected permissions
          console.log('permission rejected');
          navigation.navigate('Auth');
        }
      }

      yield put(getTermsAndConditions());
      const userData = yield select((state) => state.user.data);

      if (userData && userData.role === 'User') {
        if (userData && userData.role === 'User' && !userData.firstLogin) {
          if (userData.agreeToTerms) {
            navigation.navigate(Constant.App.stack.AppStack);
          } else {
            yield navigation.navigate(Constant.App.stack.AuthStack);
          }
        } else if (userData && userData.firstLogin) {
          navigation.navigate(Constant.App.screenNames.Welcome);
        } else if (userData && (userData.role === 'Expert' || !userData.role)) {
          yield put(loginFailure());
          const payload = {
            isLoaderShow: false,
          };
          yield put(signoutApihit(payload));
          yield put(showOrHideModal(lang.errorMessage.userNotExist));
        }
      } else {
        if (userData && userData.role === 'Expert') {
          navigation.navigate(Constant.App.stack.AppStackExpert);
        } else if (
          !userData ||
          (userData && (userData.role === 'User' || !userData.role))
        ) {
          yield put(loginFailure());
          yield put(hideApiLoader());
          yield put(showOrHideModal(lang.errorMessage.userNotExist));
        }
      }
    } else {
      console.log('FAILURE', response);
      yield put(
        showOrHideModal(
          response.message ? response.message : lang.errorMessage.serverError,
        ),
      );
      yield put(hideApiLoader());
      yield put(loginFailure());
    }
  } catch (error) {
    console.log('ERROR', error);
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_FIREBASE_USER, loginFirebase);
}
