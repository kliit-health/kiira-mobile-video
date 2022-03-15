import React from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Platform,
    ImageBackground,
    Linking,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import Constant from '~/utils/constants';
import styles from '../styles';
import { Text } from 'react-native-animatable';

const KiiraWelcome = ({ navigation }) => {
    const { staticImages } = Constant.App;
    const welcomeKiira = useSelector((state: RootState) => {
        return state.language.welcomeKiira;
    });

    const CrossIcon = () => {
        return (
            <TouchableOpacity
                testID="Close Button"
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text style={styles.backText}>{welcomeKiira.back}</Text>
            </TouchableOpacity>
        );
    };

    const HelloView = () => {
        return (
            <Text style={styles.helloStyle}>{welcomeKiira.welcomeKiira}</Text>
        );
    };

    const TitleView = () => {
        return (
            <Text style={styles.titleStyle}>{welcomeKiira.oneStopTitle}</Text>
        );
    };

    const VirtualAppointmentContentView = () => {
        return (
            <Text style={styles.infoStyle}>
                {welcomeKiira.getVirtualAppointmentsInfo}
            </Text>
        );
    };

    const AccessContentView = () => {
        return (
            <Text style={styles.contentStyle}>
                {welcomeKiira.accessPersonalizedTeamInfo}
            </Text>
        );
    };
    const EveryWhereContentView = () => {
        return (
            <Text style={styles.contentStyle}>
                {welcomeKiira.takeKiiraEveryWhereInfo}
            </Text>
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
                <View style={styles.welcomKiiraContainer}>
                    <HelloView />
                    <TitleView />
                    <VirtualAppointmentContentView />
                    <AccessContentView />
                    <EveryWhereContentView />
                </View>
                <TouchableOpacity
                    style={styles.kiiraContainer}
                    onPress={() =>
                        Linking.openURL(Constant.App.becomeAMemeberUrl)
                    }
                >
                    <Text style={styles.becomeMember}>
                        {welcomeKiira.becomeMember}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            {Platform.OS === 'ios' && <KeyboardSpacer />}
        </ImageBackground>
    );
};

export default KiiraWelcome;
