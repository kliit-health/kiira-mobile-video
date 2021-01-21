import React from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
import CustomButton from '../../../components/customButton';
import CustomText from '../../../components/customText';
import {Rating} from 'react-native-elements';
import Language from '../../../utils/localization';
import Constant from '../../../utils/constants';
import styles from '../style';
import {getAppointmentsByDay} from '../action';
import moment from 'moment';

const lang = Language['en'];
const {staticImages} = Constant.App;

const ExpertInfo = ({
  expertData,
  appointmentData,
  setShowShedule,
  showShedule,
  generateDateInfo,
  setSelectedDate,
  today,
  setSelectedTime,
  setDay,
  setTime,
}) => {
  const dispatch = useDispatch();
  const {calendarID, appointments} = appointmentData;

  return (
    <View>
      <View style={styles.expertInfoParentContainerStyle}>
        <View style={styles.expertImageContainer}>
          <FastImage
            style={styles.expertImage}
            resizeMode="cover"
            source={{uri: expertData.profileInfo.profileImageUrl}}
            activeOpacity={0.7}
          />
          <View>
            <View style={styles.myRecentExpertContainerStyle}>
              <View style={styles.expertName}>
                <Text style={styles.expertNameTextStyle}>
                  {`${expertData.profileInfo.firstName} ${expertData.profileInfo.lastName}`}
                </Text>
              </View>
              <View style={styles.expertProfession}>
                <CustomText style={styles.expertProfessionTextStyle}>
                  {expertData.profileInfo.profession.shortName}
                </CustomText>
                <Image
                  style={styles.expertPrescriberImage}
                  source={require('../../../../assets/rx.png')}
                  resizeMode="contain"
                />
                <CustomText style={styles.expertPrescriberTextStyle}>
                  {lang.expertProfile.prescriber}
                </CustomText>
              </View>
              <View style={styles.expertIsPrescriber}>
                <Rating
                  imageSize={20}
                  readonly
                  startingValue={parseFloat(expertData.rating / 2)}
                />
              </View>
            </View>
            <View>
              <CustomText style={styles.availability}>
                Today's Availability
              </CustomText>
              {appointmentData.appointments.today.length ? (
                <View style={{marginLeft: -90, marginRight: 90}}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyboardDismissMode={
                      Platform.OS === 'ios' ? 'none' : 'on-drag'
                    }
                    keyboardShouldPersistTaps={
                      Platform.OS === 'ios' ? 'never' : 'always'
                    }
                    data={appointmentData.appointments.today}
                    horizontal={true}
                    decelerationRate={'fast'}
                    renderItem={({item, index}) => {
                      return (
                        <CustomButton
                          buttonStyle={styles.timeSlotContainerStyle}
                          textStyle={styles.timeSlotTextStyle}
                          onPress={() => {
                            var date = generateDateInfo(item);
                            setShowShedule(!showShedule);
                            dispatch(
                              getAppointmentsByDay({...date, calendarID}),
                            );
                            dispatch(setAppointmentTime(item.time));
                            setSelectedDate(today);
                            setSelectedTime(index);
                            setDay(date);
                            setTime(item.time);
                          }}
                          text={moment(item.time).format('h:mm a')}
                        />
                      );
                    }}
                    keyExtractor={(item, index) => index.toString()}
                  />
                </View>
              ) : appointments.todayLoading &&
                !appointmentData.appointments.today.length ? (
                <View alignSelf="flex-start">
                  <ActivityIndicator size="large" color="#008AFC" />
                </View>
              ) : (
                <CustomText style={styles.noAvailability}>
                  No appointments
                </CustomText>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpertInfo;
