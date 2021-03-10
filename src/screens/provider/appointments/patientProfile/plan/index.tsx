import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../../../components/customButton';
import ExpertHeader from '../../../../../components/expertHeader';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const Plan = ({navigation}) => {
  const {plan} = useSelector((state) => state.medicalHistory);
  const [notes, setNotes] = useState(plan.notes);
  const dispatch = useDispatch();

  const payload = {
    plan: {
      notes,
      complete: true,
    },
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Assessment/Plan" />
      <Text style={styles.question}>What is the care plan?</Text>
      <ScrollView>
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

export default Plan;
