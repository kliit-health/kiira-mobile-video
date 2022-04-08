import { UPDATE_EXPERT_DETAIL_DATA } from '../../../../redux/types';
import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { uploadImage } from '~/utils/firebase';
import { showOrHideModal } from '~/components/customModal/action';
import { getUser, updateUser } from '~/redux/actions';
import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';

function* updateExpertData({ data }) {
    const lang = yield select(state => state.language);
    const user = yield select(state => state.user.data);
    try {
        const { userParams, imageParams, navigation } = data;
        yield put(showApiLoader());

        if (imageParams) { 
            const responseImage = yield uploadImage(imageParams); 

            if (responseImage.success) {
                const { name } = responseImage.data.metadata; 
                var refStorage = name;
                if(Platform.OS === 'android'){
                  refStorage = 'Kiira/' + name;;
                }
                const url = yield storage().ref(refStorage).getDownloadURL(); 

                const userInfo = {
                    ...user,
                    clinicInfo: {
                        ...userParams.clinicInfo,
                        name: userParams.location,
                        license: userParams.license,
                    },
                    profileInfo: {
                        ...user.profileInfo,
                        bio: userParams.bio,
                        city: userParams.city,
                        firstName: userParams.firstName,
                        lastName: userParams.lastName,
                        profileImageUrl: url ? url : '',
                        pronouns: userParams.pronouns,
                        state: userParams.state,
                    }, 
                };

                yield put(updateUser({ uid: user.uid, ...userInfo }));
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
            yield put(showApiLoader()); 
            const userInfo = {
                ...user,
                clinicInfo: {
                    ...userParams.clinicInfo,
                    name: userParams.location,
                    license: userParams.license,
                },
                profileInfo: {
                    ...user.profileInfo,
                    bio: userParams.bio,
                    city: userParams.city,
                    firstName: userParams.firstName,
                    lastName: userParams.lastName,
                    pronouns: userParams.pronouns,
                    state: userParams.state,
                    profileImageUrl: userParams.profileImageUrl
                }, 
            }; 

            yield put(updateUser({ uid: user.uid, ...userInfo }));
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
export default function* settingExpertSaga() {
    yield takeEvery(UPDATE_EXPERT_DETAIL_DATA, updateExpertData);
}
