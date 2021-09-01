import React from 'react';
import { View, StyleSheet } from 'react-native';

const Column = ({ children, options = null }) => {
    return (
        <View style={options ? [base.default, ...options] : base.default}>
            {children}
        </View>
    );
};

const base = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Column;
