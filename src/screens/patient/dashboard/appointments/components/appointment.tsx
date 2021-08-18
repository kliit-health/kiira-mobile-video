import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { RootState } from '~/redux/reducers';
import FastImage from 'react-native-fast-image';
import CustomButton from '~/components/customButton';
import CustomText from '~/components/customText';
import { showOrHideModal } from '~/components/customModal/action';
import { Rating } from 'react-native-elements';
import styles from '../style';
import { useDispatch, useSelector } from 'react-redux';
import { cancelAppointment } from '~/redux/reducers/appointments';
import constants, { text, colors } from '~/utils/constants';
import moment from 'moment';

const Appointment = ({ visit, date, navigation }) => {
    const lang = useSelector((state: RootState) => state.language);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { staticImages } = constants.App;

    const { uid, calendarID, reason, id, expert, prepaid } = visit;
    const { credits, duration } = reason.sessionType;
    const data = {
        uid,
        id,
        expert,
        prepaid,
        credits,
    };

    let today = moment().local();
    let daysUntilVisit = Math.abs(
        moment.duration(today.diff(visit.time)).asDays(),
    );

    const sameDay = daysUntilVisit < 1;

    const handleSameDay = () =>
        dispatch(
            showOrHideModal(
                'Appointments can not be cancelled or rescheduled if your appointment is within 24 hours.',
            ),
        );

    const handleEndLoad = () => {
        setLoading(false);
    };

    return (
        <View
            style={{
                alignSelf: 'center',
                marginHorizontal: 20,
                paddingBottom: 50,
                width: '100%',
            }}
        >
            <View style={styles.myRecentExpertContainerStyle}>
                <View
                    style={{
                        // flex: 1,
                        alignSelf: 'center',
                        backgroundColor: colors.gray,
                        padding: 10,
                        overflow: 'hidden',
                        width: '100%',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontFamily: text.fontFamily.poppinsRegular,
                            fontSize: text.size.xxLarge,
                            textAlign: 'center',
                        }}
                    >
                        {moment(date.date).format('llll')}
                    </Text>
                </View>
                <View style={styles.expertContainer}>
                    <View style={styles.expertImageContainer}>
                        <FastImage
                            onLoadEnd={handleEndLoad}
                            style={styles.expertImage}
                            source={
                                loading
                                    ? staticImages.profilePlaceholderImg
                                    : {
                                          uri: visit.expert.imageUrl,
                                          priority: FastImage.priority.normal,
                                      }
                            }
                        />
                    </View>
                    <View style={{ width: '100%' }}>
                        <View style={styles.expertName}>
                            <Text style={styles.expertNameTextStyle}>
                                {`${visit.expert.firstName} ${visit.expert.lastName}`}
                            </Text>
                        </View>
                        <View style={styles.expertProfession}>
                            <CustomText
                                style={styles.expertProfessionTextStyle}
                            >
                                {visit.expert.profession}
                            </CustomText>
                        </View>
                    </View>
                </View>
                {/* <CustomButton
                    buttonStyle={styles.yesContainerStyle}
                    textStyle={styles.yesTextStyle}
                    onPress={() => {
                        navigation.navigate('Visit', {
                            uid: visit.expert.uid,
                            visit,
                        });
                    }}
                    text="View Details"
                /> */}
                <View
                    style={{
                        width: '80%',
                        flexDirection: 'row',
                        marginLeft: 20,
                        justifyContent: 'space-between',
                    }}
                >
                    <CustomButton
                        buttonStyle={styles.noContainerStyle}
                        textStyle={styles.noTextStyle}
                        onPress={() =>
                            sameDay
                                ? handleSameDay()
                                : dispatch(cancelAppointment(data))
                        }
                        text="Cancel"
                    />
                    <CustomButton
                        buttonStyle={styles.noContainerStyle}
                        textStyle={styles.noTextStyle}
                        onPress={() =>
                            sameDay
                                ? handleSameDay()
                                : navigation.navigate('RescheduleVisit', {
                                      visit,
                                      date,
                                      navigation,
                                      uid,
                                      calendarID,
                                  })
                        }
                        text="Reschedule"
                    />
                </View>
            </View>
        </View>
    );
};

export default Appointment;
