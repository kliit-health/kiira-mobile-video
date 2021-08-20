import React, { useState, useEffect } from 'react';
import { shape, object, bool, string, func } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import CheckedBox from '~/svgs/checked_box.svg';
import Box from '~/svgs/box.svg';
import defaultStyles from './styles';
import { colors } from '../../utils/constants';

const CheckBox = ({ styles: customStyles, checked, onPress, label }) => {
    const [selected, setSelected] = useState();

    useEffect(() => {
        setSelected(checked);
    }, [checked]);

    const handleOnPress = () => {
        setSelected(!selected);
        onPress();
    };

    const { gray, blue } = colors;

    const styles = {
        root: [defaultStyles.root, customStyles.root],
        text: [defaultStyles.text, customStyles.text],
    };

    return (
        <TouchableOpacity
            onPress={handleOnPress}
            style={styles.root}
            activeOpacity={1}
        >
            {checked ? <CheckedBox color={blue} /> : <Box color={gray} />}
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

CheckBox.propTypes = {
    styles: shape({
        root: object,
        text: object,
    }),
    checked: bool,
    onPress: func,
    label: string,
};

CheckBox.defaultProps = {
    styles: {},
    checked: false,
    onPress: () => {},
    label: undefined,
};

export default CheckBox;
