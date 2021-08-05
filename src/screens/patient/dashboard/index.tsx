import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, Linking, Platform } from 'react-native';
import { useDidMount } from '~/utils/hooks';
import * as actions from '~/redux/actions';
import { Container } from '~/components';
import { Item, Welcome, Banner } from './sections';
import model from './model';
import styles from './styles';
import i18n from '~/i18n';
import DeviceInfo from 'react-native-device-info';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const subscription = useSelector(state => state.subscription.data);
  const licenses = useSelector(state => state.licenses.data.current);
  const lang = useSelector(state => state.language);

  const [videoEnabled, setVideoEnabled] = useState(false);
  const [chatEnabled, setChatEnabled] = useState(false);

  useEffect(() => {
    const device = {
      manufacturer: DeviceInfo.getManufacturerSync(),
      model: DeviceInfo.getModel(),
      osVersion: DeviceInfo.getSystemVersion(),
      appVersion: DeviceInfo.getVersion(),
    };
    dispatch(actions.updateUser({ device }));
  }, []);

  useDidMount(() => {
    dispatch(actions.getAgreements());
    dispatch(actions.getTermsAndConditions());
    dispatch(actions.getPrivacyPolicy());
    dispatch(actions.getLicenses());
  });

  useEffect(() => {
    dispatch(actions.getUser());
    dispatch(actions.getPlans());
    dispatch(actions.getExperts());
  }, []);

  useEffect(() => {
    if (user.uid) {
      dispatch(actions.getHealthHistory({ uid: user.uid }));
      dispatch(actions.getResolvedQuestion({ uid: user.uid }));
      dispatch(actions.getUnresolvedQuestions({ uid: user.uid }));
      dispatch(actions.getFavoriteExperts({ uid: user.uid }));
    }
  }, [user]);

  useEffect(() => {
    if (user.subscription.id) {
      dispatch(actions.getSubscription({ id: user.subscription.id }));
    }
  }, [user]);

  useEffect(() => {
    if (subscription.plan.id) {
      dispatch(actions.getPlan({ id: subscription.plan.id }));
    }
  }, [subscription]);

  useEffect(() => {
    const includesState = licenses.includes(user.profileInfo.state.code);
    setVideoEnabled(includesState);
  });

  useEffect(() => {
    if (user.chats === 'Unlimited') {
      setChatEnabled(true);
    }
  });

  useEffect(() => {
    if (user.profileInfo.lang !== 'en') {
      dispatch(actions.setUserLanguage(i18n[user.profileInfo.lang]));
    }
  }, [user]);

  const handleNavigation = (destination, features) => {
    console.log(features);
    if (features === 'urgent') {
      const isAndroid = Platform.OS != 'ios';
      Linking.openURL(isAndroid ? 'tel:${911}' : 'telprompt:${911}');
    } else {
      if (features === 'video' && !videoEnabled) {
        dispatch(
          actions.showMessage({
            message: lang.dashboard.serviceUnavailable,
          }),
        );
        return;
      }

      if (features === 'chat' && !chatEnabled) {
        dispatch(
          actions.showMessage({
            message: lang.dashboard.chatNotAvailable,
          }),
        );
        return;
      }

      navigation.navigate(destination);
    }
  };

  return (
    <Container styles={styles.container} barStyle="dark-content" unformatted>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome displayName={user.profileInfo.firstName} />
        <Banner />
        {model.map((item, index) => (
          <Item key={item.title} {...item} onPress={handleNavigation} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
