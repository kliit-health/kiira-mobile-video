import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import CustomText from '../../../components/customText';
import {getAppointmentsList} from './action';
import {withNavigation} from 'react-navigation';
import Visit from './components/visit';
import {generateDateInfo} from '../../../utils/helper';
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

  useEffect(() => {
    dispatch(getAppointmentsList({uid: userData.uid}));
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
      console.log('VISITS ARRAY', record);
      setVisits([...record]);
    }
  }, [visitData]);
  console.log('VISIT DATA', visits);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainerStyle}>
        <CustomText style={styles.titleTextStyle}>{'Kiira Video'}</CustomText>
      </View>
      {visits.length > 0 ? (
        <View style={styles.parentContainerStyle}>
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
              return <Visit visit={item} date={date} navigation={navigation} />;
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
  );
};

export default withNavigation(ExpertAppointments);
