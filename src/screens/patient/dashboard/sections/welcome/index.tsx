import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import styles from './styles';

export type WelcomeProps = {
    displayName: string;
};

const Welcome = ({ displayName }: WelcomeProps): JSX.Element => {
    const lang = useSelector(state => state.language);
    return (
        <View style={styles.container}>
            <Text
                style={styles.title}
            >{`${lang.dashboard.hiName} ${displayName}`}</Text>
        </View>
    );
};

export default Welcome;
