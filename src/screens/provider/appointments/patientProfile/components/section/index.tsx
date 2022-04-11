import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';
import styles from './style';
import Constant from '~/utils/constants';

const Section = ({
    title,
    image,
    complete,
    screen,
    navigation,
    data,
    lock,
    visit,
}) => {
    const { staticImages } = Constant.App;

    return (
        <Pressable
            onPress={() =>
                lock
                    ? navigation.navigate(screen, { item: { ...data }, visit })
                    : navigation.navigate(screen, { visit })
            }
        >
            <View style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    style={styles.icon}
                    source={staticImages[image]}
                />
                <Text style={styles.info}>{title}</Text>
                <View style={styles.check}>
                    {complete && (
                        <Image
                            style={styles.icon}
                            source={require('../../../../../../../assets/check.png')}
                        />
                    )}
                </View>
            </View>
        </Pressable>
    );
};

export default Section;
