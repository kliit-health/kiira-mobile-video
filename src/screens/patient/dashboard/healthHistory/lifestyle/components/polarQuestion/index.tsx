import React from 'react';
import { View } from 'react-native';
import { PolarButton } from '~/components';
import styles from './styles';

export const PolarQuestion = ({ value, onPress }) => (
    <View style={styles.container}>
        <PolarButton variant="yes" selected={value} onPress={onPress} styles={{}}/>
        <PolarButton variant="no" selected={value == false} onPress={onPress} styles={{}}/>
    </View>
);
