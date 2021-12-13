import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { CustomInputText, CustomButton, CustomText } from '~/components';
import { useSelector, useDispatch } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { RootState } from '~/redux/reducers';
import { showOrHideModal } from '~/components/customModal/action';
import {
    forgotPasswordApiHit,
    resetForgotPasswordState,
} from '~/redux/reducers/forgotPassword';
import { colors, icons, images } from '~/utils/constants';
import { isEmail } from '~/utils/helper';
import styles from '../styles';

const ForgotPassword = ({ navigation }) => {
    const dispatch = useDispatch();
    const lang = useSelector((state: RootState) => state.language);
    const forgotPasswordSuccess = useSelector(
        (state: RootState) => state.forgotPassword.forgotPasswordSuccess,
    );

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (forgotPasswordSuccess) {
            setEmail('');
            dispatch(resetForgotPasswordState());
        }
    });

    const CrossIcon = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image
                    resizeMode="contain"
                    source={icons.cross}
                    style={styles.backIcon}
                />
            </TouchableOpacity>
        );
    };

    const Logo = () => {
        return (
            <Image
                resizeMode="contain"
                source={images.kiiraLogo}
                style={styles.logo}
            />
        );
    };

    const Title = () => {
        return (
            <View style={styles.titleContainer}>
                <CustomText style={styles.titleText}>
                    {lang.forgotPassword.Title}
                </CustomText>
                <CustomText style={styles.subTitleText}>
                    {lang.forgotPassword.Subtitle}
                </CustomText>
            </View>
        );
    };

    const InputText = () => {
        return (
            <View style={styles.inputTextParentContainer}>
                <View style={styles.inputTextContainer}>
                    <CustomInputText
                        autoCapitalize="none"
                        onChangeText={value => setEmail(value)}
                        placeholder={lang.forgotPassword.Email}
                        value={email}
                        style={
                            email
                                ? styles.inputType
                                : [styles.inputType, { fontWeight: '100' }]
                        }
                        placeholderTextColor={colors.black}
                    />
                </View>
            </View>
        );
    };

    const Button = () => {
        return (
            <CustomButton
                disabled={false}
                buttonStyle={styles.buttonContainer}
                textStyle={styles.buttonText}
                onPress={() => {
                    if (!email.trim()) {
                        dispatch(showOrHideModal(lang.login.EmptyEmailMsg));
                    } else if (!isEmail(email.trim())) {
                        dispatch(showOrHideModal(lang.login.InvalidEmailMsg));
                    } else {
                        const payload = {
                            email,
                        };
                        dispatch(forgotPasswordApiHit(payload));
                    }
                }}
                text={lang.forgotPassword.Submit}
            />
        );
    };

    return (
        <View style={styles.parentContainer}>
            <ScrollView
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
            >
                <CrossIcon />
                <View style={styles.contentContainer}>
                    <Logo />
                    <Title />
                    {InputText()}
                    <Button />
                </View>
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </View>
    );
};

export default ForgotPassword;
