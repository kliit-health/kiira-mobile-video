import {
  GET_AGREEMENTS,
  GET_AGREEMENTS_FULFILLED,
  GET_AGREEMENTS_PENDING,
  GET_AGREEMENTS_REJECTED,
} from '../types';
import {put, takeEvery} from 'redux-saga/effects';
import {firebaseFetch} from '../../utils/firebase';
import {orderBy} from 'lodash';

function* getAgreements() {
  try {
    yield put({type: GET_AGREEMENTS_PENDING});
    const condition = [{key: 'category', operator: '==', value: 'treatment'}];
    const agreements = yield firebaseFetch('agreements', condition);

    yield put({
      type: GET_AGREEMENTS_FULFILLED,
      data: orderBy(agreements, 'index', 'asc'),
    });
  } catch (error) {
    yield put({type: GET_AGREEMENTS_REJECTED, data: error});

    console.error(error);
  }
}

export default function* () {
  yield takeEvery(GET_AGREEMENTS, getAgreements);
}
