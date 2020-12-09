import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import PolarButton from '../../../components/polarButton';

import styles from './style';

const SurgicalHistory = ({navigation}) => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [notes, setNotes] = useState('');

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
      <ExpertHeader title="Surgical History" />
      <Text style={styles.question}>Has patient had any surgeries?</Text>
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
          onChangeText={(text) => setNotes(text)}
          style={styles.input}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />

        <CustomButton
          buttonStyle={styles.buttonContainerStyle}
          textStyle={styles.buttonTextStyle}
          disabled={!yes && !no}
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

export default SurgicalHistory;
