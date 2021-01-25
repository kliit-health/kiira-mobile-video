import React, {useState} from 'react';
import {Container, ListItem, ModalConfirm, TextButton} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import intl from '../../utils/localization';
import ChangePlan from '../changePlan';
import {ProfileCard} from './sections';
import {list} from './model';
import {signOut} from './action';
import {cancelSubscription} from '../../redux/actions';
import styles, {modifiers} from './styles';

const Account = ({navigation}) => {
  const subscription = useSelector((state) => state.subscription.data);
  const processing = useSelector((state) => state.subscription.cancel.loading);
  const user = useSelector((state) => state.user.data);
  const plan = useSelector((state) => state.plan.data);

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
    dispatch(
      cancelSubscription({
        subscriptionId: subscription.id,
        userId: user.id,
      }),
    );
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
        {plan.title && <Text style={styles.planTitle}>{plan.title}</Text>}
        {subscription.canceled && (
          <Text style={styles.canceledMessage}>
            {intl.en.account.planCanceled}
            {moment.unix(subscription.currentPeriodEnd).format('MM/DD/YYYY')}
          </Text>
        )}
        {processing && (
          <Text style={styles.processingMessage}>
            {intl.en.account.processing}
          </Text>
        )}
        <View style={styles.actionsContainer}>
          <TextButton onPress={toggleChangePlan}>
            {intl.en.account.changePlan}
          </TextButton>
          <View style={styles.divider} />
          <TextButton
            onPress={toggleConfirmModal}
            outlined
            disabled={subscription.canceled}>
            {intl.en.account.cancelPlan}
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
