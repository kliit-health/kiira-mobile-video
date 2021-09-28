import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
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
} = select_provider;

const SelectProvider = () => {
    const dispatch = useDispatch();
    const [availableExperts, setAvailableExperts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [expert, setExpert] = useState(null);
    const experts = useSelector((state: RootState) => state.experts.data);
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
                        return specialty.includes('Birth Control');
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
                        resizeMode="contain"
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
                resizeMode="contain"
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
                <Kiira.Button
                    testID="See Availability"
                    onPress={handlePress}
                    style={{ container: [pad_h, sm_pad_v] }}
                    title="See Availability"
                />
            </Kiira.Column>
        </Kiira.Modal>
    );

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
            {showModal && <ExpertModal />}
        </Kiira.Screen>
    );
};

export default SelectProvider;
