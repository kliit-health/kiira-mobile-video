import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { shallowEqual, useSelector } from 'react-redux';
import { Button } from '~/components';
import { route } from '~/utils/constants';
import styles, { buttonStyles } from './styles';
import { RootState } from '~/redux/reducers';
import _ from 'lodash';

const Reminder = ({ navigation }) => {
  const lang = useSelector(state => state.language.reminder, shallowEqual);
  const assessment = useSelector(state => state.user.data.assessment);

  const today = moment().format('YYYY-MM-DD');
  const visits = useSelector((state: RootState) => state.appointments.history);
  const visitData = visits.filter(item =>
    moment(today).isSameOrBefore(moment(item.time).format('YYYY-MM-DD')),
  );
  const sortedDataByDate = _.sortBy(visitData, 'time');

  const handleView = () => {
    navigation.navigate(route.appointments);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{lang.nexAppointment}</Text>
      <View style={styles.appointment}>
        {visitData && sortedDataByDate && (
          <Text style={styles.time}>
            {sortedDataByDate
              ? moment(
                  sortedDataByDate && sortedDataByDate[0]
                    ? sortedDataByDate[0].time
                    : null,
                ).format('llll')
              : null}
          </Text>
        )}
        <Button style={buttonStyles} onPress={handleView} title={lang.view} />
      </View>
    </View>
  );
};

export default withNavigation(Reminder);
