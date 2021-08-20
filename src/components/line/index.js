import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';

const Line = () => {
    return <View style={styles.default} />;
};

const styles = StyleSheet.create({
    default: {
        borderTopColor: colors.lightGrey,
        borderTopWidth: 1,
        width: '90%',
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default Line;
