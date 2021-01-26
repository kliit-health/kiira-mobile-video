import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../../../components/customButton';
import ExpertHeader from '../../../../../components/expertHeader';
import PolarButton from '../../../../../components/polarButton';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const Medications = ({navigation}) => {
  const medications = useSelector((state) => state.medicalHistory.medications);
  const [yes, setYes] = useState(medications.history);
  const [no, setNo] = useState(!medications.history);
  const [notes, setNotes] = useState(medications.notes);
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
    medications: {
      history: yes,
      notes,
      complete: true,
    },
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Medications" />
      <Text style={styles.question}>
        Is patient taking any medications or herbs?
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

export default Medications;
