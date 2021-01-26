import {UPDATE_EXPERT_DETAIL_DATA} from '../../../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import Language from '../../../../utils/localization';
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

let Lang = Language['en'];

function* updateExpertData({data}) {
  try {
    const {userParams, imageParams, navigation} = data;
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    if (imageParams) {
      const responseImage = yield uploadImage(imageParams);
      if (responseImage.success) {
        const user = firebase.auth().currentUser;
        const {downloadURL} = responseImage.data;
        const userRegistrationParams = {
          credits: userParams.credits,
          uid: user.uid,
          role: 'Expert',
          isActive: false,
          clinicInfo: {
            ...userParams.clinicInfo,
            name: userParams.location,
            license: userParams.license,
          },
          profileInfo: {
            ...userParams.profileInfo,
            bio: userParams.bio,
            profileImageUrl: downloadURL ? downloadURL : '',
            firstName: userParams.firstName,
            lastName: userParams.lastName,
            dob: userParams.dob,
            pronouns: userParams.pronouns,
            isActive: false,
            state: userParams.state,
            gender: userParams.gender,
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
          console.log('RESPONSE 1', response);
          yield put(
            showOrHideModal(
              response.message
                ? response.message
                : Lang.errorMessage.serverError,
            ),
          );
        }
      } else {
        yield put(hideApiLoader());
        console.log('RESPONSE 2', response);
        yield put(
          showOrHideModal(
            responseImage.message
              ? responseImage.message
              : Lang.errorMessage.serverError,
          ),
        );
      }
    } else {
      const user = firebase.auth().currentUser;
      const userRegistrationParams = {
        credits: userParams.credits,
        uid: user.uid,
        role: 'Expert',
        isActive: true,
        clinicInfo: {
          ...userParams.clinicInfo,
          name: userParams.location,
          license: userParams.license,
        },
        profileInfo: {
          ...userParams.profileInfo,
          bio: userParams.bio,
          profileImageUrl: userParams.profileImageUrl || '',
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
        displayConsole('userData', userData);
        yield put(setUserData(userData));
        yield put(getUser());
        navigation.goBack();
      } else {
        console.log('RESPONSE 3', response);
        yield put(
          showOrHideModal(
            response.message ? response.message : Lang.errorMessage.serverError,
          ),
        );
      }
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(Lang.errorMessage.serverError));
  }
}
export default function* settingExpertSaga() {
  yield takeEvery(UPDATE_EXPERT_DETAIL_DATA, updateExpertData);
}
