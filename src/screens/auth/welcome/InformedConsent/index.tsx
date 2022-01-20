import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { TextButton, CustomText, Icon } from '~/components';
import { updateUser } from '~/redux/actions';
import styles, { buttonStyles } from '../styles';
import { colors, icons, screenNames } from '~/utils/constants';
import { useDispatch } from 'react-redux';

const InformedConsent = ({ navigation }) => {
    const dispatch = useDispatch();
    const handleAction = () => {
        // dispatch(
        //     updateUser({
        //         acceptedTreatmentTerms: true,
        //     }),
        // );
        navigation.navigate(screenNames.ConsentConfirmation);
    };

    const handleCancel = () => {
        navigation.navigate('Home')
    };

    return (
        <View style={styles.consentContainer}>
            <ScrollView
                style={{ backgroundColor: colors.babyBlue }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity onPress={handleCancel}>
                    <Icon
                        source={icons.xCloseIcon}
                        options={{
                            left: '90%',
                            top: 50,
                        }}
                    ></Icon>
                </TouchableOpacity>
                <CustomText style={styles.consentTitle}>
                    Informed Consent
                </CustomText>
                <View style={styles.content}>
                    <CustomText style={styles.consentContent}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                    </CustomText>
                </View>
            </ScrollView>
            <TextButton styles={buttonStyles} onPress={handleAction}>
                I agree
            </TextButton>
        </View>
    );
};

export default InformedConsent;


