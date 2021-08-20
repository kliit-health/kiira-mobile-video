import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { combineStyles } from '~/utils/functions/combineStyles';
import { colors } from '~/utils/constants';
import metrices from '~/utils/metrices';

const Row = ({ children, options = null }) => {
    const [optional, setOptional] = useState({});
    useEffect(() => {
        setOptional(combineStyles(options, styles));
    }, []);

    return (
        <View style={options ? [styles.default, optional] : styles.default}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    //LAYOUT

    absolute: {
        position: 'absolute',
        top: -20,
        zIndex: 10,
        height: 50,
        width: metrices.width,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    horizontalPad: {
        marginHorizontal: 20,
    },

    verticalPad: {
        marginVertical: 20,
    },

    //COLORS

    grey: {
        backgroundColor: colors.lightGrey,
    },
});

export default Row;
