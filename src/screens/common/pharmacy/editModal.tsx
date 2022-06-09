import React, { useState, useEffect } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from 'react-native';
import { Header, Screen, Button, Column, Row } from '~/components';
import CustomInputText from '~/components/customInputText';
import Constant from '~/utils/constants';
import styles from './styles';

const EditModal = ({
  show,
  lang,
  pharmacy,
  phoneNumber,
  address,
  toggleModal,
}) => {
  const pattern = new RegExp(/^[0-9\-\b]+$/);
  const [lPharmacy, setPharmacy] = useState(pharmacy);
  const [lPhoneNumber, setPhoneNumber] = useState(phoneNumber);
  const [lAddress, setAddress] = useState(address);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {}, []);

  const canConfirm = (phr, phone, addr) => {
    if (phr && phone.length == 12 && addr) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const setValidPhoneNumber = value => {
    if (!pattern.test(value)) {
      setPhoneNumber(value.substr(0, value.length - 1));
      return;
    }

    if (value.length > 12) {
      setPhoneNumber(value.substr(0, 12));
      return;
    }

    if (value.length > 3 && value.substr(3, 1) != '-') {
      value = value.substr(0, 3) + '-' + value.substr(3, value.length);
    }

    if (value.length > 7 && value.substr(7, 1) != '-') {
      value = value.substr(0, 7) + '-' + value.substr(7, value.length);
    }

    if (
      (value.length == 3 || value.length == 7) &&
      lPhoneNumber.substr(lPhoneNumber.length - 1, 1) != '-'
    ) {
      value = value + '-';
    }

    canConfirm(lPharmacy, value, lAddress);
    setPhoneNumber(value);
  };

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      transparent
      isVisible={show}>
      <Screen>
        <View style={styles.headerStyle}>
          <Header
            title={lang.pharmacy.title}
            onBack={() => {
              toggleModal(false, null, null, null);
            }}
          />
        </View>
        <View style={styles.inputTextParentContainerStyle}>
          <View style={styles.inputTextContainerStyle}>
            <CustomInputText
              autoCapitalize="words"
              onChangeText={value => {
                setPharmacy(value);
                canConfirm(value, lPhoneNumber, lAddress);
              }}
              placeholder={lang.pharmacy.nameOfPharmacy}
              value={lPharmacy}
              style={
                lPharmacy
                  ? styles.inputEditTypeStyle
                  : [styles.inputEmptyTypeStyle, { fontWeight: '300' }]
              }
              placeholderTextColor={'#868992'}
            />
          </View>
          <View style={styles.inputTextContainerStyle}>
            <CustomInputText
              autoCapitalize="words"
              onChangeText={value => setValidPhoneNumber(value)}
              placeholder={lang.pharmacy.phoneNumber}
              value={lPhoneNumber}
              style={
                lPhoneNumber
                  ? styles.inputEditTypeStyle
                  : [styles.inputEmptyTypeStyle, { fontWeight: '300' }]
              }
              placeholderTextColor={'#868992'}
            />
          </View>
          <View style={styles.inputTextContainerStyle}>
            <CustomInputText
              autoCapitalize="words"
              onChangeText={value => {
                setAddress(value);
                canConfirm(lPharmacy, lPhoneNumber, value);
              }}
              placeholder={lang.pharmacy.address}
              value={lAddress}
              style={
                lAddress
                  ? styles.inputEditTypeStyle
                  : [styles.inputEmptyTypeStyle, { fontWeight: '300' }]
              }
              placeholderTextColor={'#868992'}
            />
          </View>
        </View>
        <Button
          onPress={() => {
            toggleModal(false, lPharmacy, lPhoneNumber, lAddress);
          }}
          disabled={disabled}
          style={
            !disabled
              ? { container: styles.searchButton }
              : { container: [styles.searchButtonDisabled] }
          }
          title={'Confirm'}
        />
      </Screen>
    </Modal>
  );
};

export default EditModal;
