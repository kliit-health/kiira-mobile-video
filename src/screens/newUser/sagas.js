import {put, takeEvery} from 'redux-saga/effects';
import {AGREE_TO_TERMS} from '../../redux/types';
import Language from '../../utils/localization';
import {addUserData} from '../../utils/firebase';
import {
  showApiLoader,
  hideApiLoader,
} from '../../components/customLoader/action';

let Lang = Language['en'];
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function* agreeToTerms(data) {
  try {
    const {navigation} = data.payload;
    const {userData} = navigation.state.params;
    const userRegistrationParams = {
      agreeToTerms: true,
      credits: userData.credits,
      displayName: userData.displayName,
      email: userData.email,
      uid: userData.uid,
      role: 'User',
      isActive: false,
      prepaid: userData.prepaid,
      firstLogin: false,
      profileInfo: {
        profileImageUrl: userData.profileInfo.profileImageUrl
          ? userData.profileImageUrl
          : '',
        firstName: userData.profileInfo.firstName,
        lastName: userData.profileInfo.lastName,
        dob: userData.profileInfo.dob,
        pronouns: userData.profileInfo.pronouns,
        isActive: false,
        state: userData.profileInfo.state,
        sexuality: userData.profileInfo.sexuality,
      },
    };
    yield addUserData(userRegistrationParams);
    yield put(showApiLoader(Lang.apiLoader.loadingText));
    navigation.goBack();
    yield put(hideApiLoader());
  } catch (e) {
    console.log('TERMS ERROR', e);
    yield delay(500);
    yield put(hideApiLoader());
    yield delay(500);
  }
}

export default function* agreeToTermsSaga() {
  yield takeEvery(AGREE_TO_TERMS, agreeToTerms);
}
