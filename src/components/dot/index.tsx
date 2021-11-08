import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';

const Dot = () => {
    return (
        <View style={styles.container}>
            <View style={styles.dot} />
        </View>
    );
};

export default Dot;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    dot: {
        backgroundColor: colors.primaryBlue,
        height: 5,
        width: 5,
        marginLeft: -15,
        borderRadius: 3,
    },
});
