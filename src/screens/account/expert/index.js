import React from 'react';
import {Container, ListItem, TextButton} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import intl from '../../../utils/localization';
import {ProfileCard} from './sections';
import {list} from './model';
import {signOut} from '../action';
import styles, {modifiers} from './styles';

const ExpertAccount = ({navigation}) => {
  const details = useSelector((state) => state.authLoadingReducer.userData);
  const dispatch = useDispatch();

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  const handleSignOut = () => {
    dispatch(signOut({navigation}));
  };

  return (
    <Container styles={modifiers.container} themed unformatted>
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
          {intl.en.expertAccount.logout}
        </TextButton>
      </View>
    </Container>
  );
};

export default ExpertAccount;
