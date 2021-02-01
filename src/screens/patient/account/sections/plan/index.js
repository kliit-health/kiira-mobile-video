import React, {useState} from 'react';
import {ModalConfirm, TextButton} from '../../../../../components';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {View, Text, Linking} from 'react-native';
import {cancelSubscription} from '../../../../../redux/actions';
import styles from './styles';

export default ({subscription, user}) => {
  const plan = useSelector((state) => state.plan.data);
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const handleConfirm = () => {
    setVisible(!visible);
    dispatch(
      cancelSubscription({
        subscriptionId: subscription.data.id,
        userId: user.id,
      }),
    );
  };

  const handleChangePlan = () => {
    Linking.openURL('mailto:support@kiira.io?subject=Kiira Plan Change');
  };

  const handleCancel = () => {
    setVisible(!visible);
  };

  const formatDate = (date) => moment.unix(date).format('MM/DD/YYYY');

  return (
    <View>
      {plan.title && <Text style={styles.planTitle}>{plan.title}</Text>}
      {subscription.data.canceled && (
        <Text style={styles.canceledMessage}>
          {lang.account.planCanceled}
          {formatDate(subscription.data.currentPeriodEnd)}
        </Text>
      )}
      {subscription.cancel.loading && (
        <Text style={styles.canceledMessage}>{lang.account.canceling}</Text>
      )}
      <View style={styles.actionsContainer}>
        <TextButton onPress={handleChangePlan}>
          {lang.account.changePlan}
        </TextButton>
        <View style={styles.divider} />
        <TextButton
          onPress={handleCancel}
          outlined
          disabled={subscription.data.canceled}>
          {lang.account.cancelPlan}
        </TextButton>
      </View>
      <ModalConfirm
        message={lang.account.cancelConfirm}
        visible={visible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
};
