import React from 'react';
import { TouchableOpacity } from 'react-native';
import Line from '../line';
import Text from '../text';

const Tab = ({ text, textOptions, lineOptions, handlePress }) => {
    return (
        <Line options={lineOptions}>
            <TouchableOpacity onPress={handlePress}>
                <Text options={textOptions}>{text}</Text>
            </TouchableOpacity>
        </Line>
    );
};

export default Tab;
