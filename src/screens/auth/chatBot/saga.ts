import { UPDATE_NEW_USER_DETAIL_DATA } from '~/redux/types';
import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import Constant, { screenNames } from '~/utils/constants';
import { updateUser } from '~/redux/actions/user';

const defaultImage =
    'https://firebasestorage.googleapis.com/v0/b/kiira-health-app.appspot.com/o/Kiira%2Fplaceholder.png?alt=media&token=ea401fa3-3f5c-4c29-9109-f1d0e4bbffdf';

function* updateNewUserData({ data }) {
    const lang = yield select(state => state.language);
    const user = yield select(state => state.user.data);
    const { userParams, navigation } = data;

    try {
        yield put(showApiLoader());

        const userInfo = {
            ...(userParams.address && { address: userParams.address }),
            agreeToTerms: false,
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
                profileImageUrl: defaultImage,
                firstName: userParams.firstName,
                lastName: userParams.lastName,
                dob: userParams.dob,
                pronouns: userParams.pronouns,
                gender: userParams.gender,
                state: userParams.state,
                sexuality: userParams.sexuality,
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
        yield put(hideApiLoader());

        navigation.navigate(screenNames.Home);
    } catch (error) {
        console.error(error);
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
        navigation.navigate(Constant.App.stack.AuthStack);
    }
}

export default function* newUserSaga() {
    yield takeEvery(UPDATE_NEW_USER_DETAIL_DATA, updateNewUserData);
}
