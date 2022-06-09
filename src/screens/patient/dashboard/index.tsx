import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { ScrollView, Linking, Platform, Alert } from 'react-native';
import { useDidMount } from '~/utils/hooks';
import * as actions from '~/redux/actions';
import { getAppointmentsList } from '~/redux/reducers/appointments';
import { Screen, NavItem } from '~/components';
import { Welcome, Banner } from './sections';
import model from './model';
import i18n from '~/i18n';
import DeviceInfo from 'react-native-device-info';
import styles from '~/components/styles';

const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.data);
  const firstName = user.profileInfo.firstName;
  const subscription = useSelector(
    (state: RootState) => state.subscription.data,
  );
  const licenses = useSelector(
    (state: RootState) => state.licenses.data.current,
  );
  const lang = useSelector((state: RootState) => state.language);

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
    dispatch(getAppointmentsList(user.uid));
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
    if (!includesState) {
      if (
        user.profileInfo.state.code === null ||
        user.profileInfo.state.code === ''
      ) {
        setVideoEnabled(true);
        return;
      }
    }

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
    <Screen options={[styles.white_bg]} test="DashBoard">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome displayName={firstName} />
        <Banner />
        {model.map(item => (
          <NavItem
            test={item.title}
            key={item.title}
            {...item}
            onPress={handleNavigation}
          />
        ))}
      </ScrollView>
    </Screen>
  );
};

export default Dashboard;
