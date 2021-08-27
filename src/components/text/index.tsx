import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { combineStyles } from '~/utils/functions/combineStyles';
import { colors, text } from '~/utils/constants';
import styles from '~/components/styles';

const { size, fontFamily } = text;

const KiiraText = ({ children, options = null }) => {
    const [optional, setOptional] = useState({});
    useEffect(() => {
        setOptional(combineStyles(options, styles));
    }, []);

    return (
        <Text style={options ? [base.default, optional] : base.default}>
            {children}
        </Text>
    );
};

const base = StyleSheet.create({
    default: {
        fontSize: size.regular,
        fontFamily: fontFamily.poppinsRegular,
        color: colors.black,
    },
});

export default KiiraText;
