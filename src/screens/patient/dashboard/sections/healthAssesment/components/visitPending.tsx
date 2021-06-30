import React from 'react';
import { View, Text } from 'react-native';
import { VideoChat } from '~/svgs';
import styles from '../styles';
import { assessment } from '~/utils/constants';
import { pending } from './models';

const Pending = () => {
    return (
        <View style={styles.pending}>
            <View style={{ flexDirection: 'row' }}>
                <VideoChat style={styles.pendingIcon} />
                <View>
                    <Text style={styles.pendingTitle}>
                        {assessment.pending}
                    </Text>
                    <Text style={styles.pendingSubTitle}>
                        {'Fri, Jun 25 at 4:30 PM'}
                    </Text>
                </View>
            </View>
            <View style={styles.actionItems}>
                {pending.map(({ title }) => {
                    return (
                        <View key={title} style={{ flexDirection: 'row' }}>
                            <Text style={styles.actionItem}>
                                {'\u2022' + '   '}
                            </Text>
                            <Text style={styles.actionItem}>{title}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default Pending;
