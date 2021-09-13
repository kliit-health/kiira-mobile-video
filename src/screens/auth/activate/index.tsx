import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { CustomInputText, CustomButton } from '~/components/';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { sendVerification } from '~/redux/reducers/activate';
import { showOrHideModal } from '~/components/customModal/action';
import Constant, { colors, icons } from '~/utils/constants';
import { isEmail } from '~/utils/helper';
import styles from '../styles';

const Activate = ({ navigation }) => {
    const dispatch = useDispatch();
    const { staticImages } = Constant.App;
    const [email, setEmail] = useState('');
    const login = useSelector((state: RootState) => {
        return state.language.login;
    });

    const InputText = () => {
        return (
            <View style={styles.inputTextParentContainer}>
                <View style={styles.inputTextContainer}>
                    <CustomInputText
                        autoCapitalize="none"
                        onChangeText={value => setEmail(value)}
                        placeholder={login.Email}
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

    const LogoView = () => {
        return (
            <View style={styles.contentContainer}>
                <Image
                    resizeMode="contain"
                    source={staticImages.kiiraLogo}
                    style={styles.logo}
                />
                <Image
                    resizeMode="contain"
                    source={staticImages.kiiraLogo2}
                    style={styles.logo2}
                />
            </View>
        );
    };

    const Button = () => {
        return (
            <CustomButton
                disabled={false}
                buttonStyle={styles.loginButton}
                textStyle={styles.loginButtonText}
                onPress={() => {
                    if (!email.trim()) {
                        dispatch(showOrHideModal(login.EmptyEmailMsg));
                    } else if (!isEmail(email.trim())) {
                        dispatch(showOrHideModal(login.InvalidEmailMsg));
                    } else {
                        const data = {
                            email: email.trim(),
                        };
                        dispatch(sendVerification(data));
                    }
                }}
                text={login.Verify}
            />
        );
    };

    return (
        <View style={styles.parentContainer}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <CrossIcon />
                <View style={styles.contentContainer}>
                    <LogoView />
                    <InputText />
                    <Button />
                </View>
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </View>
    );
};

export default Activate;
