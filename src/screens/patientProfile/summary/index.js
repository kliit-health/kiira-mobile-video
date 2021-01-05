import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const Summary = ({navigation}) => {
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const payload = {
    summary: {
      notes,
      complete: true,
    },
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Visit Summary" />
      <ScrollView>
        <TextInput
          onChangeText={(text) => setNotes(text)}
          style={styles.input}
          value={notes}
          multiline
          placeholder="Please summarize visit"
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

export default Summary;
