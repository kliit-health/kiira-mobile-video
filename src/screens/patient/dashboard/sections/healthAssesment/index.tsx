import React from 'react';
import { View } from 'react-native';
import { Conditional } from '~/components';
import { useSelector } from 'react-redux';
import styles from './styles';
import NewUser from './components/newUser';
import Complete from './components/visitComplete';
import Pending from './components/visitPending';

const HealthAssessment = () => {
    const user = useSelector(state => state.user.data);

    return (
        <View style={styles.container}>
            <NewUser />
            <Complete />
            <Pending />
        </View>
    );
};

export default HealthAssessment;
