import {Platform} from 'react-native';

export const parseCardInfo = (info) => {
  const {exp_month, exp_year, last4, id} = info;
  if (!id || !exp_month || !exp_year || !last4) {
    return null;
  }

  const today = new Date();
  let expDate = new Date();
  expDate.setFullYear(exp_year, exp_month, 1);

  return {id, last4Digits: last4, isExpired: expDate < today};
};

export const PaymentMethodsTypes = {
  applePay: 'ApplePay',
  payPal: 'PayPal',
  addPaymentMethod: 'AddPaymentMethod',
  card: 'Card',
  googlePay: 'GooglePay',
};

const NativePaymentMethod = Platform.select({
  android: {
    type: PaymentMethodsTypes.googlePay,
    title: 'G Pay',
  },
  ios: {
    type: PaymentMethodsTypes.applePay,
    title: 'Apple Pay',
  },
});

const PayPalPaymentMethod = {
  type: PaymentMethodsTypes.payPal,
  title: 'Pay Pal',
};

export const defaultPaymentMethods = (isNativePaySupported = false) => {
  return isNativePaySupported
    ? [NativePaymentMethod, PayPalPaymentMethod]
    : [PayPalPaymentMethod];
};
