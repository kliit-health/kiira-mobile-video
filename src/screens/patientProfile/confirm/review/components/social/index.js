import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const Social = ({social}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Social History</Text>
        {expand && (
          <View>
            <Text style={styles.subtitle}>
              {`Smoker: \n\n\t History: ${social.smoke.history} \n\n\t Notes: ${social.smoke.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Alcohol: \n\n\t History: ${social.alcohol.history} \n\n\t Notes: ${social.alcohol.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Drugs: \n\n\t History: ${social.drugs.history} \n\n\t Notes: ${social.drugs.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Caffine: \n\n\t History: ${social.caffine.history} \n\n\t Notes: ${social.caffine.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Not safe at Home: \n\n\t Unsafe: ${social.safe.history} \n\n\t Notes: ${social.safe.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Domestic Abuse: \n\n\t History: ${social.abuse.history} \n\n\t Notes: ${social.abuse.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Current Abuse: \n\n\t History: ${social.currentAbuse.history} \n\n\t Notes: ${social.currentAbuse.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Marital Status: \n\n\t Married: ${social.status.married} \n\n\t Single: ${social.status.single} \n\n\t Divorced: ${social.status.divorced} \n\n\t Widowed: ${social.status.widowed} \n\n\t Significantly Involved: ${social.status.involved} \n\n\t Domestic Partner: ${social.status.partner}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Education: \n\n\t High School: ${social.education.highSchool} \n\n\t College: ${social.education.college} \n\n\t Graduate Degree: ${social.education.graduate} \n\n\t Other: ${social.education.other}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Exercise: \n\n\t History: ${social.exercise.history} \n\n\t Notes: ${social.exercise.notes}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Diet: \n\n\t History: ${social.diet.history} \n\n\t Notes: ${social.diet.notes}`}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default Social;
