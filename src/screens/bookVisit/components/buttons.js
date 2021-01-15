import React, {Fragment} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../components/customButton';
import styles from '../style';
import Constant from '../../../utils/constants';
import {makeAppointment, prepaidAppointment} from '../action';
import {getAppointmentsList} from '../../appointments/action';

const Buttons = ({
  applyCredit,
  appointmentDetails,
  booked,
  expertData,
  modalVisible,
  navigation,
  setModalVisible,
  setBooked,
  disableApplyCredit,
  userData,
}) => {
  const dispatch = useDispatch();

  const bookedButtons = () => (
    <Fragment>
      <CustomButton
        buttonStyle={styles.yesContainerStyle}
        textStyle={styles.yesTextStyle}
        onPress={() => {
          dispatch(getAppointmentsList({uid: appointmentDetails.uid}));
          navigation.navigate(Constant.App.screenNames.Appointments);
        }}
        text="Check Upcoming Visits"
      />
      <CustomButton
        buttonStyle={styles.noContainerStyle}
        textStyle={styles.noTextStyle}
        onPress={() => {
          navigation.navigate(Constant.App.screenNames.BottomTab);
        }}
        text="Go Home"
      />
    </Fragment>
  );

  const pay = () => (
    <Fragment>
      <CustomButton
        buttonStyle={styles.yesContainerStyle}
        textStyle={styles.yesTextStyle}
        onPress={() => {
          navigation.navigate('BuyingCredit');
        }}
        text="Buy Credit"
      />
      <CustomButton
        disabled={disableApplyCredit}
        buttonStyle={
          disableApplyCredit
            ? styles.noContainerDisabledStyle
            : styles.noContainerStyle
        }
        textStyle={
          disableApplyCredit ? styles.noTextDisabledStyle : styles.noTextStyle
        }
        onPress={() => {
          if (userData.visits === 0) {
            dispatch(prepaidAppointment());
          }
          setModalVisible(!modalVisible);
        }}
        text="Apply Credit"
      />
    </Fragment>
  );

  const confirm = () => (
    <CustomButton
      buttonStyle={styles.yesContainerStyle}
      textStyle={styles.yesTextStyle}
      onPress={() => {
        dispatch(makeAppointment(appointmentDetails));
        setBooked(true);
        navigation.navigate('Dashboard');
      }}
      text="Confirm"
    />
  );

  return (
    <View style={styles.renderButtonsContainer}>
      {booked ? bookedButtons() : !applyCredit ? pay() : confirm()}
    </View>
  );
};

export default Buttons;
