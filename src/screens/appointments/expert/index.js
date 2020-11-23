import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import CustomText from '../../../components/customText';
import SearchBar from '../../../components/searchBar';
import CustomButton from '../../../components/customButton';
import Constant from '../../../utils/constants';
import {getAppointmentsList} from './action';
import {withNavigation} from 'react-navigation';
import Visit from './components/visit';
import {generateDateInfo, getDateRange} from '../../../utils/helper';
import moment from 'moment';
import _ from 'lodash';

const ExpertAppointments = (props) => {
  const {navigation} = props;
  const {staticImages} = Constant.App;
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.authLoadingReducer.userData);
  const visitData = useSelector(
    (state) => state.expertAppointmentsReducer.history,
  );

  const [visits, setVisits] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    dispatch(getAppointmentsList({uid: userData.uid}));
    const dateRange = getDateRange(
      moment(new Date()),
      moment().add(30, 'days'),
      'YYYY-MM-DD',
    ).reverse();
    setDates(dateRange);
    setSelectedDate(dateRange[0]);
  }, []);

  useEffect(() => {
    let record = _.flatten(visitData);
    if (record.length > 1) {
      let filtered = record.filter((visit) =>
        moment(visit.time).isSameOrAfter(new Date()),
      );

      filtered = filtered.sort((a, b) => {
        return (
          parseInt(moment(a.time).format('x')) -
          parseInt(moment(b.time).format('x'))
        );
      });

      setVisits([...filtered]);
    } else {
      setVisits([...record]);
    }
  }, [visitData]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#008AFC" />
      <View style={styles.titleContainerStyle}>
        <CustomText style={styles.titleTextStyle}>
          {'Upcoming Visits'}
        </CustomText>
      </View>
      <View style={styles.container}>
        <SearchBar
          onChange={(input) => console.log(input)}
          placeholder={'Search'}
        />
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
            keyboardShouldPersistTaps={
              Platform.OS === 'ios' ? 'never' : 'always'
            }
            data={dates}
            horizontal={true}
            decelerationRate={'fast'}
            extraData={selectedDate}
            renderItem={({item, index}) => {
              item = generateDateInfo(item);
              return (
                <View
                  style={{
                    height: 100,
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
                      setSelectedDate(item.date);
                      // setDay(item.date);
                      // dispatch(setAppointmentDay(item.date));
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
          {visits.length > 0 ? (
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
                keyboardShouldPersistTaps={
                  Platform.OS === 'ios' ? 'never' : 'always'
                }
                data={visits}
                decelerationRate={'fast'}
                renderItem={({item, index}) => {
                  const date = generateDateInfo(item.time);
                  return (
                    <Visit visit={item} date={date} navigation={navigation} />
                  );
                }}
                keyExtractor={(index) => `${index.id}`}
              />
            </View>
          ) : (
            <View style={styles.parentContainerStyle}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                resizeMode="contain"
                source={require('../../../../assets/bell.png')}
              />
              <Text style={styles.title}>You have no upcoming visits</Text>
              <Text style={styles.subtitle}>
                We'll notifiy you about upcoming appointments, new messages, and
                more
              </Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(ExpertAppointments);
