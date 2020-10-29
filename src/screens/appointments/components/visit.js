import React, {Fragment} from 'react';
import {View, Text, Image} from 'react-native';
import CustomButton from '../../../components/customButton';
import CustomText from '../../../components/customText';
import {Rating} from 'react-native-elements';
import Language from '../../../utils/localization';
import styles from '../style';
import {useDispatch} from 'react-redux';
import {cancelAppointment} from '../action';
import moment from 'moment';

const lang = Language['en'];

const Visit = ({visit, date, navigation}) => {
  const dispatch = useDispatch();
  const {uid, calendarID} = visit;
  const data = {
    uid: visit.uid,
    id: visit.id,
    expert: visit.expert,
  };

  // const isAfter = moment(visit.time).isAfter(new Date());

  return (
    <View style={{alignSelf: 'center', paddingBottom: 50}}>
      <View style={styles.myRecentExpertContainerStyle}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.expertImageContainer}>
            <Image
              style={styles.expertImage}
              defaultSource={require('../../../../assets/profile_img_placeholder.png')}
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
                  source={require('../../../../assets/rx.png')}
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
              {date.dow}
            </Text>
            <Text>{`${date.month} ${date.day}`}</Text>
          </View>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>
              {date.hour.time}
            </Text>
            <Text>{date.hour.am_pm}</Text>
          </View>
          <View style={{alignItems: 'center', margin: 20}}>
            <Text style={{marginBottom: 10, fontWeight: 'bold'}}>30</Text>
            <Text>MIN</Text>
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

export default Visit;
