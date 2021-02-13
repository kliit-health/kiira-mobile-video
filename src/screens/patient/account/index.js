import React from 'react';
import {Container, TextButton} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native';
import {Profile, List, Plan} from './sections';
import {signOut} from './action';
import {modifiers} from './styles';

const Account = ({navigation}) => {
  const dispatch = useDispatch();

  const subscription = useSelector((state) => state.subscription);
  const user = useSelector((state) => state.user.data);
  const lang = useSelector((state) => state.language);

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  const handleSignOut = () => {
    dispatch(signOut({navigation}));
  };

  return (
    <Container
      styles={modifiers.container}
      barStyle="light-content"
      themed
      unformatted>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Profile {...user} />
        {!!subscription.data.id && (
          <Plan subscription={subscription} user={user} />
        )}
        <List onItemPress={handleNavigation} />
        <TextButton onPress={handleSignOut} styles={modifiers.button} link>
          {lang.account.logout}
        </TextButton>
      </ScrollView>
    </Container>
  );
};

export default Account;
