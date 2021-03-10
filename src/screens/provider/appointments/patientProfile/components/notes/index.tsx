import React, {useState} from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../../../../components/customButton';
import {updateMedicalHistoryExpert} from '../../../../actions';
import styles from './style';

const Notes = ({title, type}) => {
  const [expand, setExpand] = useState(false);
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();

  const payload = {
    [type]: {
      summary: notes,
    },
  };

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleExpand} style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        {expand && (
          <View>
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
                toggleExpand();
              }}
              text="Save"
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};
export default Notes;
