import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../../../components/customButton';
import ExpertHeader from '../../../../../components/expertHeader';
import PolarButton from '../../../../../components/polarButton';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const Allergies = ({navigation}) => {
  const allergies = useSelector((state) => state.medicalHistory.allergies);
  const [yes, setYes] = useState(allergies.allergic);
  const [no, setNo] = useState(!allergies.alleric);
  const [notes, setNotes] = useState(allergies.notes);
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
    allergies: {
      allergic: yes,
      notes,
      complete: true,
    },
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
          onChangeText={(text) => setNotes(text)}
          style={styles.input}
          value={notes}
          multiline
          placeholder="Please type here"
          placeholderTextColor="black"
        />
        <CustomButton
          buttonStyle={styles.buttonContainerStyle}
          textStyle={styles.buttonTextStyle}
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

export default Allergies;
