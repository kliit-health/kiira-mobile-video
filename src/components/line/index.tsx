import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';

const Line = ({ children = null, options = null }) => {
    if (children) {
        return (
            <View style={options ? [base.default, ...options] : base.default}>
                {children}
            </View>
        );
    } else {
        return (
            <View style={options ? [base.default, ...options] : base.default} />
        );
    }
};

const base = StyleSheet.create({
    default: {
        borderColor: colors.lightGrey,
        borderTopWidth: 1,
        width: '90%',
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default Line;
