import {
    put,
    takeEvery,
    select,
    takeLatest,
    takeLeading,
} from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import { signOut, updateAccount } from '../reducers/account';
import { logout, updateStatus } from '~/utils/firebase';
import Constant from '~/utils/constants';
import { clearAskState } from '~/screens/patient/dashboard/ask/action';
import { uploadImage, updateUserData } from '~/utils/firebase';
import { getUser } from '~/redux/actions';
import storage from '@react-native-firebase/storage';

function* signout({ payload }) {
    const { navigation } = payload;
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
        navigation.navigate(Constant.App.stack.AuthStack);
    } catch (error) {
        navigation.navigate(Constant.App.stack.AuthStack);
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

                yield put(updateUser({ uid: user.uid, ...userUpdate }));
                yield put(getUser());
                yield put(hideApiLoader());
                navigation.goBack();
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
            navigation.goBack();
        }
    } catch (error) {
        console.log(error);
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

export default function* accountSaga() {
    yield takeEvery(signOut, signout);
    yield takeEvery(updateAccount, updateUser);
}
