import React, {Fragment} from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '~/components/customButton';
import CustomText from '~/components/customText';
import styles from '../style';
import moment from 'moment';
import Constant from '~/utils/constants';
import {generateDateInfo} from '~/utils/helper';
import {
  setAppointmentDay,
  setAppointmentTime,
  getAppointmentsByDay,
  updateVisit,
} from '../action';

const {staticImages} = Constant.App;

const SheduleModal = ({
  appointmentType,
  appointmentData,
  calendarID,
  setShowShedule,
  showShedule,
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
  day,
  setDay,
  time,
  setTime,
  navigation,
  visit,
}) => {
  const dispatch = useDispatch();

  return (
    <View
      style={
        showShedule ? styles.showSheduleContainer : styles.sheduleContainer
      }>
      {showShedule && (
        <Fragment>
          <View>
            <TouchableOpacity
              onPress={() => {
                setShowShedule(!showShedule);
                setSelectedTime(null);
                setTime(null);
              }}>
              <Image
                resizeMode="contain"
                source={staticImages.rightChevronIcon}
                style={{
                  width: 20,
                  height: 40,
                  transform: [{rotate: '90deg'}],
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginBottom: 20,
            }}>
            <CustomText style={styles.firstAvaliable}>
              Select Appointment Date
            </CustomText>
            {showShedule && !appointmentData.dates ? (
              <ActivityIndicator size="large" color="#008AFC" />
            ) : (
              <FlatList
                showsHorizontalScrollIndicator={false}
                keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
                keyboardShouldPersistTaps={
                  Platform.OS === 'ios' ? 'never' : 'always'
                }
                data={appointmentData.dates}
                horizontal={true}
                decelerationRate={'fast'}
                extraData={selectedDate}
                renderItem={({item, index}) => {
                  item = generateDateInfo(item.date);
                  return (
                    <View
                      style={{
                        height: 180,
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: 10,
                      }}>
                      <CustomText
                        style={
                          selectedDate === item.date
                            ? {color: Constant.App.colors.blueColor}
                            : {color: 'black'}
                        }>
                        {item.month}
                      </CustomText>
                      <CustomButton
                        buttonStyle={
                          selectedDate === item.date
                            ? styles.dateSelectedContainerStyle
                            : styles.dateContainerStyle
                        }
                        textStyle={
                          selectedDate === item.date
                            ? styles.dateSelectedTextStyle
                            : styles.dateTextStyle
                        }
                        onPress={() => {
                          dispatch(getAppointmentsByDay({...item, calendarID, appointmentType}));
                          setSelectedDate(item.date);
                          setTime(null);
                          setSelectedTime(null);
                          setDay(item.date);
                          dispatch(setAppointmentDay(item.date));
                        }}
                        text={item.day}
                      />
                      <CustomText
                        style={
                          selectedDate === item.date
                            ? {color: Constant.App.colors.blueColor}
                            : {color: 'black'}
                        }>
                        {item.dow}
                      </CustomText>
                    </View>
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            )}

            <CustomText style={styles.firstAvaliable}>
              Select Appointment Time
            </CustomText>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}>
              {showShedule &&
                appointmentData.appointments.future &&
                appointmentData.appointments.future.map((item, i) => {
                  const selected = selectedTime === i;

                  return (
                    <CustomButton
                      key={item.time}
                      buttonStyle={
                        selected
                          ? styles.dateTimeSelectedSlotContainerStyle
                          : styles.dateTimeSlotContainerStyle
                      }
                      textStyle={
                        selected
                          ? styles.dateTimeSelectedSlotTextStyle
                          : styles.dateTimeSlotTextStyle
                      }
                      onPress={() => {
                        setSelectedTime(i);
                        setTime(item.time);
                        dispatch(setAppointmentTime(item.time));
                      }}
                      text={moment(item.time).format('h:mm a')}
                    />
                  );
                })}
            </ScrollView>
          </View>
        </Fragment>
      )}
      <TouchableOpacity
        onPress={() =>
          day && time
            ? dispatch(updateVisit({data: {...visit, time}, navigation}))
            : setShowShedule(!showShedule)
        }
        style={
          day && time
            ? styles.noSelectedContainerStyle
            : styles.noContainerStyle
        }>
        <Text
          style={day && time ? styles.noSelectedTextStyle : styles.noTextStyle}>
          {showShedule ? 'Confirm' : 'See Full Schedule'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SheduleModal;
