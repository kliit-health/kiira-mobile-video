import { UPDATE_USER_DETAIL_DATA } from '~/redux/types';
import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { uploadImage } from '~/utils/firebase';
import { showOrHideModal } from '~/components/customModal/action';
import { getUser, updateUser } from '~/redux/actions';
import storage from '@react-native-firebase/storage';

function* updateUserData({ data }) {
    const lang = yield select(state => state.language);
    const user = yield select(state => state.user.data);
    try {
        const { userParams, imageParams, navigation } = data;
        yield put(showApiLoader(lang.apiLoader.loadingText));

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

            yield put(updateUser({ uid: user.uid, ...userUpdate }));
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

export default function* settingSaga() {
    yield takeEvery(UPDATE_USER_DETAIL_DATA, updateUserData);
}
