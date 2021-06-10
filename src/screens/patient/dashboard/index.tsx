import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {useDidMount} from '~/utils/hooks';
import * as actions from '~/redux/actions';
import {Container} from '~/components';
import {Bot, Items, Intro} from './sections';
import styles from './styles';
import i18n from '~/i18n';
import DeviceInfo from 'react-native-device-info';


const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const subscription = useSelector((state) => state.subscription.data);
  const licenses = useSelector((state) => state.licenses.data.current);
  const lang = useSelector((state) => state.language);

  const [videoEnabled, setVideoEnabled] = useState(false);
  const [chatEnabled, setChatEnabled] = useState(false);

  useDidMount(() => {
    const device = {
      manufacturer: DeviceInfo.getManufacturerSync(),
      model: DeviceInfo.getModel(),
      osVersion: DeviceInfo.getSystemVersion(),
      appVersion: DeviceInfo.getVersion()
    }
    dispatch(actions.updateUser({device}));
  })

  useDidMount(() => {
    dispatch(actions.getAgreements());
  });

  useDidMount(() => {
    dispatch(actions.getTermsAndConditions());
  });

  useDidMount(() => {
    dispatch(actions.getPrivacyPolicy());
  });

  useDidMount(() => {
    dispatch(actions.getLicenses());
  });

  useEffect(() => {
    dispatch(actions.getUser());
  }, []);

  useEffect(() => {
    dispatch(actions.getPlans());
  }, []);

  useEffect(() => {
    dispatch(actions.getExperts());
  }, []);

  useEffect(() => {
    if (user.uid) {
      dispatch(actions.getHealthHistory({uid: user.uid}));
    }
  }, [user]);

  useEffect(() => {
    if (user.subscription.id) {
      dispatch(actions.getSubscription({id: user.subscription.id}));
    }
  }, [user]);

  useEffect(() => {
    if (subscription.plan.id) {
      dispatch(actions.getPlan({id: subscription.plan.id}));
    }
  }, [subscription]);

  useEffect(() => {
    if (user.uid) {
      dispatch(actions.getResolvedQuestion({uid: user.uid}));
    }
  }, [user]);

  useEffect(() => {
    if (user.uid) {
      dispatch(actions.getUnresolvedQuestions({uid: user.uid}));
    }
  }, [user]);

  useEffect(() => {
    if (user.uid) {
      dispatch(actions.getFavoriteExperts({uid: user.uid}));
    }
  }, [user]);

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
  };

  const handleRejectAssistance = () =>
    dispatch(
      actions.showMessage({
        message: lang.dashboard.great,
      }),
    );

  return (
    <Container styles={styles.container} barStyle={'dark-content'} unformatted>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Intro
          displayName={user.profileInfo.firstName}
          profileImageUrl={user.profileInfo.profileImageUrl}
        />
        <Items onPress={handleNavigation} />
        <Bot
          onRequestAssistence={handleNavigation}
          onRejectAssistence={handleRejectAssistance}
        />
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
