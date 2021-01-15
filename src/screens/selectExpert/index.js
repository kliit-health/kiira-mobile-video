import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, TextButton} from '../../components';
import {screenNames} from '../../utils/constants';
import intl from '../../utils/localization';
import {List} from './sections';
import styles from './style';

const SelectExpert = ({navigation}) => {
  const dispatch = useDispatch();

  const [availableExperts, setAvailableExperts] = useState([]);

  const experts = useSelector((state) => state.careSquad.experts);
  const userProfile = useSelector(
    (state) => state.userDetails.data.profileInfo,
  );

  useEffect(() => {
    if (experts.length && userProfile) {
      const userState = userProfile.state.code;
      const stateAvailableExperts = experts.filter(({profileInfo}) => {
        const supportedStates = profileInfo.license.states;
        return supportedStates.some(({code}) => code === userState);
      });
      const videoEnabledExperts = stateAvailableExperts.filter(
        ({videoEnabled}) => videoEnabled,
      );
      setAvailableExperts(videoEnabledExperts);
    }
  }, [experts]);

  const handleCardPress = ({uid, calendarID}) => {
    navigation.navigate(screenNames.expertSchedule, {uid, calendarID});
  };

  const handleBackPress = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header title={intl.en.requestVisit.title} onBack={handleBackPress} />
      {availableExperts && availableExperts.length ? (
        <List onCardPress={handleCardPress} data={availableExperts} />
      ) : (
        <View style={styles.parentContainerStyle}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 20,
            }}
            resizeMode="contain"
            source={require('../../../assets/bell.png')}
          />
          <Text style={styles.title}>No Providers found</Text>
          <Text style={styles.subtitle}>
            We'll notifiy you when providers are available in your state
          </Text>
          <TextButton
            onPress={() => {
              navigation.navigate(screenNames.bottomTab);
            }}>
            {intl.en.requestVisit.goHome}
          </TextButton>
        </View>
      )}
    </View>
  );
};

export default SelectExpert;
