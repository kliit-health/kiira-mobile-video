import { put, takeEvery, select } from 'redux-saga/effects';
import { showApiLoader, hideApiLoader } from '~/components/customLoader/action';
import { showOrHideModal } from '~/components/customModal/action';
import { FORGOT_PASSWORD } from '~/redux/types';
import { resetPassword } from '~/utils/firebase';
import { forgotPasswordApiHitSuccess } from './action';

function* forgotPassword({ data }) {
    const lang = yield select(state => state.language);
    try {
        const { email } = data;
        yield put(showApiLoader(lang.apiLoader.loadingText));
        const response = yield resetPassword(email);
        yield put(hideApiLoader());
        if (response.ok) {
            yield put(forgotPasswordApiHitSuccess());
            yield put(
                showOrHideModal(lang.forgotPassword.resetEmailSentMessage),
            );
        } else {
            yield put(
                showOrHideModal(
                    response.message
                        ? response.message
                        : lang.errorMessage.serverError,
                ),
            );
        }
    } catch (error) {
        yield put(hideApiLoader());
        yield put(showOrHideModal(lang.errorMessage.serverError));
    }
}

export default function* forgotPasswordSaga() {
    yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}
