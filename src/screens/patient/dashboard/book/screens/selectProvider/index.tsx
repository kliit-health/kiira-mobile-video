import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector, useDispatch } from 'react-redux';
import { setAppointmentExpert } from '~/redux/reducers/appointments';
import { RootState } from '~/redux/reducers';
import * as Kiira from '~/components';
import {
    handleBack,
    handleNavigation,
} from '~/utils/functions/handleNavigation';
import { select_provider } from '~/components/styles';
import { h1, h2, h3, default as globalStyles } from '~/components/styles';
import Constant, { colors, icons } from '~/utils/constants';
const { staticImages } = Constant.App;

const {
    medium,
    xLarge,
    text_align_c,
    image_md,
    image_lg,
    white_bg,
    sm_pad_v,
    sm_pad_h,
    grey_br_b_md,
    white_br,
    pad_h,
    pad_vertical,
    light,
    justify_fs,
    center,
    blue_bg,
    pad,
    pad_sm,
    radius_sm,
    hide_overflow,
    no_pad_v,
    pad_v,
} = select_provider;
const { height_50, width_50, align_items_c, justify_c, } =
    globalStyles;

const SelectProvider = () => {
    const dispatch = useDispatch();
    const [availableExperts, setAvailableExperts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [expert, setExpert] = useState(null);
    const experts = useSelector((state: RootState) => state.experts.data);
    const { visit } = useSelector((state: RootState) => state.appointments);
    const userProfile = useSelector(
        (state: RootState) => state.user.data.profileInfo,
    );

    useEffect(() => {
        if (experts.length && userProfile) {
            const userState = userProfile.state.code;
            const stateAvailableExperts = experts.filter(({ profileInfo }) => {
                const supportedStates = profileInfo.license.states;
                return supportedStates.some(({ code }) => code === userState);
            });

            const videoEnabledExperts = stateAvailableExperts.filter(
                ({ videoEnabled }) => videoEnabled,
            );

            const filteredExperts = videoEnabledExperts.filter(
                ({
                    profileInfo: {
                        profession: { specialities },
                    },
                }) => {
                    return specialities.some(specialty => {
                        return specialty.includes(visit.reason);
                    });
                },
            );

            setAvailableExperts(filteredExperts);
        }
    }, [experts]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleSelection = expert => {
        const { uid, calendarID, profileInfo, expertName } = expert;
        setExpert(expert);
        dispatch(
            setAppointmentExpert({ uid, calendarID, profileInfo, expertName }),
        );
        toggleModal();
    };

    const handlePress = () => {
        toggleModal();
        handleNavigation('Calendar');
    };

    const ExpertDetails = ({ expert }) => {
        const {
            expertName,
            profileInfo: { profileImageUrl, profession },
        } = expert;

        return (
            <TouchableOpacity onPress={() => handleSelection(expert)}>
                <Kiira.Row options={[white_bg, sm_pad_v, pad_vertical]}>
                    <FastImage
                        testID={expertName}
                        style={[pad_h, image_md]}
                        source={{
                            uri: profileImageUrl,
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <Kiira.Column>
                        <Kiira.Text options={[pad_h, xLarge]}>
                            {expertName}
                        </Kiira.Text>
                        <Kiira.Text options={[pad_h, medium, light]}>
                            {profession.fullName}
                        </Kiira.Text>
                    </Kiira.Column>
                </Kiira.Row>
            </TouchableOpacity>
        );
    };

    const ExpertModal = () => (
        <Kiira.Modal
            styles={{
                root: {
                    marginTop: 150,
                    marginHorizontal: 0,
                },
            }}
            visible={showModal}
            onBackdropPress={toggleModal}
        >
            <FastImage
                style={[pad_h, image_lg, white_br, center, { marginTop: -50 }]}
                source={{
                    uri: expert.profileInfo.profileImageUrl,
                    priority: FastImage.priority.normal,
                }}
            />
            <Kiira.Column options={[white_bg, justify_fs, sm_pad_v]}>
                <Kiira.Text options={[pad_h, xLarge, center]}>
                    {expert.expertName}
                </Kiira.Text>
                <Kiira.Text options={[pad_h, medium, light, center, sm_pad_v]}>
                    {expert.profileInfo.profession.fullName}
                </Kiira.Text>
                <Kiira.Line options={[grey_br_b_md]} />
                <Kiira.Text options={[pad_h, xLarge]}>Specialities</Kiira.Text>
                <Kiira.Row options={[no_pad_v, { height: 60 }]}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item}
                        data={expert.profileInfo.profession.specialities}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <Kiira.Text
                                    options={[
                                        sm_pad_h,
                                        sm_pad_v,
                                        blue_bg,
                                        { height: 40 },
                                        pad_sm,
                                        radius_sm,
                                        hide_overflow,
                                    ]}
                                >
                                    {item}
                                </Kiira.Text>
                            );
                        }}
                    />
                </Kiira.Row>
                <ScrollView>
                    <Kiira.Text options={[pad_h, xLarge]}>Bio</Kiira.Text>
                    <Kiira.Text options={[pad]}>
                        {expert.profileInfo.bio}
                    </Kiira.Text>
                    <Kiira.Text options={[pad_h, xLarge]}>Languages</Kiira.Text>
                    <Kiira.Row options={[pad]}>
                        {expert.profileInfo.languages.map(lang => (
                            <Kiira.Text
                                key={lang.value}
                            >{`${lang.value}  `}</Kiira.Text>
                        ))}
                    </Kiira.Row>
                </ScrollView>
                <Kiira.Button
                    testID="See Availability"
                    onPress={handlePress}
                    style={{ container: [pad_h, pad_v] }}
                    title="See Availability"
                />
            </Kiira.Column>
        </Kiira.Modal>
    );
    console.log('----AVAILABLE EXPERTS-----',availableExperts)
    return (
        <Kiira.Screen test="Book Screen">
            <Kiira.Header title="Book Visit" onBack={handleBack} />
            <Kiira.Heading options={[text_align_c]}>
                Please choose a provider
            </Kiira.Heading>
            <FlatList
                data={availableExperts}
                keyExtractor={item => item.expertName}
                renderItem={({ item }) => {
                    return <ExpertDetails expert={item} />;
                }}
            />
       {availableExperts.length === 0 && 
       <Kiira.Screen><Kiira.Column options={[align_items_c, justify_c]}>
                <Image
                    resizeMode="contain"
                    style={[height_50, width_50]}
                    source={staticImages.penguin}
                />
                
            </Kiira.Column></Kiira.Screen>}
            
            <Kiira.Column options={[white_bg]}>
            <Kiira.Text options={[h1]}>Uh oh! It looks like there aren't any providers available.</Kiira.Text>
                {/* <Text options={[h2]}>{time}</Text>
                <Text options={[h3, sm_pad_v]}>
                    Please follow the appointments button in the dashboard 5
                    minutes before your visit in order to start your
                    appointment.
                </Text>
                <Text options={[h3, sm_pad_v]}>
                    Should you need to cancel, please do so at least 24 hours in
                    advance.
                </Text>
                <Text options={[h3, sm_pad_v]}>
                    Please fill out your health intake form prior to the
                    session.
                </Text> */}
            </Kiira.Column>
            {/* <Kiira.Column options={[styles.buttonContainer]}>
                <Kiira.Button
                    onPress={() => navigation.navigate(screenNames.Home)}
                    title="Go Home"
                    style={{
                        container: styles.homeButton,
                        title: styles.homeButtonTitle,
                    }}
                /> */}
            {showModal && <ExpertModal />}
        </Kiira.Screen>
    );
};

export default SelectProvider;
