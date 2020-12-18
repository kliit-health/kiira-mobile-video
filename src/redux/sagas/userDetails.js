import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_FULFILLED,
  GET_USER_DETAILS_PENDING,
  GET_USER_DETAILS_REJECTED,
  SET_USER_DETAILS,
  SET_USER_DETAILS_PENDING,
  SET_USER_DETAILS_REJECTED,
  SET_USER_DETAILS_FULFILLED,
} from '../../redux/types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch, updateUserData} from '../../utils/firebase';

function* getUserDetails({data: {uid}}) {
  try {
    yield put({type: GET_USER_DETAILS_PENDING});

    const userDetails = yield firebaseSingleFetch('users', uid);

    yield put({
      type: GET_USER_DETAILS_FULFILLED,
      data: userDetails,
    });
  } catch (error) {
    yield put({type: GET_USER_DETAILS_REJECTED, data: error});
    console.error(error);
  }
}

function* updateUserDetails({data: {uid, ...rest}}) {
  try {
    yield put({type: SET_USER_DETAILS_PENDING});
    yield updateUserData({...rest}, uid);

    yield put({
      type: SET_USER_DETAILS_FULFILLED,
      data: {...rest},
    });
  } catch (error) {
    yield put({
      type: SET_USER_DETAILS_REJECTED,
      data: error,
    });
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_USER_DETAILS, getUserDetails);
  yield takeEvery(SET_USER_DETAILS, updateUserDetails);
}
