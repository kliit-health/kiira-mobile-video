import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDidMount} from '../../utils/hooks';
import {Dashboard} from './Dashboard';
import {
  getAgreements,
  getPrivacyPolicy,
  getTermsAndConditions,
  getLicenses,
  getUser,
  getHealthHistory,
  getSubscription,
  getPlan,
  getPlans,
  getExperts,
  getResolvedQuestion,
  getUnresolvedQuestions,
  getFavoriteExperts,
} from '../../redux/actions';
import {model} from './model';
import intl from '../../utils/localization';

const Controller = ({navigation}) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);
  const subscription = useSelector((state) => state.subscription.data);
  const licenses = useSelector((state) => state.licenses.data);

  useDidMount(() => {
    dispatch(getAgreements());
  });

  useDidMount(() => {
    dispatch(getTermsAndConditions());
  });

  useDidMount(() => {
    dispatch(getPrivacyPolicy());
  });

  useDidMount(() => {
    dispatch(getLicenses());
  });

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  useEffect(() => {
    dispatch(getExperts());
  }, []);

  useEffect(() => {
    if (user.uid) {
      dispatch(getHealthHistory({uid: user.uid}));
    }
  }, [user]);

  useEffect(() => {
    if (user.subscription.id) {
      dispatch(getSubscription({id: user.subscription.id}));
    }
  }, [user]);

  useEffect(() => {
    if (subscription.plan.id) {
      dispatch(getPlan({id: subscription.plan.id}));
    }
  }, [subscription]);

  useEffect(() => {
    if (user.uid) {
      dispatch(getResolvedQuestion({uid: user.uid}));
    }
  }, [user]);

  useEffect(() => {
    if (user.uid) {
      dispatch(getUnresolvedQuestions({uid: user.uid}));
    }
  }, [user]);

  useEffect(() => {
    if (user.uid) {
      dispatch(getFavoriteExperts({uid: user.uid}));
    }
  }, [user]);

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <Dashboard
      title={intl.en.dashboard.title}
      licenses={licenses}
      displayName={user.profileInfo.firstName}
      profileImageUrl={user.profileInfo.profileImageUrl}
      handleNavigation={handleNavigation}
      model={model}
    />
  );
};

export default Controller;
