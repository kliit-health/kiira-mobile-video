import React, {useState} from 'react';
import {View, ScrollView, Modal, Text, Pressable} from 'react-native';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import Review from './review';
import styles from './style';

const Confirm = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ExpertHeader title="Confirm and Lock" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Important !</Text>
            <Text style={styles.subtitle}>
              Once confirmed you will be unable to edit this record please
              carefully review before locking.
            </Text>
            <Pressable
              style={styles.cancelButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={{...styles.textStyle, color: '#2196F3'}}>
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={styles.lockButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Lock</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Review />
        <CustomButton
          buttonStyle={styles.buttonContainerStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          text="Confirm"
        />
      </ScrollView>
    </View>
  );
};

export default Confirm;
