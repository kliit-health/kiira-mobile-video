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
    test: string;
    title: string | number;
    id?: string;
    disabled?: boolean;
    onPress?: (id: string) => void;
    style?: {
        container?: ViewStyle[];
        title?: TextStyle[];
    };
};

const Button = ({ test, title, style, id,disabled, onPress, ...rest }: ButtonProps) => {
    const handlePress = () => {
        onPress(id);
    };

    return (
        <TouchableOpacity
            testID={test}
            style={[defaultStyles.container, style.container]}
            onPress={handlePress}
            disabled={disabled}
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
