import React, {Fragment, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ExpertHeader from '../../../components/expertHeader';
import {getMedicalHistory} from '../actions';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';

const PreviousVisits = ({navigation}) => {
  const dispatch = useDispatch();
  const medicalHistory = useSelector((state) => state.medicalHistory);
  const userDetails = useSelector((state) => state.userDetails);

  const {
    appointment: {
      patientInfo: {uid},
      visit,
    },
    history,
  } = medicalHistory;

  const {
    data: {
      profileInfo: {profileImageUrl},
    },
  } = userDetails;

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
      <View style={styles.profileContainer}>
        <FastImage
          defaultSource={require('../../../../assets/profile_img_placeholder.png')}
          containerStyle={{alignSelf: 'center'}}
          style={{
            marginLeft: 5,
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
          source={{uri: profileImageUrl}}
          activeOpacity={0.7}
        />
        <View>
          <Text style={styles.name}>
            {`${visit.firstName} ${visit.lastName}`}
          </Text>
          <Text style={styles.name}>Previous Visits</Text>
        </View>
      </View>
      {history.length ? (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index}
          renderItem={Visit}
        />
      ) : (
        <View>
          <Text>Text</Text>
        </View>
      )}
    </View>
  );
};

export default PreviousVisits;
