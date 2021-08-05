import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { Header } from '~/components';
import styles from './style';

import { ExpertInfo, VisitDetails, Buttons, PaymentModal } from './components';

const BookVisit = props => {
    const { navigation } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [showPlans, setShowPlans] = useState(false);
    const [applyCredit, setApplyCredit] = useState(false);
    const [applyPayment, setApplyPayment] = useState(false);
    const [booked, setBooked] = useState(false);

    const expertData = useSelector(state => state.expertProfile.expertData);
    const visitData = useSelector(state => state.expertSchedule);
    const userData = useSelector(state => state.user.data);
    const bookVisit = useSelector(state => state.bookVisit);
    const {
        firstName,
        lastName,
        profileImageUrl,
        pronouns,
        phoneNumber,
        dob,
        gender,
        insurance,
        plan,
    } = userData.profileInfo;
    const { email, uid, organizationId } = userData;

    const disableApplyCredit =
        userData.visits + userData.prepaid < visitData.appointmentType.credits;

    const appointmentDetails = {
        firstName,
        lastName,
        email,
        calendarID: visitData.calendarID,
        time: visitData.time,
        reason: visitData.reason,
        prescription: visitData.prescription,
        appointmentType: visitData.appointmentType,
        uid,
        prepaid: bookVisit.prepaid,
        insurance,
        plan,
        complete: false,
        profile: profileImageUrl,
        pronouns,
        phoneNumber,
        dob,
        gender,
        organizationId,
        expert: {
            firstName: expertData.profileInfo.firstName,
            lastName: expertData.profileInfo.lastName,
            profession: expertData.profileInfo.profession.shortName,
            imageUrl: expertData.profileInfo.profileImageUrl,
            rating: expertData.rating,
            uid: expertData.uid,
        },
    };

    const childProps = {
        applyCredit,
        appointmentDetails,
        booked,
        applyPayment,
        modalVisible,
        navigation,
        setModalVisible,
        setApplyCredit,
        setBooked,
        setShowPlans,
        showPlans,
        visitData,
        expertData,
        userData,
        disableApplyCredit,
    };

    return (
        <View style={styles.parentContainerStyle}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                {expertData && (
                    <View>
                        <Header
                            title="Book"
                            onBack={() => navigation.goBack()}
                            customStyles={{ borderBottomWidth: 0 }}
                        />
                        <ExpertInfo {...childProps} />
                        <VisitDetails {...childProps} />
                        <Buttons {...childProps} />
                        <PaymentModal {...childProps} />
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default BookVisit;
