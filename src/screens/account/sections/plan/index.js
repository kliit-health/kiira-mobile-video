import React, {useState} from 'react';
import {ModalConfirm, TextButton} from '../../../../components';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {View, Text} from 'react-native';
import intl from '../../../../utils/localization';
import {cancelSubscription, showMessage} from '../../../../redux/actions';
import styles from './styles';

export default ({subscription, user}) => {
  const plan = useSelector((state) => state.plan.data);
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
    dispatch(showMessage({message: intl.en.account.emailUs}));
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
          {intl.en.account.planCanceled}
          {formatDate(subscription.data.currentPeriodEnd)}
        </Text>
      )}
      {subscription.cancel.loading && (
        <Text style={styles.canceledMessage}>{intl.en.account.canceling}</Text>
      )}
      <View style={styles.actionsContainer}>
        <TextButton onPress={handleChangePlan}>
          {intl.en.account.changePlan}
        </TextButton>
        <View style={styles.divider} />
        <TextButton
          onPress={handleCancel}
          outlined
          disabled={subscription.data.canceled}>
          {intl.en.account.cancelPlan}
        </TextButton>
      </View>
      <ModalConfirm
        message={intl.en.account.cancelConfirm}
        visible={visible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
};
