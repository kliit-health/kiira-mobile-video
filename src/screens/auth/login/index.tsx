import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    Platform,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { useSelector, useDispatch } from 'react-redux';
import CustomText from '../../../components/customText';
import styles from './style';
import Constant, { app } from '../../../utils/constants';
import CustomInputText from '../../../components/customInputText';
import CustomButton from '../../../components/customButton';
import { showOrHideModal } from '../../../components/customModal/action';
import { isEmail } from '../../../utils/helper';
import { loginApi, resetLoginState } from './action';
import * as Keychain from 'react-native-keychain';

const Login = props => {
    const lang = useSelector(state => state.language);
    const loginFailure = useSelector(state => state.login.loginFailure);
    const dispatch = useDispatch();
    const { navigation } = props;
    const { staticImages } = Constant.App;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [biometricType, setBiometricType] = useState('');

    useEffect(() => {
        Keychain.getSupportedBiometryType().then(biometryType => {
            setBiometricType(biometryType);
        });
    }, []);

    useEffect(() => {
        dispatch(resetLoginState());
    }, []);

    useEffect(() => {
        if (loginFailure) {
            setPassword('');
            dispatch(resetLoginState());
        }
    });

    const loginWithBiometrics = async () => {
        Keychain.getGenericPassword({
            service: 'kiira',
        })
            .then(
                (
                    result:
                        | boolean
                        | {
                              service: string;
                              username: string;
                              password: string;
                          },
                ) => {
                    if (!result) {
                        dispatch(showOrHideModal(lang.login.NoBiometrics));
                    } else {
                        if (typeof result !== 'boolean') {
                            if (result.username || result.password) {
                                const data = {
                                    params: {
                                        email: result.username,
                                        password: result.password,
                                    },
                                    navigation,
                                };
                                dispatch(loginApi(data));
                            } else {
                                dispatch(
                                    showOrHideModal(lang.login.NoBiometrics),
                                );
                            }
                        }
                    }
                },
            )
            .catch(async error => {
                if ((await Keychain.getSupportedBiometryType()) === null) {
                    return;
                }

                if (
                    error.message ===
                    'The user name or passphrase you entered is not correct.'
                ) {
                    console.log('Wrong password');
                }

                if (error.message === 'User canceled the operation.') {
                    console.log('User cancel');
                }
            });
    };

    const renderInputTextView = () => {
        return (
            <View style={styles.inputTextParentContainerStyle}>
                <View style={styles.inputTextContainerStyle}>
                    <CustomInputText
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={value => setEmail(value)}
                        placeholder={lang.login.Email}
                        value={email}
                        style={
                            email
                                ? styles.inputTypeStyle
                                : [styles.inputTypeStyle, { fontWeight: '100' }]
                        }
                        placeholderTextColor={Constant.App.colors.blackColor}
                    />
                </View>
                <View style={styles.inputTextContainerStyle}>
                    <CustomInputText
                        autoCapitalize="none"
                        onChangeText={value => setPassword(value)}
                        placeholder={lang.login.Password}
                        value={password}
                        secureTextEntry
                        style={
                            password
                                ? styles.inputTypePasswordStyle
                                : [
                                      styles.inputTypePasswordStyle,
                                      { fontWeight: '100' },
                                  ]
                        }
                        placeholderTextColor={Constant.App.colors.blackColor}
                    />
                </View>
            </View>
        );
    };

    const renderCrossIconView = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image
                    resizeMode="contain"
                    source={staticImages.crossIcon}
                    style={styles.backIconStyle}
                />
            </TouchableOpacity>
        );
    };

    const renderLogoView = () => {
        return (
            <View style={styles.contentContainerStyle}>
                <Image
                    resizeMode="contain"
                    source={staticImages.loginLogoImage}
                    style={styles.logoStyle}
                />
                <Image
                    resizeMode="contain"
                    source={staticImages.loginLogoImage2}
                    style={styles.logo2Style}
                />
                <Text style={styles.version}>{app.version}</Text>
            </View>
        );
    };

    const renderButtonView = () => {
        return (
            <CustomButton
                buttonStyle={styles.loginButtonContainerStyle}
                textStyle={styles.loginButtonTextStyle}
                onPress={() => {
                    if (!email.trim()) {
                        dispatch(showOrHideModal(lang.login.EmptyEmailMsg));
                    } else if (!isEmail(email.trim())) {
                        dispatch(showOrHideModal(lang.login.InvalidEmailMsg));
                    } else if (!password) {
                        dispatch(showOrHideModal(lang.login.EmptyPasswordMsg));
                    } else {
                        const data = {
                            params: {
                                email: email.trim(),
                                password: password.trim(),
                            },
                            navigation,
                        };
                        dispatch(loginApi(data));
                    }
                }}
                text={lang.login.Login}
            />
        );
    };

    const renderForgotPasswordView = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(
                        Constant.App.screenNames.ForgotPassword,
                    );
                }}
            >
                <CustomText style={styles.forgotPasswordTextStyle}>
                    {lang.login.ForgotPassword}
                </CustomText>
            </TouchableOpacity>
        );
    };

    const renderBiometricLogin = () => {
        return (
            <TouchableOpacity
                disabled={biometricType === ''}
                onPress={loginWithBiometrics}
            >
                <Image
                    resizeMode="contain"
                    source={
                        biometricType === 'FaceID'
                            ? staticImages.faceID
                            : staticImages.fingerprint
                    }
                    style={styles.biometrics}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.parentContainerStyle}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {renderCrossIconView()}
                <View style={styles.contentContainerStyle}>
                    {renderLogoView()}
                    {renderInputTextView()}
                    {renderBiometricLogin()}
                    {renderButtonView()}
                    {renderForgotPasswordView()}
                </View>
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </View>
    );
};

export default Login;
