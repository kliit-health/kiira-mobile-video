import {put, takeEvery, select} from 'redux-saga/effects';
import {UPLOAD_USER_DETAIL_DATA} from '~/redux/types';
import {
  showApiLoader,
  hideApiLoader,
} from '~/components/customLoader/action';
import {uploadImage} from '~/utils/firebase';
import {showOrHideModal} from '~/components/customModal/action';
import {getUser, updateUser} from '~/redux/actions';

// TODO: Refactor this function in order to clean code and remove redundant code
function* uploadUserData({data, dispatch}) {
  const lang = yield select((state) => state.language);
  try {
    const {userParams, navigation, imageParams} = data;
    const state = yield select();
    const user = state.user.data;
    const {
      isActive,
      income,
      zipcode,
      enrollment,
      profileImageUrl,
    } = user.profileInfo;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    if (imageParams) {
      const responseImage = yield uploadImage(imageParams);

      if (responseImage.success) {
        const {downloadURL} = responseImage.data;

        const userInfo = {
          profileInfo: {
            dob: userParams.dob,
            firstName: userParams.firstName,
            insurance: userParams.insurance,
            isActive,
            lastName: userParams.lastName,
            plan: userParams.plan,
            profileImageUrl: downloadURL,
            pronouns: userParams.pronouns,
            sexuality: userParams.sexuality,
            state: userParams.state,
            income,
            zipcode,
            enrollment,
            email: user.email,
          },
        };

        const response = yield updateUser({uid: user.uid, userInfo});
        yield put(hideApiLoader());
        if (response.success) {
          yield put(getUser());
          navigation.goBack();
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
      const userInfo = {
        profileInfo: {
          dob: userParams.dob,
          firstName: userParams.firstName,
          insurance: userParams.insurance,
          isActive,
          lastName: userParams.lastName,
          plan: userParams.plan,
          profileImageUrl,
          pronouns: userParams.pronouns,
          sexuality: userParams.sexuality,
          state: userParams.state,
          income,
          zipcode,
          enrollment,
          email: user.email,
        },
      };

      yield updateUser({uid: user.uid, userInfo});
      yield put(hideApiLoader());
      yield put(getUser());
      navigation.goBack();
      
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* addProfileSaga() {
  yield takeEvery(UPLOAD_USER_DETAIL_DATA, uploadUserData);
}
