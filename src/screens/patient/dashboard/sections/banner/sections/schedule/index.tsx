import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from '~/components';
import { shallowEqual, useSelector } from 'react-redux';
import styles, { buttonStyles } from './styles';
import { route } from '~/utils/constants';

const Schedule = ({ navigation }) => {
    const lang = useSelector(state => state.language.schedule, shallowEqual);

    const handleSchedule = () => {
        navigation.navigate(route.healthAssesmentSchedule);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{lang.schedule}</Text>
            <Button
                style={buttonStyles}
                onPress={handleSchedule}
                title={lang.letsDoIt}
            />
        </View>
    );
};

export default withNavigation(Schedule);
