import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import styles from './styles';

type ButtonProps = {
    text: string | number;
    disabled?: boolean;
    onPress?: () => void;
    textStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    opacity?: number;
};

const Button = ({
    text,
    onPress = () => null,
    containerStyle = {},
    textStyle = {},
    disabled = false,
    opacity = 0.8,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={opacity}
            style={{ ...styles.button, ...containerStyle }}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
