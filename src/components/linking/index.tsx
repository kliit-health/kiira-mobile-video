import React, { useCallback } from 'react';
import { shape, object, string, any, number } from 'prop-types';
import {
    View,
    Linking as RNLinking,
    Platform,
    TouchableOpacity,
    Text,
} from 'react-native';
import defaultStyles from './styles';

const Linking = ({
    styles: customStyles,
    title,
    subtitle,
    phoneNumber,
    url,
    children,
    activeOpacity,
}) => {
    const styles = {
        root: [defaultStyles.root, customStyles.root],
        title: [defaultStyles.title, customStyles.title],
        subtitle: [defaultStyles.subtitle, customStyles.subtitle],
        iconContainer: [
            defaultStyles.iconContainer,
            customStyles.iconContainer,
        ],
        textContainer: [
            defaultStyles.textContainer,
            customStyles.textContainer,
        ],
    };

    const handlePress = useCallback(
        async (url, phoneNumber) => {
            const link = phoneNumber ? `tel:${phoneNumber}` : url;
            const supported = await RNLinking.canOpenURL(link);
            if (supported) {
                await RNLinking.openURL(link);
            } else {
                Alert.alert(`Invalid phone number: ${link}`);
            }
        },
        [url, phoneNumber],
    );

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            style={styles.root}
            onPress={() => handlePress(url, phoneNumber)}
        >
            <View style={styles.iconContainer}>{children}</View>
            <View style={styles.textContainer}>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

Linking.propTypes = {
    styles: shape({
        root: object,
    }),
    title: string,
    phoneNumber: string,
    url: string,
    children: any,
    activeOpacity: number,
    subtitle: string,
};

Linking.defaultProps = {
    styles: {},
    title: undefined,
    phoneNumber: undefined,
    url: undefined,
    children: any,
    activeOpacity: 1,
    subtitle: undefined,
};

export default Linking;
