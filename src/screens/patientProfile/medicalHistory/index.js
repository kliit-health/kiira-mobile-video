import React from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ExpertHeader from '../../../components/expertHeader';
import Section from '../components/section';
import Sections from './model';
import styles from './style';

const MedicalHistory = ({navigation}) => {
  const medicalHistory = useSelector((state) => state.medicalHistory);

  return (
    <View style={styles.container}>
      <ExpertHeader title="Patient Profile " />
      <ScrollView>
        <View style={styles.infoContainer}>
          {Sections.map((section) => (
            <Section
              key={section.title}
              navigation={navigation}
              title={section.title}
              image={section.image}
              screen={section.screen}
              complete={
                section.complete
                  ? medicalHistory[section.complete].complete
                  : false
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MedicalHistory;
