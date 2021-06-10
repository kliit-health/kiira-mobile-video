import {put, takeLatest, call, select} from 'redux-saga/effects';
import {
  showApiLoader,
  hideApiLoader,
} from '~/components/customLoader/action';
import {updateUser} from '~/redux/actions';
import {
  CREATE_PAYMENT_CARD,
  GET_PAYMENT_METHODS,
  BUY_CREDITS_WITH_CARD,
  BUY_CREDITS_WITH_TOKEN,
  BUY_CREDITS_WITH_PAYPAL,
  CAPTURE_PAYMENT,
  SET_PREPAID,
} from '~/redux/types';
import {
  addNewPaymentCard,
  getPaymentMethods as getPaymentMethodsCloudFunction,
  payAmount,
  updateCredits,
  payAmountWithToken,
  getPayPalAccessToken,
  getDataFromTable,
} from '~/utils/firebase';

import {
  createPayPalOrder,
  capturePayPalPaymentAPI,
} from '~/utils/webServices';
import {
  setPaymentMethods,
  setNativePaySupport,
  setOrderData,
  setData,
} from './action';

import {showOrHideModal} from '~/components/customModal/action';
import {parseCardInfo} from '~/utils/helper/payment';
import {NavigationService} from '../../../../../navigation';
import {deviceSupportsNativePay} from '~/utils/payment';
import Constant, {tables} from '~/utils/constants';
import auth from '@react-native-firebase/auth';

function* checkNativePaySupport() {
  const isSupported = yield call(deviceSupportsNativePay);
  yield put(setNativePaySupport(isSupported));
}

function* createPayment({data}) {
  const lang = yield select((state) => state.language);
  const {navigation, params} = data;
  yield put(showApiLoader(lang.apiLoader.loadingText));
  try {
    const response = yield call(addNewPaymentCard, params);
    yield getPaymentMethods();
    yield put(hideApiLoader());
    if (response.ok) {
      yield put(showOrHideModal(lang.successMessages.cardAddedSuccessfully));
      navigation.goBack();
    } else {
      var errorMessage = '';
      switch (response.status) {
        case 'internal':
          errorMessage = 'Please check back your input';
          break;
        case 'already-exists':
          errorMessage = 'Card already exists';
          break;
        case 'invalid-argument':
          errorMessage = 'One of the inputs is invalid';
          break;
        case 'unauthenticated':
          errorMessage = 'Invalid action';
          break;
        default:
          errorMessage = lang.errorMessage.serverError;
          break;
      }
      yield put(showOrHideModal(errorMessage));
    }
  } catch (error) {
    yield put(hideApiLoader());
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* getPaymentMethods() {
  const lang = yield select((state) => state.language);
  yield put(showApiLoader(lang.apiLoader.loadingText));

  yield checkNativePaySupport();

  const response = yield call(getPaymentMethodsCloudFunction);
  yield put(hideApiLoader());

  if (response.ok) {
    let cards = response.data.map((cardInfo) => parseCardInfo(cardInfo));
    cards = cards.filter((card) => card !== null);
    yield put(setPaymentMethods(cards));
  } else {
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* handlePayResponse(response, credits) {
  const lang = yield select((state) => state.language);
  if (response.ok) {
    const user = auth().currentUser;
    yield put({type: SET_PREPAID});
    yield call(updateCredits, credits, {data: {uid: user.uid, prepaid: true}});
    if (response.ok) {
      const obj = {
        tableName: tables.users,
        uid: user.uid,
      };
      const userData = yield getDataFromTable(obj);
      
      yield put(setData(userData));
      yield put(updateUser(userData));
      yield put(showOrHideModal(lang.successMessages.visitAddedSuccessfully));
      
      NavigationService.goBack();
    }
  }

  if (!response.ok) {
    console.log()
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* buyCredits({payload: {cardID, credits, amount}}) {
  const lang = yield select((state) => state.language);
  yield put(showApiLoader(lang.apiLoader.loadingText));
  let response = yield call(payAmount, cardID, amount);
  yield put(hideApiLoader());

  yield handlePayResponse(response, credits);
}

function* buyCreditsWithToken({payload: {tokenID, credits, amount}}) {
  const lang = yield select((state) => state.language);
  yield put(showApiLoader(lang.apiLoader.loadingText));
  let response = yield call(payAmountWithToken, tokenID, amount);
  yield put(hideApiLoader());
  console.log('RESPONSE BUY WITH TOKEN', response);
  yield handlePayResponse(response, credits);
}

function* buyCreditsWithPayPal({payload: {credits, amount, navigation}}) {
  const lang = yield select((state) => state.language);
  yield put(showApiLoader(lang.apiLoader.loadingText));
  let response = yield call(getPayPalAccessToken);
  yield put(hideApiLoader());
  if (response.ok) {
    let accessToken = response.data.data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    let paypalResponse = yield call(
      createPayPalOrder,
      accessToken,
      amount,
      credits,
    );
    yield put(hideApiLoader());
    yield put(setOrderData(paypalResponse));
    navigation.navigate(Constant.App.screenNames.PayPalApproval);
  } else {
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

function* capturePayPalPayment({
  payload: {capturePaymentURL, credits, navigation},
}) {
  const lang = yield select((state) => state.language);
  yield put(showApiLoader(lang.apiLoader.loadingText));
  let tokenResponse = yield call(getPayPalAccessToken);
  yield put(hideApiLoader());
  if (tokenResponse.ok) {
    let accessToken = tokenResponse.data.data;
    yield put(showApiLoader(lang.apiLoader.loadingText));
    let response = yield call(
      capturePayPalPaymentAPI,
      accessToken,
      capturePaymentURL,
    );
    yield put(hideApiLoader());
    // TODO: Remove after testing
    yield handlePayResponse({ok: true}, credits, navigation);
    if (response.ok) {
      // yield handlePayResponse({ ok: true }, credits);
    } else {
      // yield put(showOrHideModal(lang.errorMessage.serverError));
    }
  } else {
    yield put(showOrHideModal(lang.errorMessage.serverError));
  }
}

export default function* paymentSaga() {
  yield takeLatest(CREATE_PAYMENT_CARD, createPayment);
  yield takeLatest(GET_PAYMENT_METHODS, getPaymentMethods);
  yield takeLatest(BUY_CREDITS_WITH_CARD, buyCredits);
  yield takeLatest(BUY_CREDITS_WITH_TOKEN, buyCreditsWithToken);
  yield takeLatest(BUY_CREDITS_WITH_PAYPAL, buyCreditsWithPayPal);
  yield takeLatest(CAPTURE_PAYMENT, capturePayPalPayment);
}
