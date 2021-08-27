import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { combineStyles } from '~/utils/functions/combineStyles';
import styles from '~/components/styles';
import base from './styles';

const Screen = ({ children, options = null }) => {
    const [optional, setOptional] = useState({});

    useEffect(() => {
        setOptional(combineStyles(options, styles));
    }, []);

    return (
        <View styles={options ? [base.default, optional] : base.default}>
            {children}
        </View>
    );
};

export default Screen;
