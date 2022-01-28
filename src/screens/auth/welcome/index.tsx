import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity, ScrollView, Platform, Linking } from 'react-native';
import { useSelector} from 'react-redux';
import { withNavigation } from 'react-navigation';
import { RootState } from '~/redux/reducers';
import Constant from '~/utils/constants';
import styles from './styles';
import CustomButton from '~/components/customButton';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { handleNavigation } from '~/utils/functions';

const Welcome = ({ navigation }) => {

    const { staticImages, screenNames } = Constant.App;
    const user = useSelector((state: RootState) => state.user.data);  
    const login = useSelector((state: RootState) => {
        return state.language.login;
    }); 

    const CrossIcon = () => {
        return (
            <TouchableOpacity
                testID="Close Button"
                onPress={() => {
                    handleNavigation('Login');
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

    const WelcomeView = () => {
        return (
            <Text  
                style={styles.helloStyle} 
            >
                {'Welcome to Kiira! '}
            </Text>
        );
    };


    const TitleView = () => {
        return (
            <Text  
                style={styles.titleStyle} 
            >
                {'Your one stop shop for care. On the kiira app you can;'}
            </Text>
        );
    };

    const InfoView = () => {
        return (
            <Text  
                style={styles.infoStyle} 
            >
                {'Get virtual appointments, prescriptions, health resources, and answers to health questions via chat within 24 hours.'}
            </Text>
        );
    };

    const ContentView = () => {
        return (
            <Text  
                style={styles.contentStyle} 
            >
                {'Access a personalized team of health providers for women’s health, mental health, and primary care on-demand.'}
            </Text>
        );
    };

    const StageView = () => {
        return (
            <Text  
                style={styles.contentStyle} 
            >
                {'Take Kiira with you everywhere you go and get answers specific to every stage of your life.'}
            </Text>
        );
    };
    

    const Button = () => {
        return (
            <CustomButton
                test="Become a member"
                disabled={false}
                buttonStyle={styles.activeButton}
                textStyle={styles.activeButtonText}
                onPress={() => {
                    Linking.openURL(Constant.App.becomeAMemeberUrl);
                }}
                text={login.Member}
            />
        );
    };

    return ( 
        <ImageBackground
                resizeMode="cover"
                style={styles.imageContainer}
                source={staticImages.backgroundUrl}
            >
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            > 
                <CrossIcon />
                <View style={styles.activateContainer}>
                    <WelcomeView />
                    <TitleView />  
                    <InfoView />
                    <ContentView />
                    <StageView />
                    <Button />
                </View> 
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </ImageBackground>
    );
};

export default Welcome;