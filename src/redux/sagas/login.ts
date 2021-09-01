import { put, takeEvery, select } from 'redux-saga/effects';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { loginInWithFirebase } from '~/utils/firebase';
import { showOrHideModal } from '~/components/customModal/action';
import { stack, screenNames } from '~/utils/constants';
import { loginFailure, loginApi } from '~/redux/reducers/login';
import { getUser, updateUser } from '~/redux/actions/user';
import { getTermsAndConditions } from '~/redux/actions';
import AsyncStorage from '@react-native-community/async-storage';
import * as Keychain from 'react-native-keychain';
import { default as navigation } from '~/navigation/navigationService';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* loginFirebase({ payload }) {
    const lang = yield select(state => state.language);

    try {
        let token: string;
        const { email, password } = payload;

        yield put(showApiLoader());
        const response = yield loginInWithFirebase(payload);

        const { uid } = response;

        if (uid) {
            yield put(getUser());

            Keychain.setGenericPassword(email, password, {
                service: 'kiira',
                accessControl: 'BiometryAny' as any,
                accessible: 'AccessibleWhenPasscodeSetThisDeviceOnly' as any,
            });

            const enabled = yield messaging().hasPermission();

            yield delay(500);
            yield put(hideApiLoader());
            yield delay(500);

            if (enabled) {
                token = yield messaging().getToken();
                yield put(updateUser({ uid, fcmToken: token }));
                yield AsyncStorage.setItem('fcmToken', token);
            } else {
                try {
                    yield messaging().requestPermission();
                    token = yield messaging().getToken();
                    yield put(updateUser({ uid, fcmToken: token }));
                    yield AsyncStorage.setItem('fcmToken', token);
                } catch (error) {
                    navigation.navigate('Auth');
                }
            }

            yield put(getTermsAndConditions());
            const userData = yield select(state => state.user.data);
            yield delay(500);
            const { agreeToTerms, firstLogin, role } = userData;
            yield delay(1000);

            yield auth()
                .currentUser.getIdTokenResult()
                .then(({ claims }) => {
                    const isStudent = claims.role && claims.role.student;
                    const isSubscriber = claims.role && claims.role.subscriber;
                    const isExpert = claims.role && claims.role.expert;
                    const hasExpertRole = role === 'Expert';
                    const isUser = role === 'User';
                    const isNewUser = !agreeToTerms || firstLogin;
                    const isSupport = role === 'support';

                    if (isStudent || isSubscriber || isUser) {
                        if (!isNewUser) {
                            navigation.navigate(stack.AppStack);
                        } else if (isNewUser) {
                            navigation.navigate(screenNames.Welcome);
                        }
                    } else {
                        if (isExpert || hasExpertRole) {
                            navigation.navigate(stack.AppStackExpert);
                        }

                        if (isSupport) {
                            navigation.navigate(stack.AppStackSupport);
                        }
                    }
                });
        } else {
            yield put(
                showOrHideModal(
                    response.message
                        ? response.message
                        : lang.errorMessage.serverError,
                ),
            );
            yield put(hideApiLoader());
            yield put(loginFailure());
        }
    } catch (error) {
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

export default function* loginSaga() {
    yield takeEvery(loginApi, loginFirebase);
}
