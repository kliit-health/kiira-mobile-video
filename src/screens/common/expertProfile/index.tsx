import React, { useEffect } from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    ScrollView,
    Platform,
    Linking,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers';
import {
    getExpertsData,
    clearExpertProfileState,
} from '~/redux/reducers/appointments';
import styles from './style';
import CustomText from '~/components/customText';
import Constant, {tables} from '~/utils/constants'; 
import { Rating } from 'react-native-elements';
import CustomButton from '~/components/customButton';
import FastImage from 'react-native-fast-image';
import { clearTopic } from '../../patient/dashboard/ask/action';

const ExpertProfile = props => {
    const lang = useSelector((state: RootState) => state.language);
    const expertDetails = useSelector(
        (state: RootState) => state.expertProfileReducer.expertData,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const { navigation } = props;
        const { uid } = navigation.state.params;
        const obj = {
            expertsParams: {
                tableName: tables.users,
                uid: uid,
            },
        };
        dispatch(getExpertsData(obj));
    }, []);

    useEffect(() => {
        return () => {
            dispatch(clearExpertProfileState());
        };
    }, []);

    const renderHeaderView = () => {
        const { navigation } = props;
        const { staticImages } = Constant.App;
        return (
            <View style={styles.titleContainerStyle}>
                <TouchableOpacity
                    style={styles.backContainerStyle}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image
                        resizeMode="contain"
                        source={staticImages.backIcon}
                        style={styles.backIconStyle}
                    />
                </TouchableOpacity>
                <CustomText style={styles.titleTextStyle}>
                    {lang.expertProfile.title}
                </CustomText>
            </View>
        );
    };

    const renderExpertInfoView = () => {
        const { navigation } = props;
        const { isFrom } = navigation.state.params;

        return (
            <View style={styles.expertInfoParentContainerStyle}>
                <FastImage
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                    }}
                    source={{ uri: expertDetails.profileInfo.profileImageUrl }}
                    activeOpacity={0.7}
                />
                {expertDetails.isOnline ? (
                    <View
                        style={{
                            alignSelf: 'center',
                            paddingLeft: 5,
                            paddingRight: 5,
                            paddingTop: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 120,
                            borderRadius: 10,
                            backgroundColor: Constant.App.colors.greenColor,
                            position: 'absolute',
                        }}
                    >
                        <CustomText
                            style={{
                                color: Constant.App.colors.whiteColor,
                                fontSize: Constant.App.textSize.Small,
                                fontWeight: '200',
                                fontFamily: Constant.App.fontFamily.bodyRegular,
                            }}
                        >
                            {'Online'}
                        </CustomText>
                    </View>
                ) : (
                    <View
                        style={{
                            alignSelf: 'center',
                            paddingLeft: 5,
                            paddingRight: 5,
                            paddingTop: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 120,
                            borderRadius: 10,
                            backgroundColor: Constant.App.colors.grayColor,
                            position: 'absolute',
                        }}
                    >
                        <CustomText
                            style={{
                                color: Constant.App.colors.whiteColor,
                                fontSize: Constant.App.textSize.Small,
                                fontWeight: '200',
                                fontFamily: Constant.App.fontFamily.bodyRegular,
                            }}
                        >
                            {'Offline'}
                        </CustomText>
                    </View>
                )}
                <CustomText style={styles.expertNameTextBoldStyle}>
                    {`${expertDetails.profileInfo.firstName} ${expertDetails.profileInfo.lastName}`}
                </CustomText>
                <CustomText style={styles.expertInfoProfessionTextStyle}>
                    {expertDetails.profileInfo.profession.fullName}
                </CustomText>
                <CustomText style={styles.expertProfessionLoctionBoldStyle}>
                    {`${expertDetails.profileInfo.city}, ${expertDetails.profileInfo.state.code}`}
                </CustomText>
                <Rating
                    imageSize={20}
                    readonly
                    startingValue={parseFloat(expertDetails.rating / 2)}
                />
                {isFrom && isFrom === Constant.App.screenNames.ChooseExpert && (
                    <CustomButton
                        buttonStyle={styles.btnContainerStyle}
                        textStyle={styles.btnTextStyle}
                        text={lang.expertProfile.btnText}
                        onPress={() => {
                            dispatch(clearTopic());
                            navigation.navigate(Constant.App.screenNames.Chat, {
                                expertDetails,
                            });
                        }}
                    />
                )}
            </View>
        );
    };

    const renderBioView = () => {
        return (
            <View style={styles.bioContainerStyle}>
                <CustomText style={styles.bioTitleTextStyle}>
                    {lang.expertProfile.bio}
                </CustomText>
                <CustomText style={styles.bioTextStyle}>
                    {expertDetails.profileInfo.bio}
                </CustomText>
            </View>
        );
    };

    const renderSpecialtiesView = () => {
        return (
            <View style={styles.bioContainerStyle}>
                <CustomText style={styles.bioTitleTextStyle}>
                    {lang.expertProfile.specialties}
                </CustomText>
                <CustomText style={styles.bioTextStyle}>
                    {expertDetails.profileInfo.profession.specialities.map(
                        (item, key) => `${item}    `,
                    )}
                </CustomText>
            </View>
        );
    };

    const renderLanguagesView = () => {
        return (
            <View style={styles.bioContainerStyle}>
                <CustomText style={styles.bioTitleTextStyle}>
                    {lang.expertProfile.languages}
                </CustomText>
                <CustomText style={styles.bioTextStyle}>
                    {expertDetails.profileInfo.languages.map(
                        (item, key) => `${item.value}  `,
                    )}
                </CustomText>
            </View>
        );
    };

    const renderClincInfoView = () => {
        return (
            <View style={styles.bioContainerStyle}>
                <CustomText style={styles.bioTitleTextStyle}>
                    {lang.expertProfile.clinicInfo}
                </CustomText>
                <CustomText style={styles.bioTextStyleBold}>
                    {`${expertDetails.clinicInfo.name}`}
                </CustomText>
                <CustomText style={styles.bioTextStyle}>
                    {`${expertDetails.clinicInfo.address}\n\n${expertDetails.clinicInfo.city}, ${expertDetails.clinicInfo.state.value} ${expertDetails.clinicInfo.zipcode}\n`}
                </CustomText>
                <TouchableOpacity
                    onPress={() => {
                        Platform.OS === 'android'
                            ? Linking.openURL(
                                  'tel:' + expertDetails.clinicInfo.phoneNumber,
                              )
                            : Linking.openURL(
                                  'telprompt:' +
                                      expertDetails.clinicInfo.phoneNumber,
                              );
                    }}
                >
                    <CustomText style={styles.phoneNumberTextStyleBold}>
                        {`${expertDetails.clinicInfo.phoneNumber}`}
                    </CustomText>
                </TouchableOpacity>
            </View>
        );
    };

    const renderHoursView = () => {
        return (
            <View style={styles.hoursContainerStyle}>
                <CustomText style={styles.bioTitleTextStyle}>
                    {lang.expertProfile.hours}
                </CustomText>
                <CustomText style={styles.bioTextStyle}>
                    {expertDetails.clinicInfo.hours.map((item, key) =>
                        item.startTime && item.endTime
                            ? `${item.day}: ${item.startTime} - ${item.endTime}\n\n`
                            : `${item.day}: ${lang.expertProfile.closed}\n\n`,
                    )}
                </CustomText>
            </View>
        );
    };

    return (
        <View style={styles.parentContainerStyle}>
            {renderHeaderView()}
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {expertDetails && (
                    <View>
                        {renderExpertInfoView()}
                        {renderBioView()}
                        {renderSpecialtiesView()}
                        {renderLanguagesView()}
                        {renderClincInfoView()}
                        {renderHoursView()}
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default ExpertProfile;
