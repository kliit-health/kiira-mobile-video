import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { text } from '~/utils/constants';

const Bold = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};

export default Bold;

const styles = StyleSheet.create({
    text: {
        fontFamily: text.fontFamily.poppinsSemiBold,
        fontSize: text.size.regular,
    },
});
