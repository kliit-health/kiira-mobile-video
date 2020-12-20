import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const Surgical = ({surgical}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Surgical History</Text>
        {expand && (
          <Text style={styles.subtitle}>
            {`Surgeries: \n\n\t History: ${surgical.surgeries} \n\n\t Notes: ${surgical.notes}`}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
export default Surgical;
