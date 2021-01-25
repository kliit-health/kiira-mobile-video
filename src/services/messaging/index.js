import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View} from 'react-native';
import {Modal} from '../../components';
import {hideMessage} from '../../redux/actions';
import styles from './styles';

export default () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messaging.message);
  const visible = useSelector((state) => state.messaging.visible);

  const handleBackdropPress = () => {
    dispatch(hideMessage());
  };

  return (
    <Modal
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      onBackdropPress={handleBackdropPress}
      styles={styles.modal}
      visible={visible}>
      <View style={styles.card.container}>
        <Text style={styles.card.text}>{message}</Text>
      </View>
    </Modal>
  );
};
