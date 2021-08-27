import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '~/utils/constants';
import { combineStyles } from '~/utils/functions/combineStyles';
import styles from '~/components/styles';

const Line = ({ children, options = null }) => {
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
        borderColor: colors.lightGrey,
        borderTopWidth: 1,
        width: '90%',
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default Line;
