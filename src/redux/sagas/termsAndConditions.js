import {
  GET_TERMS_AND_CONDITIONS,
  GET_TERMS_AND_CONDITIONS_PENDING,
  GET_TERMS_AND_CONDITIONS_FULFILLED,
  GET_TERMS_AND_CONDITIONS_REJECTED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseSingleFetch} from '../../utils/firebase';

function* getTermsAndConditions({data}) {
  try {
    yield put({type: GET_TERMS_AND_CONDITIONS_PENDING});
    const termsAndConditions = yield firebaseSingleFetch('legal', 'terms');
    yield put({
      type: GET_TERMS_AND_CONDITIONS_FULFILLED,
      data: termsAndConditions,
    });
  } catch (error) {
    yield put({type: GET_TERMS_AND_CONDITIONS_REJECTED, data: error});
    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_TERMS_AND_CONDITIONS, getTermsAndConditions);
}
