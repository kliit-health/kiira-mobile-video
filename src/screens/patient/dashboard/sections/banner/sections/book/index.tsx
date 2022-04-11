import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '~/components';
import { shallowEqual, useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles, { buttonStyles } from './styles';
import { screenNames } from '~/utils/constants';

const Book = ({ navigation }) => {
    const lang = useSelector((state: any) => state.language.book, shallowEqual);

    const handleSchedule = () => {
        navigation.navigate(screenNames.Book);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{lang.bookVisit}</Text>
            <View style={styles.actions}>
                <Button
                    style={{container: [buttonStyles.container], title: [buttonStyles.title]}}
                    onPress={handleSchedule}
                    title={lang.mentalHealth}
                    id="mentalHealth"
                />
                <Button
                    style={{container: [buttonStyles.container], title: [buttonStyles.title]}}
                    onPress={handleSchedule}
                    title={lang.primaryCare}
                    id="primaryCare"
                />
                <Button
                    style={{container: [buttonStyles.container], title: [buttonStyles.title]}}
                    onPress={handleSchedule}
                    title={lang.womensHealth}
                    id="womensHealth"
                />
            </View>
        </View>
    );
};

export default withNavigation(Book);
