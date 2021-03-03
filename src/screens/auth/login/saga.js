import {put, takeEvery, select} from 'redux-saga/effects';
import {LOGIN_FIREBASE_USER} from '../../../redux/types';
import messaging from '@react-native-firebase/messaging';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../components/customLoader/action';
import {
  loginInWithFirebase,
  getDataFromTable,
  updateStatus,
} from '../../../utils/firebase';
import {showOrHideModal} from '../../../components/customModal/action';
import Constant from '../../../utils/constants';
import {loginFailure} from './action';
import {signoutApihit} from '../../patient/account/action';
import {setUserData, setFcmToken} from '../authLoading/action';
import {getTermsAndConditions} from '../../../redux/actions';
import AsyncStorage from '@react-native-community/async-storage';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//TODO: Refactor Login

function* loginFirebase({data}) {
  const lang = yield select((state) => state.language);
  try {
    const state = yield select();
    let token;
    const {params, navigation} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    const response = yield loginInWithFirebase(params);
    const enabled = yield messaging().hasPermission();
    if (enabled) {
      token = yield messaging().getToken();
      yield put(setFcmToken(token));
      yield AsyncStorage.setItem('fcmToken', token);
      console.log('ENABLED', token);
    } else {
      try {
        yield messaging().requestPermission();
        token = yield messaging().getToken();
        yield put(setFcmToken(token));
        yield AsyncStorage.setItem('fcmToken', token);
        console.log('NEEDS PERMISSION', token);
      } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
        navigation.navigate('Auth');
      }
    }
    yield delay(500);
    yield put(hideApiLoader());
    yield delay(500);
    const {uid} = response;
    const fcmToken = state.authLoading.fcmToken;
    console.log('FCM TOKEN', fcmToken);
    if (uid) {
      const obj = {
        tableName: Constant.App.firebaseTableNames.users,
        uid,
      };
      const userData = yield getDataFromTable(obj);
      console.log('USER DATA', userData);
      if (userData && userData.role === 'User') {
        const updateStatusParams = {
          uid: userData.uid,
          updatedData: {
            fcmToken: token,
          },
        };
        yield updateStatus(updateStatusParams);
        yield put(getTermsAndConditions());
        if (userData && userData.role === 'User' && !userData.firstLogin) {
          yield put(setUserData(userData));
          if (userData.agreeToTerms) {
            navigation.navigate(Constant.App.stack.AppStack);
          } else {
            yield navigation.navigate(Constant.App.screenNames.NewUser, {
              userData,
            });
          }
        } else if (userData && userData.firstLogin) {
          yield put(setUserData(userData));
          navigation.navigate(Constant.App.screenNames.Welcome, {
            userData,
          });
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
          const updateStatusParams = {
            uid: userData.uid,
            updatedData: {
              fcmToken,
            },
          };
          yield updateStatus(updateStatusParams);
          yield put(setUserData(userData));
          navigation.navigate(Constant.App.stack.AppStackExpert);
        } else if (
          !userData ||
          (userData && (userData.role === 'User' || !userData.role))
        ) {
          yield put(loginFailure());
          const payload = {
            isLoaderShow: false,
          };
          yield put(signoutApihit(payload));
          yield put(showOrHideModal(lang.errorMessage.userNotExist));
        }
      }
    } else {
      yield put(
        showOrHideModal(
          response.message ? response.message : lang.errorMessage.serverError,
        ),
      );
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
