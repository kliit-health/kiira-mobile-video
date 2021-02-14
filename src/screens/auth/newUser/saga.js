import {put, takeEvery, select} from 'redux-saga/effects';
import {AGREE_TO_TERMS} from '../../../redux/types';
import {addUserData} from '../../../utils/firebase';
import {
  showApiLoader,
  hideApiLoader,
} from '../../../components/customLoader/action';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const defaultImage =
  'https://firebasestorage.googleapis.com/v0/b/kiira-health-app.appspot.com/o/Kiira%2Fplaceholder.png?alt=media&token=ea401fa3-3f5c-4c29-9109-f1d0e4bbffdf';

function* agreeToTerms(data) {
  const lang = yield select((state) => state.language);
  const {fcmToken} = yield select((state) => state.authLoading);
  try {
    const {navigation} = data.payload;
    const {userData} = navigation.state.params;

    const {
      firstName,
      lastName,
      dob,
      pronouns,
      state,
      sexuality,
      insurance,
      income,
      enrollment,
      zipcode,
      homeSecure,
      foodSecure,
      phoneNumber,
      plan,
      gender,
      ethnicity,
    } = userData.profileInfo;

    const userRegistrationParams = {
      agreeToTerms: true,
      displayName: userData.displayName,
      email: userData.email,
      uid: userData.uid,
      role: 'User',
      prepaid: userData.prepaid,
      firstLogin: false,
      fcmToken,
      profileInfo: {
        profileImageUrl: defaultImage,
        firstName,
        lastName,
        dob,
        pronouns,
        state,
        sexuality,
        insurance,
        plan,
        lang: 'en',
        phoneNumber,
        gender,
        ...(zipcode && {zipcode}),
        ...(enrollment && {enrollment}),
        ...(income && {income}),
        ...(homeSecure && {homeSecure: homeSecure.value}),
        ...(foodSecure && {foodSecure: foodSecure.value}),
        ...(ethnicity && {ethnicity}),
      },
    };
    yield addUserData(userRegistrationParams);
    yield put(showApiLoader(lang.apiLoader.loadingText));
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
