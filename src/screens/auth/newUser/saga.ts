import {put, takeLatest} from 'redux-saga/effects';
import {AGREE_TO_TERMS} from '~/redux/types';
import {updateUser} from '~/redux/actions';
import {makeid} from '~/utils/firebase';
import { NavigationService as navigation } from '~/navigation/';
import {
  showApiLoader,
  hideApiLoader,
} from '~/components/customLoader/action';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const defaultImage =
  'https://firebasestorage.googleapis.com/v0/b/kiira-health-app.appspot.com/o/Kiira%2Fplaceholder.png?alt=media&token=ea401fa3-3f5c-4c29-9109-f1d0e4bbffdf';

function* agreeToTerms({payload: {userData}}) {
  try {
    
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
      profileImageUrl,
      zipcode,
      homeSecure,
      foodSecure,
      phoneNumber,
      insurancePlan,
      gender,
      ethnicity,
    } = userData.profileInfo;

    const userInfo = {
      ...(userData.address && {address: userData.address}),
      agreeToTerms: true,
      chats: userData.chats,
      ...(userData.customer && {customer: userData.customer}),
      displayName: userData.displayName,
      email: userData.email,
      firstLogin: false,
      ...(userData.invitationDate && {invitationDate: userData.invitationDate}),
      ...(userData.invitationId && {invitationId: userData.invitationId}),
      ...(userData.invitationDate && {invitationDate: userData.invitationDate}),
      fcmToken: userData.fcmToken,
      ...(userData.plan && {plan: userData.plan}),
      prepaid: userData.prepaid,
      profileInfo: {
        profileImageUrl: defaultImage,
        firstName,
        lastName,
        dob,
        pronouns,
        state,
        sexuality,
        insurance,
        insurancePlan,
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
      ...(userData.subscription && {subscription: {...userData.subscription}}),
      referalCode: yield makeid(),
      role: 'User',
      uid: userData.uid,
      updatedAt: Date.now(),
      visits: userData.visits,
    };

    yield put(updateUser({uid: userData.uid, ...userInfo}));
    yield put(showApiLoader());
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
  yield takeLatest(AGREE_TO_TERMS, agreeToTerms);
}
