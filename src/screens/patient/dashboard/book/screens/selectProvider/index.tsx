import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import {
    Screen,
    Header,
    Heading,
    Column,
    Row,
    Text,
    Modal,
    Line,
    Button,
} from '~/components';
import {
    handleBack,
    handleNavigation,
} from '~/utils/functions/handleNavigation';
import { default as globalStyles } from '~/components/styles';

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
} = globalStyles;

const SelectProvider = ({ navigation }) => {
    const { appointment } = navigation.state.params;
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
        setExpert(expert);
        toggleModal();
    };

    const handlePress = () => {
        toggleModal();
        handleNavigation('Calendar', { expert, appointment });
    };

    const ExpertDetails = ({ expert }) => {
        const {
            expertName,
            profileInfo: { profileImageUrl, profession },
        } = expert;

        return (
            <TouchableOpacity onPress={() => handleSelection(expert)}>
                <Row options={[white_bg, sm_pad_v, pad_vertical]}>
                    <FastImage
                        style={[pad_h, image_md]}
                        resizeMode="contain"
                        source={{
                            uri: profileImageUrl,
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <Column>
                        <Text options={[pad_h, xLarge]}>{expertName}</Text>
                        <Text options={[pad_h, medium, light]}>
                            {profession.fullName}
                        </Text>
                    </Column>
                </Row>
            </TouchableOpacity>
        );
    };

    return (
        <Screen test="Book Screen">
            <Header title="Book Visit" onBack={handleBack} />
            <Heading options={[text_align_c]}>Please choose a provider</Heading>
            <FlatList
                data={experts}
                keyExtractor={item => item.expertName}
                renderItem={({ item }) => {
                    return <ExpertDetails expert={item} />;
                }}
            />
            {showModal && (
                <Modal
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
                        style={[
                            pad_h,
                            image_lg,
                            white_br,
                            center,
                            { marginTop: -50 },
                        ]}
                        resizeMode="contain"
                        source={{
                            uri: expert.profileInfo.profileImageUrl,
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <Column options={[white_bg, justify_fs, sm_pad_v]}>
                        <Text options={[pad_h, xLarge, center]}>
                            {expert.expertName}
                        </Text>
                        <Text
                            options={[pad_h, medium, light, center, sm_pad_v]}
                        >
                            {expert.profileInfo.profession.fullName}
                        </Text>
                        <Line options={[grey_br_b_md]} />
                        <Text options={[pad_h, xLarge]}>Specialities</Text>
                        <Row options={[no_pad_v, { height: 60 }]}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={item => item}
                                data={
                                    expert.profileInfo.profession.specialities
                                }
                                horizontal
                                renderItem={({ item }) => {
                                    return (
                                        <Text
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
                                        </Text>
                                    );
                                }}
                            />
                        </Row>
                        <Text options={[pad_h, xLarge]}>Bio</Text>
                        <Text options={[pad]}>{expert.profileInfo.bio}</Text>
                        <Text options={[pad_h, xLarge]}>Languages</Text>
                        <Row options={[pad]}>
                            {expert.profileInfo.languages.map(lang => (
                                <Text
                                    key={lang.value}
                                >{`${lang.value}  `}</Text>
                            ))}
                        </Row>
                        <Button
                            onPress={handlePress}
                            style={{ container: [pad_h, sm_pad_v] }}
                            title="See Availability"
                        />
                    </Column>
                </Modal>
            )}
        </Screen>
    );
};

export default SelectProvider;
