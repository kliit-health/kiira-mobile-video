import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Image from 'react-native-fast-image';
import ExpertHeader from '../../components/expertHeader';
import {screenNames} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails} from '../../redux/actions';
import {getPatientDetails} from './actions';
import styles from './style';
import {Avatar} from '../../components';

const PatientProfile = ({navigation}) => {
  const {expert, visit, patient} = navigation.state.params;

  const dispatch = useDispatch();
  const patientInfo = useSelector((state) => state.userDetails.data);

  useEffect(() => {
    dispatch(getUserDetails(patient.uid));
  }, []);

  useEffect(() => {
    dispatch(
      getPatientDetails({
        uid: patient.uid,
      }),
    );
  }, []);

  const handleNavigation = (destination) => {
    navigation.push(destination, {
      uid: patient.uid,
    });
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Patient Profile" />
      <View style={styles.profileContainer}>
        <Avatar
          size="small"
          source={patientInfo ? patientInfo.profileInfo.profileImageUrl : ''}
        />
        <View>
          <Text style={styles.name}>
            {`${visit.firstName} ${visit.lastName}`}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() => handleNavigation(screenNames.personalInformation)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/HPI.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Personal Information</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MedicalHistoryExpert', {
                uid: expert.uid,
                visit,
                patientInfo,
              })
            }>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/firstaid.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Medical History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PersonalMedicalHistory')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/notes.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Patient Notes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleNavigation(screenNames.consent)}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/agreement.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Consent Agreements</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PatientProfile;
