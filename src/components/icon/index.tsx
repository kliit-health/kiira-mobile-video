import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icon = ({ source, options = null }) => {
    return (
        <Image
            style={options ? [base.icon, options] : base.icon}
            source={source}
        />
    );
};

const base = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
    },
});

export default Icon;
