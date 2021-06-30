import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '~/components';
import { assessment } from '~/utils/constants';
import styles from '../styles';

const NewUser = () => {
    return (
        <View style={styles.newUser}>
            <Text style={styles.title}>{assessment.initial}</Text>
            <Button text={'Yes, lets do it'} />
        </View>
    );
};

export default NewUser;
