import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import ExpertHeader from '../../components/expertHeader';
import {screenNames} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {getUserDetails} from '../../redux/actions';
import {getPatientDetails} from './actions';
import styles from './style';

const PatientProfile = (props) => {
  let params = props.navigation.state.params;
  let {navigation} = props;
  let {uid, visit, patientInfo} = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(patientInfo.uid));
  }, []);

  useEffect(() => {
    dispatch(
      getPatientDetails({
        uid: patientInfo.uid,
      }),
    );
  }, []);

  const handleNavigation = (destination) => {
    navigation.push(destination, {
      uid: patientInfo.uid,
    });
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Patient Profile" />
      <View style={styles.profileContainer}>
        <Image
          defaultSource={require('../../../assets/profile_img_placeholder.png')}
          containerStyle={{alignSelf: 'center'}}
          style={{
            marginLeft: 5,
            width: 60,
            height: 60,
            borderRadius: 50,
          }}
          source={{uri: patientInfo.profileInfo.profileImageUrl}}
          activeOpacity={0.7}
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
                uid,
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
