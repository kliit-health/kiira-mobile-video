import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import { SIGN_OUT_API_HIT } from '~/redux/types';
import { logout, updateStatus } from '~/utils/firebase';
import Constant from '~/utils/constants';
import { clearAskState } from '../dashboard/ask/action';

function* signout({ data }) {
    const { navigation, isLoaderShow } = data;
    const lang = yield select(state => state.language);
    try {
        const state = yield select();
        const userData = state.user.data;

        yield put(showApiLoader(lang.apiLoader.loadingText));

        const updateStatusParams = {
            uid: userData.uid,
            updatedData: {
                isOnline: false,
            },
        };
        yield updateStatus(updateStatusParams);

        if (isLoaderShow) {
            yield put(hideApiLoader());
        }

        yield put(clearAskState());
        yield logout(userData);
        yield put(hideApiLoader());
        navigation.navigate(Constant.App.stack.AuthStack);
    } catch (error) {
        if (isLoaderShow) {
            yield put(hideApiLoader());
        }

        navigation.navigate(Constant.App.stack.AuthStack);
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}
export default function* accountSaga() {
    yield takeEvery(SIGN_OUT_API_HIT, signout);
}
