import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, ScrollView, Image, StyleSheet, Modal } from 'react-native';
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
import { icons,colors, images } from '~/utils/constants';
import { positional } from 'yargs';


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
    const [showUpdateModal, setShowUpdateModal] = useState(false);
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

    const toggleUpdateModal = () => {
        setShowUpdateModal(!showUpdateModal);
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

    const ErrorModal = () =>(
        <Kiira.Modal 
        styles={{
            
        }}
            visible={showUpdateModal}
            onBackdropPress={toggleUpdateModal}
        >
            <Kiira.Column options={[white_bg]}>
        <Kiira.Text options={[h1]}>Thank you for reaching out!</Kiira.Text>
            <Kiira.Text options={[h3, sm_pad_v]}>
                We want to ensure that you are able to get the care you need. Please check your email for an update. You should receive a message shortly.
            </Kiira.Text>
           
        </Kiira.Column>
        <Kiira.Column options={[styles.buttonContainer]}>
            <Kiira.Button
                onPress={toggleUpdateModal}
                title="Go to home"
                style={{ container: [sm_pad_v, pad_h], title: [] }}
            />
                 </Kiira.Column>
        </Kiira.Modal>
    )
const ErrorState = () => (
    <Kiira.Screen test="Book Screen">
         <Kiira.Header title="Select Provider" onBack={handleBack} />
        <Kiira.Column options={[align_items_c, justify_c]}>
        <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={images.kiiraLogo}
                />
            
        </Kiira.Column>
        <Kiira.Column options={[white_bg,{flex:2}]}>
        <Kiira.Text options={[h1]}>Uh oh! It looks like there aren't any providers available.</Kiira.Text>
           
            <Kiira.Text options={[h3, sm_pad_v]}>
                Due to licensing, video visits are currently limited to covered locations.Please let us know if you would like an update on availability in your area.
            </Kiira.Text>
           
        </Kiira.Column>
        <Kiira.Column options={[styles.buttonContainer]}>
            <Kiira.Button
                onPress={toggleUpdateModal}
                title="Request Update"
                style={{ container: [sm_pad_v, pad_h], title: [] }}
            />
                 </Kiira.Column>
                 {showUpdateModal && <ErrorModal />}
                 </Kiira.Screen>
)
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
        availableExperts.length !== 0 ?    
        <Kiira.Screen test="Book Screen">
            <Kiira.Header title="Select Provider" onBack={handleBack} />
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
            {showModal && <ExpertModal /> }  
           
        </Kiira.Screen> : <ErrorState />
    );
};

export default SelectProvider;
const styles = StyleSheet.create({
    buttonContainer: {
        padding: 0,
        margin: 0,
        flex: 0,
        backgroundColor: colors.white,

    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        justifyContent:'center',

    },

});
