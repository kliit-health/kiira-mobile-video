import React, {useState, useEffect} from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomText from '../../../components/customText';
import {Header, Container, SearchBar} from '../../../components';
import CustomButton from '../../../components/customButton';
import Constant from '../../../utils/constants';
import {getAppointmentsList} from './action';
import Visit from './components/visit';
import {generateDateInfo, getDateRange} from '../../../utils/helper';
import intl from '../../../utils/localization';
import {screenNames} from '../../../utils/constants';
import moment from 'moment';
import _ from 'lodash';
import styles, {modifiers} from './styles';

const ExpertAppointments = ({navigation}) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.authLoadingReducer.userData.uid);
  const visitData = useSelector(
    (state) => state.expertAppointmentsReducer.history,
  );

  const [visits, setVisits] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    dispatch(
      getAppointmentsList({
        uid,
      }),
    );

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

      setVisits([...current], 'current');
    } else {
      setVisits([...record], 'record');
    }
  }, [visitData, selectedDate]);

  const handleVisitPress = (details) => {
    navigation.navigate(screenNames.patientProfile, {
      expert: details.expert,
      visit: details,
      patient: {
        uid: details.uid,
      },
    });
  };

  return (
    <Container unformatted styles={modifiers.container} themed>
      <Header title={intl.en.expertAppointments.title} themed />
      <SearchBar
        styles={modifiers.searchBar}
        onChange={(input) => console.log(input)}
        placeholder="Search"
      />
      <ScrollView style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
          keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
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
                  margin: 15,
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
          keyExtractor={(_, index) => index.toString()}
        />
        {visits.length > 0 ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
            keyboardShouldPersistTaps={
              Platform.OS === 'ios' ? 'never' : 'always'
            }
            data={visits}
            decelerationRate={'fast'}
            extraData={selectedDate}
            renderItem={({item, index}) => (
              <Visit key={item.uid} onPress={handleVisitPress} {...item} />
            )}
            keyExtractor={(index) => `${index.id}`}
            contentContainerStyle={styles.appointmentsList}
          />
        ) : (
          <Text style={styles.title}>
            {intl.en.expertAppointments.noVisitsToday}
          </Text>
        )}
      </ScrollView>
    </Container>
  );
};

export default ExpertAppointments;
