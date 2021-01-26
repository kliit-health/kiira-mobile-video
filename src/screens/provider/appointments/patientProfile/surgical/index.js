import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../../../components/customButton';
import ExpertHeader from '../../../../../components/expertHeader';
import PolarButton from '../../../../../components/polarButton';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const SurgicalHistory = ({navigation}) => {
  const surgical = useSelector((state) => state.medicalHistory.surgical);
  const [yes, setYes] = useState(surgical.surgeries);
  const [no, setNo] = useState(!surgical.surgeries);
  const [notes, setNotes] = useState(surgical.notes);
  const dispatch = useDispatch();

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

  const payload = {
    surgical: {
      surgeries: yes,
      notes,
      complete: true,
    },
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
          value={notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
        <CustomButton
          buttonStyle={styles.submitButtonStyle}
          textStyle={styles.submitButtonTextStyle}
          onPress={() => {
            dispatch(updateMedicalHistoryExpert(payload));
            navigation.goBack();
          }}
          text="Submit"
        />
      </ScrollView>
    </View>
  );
};

export default SurgicalHistory;
