import React from 'react';
import {View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomButton from 'components/customButton';
import CustomText from 'components/customText';
import {Rating} from 'react-native-elements';
import styles from '../style';
import {useDispatch, useSelector} from 'react-redux';
import {cancelAppointment} from '../action';

const Appointment = ({visit, date, navigation}) => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const {uid, calendarID, appointmentType: {credits,duration}} = visit;
  const data = {
    uid: visit.uid,
    id: visit.id,
    expert: visit.expert,
    prepaid: visit.prepaid,
    credits: credits
  };

  return (
    <View style={{alignSelf: 'center', paddingBottom: 50}}>
      <View style={styles.myRecentExpertContainerStyle}>
        <View style={styles.expertContainer}>
          <View style={styles.expertImageContainer}>
            <FastImage
              style={styles.expertImage}
              defaultSource={require('../../../../../../assets/profile_img_placeholder.png')}
              source={{uri: visit.expert.imageUrl}}
              activeOpacity={0.7}
            />
          </View>
          <View>
            <View style={styles.expertName}>
              <Text style={styles.expertNameTextStyle}>
                {`${visit.expert.firstName} ${visit.expert.lastName}`}
              </Text>
            </View>
            <View style={styles.expertProfession}>
              <CustomText style={styles.expertProfessionTextStyle}>
                {visit.expert.profession}
              </CustomText>
              <View>
                <Image
                  style={styles.expertPrescriberImage}
                  source={require('../../../../../../assets/rx.png')}
                  resizeMode="contain"
                />
              </View>
              <CustomText style={styles.expertPrescriberTextStyle}>
                {lang.expertProfile.prescriber}
              </CustomText>
            </View>
            <View style={styles.expertIsPrescriber}>
              <Rating
                imageSize={20}
                readonly
                startingValue={parseFloat(visit.expert.rating / 2)}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
              {date.dow}{' '}
            </Text>
            <Text>{`${date.month} ${date.day}`}</Text>
          </View>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
              {date.hour.time}{' '}
            </Text>
            <Text>{date.hour.am_pm} </Text>
          </View>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>{duration} </Text>
            <Text>MIN </Text>
          </View>
        </View>
        <CustomButton
          buttonStyle={styles.yesContainerStyle}
          textStyle={styles.yesTextStyle}
          onPress={() => {
            navigation.navigate('Visit', {
              uid: visit.expert.uid,
              visit,
            });
          }}
          text="View Details"
        />

        <CustomButton
          buttonStyle={styles.noContainerStyle}
          textStyle={styles.noTextStyle}
          onPress={() =>
            navigation.navigate('RescheduleVisit', {
              visit,
              date,
              navigation,
              uid,
              calendarID,
            })
          }
          text="Reschedule Appointment"
        />
        <CustomButton
          buttonStyle={styles.noContainerStyle}
          textStyle={styles.noTextStyle}
          onPress={() => dispatch(cancelAppointment(data))}
          text="Cancel Appointment"
        />
      </View>
    </View>
  );
};

export default Appointment;
