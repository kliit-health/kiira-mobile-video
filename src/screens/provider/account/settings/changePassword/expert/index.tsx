import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import { hasSpecialCharactors } from '~/utils/helper';
import Constant from '~/utils/constants';
import CustomInputText from '~/components/customInputText';
import CustomText from '~/components/customText';
import CustomButton from '~/components/customButton';
import { changePassword } from '../action';
import { showOrHideModal } from '~/components/customModal/action';

const ChangePasswordExpert = props => {
    const lang = useSelector((state: any) => state.language);
    const dispatch = useDispatch();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [longEnough, setLongEnough] = useState(false);

    const { navigation } = props;
    const { staticImages } = Constant.App;

    const renderHeaderView = () => {
        return (
            <View style={styles.headerStyle}>
                <CustomText style={styles.titleTextStyle}>
                    {lang.changePassword.title}
                </CustomText>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <CustomText style={styles.cancelTextStyle}>
                        {lang.changePassword.cancel}
                    </CustomText>
                </TouchableOpacity>
            </View>
        );
    };

    const renderInputTextView = () => {
        return (
            <View style={styles.inputTextParentContainerStyle}>
                <View style={styles.inputTextContainerStyle}>
                    <CustomInputText
                        autoCapitalize="none"
                        onChangeText={value => setCurrentPassword(value)}
                        placeholder={lang.changePassword.currentPassword}
                        value={currentPassword}
                        secureTextEntry={!showCurrentPassword}
                        style={
                            currentPassword
                                ? styles.inputTypePasswordStyle
                                : [
                                      styles.inputTypePasswordStyle,
                                      { fontWeight: '100' },
                                  ]
                        }
                        placeholderTextColor={Constant.App.colors.blackColor}
                    />
                    <TouchableOpacity
                        onPress={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                        }
                    >
                        <Image
                            resizeMode="contain"
                            source={
                                showCurrentPassword
                                    ? staticImages.passwordVisibleIcon
                                    : staticImages.passwordInvisibleIcon
                            }
                            style={styles.passwordHideShowIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputTextContainerStyle}>
                    <CustomInputText
                        autoCapitalize="none"
                        onChangeText={value => {
                            setNewPassword(value);
                            if (value.trim().length >= 7) {
                                setLongEnough(true);
                            }
                            if (hasSpecialCharactors(value)) {
                                setHasSpecialChar(true);
                            }
                        }}
                        placeholder={lang.changePassword.newPassword}
                        value={newPassword}
                        secureTextEntry={!showNewPassword}
                        style={
                            newPassword
                                ? styles.inputTypePasswordStyle
                                : [
                                      styles.inputTypePasswordStyle,
                                      { fontWeight: '100' },
                                  ]
                        }
                        placeholderTextColor={Constant.App.colors.blackColor}
                    />
                    <TouchableOpacity
                        onPress={() => setShowNewPassword(!showNewPassword)}
                    >
                        <Image
                            resizeMode="contain"
                            source={
                                showNewPassword
                                    ? staticImages.passwordVisibleIcon
                                    : staticImages.passwordInvisibleIcon
                            }
                            style={styles.passwordHideShowIconStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const renderPasswordValidationView = () => {
        return (
            <View>
                <View style={styles.passwordValidationContainerStyle}>
                    <Image
                        resizeMode="contain"
                        source={
                            longEnough
                                ? staticImages.checkGreenIcon
                                : staticImages.checkGreyIcon
                        }
                        style={styles.passwordValidChecboxIconStyle}
                    />
                    <CustomText style={styles.passwordValidationTextStyle}>
                        {lang.signUp.passwordCharLimitValidMsg}
                    </CustomText>
                </View>
                <View style={styles.passwordValidationContainerStyle}>
                    <Image
                        resizeMode="contain"
                        source={
                            hasSpecialChar
                                ? staticImages.checkGreenIcon
                                : staticImages.checkGreyIcon
                        }
                        style={styles.passwordValidChecboxIconStyle}
                    />
                    <CustomText style={styles.passwordValidationTextStyle}>
                        {lang.signUp.passwordSpecialCharValidMsg}
                    </CustomText>
                </View>
            </View>
        );
    };

    const renderButtonView = () => {
        return (
            <CustomButton
                buttonStyle={styles.buttonContainerStyle}
                textStyle={styles.buttonTextStyle}
                onPress={() => {
                    if (!currentPassword.trim()) {
                        dispatch(
                            showOrHideModal(
                                lang.changePassword.EmptyCurrentPasswordMsg,
                            ),
                        );
                    } else if (!newPassword.trim()) {
                        dispatch(
                            showOrHideModal(
                                lang.changePassword.EmptyNewPasswordMsg,
                            ),
                        );
                    } else if (newPassword.trim().length < 7) {
                        dispatch(
                            showOrHideModal(
                                lang.changePassword.passwordLimitErrorMsg,
                            ),
                        );
                    } else if (!hasSpecialCharactors(newPassword)) {
                        dispatch(
                            showOrHideModal(
                                lang.changePassword.passwordSpecialCharErrorMsg,
                            ),
                        );
                    } else {
                        const data = {
                            params: {
                                newPassword: newPassword.trim(),
                                currentPassword: currentPassword.trim(),
                            },
                            navigation,
                        };
                        dispatch(changePassword(data));
                    }
                }}
                text={lang.changePassword.updatePassword}
            />
        );
    };

    return (
        <View style={styles.container}>
            {renderHeaderView()}
            {renderInputTextView()}
            {renderPasswordValidationView()}
            {renderButtonView()}
        </View>
    );
};

export default ChangePasswordExpert;
