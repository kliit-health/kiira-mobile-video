import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const Medications = ({medications}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Medications</Text>
        {expand && (
          <Text style={styles.subtitle}>
            {`Medications: \n\n\t Currently Taking: ${medications.history} \n\n\t Notes: ${medications.notes}`}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
export default Medications;
