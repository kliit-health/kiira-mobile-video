import React from 'react';
import {
    TouchableOpacity,
    Text,
    TextStyle,
    ViewStyle,
    TouchableOpacityProps,
} from 'react-native';
import defaultStyles from './styles';

export type ButtonProps = TouchableOpacityProps & {
    title: string | number;
    id?: string;
    onPress?: (id: string) => void;
    style?: {
        container?: ViewStyle[];
        title?: TextStyle[];
    };
};

const Button = ({ title, style, id, onPress, ...rest }: ButtonProps) => {
    const handlePress = () => {
        onPress(id);
    };

    return (
        <TouchableOpacity
            style={[defaultStyles.container, style.container]}
            onPress={handlePress}
            {...rest}
        >
            <Text style={[defaultStyles.title, style.title]}>{title}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    activeOpacity: 0.8,
    disabled: false,
    title: '',
    id: '',
    style: {
        container: {},
        title: {},
    },
} as Partial<ButtonProps>;

export default Button;
