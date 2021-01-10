import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import Image from 'react-native-fast-image';
import ExpertHeader from '../../components/expertHeader';
import PatientCard from './components/patientCard';
import {screenNames} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails} from '../../redux/actions';
import {getPatientDetails} from './actions';
import {withNavigation} from 'react-navigation';
import styles from './style';

const PatientProfile = ({navigation}) => {
  const {expert, visit, patient} = navigation.state.params;
  const [modalVisible, setModalVisible] = useState(false);
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
      <PatientCard visit={visit} patientInfo={patientInfo} />
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
