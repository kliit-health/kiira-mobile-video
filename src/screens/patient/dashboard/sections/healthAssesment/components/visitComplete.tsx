import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
import { assessment } from '~/utils/constants';
import { complete } from './models';

const Complete = () => {
    return (
        <View style={styles.complete}>
            <Text style={styles.completeTitle}>{assessment.complete}</Text>
            <View style={styles.iconContainer}>
                {complete.map(({ title, Icon }) => {
                    return (
                        <View key={title} style={styles.completeItem}>
                            <Icon />
                            <Text style={styles.completeText}>{title}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default Complete;
