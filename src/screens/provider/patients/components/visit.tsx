import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '~/components/customButton';
import CancelModal from './cancelModal';
import { Visit, Date } from 'typescript/types';
import styles from '../style';

const VisitCard = ({ visit, date }) => {
  let [visible, setVisible] = useState(false);
  const { firstName, lastName, reason, appointmentType }: Visit = visit;
  const {
    dow,
    month,
    day,
    hour: { time, am_pm },
  }: Date = date;

  const duration = appointmentType
    ? appointmentType.duration
    : reason.sessionType.duration;

  const chiefComplaint = typeof reason === 'string' ? reason : reason.reason;

  return (
    <View style={{ alignSelf: 'center' }}>
      <View style={styles.visitContainer}>
        <CancelModal visit={visit} visible={visible} setVisible={setVisible} />
        <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.title}>{`CC: ${chiefComplaint}`}</Text>
        <View style={styles.detailContainer}>
          <View style={styles.detail}>
            <Text style={styles.detailText}>{dow} </Text>
            <Text>{`${month} ${day}`}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}>{time} </Text>
            <Text>{am_pm} </Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText}>{duration}</Text>
            <Text>MIN </Text>
          </View>
        </View>
        <CustomButton
          buttonStyle={styles.cancelButton}
          textStyle={styles.cancelButtonText}
          onPress={() => setVisible(!visible)}
          text="Cancel"
        />
      </View>
    </View>
  );
};

export default VisitCard;
