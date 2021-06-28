import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import CustomButton from '~/components/customButton';
import {setVisit} from '../../../../patient/dashboard/appointments/visit/actions';
import styles from '../styles';
import {withNavigation} from 'react-navigation';
import CancelModal from './cancelModal';

const VisitDetails = ({navigation, visit}) => {
  const dispatch = useDispatch();
  let today = moment().startOf('day');
  let appointment = moment(visit.time).format('YYYY-MM-DD');
  let daysUntilVisit = Math.abs(
    moment.duration(today.diff(appointment)).asDays(),
  );

  let [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(setVisit(visit));
  });

  return (
    <View style={{alignSelf: 'center'}}>
      <View style={styles.visitDetailsParentContainer}>
        <Text style={styles.visitDetailsTitle}>Your Next Appointment</Text>
        <CancelModal visit={visit} visible={visible} setVisible={setVisible} />
        <View style={{flexDirection: 'row', margin: 26}}>
          <Image
            style={styles.locationImage}
            source={require('../../../../../../assets/blue_location.jpg')}
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
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate('ExpertTwillioLogin', {visit})}
          text="Start Visit"
        />
        <CustomButton
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonText}
          onPress={() => setVisible(!visible)}
          text="Cancel Visit"
        />
      </View>
    </View>
  );
};

export default withNavigation(VisitDetails);
