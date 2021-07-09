import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '~/components';
import { newUser } from './models';
import { toogleModal } from '~/redux/reducers/assessment';
import QuickModal from './quickModal';

import styles from '../styles';

const NewUser = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.newUser}>
            <Text style={styles.title}>{newUser.title}</Text>
            <Button
                text={newUser.button}
                onPress={() => dispatch(toogleModal())}
            />
            <QuickModal />
        </View>
    );
};

export default NewUser;
