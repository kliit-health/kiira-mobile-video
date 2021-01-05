import React, {useState} from 'react';
import {View, Image, Text, Modal, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import CustomButton from '../../../../components/customButton';
import styles from '../styles';
import {cancelAppointment} from '../../../appointments/expert/action';
import {withNavigation} from 'react-navigation';

const VisitDetails = ({navigation, visit, ...props}) => {
  const dispatch = useDispatch();
  let today = moment().startOf('day');
  let appointment = moment(visit.time).format('YYYY-MM-DD');
  let daysUntilVisit = Math.abs(
    moment.duration(today.diff(appointment)).asDays(),
  );

  let [visible, setVisible] = useState(false);

  const data = {
    uid: visit.uid,
    id: visit.id,
    expert: visit.expert,
  };

  return (
    <View style={{alignSelf: 'center'}}>
      <View style={styles.visitDetailsParentContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                resizeMode="contain"
                style={styles.modalImage}
                source={require('../../../../../assets/logo.png')}
                activeOpacity={0.7}
              />
              <Text style={styles.modalText}>
                Are you sure you want to cancel this appointment?
              </Text>
              <View style={styles.modalButtonContainer}>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    setVisible(!visible);
                  }}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    dispatch(cancelAppointment(data));
                    setVisible(!visible);
                    navigation.navigate('BottomTabExpert');
                  }}>
                  <Text style={styles.textStyle}>Confirm</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.visitDetailsTitle}>Your Next Appointment</Text>
        <View style={{flexDirection: 'row', margin: 26}}>
          <Image
            style={styles.locationImage}
            source={require('../../../../../assets/blue_location.jpg')}
            activeOpacity={0.7}
          />
          <View style={styles.informationContainer}>
            <Text style={styles.informationTitle}>Location: Virtual Visit</Text>
            <Text style={styles.informationTitle}>Duration: 30 Minutes</Text>
            <Text style={styles.informationText}>{`Your next appointment is ${
              daysUntilVisit > 0 ? `in ${daysUntilVisit} days.` : 'today.'
            }`}</Text>
          </View>
        </View>
        <CustomButton
          buttonStyle={styles.noContainerStyle}
          textStyle={styles.noTextStyle}
          onPress={() => {
            navigation.navigate('ExpertLoginScreen', {visit: visit});
          }}
          text="Start Visit"
        />
        <CustomButton
          buttonStyle={styles.noContainerStyle}
          textStyle={styles.noTextStyle}
          onPress={() => setVisible(!visible)}
          text="Cancel Visit"
        />
      </View>
    </View>
  );
};

export default withNavigation(VisitDetails);
