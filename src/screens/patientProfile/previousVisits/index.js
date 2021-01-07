import React, {Fragment, useEffect} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import PatientCard from '../components/patientCard';
import {useSelector, useDispatch} from 'react-redux';
import ExpertHeader from '../../../components/expertHeader';
import {getMedicalHistory} from '../actions';
import moment from 'moment';

import styles from './style';

const PreviousVisits = ({navigation}) => {
  const dispatch = useDispatch();
  const medicalHistory = useSelector((state) => state.medicalHistory);

  const {
    appointment: {
      patientInfo: {uid},
      visit,
    },
    history,
  } = medicalHistory;

  useEffect(() => {
    dispatch(getMedicalHistory(uid));
  }, []);

  const Visit = ({item}) => {
    const {
      appointment: {visit},
    } = item;
    return (
      <Fragment>
        <View style={styles.infoContainer}>
          <FastImage
            defaultSource={require('../../../../assets/profile_img_placeholder.png')}
            containerStyle={{alignSelf: 'center'}}
            style={{
              marginHorizontal: 5,
              width: 60,
              height: 60,
              borderRadius: 50,
            }}
            source={{uri: visit.expert.imageUrl}}
            activeOpacity={0.7}
          />
          <View style={styles.detailsContainer}>
            <Text>{`Provider: ${visit.expert.firstName} ${visit.expert.lastName}`}</Text>
            <Text>{`CC: ${visit.reason}`}</Text>
            <Text>{`${moment(visit.time).format('llll')}`}</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Recap', {item, title: 'Recap'})
                }>
                <Text style={{...styles.textStyle, color: '#2196F3'}}>
                  Full Notes
                </Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Recap', {
                    item,
                    short: true,
                    title: 'Summary',
                  })
                }>
                <Text style={{...styles.textStyle, color: '#2196F3'}}>
                  Summary
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Fragment>
    );
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Previous Visits" />
      <PatientCard
        visit={visit}
        patientInfo={medicalHistory.appointment.patientInfo}
      />
      {history.length ? (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index}
          renderItem={Visit}
        />
      ) : null}
    </View>
  );
};

export default PreviousVisits;
