import {UPDATE_USER_DETAIL_DATA} from '../../../../redux/types';
import {put, takeEvery, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../../components/customLoader/action';
import {
  addUserData,
  uploadImage,
  getDataFromTable,
} from '../../../../utils/firebase';
import {showOrHideModal} from '../../../../components/customModal/action';
import Constant from '../../../../utils/constants';
import {displayConsole} from '../../../../utils/helper';
import firebase from 'react-native-firebase';
import {setUserData} from '../../../auth/authLoading/action';
import {getUser} from '../../../../redux/actions';

function* updateUserData({data}) {
  const lang = yield select((state) => state.language);
  try {
    const {userParams, imageParams, navigation} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));

    if (imageParams) {
      const responseImage = yield uploadImage(imageParams);

      if (responseImage.success) {
        const user = firebase.auth().currentUser;
        const {downloadURL} = responseImage.data;
        const userRegistrationParams = {
          credits: userParams.credits,
          uid: user.uid,
          role: 'User',
          isActive: false,
          profileInfo: {
            profileImageUrl: downloadURL ? downloadURL : '',
            firstName: userParams.firstName,
            lastName: userParams.lastName,
            dob: userParams.dob,
            pronouns: userParams.pronouns,
            isActive: false,
            state: userParams.state,
            sexuality: userParams.sexuality,
            insurance: userParams.insurance,
            plan: userParams.plan,
          },
        };

        const response = yield addUserData(userRegistrationParams);

        yield put(hideApiLoader());
        if (response.success) {
          const obj = {
            tableName: Constant.App.firebaseTableNames.users,
            uid: user.uid,
          };
          const userData = yield getDataFromTable(obj);
          yield put(setUserData(userData));
          yield put(getUser());
          navigation.goBack();
        } else {
          yield put(
            showOrHideModal(
              response.message
                ? response.message
                : lang.errorMessage.serverError,
            ),
          );
        }
      } else {
        yield put(hideApiLoader());
        yield put(
          showOrHideModal(
            responseImage.message
              ? responseImage.message
              : lang.errorMessage.serverError,
          ),
        );
      }
    } else {
      const user = firebase.auth().currentUser;
      const userRegistrationParams = {
        uid: user.uid,
        role: 'User',
        isActive: false,
        profileInfo: {
          profileImageUrl: userParams.profileImageUrl,
          firstName: userParams.firstName,
          lastName: userParams.lastName,
          dob: userParams.dob,
          pronouns: userParams.pronouns,
          isActive: false,
          state: userParams.state,
          sexuality: userParams.sexuality,
          insurance: userParams.insurance,
          plan: userParams.plan,
        },
      };
      const response = yield addUserData(userRegistrationParams);
      displayConsole('response', response);
      yield put(hideApiLoader());
      if (response.success) {
        navigation.goBack();
        const obj = {
          tableName: Constant.App.firebaseTableNames.users,
          uid: user.uid,
        };
        const userData = yield getDataFromTable(obj);
        displayConsole('userData', userData);
        yield put(setUserData(userData));
        yield put(getUser());
      } else {
        yield put(
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

export default function* settingSaga() {
  yield takeEvery(UPDATE_USER_DETAIL_DATA, updateUserData);
}
