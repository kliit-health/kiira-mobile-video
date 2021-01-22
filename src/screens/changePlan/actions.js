import { GET_PLANS, CHANGE_PLAN } from '../../redux/types';

export const getPlans = () => ({
  type: GET_PLANS,
});

export const changePlan = ({ subscriptionId, planId }) => ({
  type: CHANGE_PLAN,
  data: { subscriptionId, planId },
});
