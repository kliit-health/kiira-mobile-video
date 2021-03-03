import {put, takeEvery, select} from 'redux-saga/effects';
import {UPLOAD_USER_DETAIL_DATA} from '../../../../../redux/types';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../../../components/customLoader/action';
import {
  addUserData,
  uploadImage,
  getDataFromTable,
  makeid,
} from '../../../../../utils/firebase';
import {showOrHideModal} from '../../../../../components/customModal/action';
import {tables} from '../../../../../utils/constants';
import {StackActions, NavigationActions} from 'react-navigation';
import auth from '@react-native-firebase/auth';
import {setUserData} from '../../../../auth/authLoading/action';

// TODO: Refactor this function in order to clean code and remove redundant code
function* uploadUserData({data, dispatch}) {
  const lang = yield select((state) => state.language);
  try {
    const {userParams, navigation, imageParams} = data;
    const state = yield select();
    const fcmToken = state.authLoading.fcmToken;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    if (imageParams) {
      const responseImage = yield uploadImage(imageParams);

      if (responseImage.success) {
        const {downloadURL} = responseImage.data;

        const user = auth().currentUser;
        var initialCredits = Constant.App.credits;
        const obj = {
          tableName: tables.users,
          uid: user.uid,
        };
        const userData = yield getDataFromTable(obj);
        if (userData && userData.referedCode) {
          initialCredits = Constant.App.referalCredits;
        }
        const userRegistrationParams = {
          credits: initialCredits,
          uid: user.uid,
          role: 'User',
          isActive: false,
          referalCode: yield makeid(),
          profileInfo: {
            profileImageUrl: downloadURL,
            firstName: userParams.firstName,
            lastName: userParams.lastName,
            dob: userParams.dob,
            pronouns: userParams.pronouns,
            state: userParams.state,
            email: user.email,
          },
          fcmToken,
        };

        const response = yield addUserData(userRegistrationParams);
        yield put(hideApiLoader());
        if (response.success) {
          const updatedUserData = yield getDataFromTable(obj);
          yield put(setUserData(updatedUserData));
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({
                routeName: Constant.App.screenNames.GetStarted,
              }),
            ],
          });
          navigation.dispatch(resetAction);
        } else {
          dispatch(
            showOrHideModal(
              response.message
                ? response.message
                : lang.errorMessage.serverError,
            ),
          );
        }
      } else {
        yield put(hideApiLoader());
        dispatch(
          showOrHideModal(
            responseImage.message
              ? responseImage.message
              : lang.errorMessage.serverError,
          ),
        );
      }
    } else {
      const user = auth().currentUser;
      var initialCredits = Constant.App.credits;
      const obj = {
        tableName: tables.users,
        uid: user.uid,
      };
      const userData = yield getDataFromTable(obj);
      if (userData && userData.referedCode) {
        initialCredits = Constant.App.referalCredits;
      }
      const userRegistrationParams = {
        credits: initialCredits,
        uid: user.uid,
        role: 'User',
        isActive: false,
        referalCode: yield makeid(),
        profileInfo: {
          profileImageUrl: '',
          firstName: userParams.firstName,
          lastName: userParams.lastName,
          dob: userParams.dob,
          pronouns: userParams.pronouns,
          state: userParams.state,
          email: user.email,
        },
        fcmToken,
      };
      const response = yield addUserData(userRegistrationParams);
      yield put(hideApiLoader());
      if (response.success) {
        const updatedUserData = yield getDataFromTable(obj);
        yield put(setUserData(updatedUserData));
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: Constant.App.screenNames.GetStarted,
            }),
          ],
        });
        navigation.dispatch(resetAction);
      } else {
        dispatch(
          showOrHideModal(
            response.message ? response.message : lang.errorMessage.serverError,
          ),
        );
      }
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* addProfileSaga() {
  yield takeEvery(UPLOAD_USER_DETAIL_DATA, uploadUserData);
}
