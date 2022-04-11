import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    FlatList,
    ScrollView,
    Image,
    StyleSheet,
    Modal,
    View,
    Text,
    Pressable,
} from 'react-native';
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
import { icons, colors, images } from '~/utils/constants';
import { positional } from 'yargs';
import Constant from '~/utils/constants';
import metrices from '~/utils/metrices';

const { textSize } = Constant.App;

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
                return supportedStates.some(({ code }) => {
                    return code === userState
                });
            });

            const videoEnabledExperts = stateAvailableExperts.filter(
                ({ videoEnabled }) => videoEnabled,
            );

            var filteredExperts = videoEnabledExperts.filter(
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
            
            if(!userProfile.test){
                filteredExperts = filteredExperts.filter(
                ({
                    profileInfo: {
                        test: value,
                    }
                }) => { 
                    return !value
                });
            }
 
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
                <Kiira.Row options={[select_provider.white_bg, select_provider.sm_pad_v, select_provider.pad_vertical]}>
                    <FastImage
                        testID={expertName}
                        style={[select_provider.pad_h, select_provider.image_md]}
                        source={{
                            uri: profileImageUrl,
                            priority: FastImage.priority.normal,
                        }}
                    />
                    <Kiira.Column>
                        <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge]}>
                            {expertName}
                        </Kiira.Text>
                        <Kiira.Text options={[select_provider.pad_h, select_provider.medium, select_provider.light]}>
                            {profession.fullName}
                        </Kiira.Text>
                    </Kiira.Column>
                </Kiira.Row>
            </TouchableOpacity>
        );
    };

    const ErrorModal = () => (
        <Modal transparent={true} visible={showUpdateModal}>
            <View style={{ flex: 2, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>
                            Thank you for reaching out!
                        </Text>
                        <Text style={styles.subtitle}>
                            We want to ensure that you are able to get the care
                            you need. Please check your email for an update. You
                            should receive a message shortly.
                        </Text>

                        <Pressable
                            style={styles.homeButton}
                            onPress={() => {
                                toggleUpdateModal;
                                handleNavigation('Home');
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.textStyle,
                                }}
                            >
                                Go to home
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
    const ErrorState = () => (
        <Kiira.Screen test="Book Screen" options={[select_provider.white_bg]}>
            <Kiira.Header title="Select Provider" onBack={handleBack} />
            <Kiira.Column options={[globalStyles.align_items_c, globalStyles.justify_c, select_provider.blue_bg]}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={images.penguin_g}
                />
            </Kiira.Column>
            <Kiira.Column options={[select_provider.white_bg, { flex: 2 }]}>
                <Kiira.Text options={[h1, { marginTop: '10%' }]}>
                    Uh oh! It looks like there aren't any providers available.
                </Kiira.Text>

                <Kiira.Text
                    options={[h3, select_provider.sm_pad_v, { flex: 3.7, marginBottom: '10%' }]}
                >
                    Due to licensing, video visits are currently limited to
                    covered locations.Please let us know if you would like an
                    update on availability in your area.
                </Kiira.Text>
                {showUpdateModal && <ErrorModal />}
            </Kiira.Column>
            <Kiira.Column options={[styles.buttonContainer]}>
                <Kiira.Button
                    onPress={toggleUpdateModal}
                    title="Request Update"
                    style={{ container: [select_provider.sm_pad_v, select_provider.pad_h], title: [] }}
                />
            </Kiira.Column>
        </Kiira.Screen>
    );
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
                style={[select_provider.pad_h, select_provider.image_lg, select_provider.white_br, select_provider.center, { marginTop: -50 }]}
                source={{
                    uri: expert.profileInfo.profileImageUrl,
                    priority: FastImage.priority.normal,
                }}
            />
            <Kiira.Column options={[select_provider.white_bg, select_provider.justify_fs, select_provider.sm_pad_v]}>
                <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge, select_provider.center]}>
                    {expert.expertName}
                </Kiira.Text>
                <Kiira.Text options={[select_provider.pad_h, select_provider.medium, select_provider.light, select_provider.center, select_provider.sm_pad_v]}>
                    {expert.profileInfo.profession.fullName}
                </Kiira.Text>
                <Kiira.Line options={[select_provider.grey_br_b_md]} />
                <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge]}>Specialities</Kiira.Text>
                <Kiira.Row options={[select_provider.no_pad_v, { height: 60 }]}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item}
                        data={expert.profileInfo.profession.specialities}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <Kiira.Text
                                    options={[
                                        select_provider.sm_pad_h,
                                        select_provider.sm_pad_v,
                                        select_provider.blue_bg,
                                        { height: 40 },
                                        select_provider.pad_sm,
                                        select_provider.radius_sm,
                                        select_provider.hide_overflow,
                                    ]}
                                >
                                    {item}
                                </Kiira.Text>
                            );
                        }}
                    />
                </Kiira.Row>
                <ScrollView>
                    <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge]}>Bio</Kiira.Text>
                    <Kiira.Text options={[select_provider.pad]}>
                        {expert.profileInfo.bio}
                    </Kiira.Text>
                    <Kiira.Text options={[select_provider.pad_h, select_provider.xLarge]}>Languages</Kiira.Text>
                    <Kiira.Row options={[select_provider.pad]}>
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
                    style={{ container: [select_provider.pad_h,select_provider. pad_v] }}
                    title="See Availability"
                />
            </Kiira.Column>
        </Kiira.Modal>
    );
    return availableExperts.length !== 0 ? (
        <Kiira.Screen test="Book Screen">
            <Kiira.Header title="Select Provider" onBack={handleBack} />
            <Kiira.Heading options={[select_provider.text_align_c]}>
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
    ) : (
        <ErrorState />
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
        justifyContent: 'center',
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100%',
        flex: 1,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 40,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    subtitle: {
        width: metrices.width * 0.85,
        fontSize: textSize.Large,
        padding: 25,
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    title: {
        width: metrices.width * 0.78,
        fontSize: textSize.xxLarge,
        fontWeight: 'bold',
        padding: 10,
    },
    homeButton: {
        backgroundColor: colors.primaryBlue,
        borderColor: colors.primaryBlue,
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 250,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: '5%',
    },
});
