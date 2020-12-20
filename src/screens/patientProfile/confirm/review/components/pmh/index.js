import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from '../../style';

const PMH = ({pmh}) => {
  const [expand, setExpand] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setExpand(!expand)} style={styles.section}>
        <Text style={styles.title}>Past Medical History</Text>
        {expand && (
          <View>
            <Text style={styles.subtitle}>
              {`Major Illnesses: \n\n\t Heart Disease: ${pmh.disease.heartDisease} \n\n\t High Cholesterol: ${pmh.disease.highCholesterol} \n\n\t Hepatitis: ${pmh.disease.hepatitis} \n\n\t Liver Problems: ${pmh.disease.liverProblems} \n\n\t Kidney Infections / Stones: ${pmh.disease.kidneyProblems} \n\n\t Arthritis: ${pmh.disease.arthritis} \n\n\t Joint Pain: ${pmh.disease.jointPain} \n\n\t Fracture: ${pmh.disease.fracture} \n\n\t Anxiety: ${pmh.disease.anxiety} \n\n\t Depression: ${pmh.disease.depression} \n\n\t Seizures: ${pmh.disease.seizures} \n\n\t Asthma: ${pmh.disease.asthma} \n\n\t Lung Disease: ${pmh.disease.lungProblems} \n\n\t Tuberculosis: ${pmh.disease.tuberculosis} \n\n\t Thyroid Disease: ${pmh.disease.thyroidDisease} \n\n\t Clotting Disorder: ${pmh.disease.clottingDisorder} \n\n\t Diabetes: ${pmh.disease.diabetes} \n\n\t High Blood Pressure: ${pmh.disease.highBloodPressure} \n\n\t GI Reflux Disease: ${pmh.disease.giReflux} \n\n\t Other GI Disease: ${pmh.disease.giDisease} \n\n\t Fibroids: ${pmh.disease.fibroids} \n\n\t Endometriosos: ${pmh.disease.endometriosos} \n\n\t Osteopenia: ${pmh.disease.osteopenia} \n\n\t Osteoporosis: ${pmh.disease.osteoporosis} \n\n\t None: ${pmh.disease.none}`}
            </Text>
            <Text style={styles.subtitle}>
              {`Cancer: \n\n\t History: ${pmh.cancer.history} \n\n\t Notes: ${pmh.cancer.notes}`}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default PMH;
