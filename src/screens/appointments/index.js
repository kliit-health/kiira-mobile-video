import React, {useState, useEffect, Fragment} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {useDispatch, useSelector} from 'react-redux';
import styles, {modifiers} from './style';
import {Container, Header, TextButton, RatingModal} from '../../components';
import {screenNames} from '../../utils/constants';
import {getAppointmentsList} from './action';
import Visit from './components/visit';
import {generateDateInfo} from '../../utils/helper';
import moment from 'moment';
import intl from '../../utils/localization';

const Appointments = ({navigation}) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.authLoadingReducer.userData);
  const visitData = useSelector((state) => state.appointmentsReducer);
  const completedCall = useSelector((state) => state.visitReducer);
  const {previousRoute} = useSelector((state) => state.navigator);
  const [visits, setVisits] = useState([]);

  const showRating = previousRoute === 'MainCallScreen';

  useEffect(() => {
    dispatch(getAppointmentsList({uid: userData.uid}));
  }, []);

  useEffect(() => {
    let filtered = visitData.history.filter((visit) =>
      moment(visit.time).isSameOrAfter(new Date()),
    );

    filtered = filtered.sort((a, b) => {
      return (
        parseInt(moment(a.time).format('x')) -
        parseInt(moment(b.time).format('x'))
      );
    });

    setVisits(filtered);
  }, [visitData]);

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Upcoming Visits"
        onBack={() => navigation.navigate('BottomTab')}
      />
      {showRating && (
        <RatingModal
          title="Your Telemedicine visit has ended"
          description="Please rate your visit"
          visible={showRating}
        />
      )}
      {visits.length > 0 ? (
        <Fragment>
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
                <ErrorBoundary onError={() => navigation.navigate('BottomTab')}>
                  <Visit visit={item} date={date} navigation={navigation} />
                </ErrorBoundary>
              );
            }}
            keyExtractor={(index) => `${index.id}`}
          />
        </Fragment>
      ) : (
        <Container>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../../assets/bell.png')}
          />
          <Text style={styles.title}>{intl.en.appointments.noVisits}</Text>
          <TextButton
            styles={modifiers.button}
            onPress={() => handleNavigation(screenNames.requestVisit)}>
            {intl.en.appointments.scheduleAppointment}
          </TextButton>
        </Container>
      )}
    </View>
  );
};

export default Appointments;
