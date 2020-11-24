import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import CustomButton from '../../../components/customButton';

import styles from './styles';

const OtherDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              marginLeft: 15,
              width: 50,
              height: 50,
            }}
            source={require('../../../../assets/goBack.png')}
            activeOpacity={0.7}
          />
        </TouchableOpacity>
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.headerText}>Other Details</Text>
        </View>
      </View>
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
