import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
    ImageBackground,
    TextInput
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
import { Text } from 'react-native-animatable'; 
 

const Activate = ({ navigation }) => { 
    const { staticImages } = Constant.App;
    const [email, setEmail] = useState('');
    const login = useSelector((state: RootState) => {
        return state.language.login;
    });
    const dispatch = useDispatch();

    const InputText = () => {
        return (
            <View style={styles.inputTextActiveContainer}>
                <View style={styles.inputTextActive}>
                    <TextInput
                        autoCapitalize="none" 
                        autoCorrect={false}
                        onChangeText={text => setEmail(text)}
                        placeholder={login.EnterEmail}
                        value={email}
                        style={
                            email
                                ? [styles.activeInpute, { fontWeight: '400'}]
                                : [styles.activeInpute, { fontWeight: '300'}]
                        }
                        placeholderTextColor={colors.greyAccent}
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
                <Text  
                    style={styles.backText} 
                >
                    {'Back'}
                </Text>
            </TouchableOpacity>
        );
    };

    const HelloView = () => {
        return (
            <Text  
                style={styles.helloStyle} 
            >
                {'Hello New Member!'}
            </Text>
        );
    };


    const TitleView = () => {
        return (
            <Text  
                style={styles.titleStyle} 
            >
                {'To get started please activate your acount below.'}
            </Text>
        );
    };

    const InfoView = () => {
        return (
            <Text  
                style={styles.infoStyle} 
            >
                {'Please use the same email address you used when you became a member.'}
            </Text>
        );
    };

    const ContentView = () => {
        return (
            <Text  
                style={styles.contentStyle} 
            >
                {'If you are part of an organization sponsored plan i.e school or employer plan please use the email associated with your organization. example. _____.edu'}
            </Text>
        );
    };

    const Button = () => {
        return (
            <CustomButton
                test="Get Activation Link"
                disabled={false}
                buttonStyle={styles.activeButton}
                textStyle={styles.activeButtonText}
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
        <ImageBackground
                resizeMode="stretch"
                style={styles.imageContainer}
                source={staticImages.backgroundUrl}
            >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            > 
                <CrossIcon />
                <View style={styles.activateContainer}>
                    <HelloView />
                    <TitleView />
                    <InputText />
                    <Button />
                    <InfoView />
                    <ContentView />
                </View> 
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </ImageBackground>
    );
};

export default Activate;
