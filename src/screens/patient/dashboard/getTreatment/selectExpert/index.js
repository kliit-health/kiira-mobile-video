import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {Header, TextButton, Container} from '../../../../../components';
import {screenNames} from '../../../../../utils/constants';
import {List} from './sections';
import styles from './style';

const SelectExpert = ({navigation}) => {
  const [availableExperts, setAvailableExperts] = useState([]);
  const experts = useSelector((state) => state.experts.data);
  const userProfile = useSelector((state) => state.user.data.profileInfo);
  const visit = useSelector((state) => state.expertSchedule);
  const lang = useSelector((state) => state.language);

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
      const filteredExperts = videoEnabledExperts.filter(
        ({
          profileInfo: {
            profession: {specialities},
          },
        }) => {
          return specialities.some((specialty) =>
            specialty.includes(visit.reason),
          );
        },
      );
      setAvailableExperts(filteredExperts);
    }
  }, [experts]);

  const handleCardPress = ({uid, calendarID}) => {
    navigation.navigate(screenNames.expertSchedule, {uid, calendarID});
  };

  const handleBackPress = () => navigation.goBack();

  return (
    <Container unformatted>
      <Header title={lang.requestVisit.title} onBack={handleBackPress} />
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
            source={require('../../../../../../assets/bell.png')}
          />
          <Text style={styles.title}>No Providers found</Text>
          <Text style={styles.subtitle}>
            We'll notifiy you when providers are available in your area
          </Text>
          <TextButton
            onPress={() => {
              navigation.navigate(screenNames.bottomTab);
            }}>
            {lang.requestVisit.goHome}
          </TextButton>
        </View>
      )}
    </Container>
  );
};

export default SelectExpert;
