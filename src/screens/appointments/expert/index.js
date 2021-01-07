import React, {useState, useEffect} from 'react';
import {ScrollView, View, FlatList, Text, Image, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import CustomText from '../../../components/customText';
import {SearchBar} from 'react-native-elements';
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
      moment(new Date()).subtract(3, 'days'),
      moment().add(30, 'days'),
      'YYYY-MM-DD',
    ).reverse();
    setDates(dateRange);
    setSelectedDate(dateRange[3]);
  }, []);

  useEffect(() => {
    let record = _.flatten(visitData);
    if (record.length > 1 && selectedDate) {
      let filtered = record.filter((visit) =>
        moment(visit.time).isSameOrAfter(new Date()),
      );

      filtered = filtered.sort((a, b) => {
        return (
          parseInt(moment(a.time).format('x')) -
          parseInt(moment(b.time).format('x'))
        );
      });

      let current = filtered.filter((visit) => {
        return moment(visit.time).format('YYYY-MM-DD') === selectedDate;
      });

      setVisits([...current]);
    } else {
      setVisits([...record]);
    }
  }, [visitData, selectedDate]);

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#008AFC" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Upcoming Visits</Text>
      </View>
      <ScrollView style={styles.container}>
        <View>
          <SearchBar
            containerStyle={styles.searchBar}
            inputContainerStyle={{
              borderRadius: 10,
              backgroundColor: Constant.App.colors.greyBgAsk,
            }}
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
                  <View style={styles.dates}>
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
          </View>
          {visits.length > 0 ? (
            <View style={styles.appointmentContainerStyle}>
              <FlatList
                showsVerticalScrollIndicator={false}
                keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
                keyboardShouldPersistTaps={
                  Platform.OS === 'ios' ? 'never' : 'always'
                }
                data={visits}
                decelerationRate={'fast'}
                extraData={selectedDate}
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
            <View>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../../../../assets/logo.png')}
              />
              <Text style={styles.title}>
                You do not have any scheduled visits. Upcoming visits will be
                listed here.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default withNavigation(ExpertAppointments);
