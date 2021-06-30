import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import styles from './styles';

type ButtonProps = {
    text: string | number;
    disabled?: boolean;
    onPress?: () => void;
    containerStyle?: ViewStyle;
};
  
const Button = ({
    text,
    onPress = () => null,
    containerStyle = {},
    disabled = false
}: ButtonProps) => {
    return (
      <TouchableOpacity
        style={[styles.button, containerStyle]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
}

export default Button;