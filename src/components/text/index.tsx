import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { combineStyles } from '~/utils/functions/combineStyles';
import styles from './styles';

const KiiraText = ({ children, options = null }) => {
    const [optional, setOptional] = useState({});
    useEffect(() => {
        setOptional(combineStyles(options, styles));
    }, []);

    return (
        <Text style={options ? [styles.default, optional] : styles.default}>
            {children}
        </Text>
    );
};

export default KiiraText;
