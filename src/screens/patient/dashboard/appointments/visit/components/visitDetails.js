import React from 'react';
import {View, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import CustomButton from '../../../../../../components/customButton';
import styles from '../styles';
import {getLogin} from '../actions';
import {withNavigation} from 'react-navigation';

const VisitDetails = ({visit}) => {
  const dispatch = useDispatch();
  let today = moment().startOf('day');
  let appointment =
    typeof visit.time === 'number'
      ? moment.unix(visit.time).format('MM/DD/YYYY')
      : moment(visit.time).format('YYYY-MM-DD');
  let daysUntilVisit = Math.abs(
    moment.duration(today.diff(appointment)).asDays(),
  );

  // To test video after booking
  // let daysUntilVisit = 0;

  return (
    <View style={{alignSelf: 'center'}}>
      <View style={styles.visitDetailsParentContainer}>
        <Text style={styles.visitDetailsTitle}>Your Next Appointment</Text>
        <View style={{flexDirection: 'row', margin: 26}}>
          <View style={styles.expertImageContainer}>
            <Image
              style={styles.locationImage}
              source={require('../../../../../../../assets/blue_location.jpg')}
              activeOpacity={0.7}
            />
            <View style={styles.informationContainer}>
              <Text style={styles.informationTitle}>
                Location: Virtual Visit
              </Text>
              <Text style={styles.informationTitle}>Duration: 30 Minutes</Text>
              <Text style={styles.informationText}>
                {`Your visit should be starting\n${
                  daysUntilVisit > 0
                    ? `in ${Math.round(daysUntilVisit)} days.`
                    : 'today.'
                } Please return to this screen and enter the waiting room at least 5 minutes before your appointment time.`}
              </Text>
            </View>
          </View>
        </View>
        <CustomButton
          disabled={Math.round(daysUntilVisit) > 0}
          buttonStyle={
            Math.round(daysUntilVisit) > 0
              ? styles.noContainerDisabledStyle
              : styles.noContainerStyle
          }
          textStyle={
            Math.round(daysUntilVisit) > 0
              ? styles.noTextDisabledStyle
              : styles.noTextStyle
          }
          onPress={() => dispatch(getLogin({destination: 'VideoLogin', visit}))}
          text="Enter Waiting Room"
        />
      </View>
    </View>
  );
};

export default withNavigation(VisitDetails);
