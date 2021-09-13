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
import { RootState } from '~/redux/reducers';
import CustomText from '../../../components/customText';
import styles from './style';
import Constant, { app, colors, screenNames } from '../../../utils/constants';
import CustomInputText from '../../../components/customInputText';
import CustomButton from '../../../components/customButton';
import { showOrHideModal } from '../../../components/customModal/action';
import { isEmail } from '../../../utils/helper';
import { loginApi, resetLoginState } from '~/redux/reducers/login';
import * as Keychain from 'react-native-keychain';

const Login = props => {
    const { login } = useSelector((state: RootState) => state.language);
    const loginFailure = useSelector(
        (state: RootState) => state.login.loginFailure,
    );
    const dispatch = useDispatch();
    const { navigation } = props;
    const { staticImages } = Constant.App;
    const [email, setEmail] = useState('aaron@kiira.io');
    const [password, setPassword] = useState('Test1234!');
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
                        dispatch(showOrHideModal(login.NoBiometrics));
                    } else {
                        if (typeof result !== 'boolean') {
                            if (result.username || result.password) {
                                const data = {
                                    email: result.username,
                                    password: result.password,
                                };
                                dispatch(loginApi(data));
                            } else {
                                dispatch(showOrHideModal(login.NoBiometrics));
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

    const InputText = () => {
        return (
            <View style={styles.inputTextParentContainerStyle}>
                <View style={styles.inputTextContainerStyle}>
                    <CustomInputText
                        testID="Login Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={value => setEmail(value)}
                        placeholder={login.Email}
                        value={email}
                        style={
                            email
                                ? styles.inputTypeStyle
                                : [styles.inputTypeStyle, { fontWeight: '100' }]
                        }
                        placeholderTextColor={colors.black}
                    />
                </View>
                <View style={styles.inputTextContainerStyle}>
                    <CustomInputText
                        testID="Login Password"
                        autoCapitalize="none"
                        onChangeText={value => setPassword(value)}
                        placeholder={login.Password}
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
                    source={staticImages.crossIcon}
                    style={styles.backIconStyle}
                />
            </TouchableOpacity>
        );
    };

    const Logo = () => {
        return (
            <View style={styles.contentContainerStyle}>
                <Image
                    resizeMode="contain"
                    source={staticImages.kiiraLogo}
                    style={styles.logoStyle}
                />
                <Image
                    resizeMode="contain"
                    source={staticImages.kiiraLogo2}
                    style={styles.logo2Style}
                />
                <Text style={styles.version}>{app.version}</Text>
            </View>
        );
    };

    const Button = () => {
        return (
            <CustomButton
                test="Login Button"
                //Custom bot accepteed by default. Only native coponents accept testID
                buttonStyle={styles.loginButton}
                textStyle={styles.loginButtonText}
                onPress={() => {
                    if (!email.trim()) {
                        dispatch(showOrHideModal(login.EmptyEmailMsg));
                    } else if (!isEmail(email.trim())) {
                        dispatch(showOrHideModal(login.InvalidEmailMsg));
                    } else if (!password) {
                        dispatch(showOrHideModal(login.EmptyPasswordMsg));
                    } else {
                        const data = {
                            email: email.trim(),
                            password: password.trim(),
                        };
                        dispatch(loginApi(data));
                    }
                }}
                text={login.Login}
            />
        );
    };

    const ForgotPassword = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(screenNames.ForgotPassword);
                }}
            >
                <CustomText style={styles.forgotPasswordText}>
                    {login.ForgotPassword}
                </CustomText>
            </TouchableOpacity>
        );
    };

    const BiometricLogin = () => {
        return (
            <TouchableOpacity
                testID="Bio Login"
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
        <View testID="Login Screen" style={styles.parentContainerStyle}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <CrossIcon />
                <View style={styles.contentContainerStyle}>
                    <Logo />
                    {InputText()}
                    <BiometricLogin />
                    <Button />
                    <ForgotPassword />
                </View>
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </View>
    );
};

export default Login;
