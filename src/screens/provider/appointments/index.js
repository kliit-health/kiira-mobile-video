import React, {useState, useEffect} from 'react';
import {ScrollView, View, FlatList, Text, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomText from '../../../components/customText';
import {Header, Container, SearchBar} from '../../../components';
import CustomButton from '../../../components/customButton';
import Constant from '../../../utils/constants';
import ErrorBoundary from 'react-native-error-boundary';
import {getAppointmentsList} from './action';
import Visit from './components/visit';
import {generateDateInfo, getDateRange} from '../../../utils/helper';
import {clearMedicalHistory} from './patientProfile/actions';
import {screenNames} from '../../../utils/constants';
import moment from 'moment';
import _ from 'lodash';
import styles, {modifiers} from './styles';

const ExpertAppointments = ({navigation}) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const uid = useSelector((state) => state.authLoading.userData.uid);
  const visitData = useSelector((state) => state.expertAppointments.history);

  const [visits, setVisits] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);
  const [search, setSearch] = useState(visits);

  useEffect(() => {
    dispatch(clearMedicalHistory());
  }, []);

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
    dispatch(
      getAppointmentsList({
        uid,
      }),
    );
  }, [selectedDate]);

  useEffect(() => {
    let record = _.flatten(visitData);
    if (record.length > 1 && selectedDate) {
      let filtered = record.filter((visit) => {
        let appointment = moment(visit.time);
        let now = moment(new Date());
        if (appointment.diff(now, 'hours') >= -1) {
          return visit;
        }
      });

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
      setSearch([...current]);
    } else {
      setVisits([...record]);
      setSearch([...record]);
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

  const handleSearch = (term) => {
    setSearch(term);

    let filtered = [...visits];

    if (term) {
      filtered = filtered.filter(({firstName, lastName}) => {
        if (firstName.includes(term) || lastName.includes(term)) return true;
      });
    }
    setSearch([...filtered]);
  };

  const FallBack = () => <View></View>;

  return (
    <Container unformatted styles={modifiers.container} themed>
      <StatusBar barStyle="light-content" translucent={true} />
      <Header title={lang.expertAppointments.title} themed />
      <SearchBar
        styles={modifiers.searchBar}
        onChange={handleSearch}
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
            data={search}
            decelerationRate={'fast'}
            extraData={selectedDate}
            renderItem={({item, index}) => (
              <ErrorBoundary FallbackComponent={FallBack}>
                <Visit
                  key={item.uid}
                  onPress={handleVisitPress}
                  visit={item}
                  {...item}
                />
              </ErrorBoundary>
            )}
            keyExtractor={(index) => `${index.id}`}
            contentContainerStyle={styles.appointmentsList}
          />
        ) : (
          <Text style={styles.title}>
            {lang.expertAppointments.noVisitsToday}
          </Text>
        )}
      </ScrollView>
    </Container>
  );
};

export default ExpertAppointments;
