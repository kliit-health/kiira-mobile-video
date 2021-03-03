import {UPDATE_EXPERT_DETAIL_DATA} from '../../../../redux/types';
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
import {tables} from '../../../../utils/constants';
import {displayConsole} from '../../../../utils/helper';
import auth from '@react-native-firebase/auth';
import {setUserData} from '../../../auth/authLoading/action';
import {getUser} from '../../../../redux/actions';

function* updateExpertData({data}) {
  const lang = yield select((state) => state.language);
  try {
    const {userParams, imageParams, navigation} = data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    if (imageParams) {
      const responseImage = yield uploadImage(imageParams);
      if (responseImage.success) {
        const user = auth().currentUser;
        const {downloadURL} = responseImage.data;
        const userRegistrationParams = {
          uid: user.uid,
          role: 'Expert',
          clinicInfo: {
            ...userParams.clinicInfo,
            name: userParams.location,
            license: userParams.license,
          },
          profileInfo: {
            bio: userParams.bio,
            city: userParams.city,
            dob: userParams.dob,
            email: userParams.email,
            firstName: userParams.firstName,
            gender: userParams.gender,
            languages: userParams.languages,
            lastName: userParams.lastName,
            license: userParams.license,
            profession: userParams.profession,
            profileImageUrl: downloadURL ? downloadURL : '',
            pronouns: userParams.pronouns,
            state: userParams.state,
          },
        };

        const response = yield addUserData(userRegistrationParams);

        yield put(hideApiLoader());
        if (response.success) {
          const obj = {
            tableName: tables.users,
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
      const user = auth().currentUser;
      const userRegistrationParams = {
        uid: user.uid,
        role: 'Expert',
        clinicInfo: {
          ...userParams.clinicInfo,
          name: userParams.location,
          license: userParams.license,
        },
        profileInfo: {
          bio: userParams.bio,
          city: userParams.city,
          dob: userParams.dob,
          email: userParams.email,
          firstName: userParams.firstName,
          gender: userParams.gender,
          languages: userParams.languages,
          lastName: userParams.lastName,
          license: userParams.license,
          profession: userParams.profession,
          profileImageUrl: userParams.profileImageUrl || '',
          pronouns: userParams.pronouns,
          state: userParams.state,
        },
      };
      const response = yield addUserData(userRegistrationParams);
      displayConsole('response', response);
      yield put(hideApiLoader());
      if (response.success) {
        const obj = {
          tableName: tables.users,
          uid: user.uid,
        };

        const userData = yield getDataFromTable(obj);
        yield put(setUserData(userData));
        yield put(getUser());
        navigation.goBack();
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
export default function* settingExpertSaga() {
  yield takeEvery(UPDATE_EXPERT_DETAIL_DATA, updateExpertData);
}
