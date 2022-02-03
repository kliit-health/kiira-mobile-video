import React, { useState, useEffect } from 'react';
import Image from 'react-native-fast-image';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { switchCase } from '~/utils/functions';
import { Reminder, Book, Schedule } from './sections';
import styles from './styles';


enum Action {
    Book,
    Reminder,
    Schedule,
}

const Banner = () => {
    const assessment = useSelector(state => state.user.data.assessment);
    const [action, setAction] = useState<Action | undefined>(Action.Schedule);

    useEffect(() => {
        if (!assessment) {
            setAction(Action.Schedule);
        }

        if (assessment && !assessment.complete) {
            setAction(Action.Reminder);
        }

        if (assessment && assessment.complete) {
            setAction(Action.Book);
        }
    }, [assessment]);

    return (
        <View style={styles.container}>
            <Image
                resizeMode="cover"
                style={styles.background}
                source={require('~/assets/images/banner-background.png')}
            />
            {switchCase({
                [Action.Book]: <Book />,
                [Action.Reminder]: <Reminder />,
                [Action.Schedule]: <Schedule />,
            })(null)(action)}
        </View>
    );
};

export default Banner;
