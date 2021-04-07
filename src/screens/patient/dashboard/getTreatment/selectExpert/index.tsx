import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {Header, TextButton, Container} from 'components';
import NoProviders from 'components/noProviders';
import {screenNames} from 'utils/constants';
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

      if (visit.prescription) {
        const prescriberFilter = filteredExperts.filter(
          ({isPrescriber}) => visit.prescription && isPrescriber,
        );
        setAvailableExperts(prescriberFilter);
      } else {
        setAvailableExperts(filteredExperts);
      }
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
        <NoProviders />
      )}
    </Container>
  );
};

export default SelectExpert;
