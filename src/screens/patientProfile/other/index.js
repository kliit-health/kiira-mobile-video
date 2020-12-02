import React from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';

import styles from './style';

const OtherDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ExpertHeader title="Confirm and Lock" />
      <ScrollView>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
        <CustomButton
          buttonStyle={styles.buttonContainerStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => {
            dispatch(getAppointmentsList({uid: appointmentDetails.uid}));
            navigation.navigate(Constant.App.screenNames.Appointments);
          }}
          text="Submit"
        />
      </ScrollView>
    </View>
  );
};

export default OtherDetails;
