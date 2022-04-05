import { put, takeEvery } from 'redux-saga/effects';
import {
    GET_FAVORITE_EXPERTS,
    GET_FAVORITE_EXPERTS_PENDING,
    GET_FAVORITE_EXPERTS_FULFILLED,
    GET_FAVORITE_EXPERTS_REJECTED,
    UPDATE_FAVORITE_EXPERTS,
    UPDATE_FAVORITE_EXPERTS_PENDING,
    UPDATE_FAVORITE_EXPERTS_FULFILLED,
    UPDATE_FAVORITE_EXPERTS_REJECTED,
} from '../../redux/types';
import {
    firebaseSingleFetch,
    firebaseSingleUpdate,
} from '../../utils/firebase';

function* getFavoriteExperts({ data: { uid } }) {
    try {
        yield put({ type: GET_FAVORITE_EXPERTS_PENDING });
        const data = yield firebaseSingleFetch('careSquad', uid);

        yield put({
            type: GET_FAVORITE_EXPERTS_FULFILLED,
            data: data.favorites,
        });
    } catch (error) {
        yield put({ type: GET_FAVORITE_EXPERTS_REJECTED, data: error });
    }
}

function* updateFavoriteExperts({ data: { uid, favorites } }) {
    try {
        yield put({ type: UPDATE_FAVORITE_EXPERTS_PENDING });

        yield firebaseSingleUpdate(uid, 'careSquad', { favorites });
        yield put({
            type: UPDATE_FAVORITE_EXPERTS_FULFILLED,
            data: favorites,
        });
    } catch (error) {
        yield put({ type: UPDATE_FAVORITE_EXPERTS_REJECTED, data: error });
    }
}

export default function* () {
    yield takeEvery(GET_FAVORITE_EXPERTS, getFavoriteExperts);
    yield takeEvery(UPDATE_FAVORITE_EXPERTS, updateFavoriteExperts);
}
