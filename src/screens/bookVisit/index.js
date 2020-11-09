import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {Header} from '../../components';
import styles from './style';

import {ExpertInfo, VisitDetails, Buttons, PaymentModal} from './components';

const BookVisit = (props) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [applyCredit, setApplyCredit] = useState(false);
  const [applyPayment, setApplyPayment] = useState(false);
  const [booked, setBooked] = useState(false);
  const expertData = useSelector(
    (state) => state.expertProfileReducer.expertData,
  );

  const visitData = useSelector((state) => state.expertScheduleReducer);
  const userData = useSelector((state) => state.authLoadingReducer.userData);
  console.log(userData);
  const appointmentDetails = {
    firstName: userData.profileInfo.firstName,
    lastName: userData.profileInfo.lastName,
    email: userData.email,
    calendarID: visitData.calendarID,
    time: visitData.time,
    reason: visitData.reason,
    prescription: visitData.prescription,
    navigation,
    uid: userData.uid,
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
  };

  return (
    <View style={styles.parentContainerStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {expertData && (
          <View>
            <Header
              title="Book"
              onBack={() => navigation.goBack()}
              customStyles={{borderBottomWidth: 0}}
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
