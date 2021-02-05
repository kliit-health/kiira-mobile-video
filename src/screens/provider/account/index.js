import React from 'react';
import {Container, ListItem, TextButton} from '../../../components';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {get} from 'lodash';
import {ProfileCard} from './sections';
import model from './model';
import {signOut} from '../../patient/account/action';
import styles, {modifiers} from './styles';

const ExpertAccount = ({navigation}) => {
  const language = useSelector((state) => state.language, shallowEqual);
  const details = useSelector((state) => state.authLoading.userData);
  const dispatch = useDispatch();

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  const handleSignOut = () => {
    dispatch(signOut({navigation}));
  };

  return (
    <Container styles={modifiers.container} themed unformatted>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <View style={styles.profileContainter}>
          <View style={styles.profileBackground} />
          <ProfileCard {...details} />
        </View>
        <View>
          {model.map(({title, destination}) => (
            <ListItem
              key={title}
              id={destination}
              onPress={handleNavigation}
              displayChevron>
              <Text style={styles.itemTitle}>{get(language, title)}</Text>
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
