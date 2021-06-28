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
import auth from '@react-native-firebase/auth';
import {firebaseSingleFetch, firebaseSingleUpdate} from '../../utils/firebase';

const uid = auth().currentUser.uid;

function* getUser() {
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

function* updateUser({data: { ...rest}}) {
  try {
    yield put({type: UPDATE_USER_PENDING});
    yield firebaseSingleUpdate(uid, 'users', {...rest});

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
