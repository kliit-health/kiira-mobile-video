import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import styles from './style';
import Constant, { colors, icons } from '~/utils/constants';
import CustomInputText from '~/components/customInputText';
import CustomButton from '~/components/customButton';
import { showOrHideModal } from '~/components/customModal/action';
import { isEmail } from '~/utils/helper';
import { sendVerification } from '~/redux/reducers/activate';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const Activate = props => {
    const dispatch = useDispatch();
    const { navigation } = props;
    const { staticImages } = Constant.App;
    const [email, setEmail] = useState('');
    const lang = useSelector((state: RootState) => {
        return state.language;
    });

    const renderInputTextView = () => {
        return (
            <View style={styles.inputTextParentContainerStyle}>
                <View style={styles.inputTextContainerStyle}>
                    <CustomInputText
                        autoCapitalize="none"
                        onChangeText={value => setEmail(value)}
                        placeholder={lang.login.Email}
                        value={email}
                        style={
                            email
                                ? styles.inputTypeStyle
                                : [styles.inputTypeStyle, { fontWeight: '100' }]
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
                testID="Close Button"
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image
                    resizeMode="contain"
                    source={icons.cross}
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
                    source={staticImages.kiiraLogo}
                    style={styles.logoStyle}
                />
                <Image
                    resizeMode="contain"
                    source={staticImages.kiiraLogo2}
                    style={styles.logo2Style}
                />
            </View>
        );
    };

    const renderButtonView = () => {
        return (
            <CustomButton
                disabled={false}
                buttonStyle={styles.loginButton}
                textStyle={styles.loginButtonText}
                onPress={() => {
                    if (!email.trim()) {
                        dispatch(showOrHideModal(lang.login.EmptyEmailMsg));
                    } else if (!isEmail(email.trim())) {
                        dispatch(showOrHideModal(lang.login.InvalidEmailMsg));
                    } else {
                        const data = {
                            email: email.trim(),
                        };
                        dispatch(sendVerification(data));
                    }
                }}
                text={lang.login.Verify}
            />
        );
    };

    return (
        <View style={styles.parentContainerStyle}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <CrossIcon/>
                <View style={styles.contentContainerStyle}>
                    {renderLogoView()}
                    {renderInputTextView()}
                    {renderButtonView()}
                </View>
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </View>
    );
};

export default Activate;
