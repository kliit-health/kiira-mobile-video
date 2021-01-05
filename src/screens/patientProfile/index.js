import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import ExpertHeader from '../../components/expertHeader';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {screenNames} from '../../utils/constants';
import {getUserDetails} from '../../redux/actions';
import {getPatientDetails} from './actions';
import {withNavigation} from 'react-navigation';
import styles from './style';

const PatientProfile = (props) => {
  let {navigation} = props;
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const medicalHistory = useSelector((state) => state.medicalHistory);
  const {
    appointment: {visit, patientInfo},
  } = medicalHistory;

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
        <FastImage
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
          <Text style={styles.reason}>Chief Complaint:</Text>
          <Text style={styles.reason}>{`${visit.reason}`}</Text>
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
            onPress={() => {
              if (!visit.locked) {
                navigation.navigate('MedicalHistoryExpert');
              } else {
                setModalVisible(!modalVisible);
              }
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/firstaid.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Medical History</Text>
              <View style={styles.check}>
                {visit.locked && (
                  <Image
                    resizeMode="contain"
                    containerStyle={{alignSelf: 'center'}}
                    style={styles.icon}
                    source={require('../../../assets/lock.png')}
                    activeOpacity={0.7}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PreviousVisits')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/notes.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Previous Visits</Text>
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
          <TouchableOpacity onPress={() => handleNavigation('VisitExpert')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                containerStyle={{alignSelf: 'center'}}
                style={styles.icon}
                source={require('../../../assets/phone.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.info}>Video Visit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Important !</Text>
            <Text style={styles.subtitle}>
              This record has been locked, please view paitent notes for a
              detailed view of previous visits.
            </Text>
            <Pressable
              style={styles.cancelButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={{...styles.textStyle, color: '#2196F3'}}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default withNavigation(PatientProfile);
