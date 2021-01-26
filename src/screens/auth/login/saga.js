import {put, takeEvery, select} from 'redux-saga/effects';
import {LOGIN_FIREBASE_USER} from '../../../redux/types';
import Language from '../../../utils/localization';
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
import {setUserData} from '../authLoading/action';
import {getTermsAndConditions} from '../../../redux/actions';

let Lang = Language['en'];
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let delayTime = 100;
function* loginFirebase({data}) {
  try {
    const state = yield select();
    const fcmToken = state.authLoading.fcmToken;
    const {params, navigation} = data;
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    const response = yield loginInWithFirebase(params);
    yield delay(500);
    yield put(hideApiLoader());
    yield delay(500);
    const {uid} = response;
    if (uid) {
      const obj = {
        tableName: Constant.App.firebaseTableNames.users,
        uid,
      };
      const userData = yield getDataFromTable(obj);
      if (userData && userData.role === 'User') {
        const updateStatusParams = {
          uid: userData.uid,
          updatedData: {
            fcmToken,
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
          navigation.navigate(Constant.App.screenNames.Welcome, {
            userData,
          });
        } else if (userData && (userData.role === 'Expert' || !userData.role)) {
          yield put(loginFailure());
          const payload = {
            isLoaderShow: false,
          };
          yield put(signoutApihit(payload));
          yield put(showOrHideModal(Lang.errorMessage.userNotExist));
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
          yield put(showOrHideModal(Lang.errorMessage.userNotExist));
        }
      }
    } else {
      yield put(
        showOrHideModal(
          response.message ? response.message : Lang.errorMessage.serverError,
        ),
      );
      yield put(loginFailure());
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_FIREBASE_USER, loginFirebase);
}
