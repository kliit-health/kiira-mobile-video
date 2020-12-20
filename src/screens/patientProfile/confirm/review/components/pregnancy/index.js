import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const Pregnancy = ({pregnancy}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Pregnancy</Text>
        {expand && (
          <View>
            <Text style={styles.subtitle}>
              {`Pregnancies: ${pregnancy.pregnancies.number}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Miscarriages: ${pregnancy.miscarriages.number}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Full Term: ${pregnancy.fullTermBirths.number}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Abortions: ${pregnancy.abortions.number}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Cesareans: ${pregnancy.cesarean.number}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Living Children: ${pregnancy.livingChildren.number}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Pregnancy Issues: ${pregnancy.pregnancyIssues.history}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Notes: ${pregnancy.pregnancyIssues.notes}`}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Pregnancy;
