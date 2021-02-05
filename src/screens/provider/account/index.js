import React from 'react';
import {Container, ListItem, TextButton} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {screenNames} from '../../../utils/constants';
import {ProfileCard} from './sections';
import {signOut} from '../../patient/account/action';
import styles, {modifiers} from './styles';

const ExpertAccount = ({navigation}) => {
  const language = useSelector((state) => state.language);
  const details = useSelector((state) => state.authLoading.userData);
  const dispatch = useDispatch();

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  const handleSignOut = () => {
    dispatch(signOut({navigation}));
  };

  const list = [
    {
      title: language.expertAccount.settings,
      destination: screenNames.expertSettings,
    },
    {
      title: language.expertAccount.updateAvailability,
      destination: screenNames.updateAvailability,
    },
    {
      title: language.expertAccount.termsAndConditions,
      destination: screenNames.termsAndConditions,
    },
    {
      title: language.expertAccount.privacyPolicies,
      destination: screenNames.privacyPolicies,
    },
  ];

  return (
    <Container styles={modifiers.container} themed unformatted>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <View style={styles.profileContainter}>
          <View style={styles.profileBackground} />
          <ProfileCard {...details} />
        </View>
        <View>
          {list.map(({title, destination}) => (
            <ListItem
              key={title}
              id={destination}
              onPress={handleNavigation}
              displayChevron>
              <Text style={styles.itemTitle}>{title}</Text>
            </ListItem>
          ))}
        </View>
        <View style={styles.logoutContainer}>
          <TextButton onPress={handleSignOut} styles={modifiers.button} link>
            {language.expertAccount.logout}
          </TextButton>
        </View>
      </ScrollView>
    </Container>
  );
};

export default ExpertAccount;
