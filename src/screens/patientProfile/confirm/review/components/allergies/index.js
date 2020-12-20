import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const Allergies = ({allergies}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Allergies</Text>
        {expand && (
          <Text style={styles.subtitle}>
            {`Allergies: \n\n\t Known Allergies: ${allergies.allergic} \n\n\t Notes: ${allergies.notes}`}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
export default Allergies;
