import React from 'react';
import { View } from 'react-native';
import { CustomText,TextButton } from '~/components';
import { colors } from '~/utils/constants';
import styles, { buttonStyles } from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ConsentConfirmation = () => {
    return (
        <View style={{ backgroundColor: colors.white }}>
            <CustomText style={styles.confirmationTitle}>
                You did it!
            </CustomText>
            <CustomText style={styles.confirmationText}>
                Now that your profile is all set up, let's get you care you
                need.
            </CustomText>
            <Ionicons
                style={styles.icon}
                name="checkmark-circle"
                color="#0253E2"
                size={155}
            />
            <TextButton styles={buttonStyles} onPress={() => console.log('')}>
                Let's Get Started
            </TextButton>
        </View>
    );
};

export default ConsentConfirmation;
