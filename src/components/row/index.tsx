import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import styles from '~/components/styles';
import { combineStyles } from '~/utils/functions/combineStyles';

const Row = ({ children, options = null }) => {
    const [optional, setOptional] = useState({});

    useEffect(() => {
        setOptional(combineStyles(options, styles));
    }, []);

    return (
        <View style={options ? [base.default, optional] : base.default}>
            {children}
        </View>
    );
};

const base = StyleSheet.create({
    default: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default Row;
