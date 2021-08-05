import { put, takeEvery } from 'redux-saga/effects';
import {
    SHOW_MESSAGE,
    HIDE_MESSAGE,
    SHOW_MESSAGE_FULFILLED,
    HIDE_MESSAGE_FULFILLED,
} from '../types';

function* showMessage({ data: { message } }) {
    yield put({
        type: SHOW_MESSAGE_FULFILLED,
        data: { message },
    });
}

function* hideMessage() {
    yield put({
        type: HIDE_MESSAGE_FULFILLED,
    });
}

export default function* () {
    yield takeEvery(SHOW_MESSAGE, showMessage);
    yield takeEvery(HIDE_MESSAGE, hideMessage);
}
