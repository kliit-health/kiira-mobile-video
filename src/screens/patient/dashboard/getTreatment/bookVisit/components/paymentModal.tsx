import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Image} from 'react-native';
import IconButton from '~/components/iconButton';
import CustomButton from '~/components/customButton';
import styles from '../style';
import Constant from '~/utils/constants';
import {getPlans} from '~/utils/firebase';

const PaymentModal = ({
  modalVisible,
  setModalVisible,
  setApplyCredit,
  setShowPlans,
  showPlans,
  disableApplyCredit,
  userData,
}) => {
  const [planType, setPlanType] = useState('');
  const {staticImages} = Constant.App;

  useEffect(() => {
    async function getPlanInfo() {
      let planData = await getPlans(userData.plan);
      setPlanType(planData);
    }
    getPlanInfo();
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        {!showPlans ? (
          <View style={styles.centeredView}>
            <View style={styles.planView}>
              <IconButton
                iconStyle={styles.closeButton}
                source={Constant.App.staticImages.xCloseIcon}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />

              {/* <Text style={styles.modalText}>Current Plan</Text> */}
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={staticImages.logoHorizontal}
              />
              <Text style={{...styles.modalText, fontSize: 20}}>
                {`${
                  userData.visits + userData.prepaid
                } Video visit(s) available`}
              </Text>
              <CustomButton
                disabled={disableApplyCredit}
                buttonStyle={
                  disableApplyCredit
                    ? styles.noContainerDisabledStyle
                    : styles.noContainerStyle
                }
                textStyle={
                  disableApplyCredit
                    ? styles.noTextDisabledStyle
                    : styles.noTextStyle
                }
                onPress={() => {
                  if (userData.visits > 0 || userData.prepaid > 0) {
                    setModalVisible(!modalVisible);
                    setApplyCredit(true);
                  }
                }}
                text="Apply"
              />
              {/* <CustomButton
                buttonStyle={styles.yesContainerStyle}
                textStyle={styles.yesTextStyle}
                onPress={() => {
                  setShowPlans(!showPlans);
                }}
                text="Change Plan"
              /> */}
            </View>
          </View>
        ) : (
          <View style={styles.centeredView}>
            <View style={styles.planView}>
              <IconButton
                styles={styles.closeButton}
                source={Constant.App.staticImages.xCloseIcon}
                resizeMode="contain"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setShowPlans(!showPlans);
                }}
              />
              <Text style={styles.modalText}>Kiira Plans</Text>
              <Text style={{...styles.modalText, fontSize: 20}}>
                Change Membership Plan
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{flexDirection: 'column'}}>Kiira Starter:</Text>
                  <Text style={{flexDirection: 'column'}}>Unlimited Chats</Text>
                  <Text style={{flexDirection: 'column'}}>0 Visits</Text>
                </View>

                <CustomButton
                  buttonStyle={styles.planContainerStyle}
                  textStyle={styles.planTextStyle}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setApplyCredit(true);
                  }}
                  text="Apply"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{flexDirection: 'column'}}>Kiira Pro:</Text>
                  <Text style={{flexDirection: 'column'}}>Unlimited Chats</Text>
                  <Text style={{flexDirection: 'column'}}>1 Visit</Text>
                </View>

                <CustomButton
                  buttonStyle={styles.planContainerStyle}
                  textStyle={styles.planTextStyle}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setApplyCredit(true);
                  }}
                  text="Apply"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{flexDirection: 'column'}}>Kiira Pro Plus:</Text>
                  <Text style={{flexDirection: 'column'}}>Unlimited Chats</Text>
                  <Text style={{flexDirection: 'column'}}>2 Visits</Text>
                </View>

                <CustomButton
                  buttonStyle={styles.planContainerStyle}
                  textStyle={styles.planTextStyle}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setApplyCredit(true);
                  }}
                  text="Apply"
                />
              </View>
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
};

export default PaymentModal;
