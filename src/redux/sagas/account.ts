import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import {
    signOut,
    updateAccount,
    updatePassword,
    updateActiveAt,
    updateIntakeData,
    updateUserRole,
} from '../reducers/account';
import { logout, updateStatus } from '~/utils/firebase';
import { clearAskState } from '~/redux/actions/ask';
import { uploadImage, updateUserData } from '~/utils/firebase';
import { getUser, updateUser as _updateUser } from '~/redux/actions';
import storage from '@react-native-firebase/storage';
import { changePassword, reAunthenticate } from '~/utils/firebase';
import { default as navigation } from '~/navigation/navigationService';

function* signout() {
    const lang = yield select(state => state.language);
    const userData = yield select(state => state.user.data);
    try {
        yield put(showApiLoader());

        const updateStatusParams = {
            uid: userData.uid,
            updatedData: {
                isOnline: false,
            },
        };
        yield updateStatus(updateStatusParams);
        yield put(clearAskState());
        yield logout();
        yield put(hideApiLoader());
        navigation.navigate('Landing');
    } catch (error) {
        navigation.navigate('Landing');
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* updateUser({ payload }) {
    const lang = yield select(state => state.language);
    const user = yield select(state => state.user.data);

    try {
        const { userParams, imageParams, navigation } = payload;
        yield put(showApiLoader());
        if (imageParams) {
            const responseImage = yield uploadImage(imageParams);

            if (responseImage.success) {
                const { name } = responseImage.data.metadata;
                const url = yield storage().ref(name).getDownloadURL();
                const userUpdate = {
                    ...user,
                    role: userParams?.role ? userParams?.role : user?.role,
                    signUpDate: userParams?.signUpDate
                        ? userParams?.signUpDate
                        : user?.signUpDate,
                    updatedDate: userParams?.signUpDate
                        ? userParams?.signUpDate
                        : user?.updatedDate,
                     firstLogin: userParams?.firstLogin !== undefined
                        ? userParams?.firstLogin 
                        : user?.firstLogin,
                    profileInfo: {
                        profileImageUrl: url ? url : '',
                        firstName: userParams.firstName,
                        lastName: userParams.lastName,
                        dob: userParams.dob,
                        pronouns: userParams.pronouns,
                        state: userParams.state,
                        sexuality: userParams.sexuality,
                        gender: userParams.gender,
                        insurance: userParams.insurance,
                        insurancePlan: userParams.insurancePlan,
                        ...(userParams.zipcode && {
                            zipcode: userParams.zipcode,
                        }),
                        ...(userParams.enrollment && {
                            enrollment: userParams.enrollment,
                        }),
                        ...(userParams.income && { income: userParams.income }),
                        ...(userParams.homeSecure && {
                            homeSecure: userParams.homeSecure,
                        }),
                        ...(userParams.foodSecure && {
                            foodSecure: userParams.foodSecure,
                        }),
                        ...(userParams.ethnicity && {
                            ethnicity: userParams.ethnicity,
                        }),
                        lang: 'en',
                        phoneNumber: userParams.phoneNumber,
                    },
                };

                yield put(_updateUser({ uid: user.uid, ...userUpdate }));
                yield put(getUser());
                yield put(hideApiLoader());
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
            const userUpdate = {
                ...user,
                role: userParams?.role ? userParams?.role : user?.role,
                signUpDate: userParams?.signUpDate
                    ? userParams?.signUpDate
                    : user?.signUpDate,
                updatedDate: userParams?.signUpDate
                    ? userParams?.signUpDate
                    : user?.updatedDate,
                firstLogin: userParams?.firstLogin !== undefined
                    ? userParams?.firstLogin 
                    : user?.firstLogin,
                profileInfo: {
                    profileImageUrl: userParams.profileImageUrl,
                    firstName: userParams.firstName,
                    lastName: userParams.lastName,
                    dob: userParams.dob,
                    pronouns: userParams.pronouns,
                    state: userParams.state,
                    sexuality: userParams.sexuality,
                    gender: userParams.gender,
                    insurance: userParams.insurance,
                    insurancePlan: userParams.insurancePlan,
                    ...(userParams.zipcode && { zipcode: userParams.zipcode }),
                    ...(userParams.enrollment && {
                        enrollment: userParams.enrollment,
                    }),
                    ...(userParams.income && { income: userParams.income }),
                    ...(userParams.homeSecure && {
                        homeSecure: userParams.homeSecure,
                    }),
                    ...(userParams.foodSecure && {
                        foodSecure: userParams.foodSecure,
                    }),
                    ...(userParams.ethnicity && {
                        ethnicity: userParams.ethnicity,
                    }),
                    lang: 'en',
                    phoneNumber: userParams.phoneNumber,
                },
            };
            yield updateUserData(userUpdate, user.uid);
            yield put(getUser());
            yield put(hideApiLoader());
            // navigation.goBack();
        }
    } catch (error) {
        console.log(error);
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* changeUserPassword({ payload }) {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    const lang = yield select(state => state.language);
    try {
        const { params, navigation } = payload;
        yield put(showApiLoader());
        const responseReAunthenticate = yield reAunthenticate(
            params.currentPassword,
        );

        if (responseReAunthenticate.success) {
            const responseChangePassword = yield changePassword(
                params.newPassword,
            );

            yield delay(500);
            yield put(hideApiLoader());
            yield delay(500);
            if (responseChangePassword.success) {
                yield put(showOrHideModal(lang.changePassword.success));
                navigation.goBack();
            } else {
                yield put(
                    showOrHideModal(
                        responseChangePassword.message
                            ? responseChangePassword.message
                            : lang.errorMessage.serverError,
                    ),
                );
            }
        } else {
            yield delay(500);
            yield put(hideApiLoader());
            yield delay(500);
            yield put(
                showOrHideModal(
                    responseReAunthenticate.message
                        ? responseReAunthenticate.message
                        : lang.errorMessage.serverError,
                ),
            );
        }
    } catch (error) {
        yield delay(500);
        yield put(hideApiLoader());
        yield delay(500);
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

function* updateIntake({ payload }) {
    const { intakeData, navigation } = payload;
    try {
        const user = yield select(state => state.user.data);
        const userUpdate = {
            ...user,
            intakeData: intakeData,
        };

        yield put(showApiLoader());
        yield updateUserData(userUpdate, user.uid);
        yield put(getUser());
        yield put(hideApiLoader());
        navigation.navigate('Home');
        yield put(hideApiLoader());
    } catch (error) {
        console.error(error);
        yield put(hideApiLoader());
    }
}

function* updateActive({ payload }) {
    const { isActive } = payload;

    try {
        const user = yield select(state => state.user.data);
        const userUpdate = {
            ...user,
            isActive: isActive,
        };
        yield updateUserData(userUpdate, user.uid);
        yield put(getUser());
    } catch (error) {
        console.error(error);
    }
}

export default function* accountSaga() {
    yield takeEvery(signOut, signout);
    yield takeEvery(updateAccount, updateUser);
    yield takeEvery(updatePassword, changeUserPassword);
    yield takeEvery(updateIntakeData, updateIntake);
    yield takeEvery(updateActiveAt, updateActive);
}
