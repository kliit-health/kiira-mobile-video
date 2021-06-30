import {put, takeEvery, select} from 'redux-saga/effects';
import {LOGIN_FIREBASE_USER} from '~/redux/types';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import {
  showApiLoader,
  hideApiLoader,
} from '~/components/customLoader/action';
import {loginInWithFirebase} from '~/utils/firebase';
import {showOrHideModal} from '~/components/customModal/action';
import Constant from '~/utils/constants';
import {loginFailure} from './action';
import {getUser, updateUser} from '~/redux/actions/user';
import {getTermsAndConditions} from '~/redux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import * as Keychain from 'react-native-keychain';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));


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
          navigation.navigate('Auth');
        }
      }

      yield put(getTermsAndConditions());
      const userData = yield select((state) => state.user.data);
      yield delay(1000);

      yield auth().currentUser.getIdTokenResult().then( ({claims: {role}}) => {
          if (role.student || role.subscriber) {
            if (!userData.firstLogin && userData.agreeToTerms) {
                navigation.navigate(Constant.App.stack.AppStack);
            } else if (userData.firstLogin) {
              navigation.navigate(Constant.App.screenNames.Welcome);
            } 
          } else {
            if (role.expert) {
              navigation.navigate(Constant.App.stack.AppStackExpert);
            }
          }      
      });
     
    } else {
      yield put(
        showOrHideModal(
          response.message ? response.message : lang.errorMessage.serverError,
        ),
      );
      yield put(hideApiLoader());
      yield put(loginFailure());
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_FIREBASE_USER, loginFirebase);
}
