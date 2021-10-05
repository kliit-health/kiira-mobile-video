import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '~/components';
import { shallowEqual, useSelector } from 'react-redux';
import styles, { buttonStyles } from './styles';

const Book = () => {
    const lang = useSelector(state => state.language.book, shallowEqual);

    const handleSchedule = (id: string) => {
        console.log(id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{lang.bookVisit}</Text>
            <View style={styles.actions}>
                <Button
                    test="mentalHealth"
                    style={buttonStyles}
                    onPress={handleSchedule}
                    title={lang.mentalHealth}
                    id="mentalHealth"
                />
                <Button
                    test="primaryCare"
                    style={buttonStyles}
                    onPress={handleSchedule}
                    title={lang.primaryCare}
                    id="primaryCare"
                />
                <Button
                    test="womensHealth"
                    style={buttonStyles}
                    onPress={handleSchedule}
                    title={lang.womensHealth}
                    id="womensHealth"
                />
            </View>
        </View>
    );
};

export default Book;
