import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { IAppointments } from '~/redux/reducers/appointments';
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

    const appointments: IAppointments = useSelector(
        (state: RootState) => state.appointments,
    );

    const {
        reason,
        expertData,
        prepaid,
        time,
        calendarID,
        prescription,
        appointmentTypeID,
    } = appointments;

    const userData = useSelector((state: RootState) => state.user.data);

    const {
        firstName,
        lastName,
        profileImageUrl,
        pronouns,
        phoneNumber,
        dob,
        gender,
        insurance,
    } = userData.profileInfo;

    const { email, uid, organizationId, plan } = userData;

    const disableApplyCredit =
        userData.visits + userData.prepaid < reason.sessionType.credits;

    const appointmentDetails = {
        firstName,
        lastName,
        email,
        calendarID,
        time,
        reason: reason,
        prescription,
        appointmentTypeID: reason.sessionType.appointmentTypeID,
        uid,
        prepaid,
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
                        <VisitDetails
                            applyCredit={applyCredit}
                            booked={booked}
                            visitData={appointments}
                        />
                        <Buttons {...childProps} />
                        <PaymentModal {...childProps} />
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default BookVisit;
