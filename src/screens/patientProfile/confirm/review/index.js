import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';

import Warning from './components/warning';
import Pregnancy from './components/pregnancy';
import GYN from './components/gyn';
import PMH from './components/pmh';
import Surgical from './components/surgical';
import Medications from './components/medication';
import Allergies from './components/allergies';
import Social from './components/social';
import Family from './components/family';
import Notes from '../../components/notes';

const Review = ({}) => {
  const medicalHistory = useSelector((state) => state.medicalHistory);
  const {
    pregnancy,
    gyn,
    pmh,
    surgical,
    medications,
    allergies,
    social,
    family,
  } = medicalHistory;

  return (
    <View style={styles.container}>
      <Warning />
      <Pregnancy pregnancy={pregnancy} />
      <GYN gyn={gyn} />
      <PMH pmh={pmh} />
      <Surgical surgical={surgical} />
      <Medications medications={medications} />
      <Allergies allergies={allergies} />
      <Social social={social} />
      <Family family={family} />
      <Notes title="Private Notes" type="privateNotes" />
      <Notes title="Patient Notes" type="patientNotes" />
    </View>
  );
};

export default Review;
