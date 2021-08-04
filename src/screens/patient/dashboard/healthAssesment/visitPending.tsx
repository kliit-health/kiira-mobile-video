import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { VideoChat } from '~/svgs';
import styles from './styles';
import { pending } from './models';

const Pending = () => {
  const { assessment } = useSelector(state => state.user.data);

  return (
    <View style={styles.pending}>
      <View style={{ flexDirection: 'row' }}>
        <VideoChat style={styles.pendingIcon} />
        <View>
          <Text style={styles.pendingTitle}>{pending.title}</Text>
          <Text style={styles.pendingSubTitle}>
            {moment(assessment.time).format('llll')}
          </Text>
        </View>
      </View>
      <View style={styles.actionItems}>
        {pending.items.map(({ title }) => {
          return (
            <View key={title} style={{ flexDirection: 'row' }}>
              <Text style={styles.actionItem}>{'\u2022' + '   '}</Text>
              <Text style={styles.actionItem}>{title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Pending;
