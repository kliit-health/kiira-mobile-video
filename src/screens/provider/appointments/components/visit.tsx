import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { TimeDisplay } from '~/components';
import { updateMedicalHistoryExpert } from '../patientProfile/actions';
import { getUserData } from '~/utils/firebase';
import Constant from '~/utils/constants';
import styles from './styles';

const Visit = props => {
  const { onPress, visit } = props;
  const { firstName, lastName, reason, time } = visit;
  const chiefComplaint = typeof reason === 'string' ? reason : reason.reason;
  const lang = useSelector(state => state.language);
  const dispatch = useDispatch();
  const [patientInfo, setPatientInfo] = useState(null);

  const handlePress = () => {
    dispatch(updateMedicalHistoryExpert(payload));
    if (onPress) {
      onPress(props);
    }
  };

  const payload = {
    appointment: {
      visit,
      patientInfo,
    },
  };

  useEffect(() => {
    try {
      const obj = {
        tableName: Constant.App.firebaseTableNames.users,
        uid: visit.uid,
      };
      getUserData(
        obj,
        querySnapshot => {
          const data = querySnapshot.data();
          setPatientInfo(data);
        },
        error => {
          console.log(error);
        },
      );
    } catch (error) {
      console.log(error);
    }

    return () => setPatientInfo(null);
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={handlePress}
    >
      <View style={styles.outerContainer}>
        <View>
          <Text style={styles.title}>
            {lang.expertAppointments.patientName}
          </Text>
          <Text style={styles.subtitle}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {lang.expertAppointments.subject}
          </Text>
          <Text numberOfLines={1} style={styles.subtitle}>
            {chiefComplaint}
          </Text>
        </View>
      </View>
      <TimeDisplay time={moment(time).format('hh:mm A')} />
    </TouchableOpacity>
  );
};

export default Visit;
