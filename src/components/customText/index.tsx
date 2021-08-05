import React from 'react';
import { Text } from 'react-native';
import styles from './style';

type TextProps = {
    style: object;
    numberOfLines?: number;
    children: any;
};

const CustomText = ({ style, numberOfLines, children }: TextProps) => (
    <Text
        numberOfLines={numberOfLines}
        allowFontScaling={false}
        style={[style, styles.textStyle]}
    >
        {children}
    </Text>
);

export default CustomText;
