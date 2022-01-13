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
import * as Keychain from 'react-native-keychain';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { loginApi, resetLoginState } from '~/redux/reducers/login';
import { CustomText, CustomInputText, CustomButton } from '~/components';
import FastImage from 'react-native-fast-image';
import { showOrHideModal } from '../../../components/customModal/action';
import { isEmail } from '../../../utils/helper';
import {
    app,
    colors,
    screenNames,
    icons,
    images,
} from '../../../utils/constants';
import styles from '../styles';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const { login } = useSelector((state: RootState) => state.language);
    const loginFailure = useSelector(
        (state: RootState) => state.login.loginFailure,
    );

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

    const CrossIcon = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={styles.backStyle}
            >
                <FastImage
                    resizeMode="contain"
                    source={icons.backArrow}
                    style={styles.leftIcon}
                />
            </TouchableOpacity>
        );
    };

    const Logo = () => {
        return (
            <View style={styles.contentContainer}>
                <FastImage
                    resizeMode="contain"
                    source={images.kiiraLogo}
                    style={styles.logo}
                /> 
                <Text style={styles.welcomeStyle}>{login.Welcome}</Text>
            </View>
        );
    };

    const InputText = () => {
        return (
            <View style={styles.inputTextParentContainer}>
                <View style={styles.inputTextContainer}>
                    <CustomInputText
                        testID="Login Email"
                        autoCapitalize="none"
                        autoCorrect={false}
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
                <View style={styles.inputTextContainer}>
                    <CustomInputText
                        testID="Login Password"
                        autoCapitalize="none"
                        onChangeText={value => setPassword(value)}
                        placeholder={login.Password}
                        value={password}
                        secureTextEntry
                        style={
                            password
                                ? styles.inputTypePassword
                                : [
                                      styles.inputTypePassword,
                                      { fontWeight: '100' },
                                  ]
                        }
                        placeholderTextColor={colors.black}
                    />
                </View>
            </View>
        );
    };

    const BiometricLogin = () => {
        return (
            <TouchableOpacity
                testID="Bio Login"
                disabled={biometricType === ''}
                onPress={loginWithBiometrics}
            >
                <FastImage
                    resizeMode="contain"
                    source={
                        biometricType === 'FaceID'
                            ? images.faceID
                            : images.fingerprint
                    }
                    style={styles.biometrics}
                /> 
            </TouchableOpacity>
        );
    };

    const Button = () => {
        return (
            <CustomButton
                test="Login Button"
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

    return (
        <View testID="Login Screen" style={styles.parentContainer}>
            <ScrollView
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
            >
                <CrossIcon />
                <View style={styles.contentContainer}>
                    <Logo />
                    {InputText()}
                    <BiometricLogin />
                    <Text style={styles.version}>{app.version}</Text>
                    <ForgotPassword />
                    <Button /> 
                </View>
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </View>
    );
};

export default Login;
