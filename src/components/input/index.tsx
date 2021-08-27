import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, ViewStyle } from 'react-native';
import styles from '~/components/styles';
import { combineStyles } from '~/utils/functions/combineStyles';
import { text, colors } from '~/utils/constants';
import metrices from '~/utils/metrices';

export type InputProps = {
    editable: boolean;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    placeholderTextColor: ViewStyle;
    multiline: boolean;
    options: null | string;
};

const Input = ({
    editable,
    value,
    onChangeText,
    placeholder,
    multiline,
    options = null,
}: InputProps) => {
    const [optional, setOptional] = useState({});

    useEffect(() => {
        setOptional(combineStyles(options, styles));
    }, []);

    return (
        <TextInput
            style={options ? [base.default, optional] : base.default}
            editable={editable}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.blueGrey}
            multiline={multiline}
        />
    );
};

const base = StyleSheet.create({
    default: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: metrices.width * 0.8,
        height: metrices.height * 0.15,
        backgroundColor: colors.white,
        padding: 10,
        fontSize: text.size.regular,
    },
});

export default Input;
