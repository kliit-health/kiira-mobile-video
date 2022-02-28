import { UPDATE_NEW_USER_DETAIL_DATA } from '~/redux/types';
import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import Constant, { screenNames } from '~/utils/constants';
import { updateUser } from '~/redux/actions/user';
import { updateUserData, uploadImage } from '~/utils/firebase';
import storage from '@react-native-firebase/storage';
import { updateUserDataToFirebase } from './action';
import addNewProfile from './reducer';

function* updateNewUserData({ payload }) {
    const lang = yield select(state => state.language);
    const user = yield select(state => state.user.data);

    try {
        const { userParams, imageParams, navigation } = payload;
        yield put(showApiLoader());
       console.log('---------')
        if (imageParams) {
            const responseImage = yield uploadImage(imageParams);

            if (responseImage.success) {
                const { name } = responseImage.data.metadata;
                const url = yield storage().ref(name).getDownloadURL();
                console.log('USERROLE',user)
                const userInfo = {
                    ...(userParams.address && { address: userParams.address }),
                    chats: userParams.chats,
                    ...(userParams.customer && { customer: userParams.customer }),
                    displayName: user.displayName,
                    email: userParams.email,
                    firstLogin: true,
                    ...(userParams.invitationDate && {
                        invitationDate: userParams.invitationDate,
                    }),
                    ...(userParams.invitationId && {
                        invitationId: userParams.invitationId,
                    }),
                    ...(userParams.invitationDate && {
                        invitationDate: userParams.invitationDate,
                    }),
                    signUpDate: userParams.signUpDate,
                    fcmToken: userParams.fcmToken,
                    ...(userParams.plan && { plan: userParams.plan }),
                    prepaid: userParams.prepaid,
                    profileInfo: {
                        email: userParams.email,
                        profileImageUrl:  url ? url : '',
                        firstName: userParams.firstName,
                        lastName: userParams.lastName,
                        dob: userParams.dob,
                        pronouns: userParams.pronouns,
                        gender: userParams.gender,
                        state: userParams.state,
                        sexuality: userParams.sexuality,
                        pharmacy:userParams.pharmacy,
                        pharmacyAddress:userParams.pharmacyAddress,
                        pharmacyPhoneNumber:userParams.pharmacyPhoneNumber,
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
                    ...(userParams.subscription && {
                        subscription: { ...userParams.subscription },
                    }),
                    role: 'User',
                    uid: user.uid,
                    updatedAt: userParams.signUpDate,
                    visits: userParams.visits,
                };
                
                yield put(updateUser({ uid: user.uid, ...userInfo }));
                navigation.navigate('Home');
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
        } 
    } catch (error) {
        console.log(error);
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}







export default function* newUserSaga() {
    yield takeEvery(UPDATE_NEW_USER_DETAIL_DATA, updateNewUserData);
}
