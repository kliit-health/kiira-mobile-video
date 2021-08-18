import { put, takeEvery, select } from 'redux-saga/effects';
import { UPLOAD_USER_DETAIL_DATA } from '~/redux/types';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { uploadImage } from '~/utils/firebase';
import { showOrHideModal } from '~/components/customModal/action';
import storage from '@react-native-firebase/storage';
import { getUser, updateUser } from '~/redux/actions';

// TODO: Refactor this function in order to clean code and remove redundant code
function* uploadUserData({ data, dispatch }) {
    const lang = yield select(state => state.language);
    const user = yield select(state => state.user.data);
    try {
        const { userParams, navigation, imageParams } = data;

        yield put(showApiLoader(lang.apiLoader.loadingText));
        if (imageParams) {
            const responseImage = yield uploadImage(imageParams);

            if (responseImage.success) {
                const { name } = responseImage.data.metadata;
                const url = yield storage().ref(name).getDownloadURL();

                const userInfo = {
                    ...user,
                    profileInfo: {
                        // bio: userParams.bio,
                        city: user.profileInfo.city,
                        dob: userParams.dob,
                        email: user.email,
                        firstName: userParams.firstName,
                        gender: user.profileInfo.gender,
                        languages: user.profileInfo.languages,
                        lastName: userParams.lastName,
                        license: user.profileInfo.license,
                        profession: user.profileInfo.profession,
                        profileImageUrl: url ? url : '',
                        pronouns: userParams.pronouns,
                        state: userParams.state,
                    },
                };

                yield updateUser({ uid: user.uid, ...userInfo });
                yield getUser();
                yield put(hideApiLoader());
                navigation.goBack();
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
                ...user,
                profileInfo: {
                    // bio: userParams.bio,
                    city: user.profileInfo.city,
                    dob: userParams.dob,
                    email: user.email,
                    firstName: userParams.firstName,
                    gender: user.profileInfo.gender,
                    languages: user.profileInfo.languages,
                    lastName: userParams.lastName,
                    license: user.profileInfo.license,
                    profession: user.profileInfo.profession,
                    profileImageUrl: user.profileInfo.profileImageUrl,
                    pronouns: userParams.pronouns,
                    state: userParams.state,
                },
            };

            yield updateUser({ uid: user.uid, ...userInfo });
            yield put(hideApiLoader());

            yield getUser();
            yield put(hideApiLoader());
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
