import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import CustomButton from '~/components/customButton';
import CustomText from '~/components/customText';
import { Conditional } from '~/components';
import { Rating } from 'react-native-elements';
import styles from '../style';
import { setAppointmentTime } from '~/redux/reducers/appointments';
import moment from 'moment';

const ExpertInfo = ({
    expertData,
    appointmentData,
    setShowShedule,
    showShedule,
    generateDateInfo,
    setSelectedDate,
    today,
    setSelectedTime,
    setDay,
    setTime,
}) => {
    const lang = useSelector((state: RootState) => state.language);
    const dispatch = useDispatch();
    const { appointments } = appointmentData;

    return (
        <View>
            <View style={styles.expertInfoParentContainerStyle}>
                <View style={styles.expertImageContainer}>
                    <FastImage
                        style={styles.expertImage}
                        resizeMode="cover"
                        source={{ uri: expertData.profileInfo.profileImageUrl }}
                    />
                    <View>
                        <View style={styles.myRecentExpertContainerStyle}>
                            <View style={styles.expertName}>
                                <Text style={styles.expertNameTextStyle}>
                                    {`${expertData.profileInfo.firstName} ${expertData.profileInfo.lastName}`}
                                </Text>
                            </View>
                            <View style={styles.expertProfession}>
                                <CustomText
                                    style={styles.expertProfessionTextStyle}
                                >
                                    {
                                        expertData.profileInfo.profession
                                            .shortName
                                    }
                                </CustomText>

                                <Conditional if={expertData.isPrescriber}>
                                    <Image
                                        style={styles.expertPrescriberImage}
                                        source={require('../../../../../../../assets/rx.png')}
                                        resizeMode="contain"
                                    />
                                    <CustomText
                                        style={styles.expertPrescriberTextStyle}
                                    >
                                        {lang.expertProfile.prescriber}
                                    </CustomText>
                                </Conditional>
                            </View>
                            <View style={styles.expertIsPrescriber}>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={parseFloat(
                                        expertData.rating / 2,
                                    )}
                                />
                            </View>
                        </View>
                        <View>
                            <Conditional if={appointments.current.length}>
                                <CustomText style={styles.availability}>
                                    {appointments.current[0]
                                        ? `Next Availability ${moment(
                                              appointments.current[0].time,
                                          ).format('ddd ll')}`
                                        : ''}
                                </CustomText>
                            </Conditional>
                            <Conditional if={appointments.current.length}>
                                <View
                                    style={{ marginLeft: -90, marginRight: 90 }}
                                >
                                    <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        data={appointments.current}
                                        horizontal={true}
                                        decelerationRate={'fast'}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <CustomButton
                                                    buttonStyle={
                                                        styles.timeSlotContainerStyle
                                                    }
                                                    textStyle={
                                                        styles.timeSlotTextStyle
                                                    }
                                                    onPress={() => {
                                                        var date =
                                                            generateDateInfo(
                                                                item,
                                                            );
                                                        setShowShedule(
                                                            !showShedule,
                                                        );
                                                        dispatch(
                                                            setAppointmentTime(
                                                                item.time,
                                                            ),
                                                        );
                                                        setSelectedDate(today);
                                                        setSelectedTime(index);
                                                        setDay(date);
                                                        setTime(item.time);
                                                    }}
                                                    text={moment(
                                                        item.time,
                                                    ).format('h:mm a')}
                                                />
                                            );
                                        }}
                                        keyExtractor={(item, index) =>
                                            index.toString()
                                        }
                                    />
                                </View>
                            </Conditional>
                            <Conditional if={appointments.todayLoading}>
                                <View style={{ alignSelf: 'flex-start' }}>
                                    <ActivityIndicator
                                        size="large"
                                        color="#008AFC"
                                    />
                                </View>
                            </Conditional>
                            <Conditional if={!appointments.current.length}>
                                <CustomText style={styles.noAvailability}>
                                    No appointments
                                </CustomText>
                            </Conditional>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ExpertInfo;
