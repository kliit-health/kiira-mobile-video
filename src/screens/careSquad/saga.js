import { put, takeEvery } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import {
  GET_EXPERTS_DETAILS_ASYNC,
  GET_EXPERTS_DETAILS,
  UPDATE_FAVORITE_EXPERTS_ASYNC,
  UPDATE_FAVORITE_EXPERTS,
  GET_FAVORITE_EXPERTS_ASYNC,
  GET_FAVORITE_EXPERTS,
} from '../../redux/types';
import {
  firebaseFetch,
  updateFavoriteExperts,
  getFavoriteExperts,
} from '../../utils/firebase';

function* getExpertsDetailsAsync() {
  const condition = [{ key: 'role', operator: '==', value: 'Expert' }];
  try {
    const details = yield firebaseFetch('users', condition);
    yield put({
      type: GET_EXPERTS_DETAILS,
      data: details,
    });
  } catch (error) {
    console.error(error);
  }
}

function* updateFavoriteExpertsAsync({ data }) {
  const { uid } = firebase.auth().currentUser;
  const uids = data.map((favorite) => favorite.uid);
  try {
    yield updateFavoriteExperts(uids, uid);
    yield put({
      type: UPDATE_FAVORITE_EXPERTS,
      data,
    });
  } catch (error) {
    console.error(error);
  }
}

function* getFavoriteExpertsAsync() {
  const { uid } = firebase.auth().currentUser;
  try {
    const { favorites } = yield getFavoriteExperts(uid);
    yield put({
      type: GET_FAVORITE_EXPERTS,
      data: favorites,
    });
  } catch (error) {
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_EXPERTS_DETAILS_ASYNC, getExpertsDetailsAsync);
  yield takeEvery(UPDATE_FAVORITE_EXPERTS_ASYNC, updateFavoriteExpertsAsync);
  yield takeEvery(GET_FAVORITE_EXPERTS_ASYNC, getFavoriteExpertsAsync);
}
