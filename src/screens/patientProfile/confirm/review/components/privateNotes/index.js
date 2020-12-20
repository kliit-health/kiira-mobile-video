import React, {useState} from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import CustomButton from '../../../../../../components/customButton';
import styles from '../../style';

const PrivateNotes = ({allergies}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Private Notes</Text>
        {expand && (
          <View>
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
              text="Save"
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};
export default PrivateNotes;
