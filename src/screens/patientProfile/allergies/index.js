import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import PolarButton from '../../../components/polarButton';

import styles from './style';

const Allergies = ({navigation}) => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  const toggleSelection = (selection) => {
    if (selection === 'yes') {
      setYes(!yes);
      setNo(false);
    }

    if (selection === 'no') {
      setYes(false);
      setNo(!no);
    }
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Medical Allergies" />
      <Text style={styles.question}>
        Is patient allergic to any Medications?
      </Text>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <PolarButton
            variant="yes"
            selected={yes}
            onPress={() => toggleSelection('yes')}
          />
          <PolarButton
            variant="no"
            selected={no}
            onPress={() => toggleSelection('no')}
          />
        </View>
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

export default Allergies;
