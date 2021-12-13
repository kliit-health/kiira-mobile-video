import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, TextButton, Avatar, Ratings } from '~/components';
import { Prescriber } from '~/components/icons';
import styles, { modifiers } from './styles';
import { calculateRating } from '~/utils/functions';
import { ChatHistory, VideoHistory } from './sections';
import { getChatHistoryAsync, getVideoHistoryAsync } from './actions';
import { getMedicalHistory } from '~/redux/actions';
import { useDidMount } from '~/utils/hooks';

const TreatmentHistory = ({ navigation }) => {
    const lang = useSelector((state:any) => state.language);

    const dispatch = useDispatch();
    const expertDetails = navigation.getParam('details');

    const { rating, profileInfo, isPrescriber } = expertDetails;
    const { firstName, lastName, profileImageUrl, profession } = profileInfo;
    const { fullName } = profession;

    const [activeSection, setActiveSection] = useState('video');

    useDidMount(() => {
        dispatch(getChatHistoryAsync());
    }); 

    useDidMount(() => {
        dispatch(getVideoHistoryAsync());
    });

    useDidMount(() => {
        dispatch(getMedicalHistory());
    });

    const handleOnBackPress = () => {
        navigation.goBack();
    };

    const handleVideoHistoryPress = () => {
        setActiveSection('video');
    };

    const handleChatHistoryPress = () => {
        setActiveSection('chat');
    };

    return (
        <Container unformatted>
            <Header styles={modifiers.header} onBack={handleOnBackPress} />
            <View style={styles.profileContainer}>
                <Avatar border source={profileImageUrl} />
                <View style={styles.detailsContainer}>
                    <Text
                        style={styles.nameText}
                    >{`${firstName} ${lastName}`}</Text>
                    <Text style={styles.titleText}>{fullName}</Text>
                    {isPrescriber && <Prescriber />}
                </View>
                <Ratings
                    styles={modifiers.ratings}
                    value={calculateRating(rating)}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TextButton
                    activeOpacity={1}
                    onPress={handleChatHistoryPress}
                    disabled={activeSection === 'chat'}
                >
                    {lang.treatmentHistory.chatHistory}
                </TextButton>
                <View style={styles.divider} />
                <TextButton
                    activeOpacity={1}
                    onPress={handleVideoHistoryPress}
                    disabled={activeSection === 'video'}
                >
                    {lang.treatmentHistory.videoHistory}
                </TextButton>
            </View>
            {activeSection === 'video' ? (
                <VideoHistory
                    navigation={navigation}
                    expertDetails={expertDetails}
                />
            ) : (
                <ChatHistory
                    navigation={navigation}
                    expertDetails={expertDetails}
                />
            )}
        </Container>
    );
};

export default TreatmentHistory;
