import {
  GET_USER,
  GET_USER_FULFILLED,
  GET_USER_PENDING,
  GET_USER_REJECTED,
  UPDATE_USER,
  UPDATE_USER_PENDING,
  UPDATE_USER_REJECTED,
  UPDATE_USER_FULFILLED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch, updateUserData, auth} from '../../utils/firebase';

function* getUser() {
  const uid = auth.currentUser.uid;

  try {
    yield put({type: GET_USER_PENDING});
    const user = yield firebaseSingleFetch('users', uid);
    yield put({
      type: GET_USER_FULFILLED,
      data: user,
    });
  } catch (error) {
    yield put({type: GET_USER_REJECTED, data: error});
    console.error(error);
  }
}

function* updateUser({data: {uid, ...rest}}) {
  try {
    yield put({type: UPDATE_USER_PENDING});
    yield updateUserData({...rest}, uid);

    yield put({
      type: UPDATE_USER_FULFILLED,
      data: {...rest},
    });
  } catch (error) {
    yield put({
      type: UPDATE_USER_REJECTED,
      data: error,
    });
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_USER, getUser);
  yield takeEvery(UPDATE_USER, updateUser);
}
