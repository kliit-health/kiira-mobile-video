import React, {useState} from 'react';
import {Container, ListItem, ModalConfirm, TextButton} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import intl from '../../utils/localization';
import ChangePlan from '../changePlan';
import {ProfileCard} from './sections';
import {list} from './model';
import {signOut} from './action';
import styles, {modifiers} from './styles';

const Account = ({navigation}) => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const [changePlanVisible, setChangePlanVisible] = useState(false);
  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  const handleSignOut = () => {
    dispatch(signOut({navigation}));
  };

  const handleConfirm = () => {
    setModalConfirmVisible(!modalConfirmVisible);
  };

  const handleCancel = () => {
    setModalConfirmVisible(!modalConfirmVisible);
  };

  const toggleChangePlan = () => {
    setChangePlanVisible(!changePlanVisible);
  };

  const toggleConfirmModal = () => {
    setModalConfirmVisible(!modalConfirmVisible);
  };

  return (
    <Container styles={modifiers.container} themed unformatted>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <View style={styles.profileContainter}>
          <View style={styles.profileBackground} />
          <ProfileCard {...user} />
        </View>
        <View style={styles.actionsContainer}>
          <TextButton onPress={toggleChangePlan}>
            {intl.en.account.changePlan}
          </TextButton>
          <View style={styles.divider} />
          <TextButton onPress={toggleConfirmModal} outlined>
            {intl.en.account.cancelPlamn}
          </TextButton>
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
            {intl.en.account.logout}
          </TextButton>
        </View>
      </ScrollView>
      <ChangePlan visible={changePlanVisible} onClose={toggleChangePlan} />
      <ModalConfirm
        message={intl.en.account.cancelConfirm}
        visible={modalConfirmVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </Container>
  );
};

export default Account;
