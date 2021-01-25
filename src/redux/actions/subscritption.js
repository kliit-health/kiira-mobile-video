import {GET_SUBSCRIPTION, CANCEL_SUBSCRIPTION} from '../types';

export const getSubscription = (data) => ({
  type: GET_SUBSCRIPTION,
  data,
});

export const cancelSubscription = (data) => ({
  type: CANCEL_SUBSCRIPTION,
  data,
});
