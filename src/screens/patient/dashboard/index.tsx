import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { ScrollView, Linking, Platform, TouchableOpacity } from 'react-native';
import { useDidMount } from '~/utils/hooks';
import * as actions from '~/redux/actions';
import { Container, Modal, CustomButton } from '~/components';
import { Item, Welcome, Banner } from './sections';
import model from './model';
import styles, { style } from './styles';
import i18n from '~/i18n';
import DeviceInfo from 'react-native-device-info';
import FastImage from 'react-native-fast-image';

const Dashboard = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.data);
    const subscription = useSelector(
        (state: RootState) => state.subscription.data,
    );
    const licenses = useSelector(
        (state: RootState) => state.licenses.data.current,
    );
    const lang = useSelector((state: RootState) => state.language);

    const [videoEnabled, setVideoEnabled] = useState(false);
    const [chatEnabled, setChatEnabled] = useState(false);
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        const device = {
            manufacturer: DeviceInfo.getManufacturerSync(),
            model: DeviceInfo.getModel(),
            osVersion: DeviceInfo.getSystemVersion(),
            appVersion: DeviceInfo.getVersion(),
        };
        dispatch(actions.updateUser({ device }));
    }, []);

    useDidMount(() => {
        dispatch(actions.getAgreements());
        dispatch(actions.getTermsAndConditions());
        dispatch(actions.getPrivacyPolicy());
        dispatch(actions.getLicenses());
    });

    useEffect(() => {
        dispatch(actions.getUser());
        dispatch(actions.getPlans());
        dispatch(actions.getExperts());
    }, []);

    useEffect(() => {
        if (user.uid) {
            dispatch(actions.getHealthHistory({ uid: user.uid }));
            dispatch(actions.getResolvedQuestion({ uid: user.uid }));
            dispatch(actions.getUnresolvedQuestions({ uid: user.uid }));
            dispatch(actions.getFavoriteExperts({ uid: user.uid }));
        }
    }, [user]);

    useEffect(() => {
        if (user.subscription.id) {
            dispatch(actions.getSubscription({ id: user.subscription.id }));
        }
    }, [user]);

    useEffect(() => {
        if (subscription.plan.id) {
            dispatch(actions.getPlan({ id: subscription.plan.id }));
        }
    }, [subscription]);

    useEffect(() => {
        const includesState = licenses.includes(user.profileInfo.state.code);
        setVideoEnabled(includesState);
    });

    useEffect(() => {
        if (user.chats === 'Unlimited') {
            setChatEnabled(true);
        }
    });

    useEffect(() => {
        if (user.profileInfo.lang !== 'en') {
            dispatch(actions.setUserLanguage(i18n[user.profileInfo.lang]));
        }
    }, [user]);

    const handleNavigation = (destination, features) => {
        if (features === 'urgent') {
            const isAndroid = Platform.OS != 'ios';
            Linking.openURL(isAndroid ? 'tel:${911}' : 'telprompt:${911}');
        } else {
            if (features === 'video' && !videoEnabled) {
                dispatch(
                    actions.showMessage({
                        message: lang.dashboard.serviceUnavailable,
                    }),
                );
                return;
            }

            if (features === 'chat' && !chatEnabled) {
                dispatch(
                    actions.showMessage({
                        message: lang.dashboard.chatNotAvailable,
                    }),
                );
                return;
            }

            navigation.navigate(destination);
        }
    };

    const handlePress = () => {
        setShowChat(!showChat);
    };

    const handleChatPress = () => {
        setShowChat(!showChat);
        navigation.navigate('Ask');
    };

    const handleTechsupportPress = () => {
        setShowChat(!showChat);
        navigation.navigate('Help');
    };

    return (
        <Container
            styles={styles.container}
            barStyle="dark-content"
            unformatted
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Welcome displayName={user.profileInfo.firstName} />
                <Banner />
                {model.map((item, index) => (
                    <Item
                        key={item.title}
                        {...item}
                        onPress={handleNavigation}
                    />
                ))}
            </ScrollView>
            <TouchableOpacity onPress={handlePress}>
                <FastImage
                    style={{
                        height: 50,
                        width: 50,
                        position: 'absolute',
                        bottom: 10,
                        right: 20,
                    }}
                    source={require('../../../../assets/chat-line.png')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            <Modal
                styles={{ root: { alignSelf: 'center' } }}
                visible={showChat}
                onBackdropPress={handlePress}
            >
                <CustomButton
                    text="Tech Support"
                    buttonStyle={style.button}
                    textStyle={style.buttonText}
                    onPress={handleTechsupportPress}
                />
                <CustomButton
                    text="Chat with an Expert"
                    buttonStyle={style.button}
                    textStyle={style.buttonText}
                    onPress={handleChatPress}
                />
            </Modal>
        </Container>
    );
};

export default Dashboard;
