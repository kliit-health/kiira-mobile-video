import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomText from '../customText';

type ButtonProps = {
    onPress: any;
    text: string;
    buttonStyle: object;
    disabled?: boolean;
    textStyle: object;
    test?: string;
};

const CustomButton = ({
    onPress,
    text,
    buttonStyle,
    disabled,
    textStyle,
    test,
}: ButtonProps) => (
    <TouchableOpacity
        testID={test}
        disabled={disabled}
        onPress={onPress}
        style={buttonStyle}
    >
        <CustomText style={textStyle}>{text}</CustomText>
    </TouchableOpacity>
);

export default CustomButton;
