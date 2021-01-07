import React from 'react';
import {Modal, View, Image, Pressable, Text} from 'react-native';
import {cancelAppointment} from '../action';
import {useDispatch} from 'react-redux';

import styles from '../style';

const CancelModal = ({visit, setVisible, visible}) => {
  const dispatch = useDispatch();

  const data = {
    uid: visit.uid,
    id: visit.id,
    expert: visit.expert,
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            resizeMode="contain"
            style={styles.modalImage}
            source={require('../../../../assets/logo.png')}
            activeOpacity={0.7}
          />
          <Text style={styles.modalText}>
            Are you sure you want to cancel this appointment?
          </Text>
          <View style={styles.modalButtonContainer}>
            <Pressable
              style={styles.modalButton}
              onPress={() => {
                setVisible(!visible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            <Pressable
              style={styles.modalButton}
              onPress={() => {
                dispatch(cancelAppointment(data));
                setVisible(!visible);
                // navigation.navigate('BottomTabExpert');
              }}>
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelModal;
