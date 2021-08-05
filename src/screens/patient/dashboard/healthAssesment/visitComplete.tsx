import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { complete } from './models';

const Complete = () => {
    return (
        <View style={styles.complete}>
            <Text style={styles.completeTitle}>{complete.title}</Text>
            <View style={styles.iconContainer}>
                {complete.icons.map(({ title, Icon }) => {
                    return (
                        <View key={title} style={styles.completeItem}>
                            <Icon />
                            <Text style={styles.completeText}>{title}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default Complete;
