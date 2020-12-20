import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const Family = ({family}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Family History</Text>
        {expand && (
          <View>
            <Text style={styles.subtitle}>
              {`Major Illnesses: \n\n\t Heart Disease: ${family.illnesses.heartDisease} \n\n\t High Cholesterol: ${family.illnesses.highCholesterol} \n\n\t Hepatitis: ${family.illnesses.hepatitis} \n\n\t Liver Problems: ${family.illnesses.liverProblems} \n\n\t Kidney Infections / Stones: ${family.illnesses.kidneyProblems} \n\n\t Arthritis: ${family.illnesses.arthritis} \n\n\t Joint Pain: ${family.illnesses.jointPain} \n\n\t Fracture: ${family.illnesses.fracture} \n\n\t Anxiety: ${family.illnesses.anxiety} \n\n\t Depression: ${family.illnesses.depression} \n\n\t Seizures: ${family.illnesses.seizures} \n\n\t Asthma: ${family.illnesses.asthma} \n\n\t Lung Disease: ${family.illnesses.lungProblems} \n\n\t Tuberculosis: ${family.illnesses.tuberculosis} \n\n\t Thyroid Disease: ${family.illnesses.thyroidDisease} \n\n\t Clotting Disorder: ${family.illnesses.clottingDisorder} \n\n\t Diabetes: ${family.illnesses.diabetes} \n\n\t High Blood Pressure: ${family.illnesses.highBloodPressure} \n\n\t GI Reflux Disease: ${family.illnesses.giReflux} \n\n\t Other GI Disease: ${family.illnesses.giDisease} \n\n\t Fibroids: ${family.illnesses.fibroids} \n\n\t Endometriosos: ${family.illnesses.endometriosos} \n\n\t Osteopenia: ${family.illnesses.osteopenia} \n\n\t Osteoporosis: ${family.illnesses.osteoporosis} \n\n\t None: ${family.illnesses.none}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Cancer: \n\n\t History: ${family.cancer.history} \n\n\t Notes: ${family.cancer.notes}`}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
export default Family;
