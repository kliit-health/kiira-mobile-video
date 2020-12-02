import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text } from 'react-native';
import ChangePlan from '../changePlan';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style';
import CustomText from '../../components/customText';
import CustomButton from '../../components/customButton';
import Language from '../../utils/localization';
import { signoutApihit } from './action';
import Constant from '../../utils/constants';
import { getPlans } from '../../utils/firebase';

let lang = Language.en;

const Account = (props) => {
  const userData = useSelector((state) => state.authLoadingReducer.userData);
  const dispatch = useDispatch();
  const [planType, setPlanType] = useState('');
  const [changePlanVisible, setChangePlanVisible] = useState(false);
  const { navigation } = props;
  const { staticImages } = Constant.App;

  useEffect(() => {
    async function getPlanInfo() {
      let planData = await getPlans(userData.plan.id);
      setPlanType(planData);
    }
    getPlanInfo();
  }, []);

  const handleChangePlan = () => {
    setChangePlanVisible(!changePlanVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerStyle} />
        <View style={styles.accountContainer}>
          <Image
            style={styles.accountAvatar}
            defaultSource={staticImages.profilePlaceholderImg}
            source={{ uri: userData.profileInfo.profileImageUrl }}
            activeOpacity={0.7}
          />
          <Text style={styles.userName}>
            {`${userData.profileInfo.firstName} ${userData.profileInfo.lastName}`}
          </Text>
          <View style={styles.userInfoContainer}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.userInfoHeading}>BORN</Text>
              <Text>{userData.profileInfo.dob}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.userInfoHeading}>PRONOUNS</Text>
              <Text>{userData.profileInfo.pronouns}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.userInfoHeading}>SEXUALITY</Text>
              <Text>{userData.profileInfo.sexuality.value}</Text>
            </View>
          </View>
        </View>
        <View style={styles.accountPlanContainer}>
          <Text style={styles.userName}>{planType.title}</Text>
          <View style={styles.accountButtons}>
            <CustomButton
              onPress={handleChangePlan}
              text={'Change Plan'}
              buttonStyle={styles.creditButtonStyle}
              textStyle={styles.creditButtonTextStyle}
            />
            <CustomButton
              onPress={() => {
                navigation.navigate(Constant.App.screenNames.Help);
              }}
              text={'Cancel Plan'}
              buttonStyle={styles.creditButtonStyle}
              textStyle={styles.creditButtonTextStyle}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.itemsParentContainerStyle}
          onPress={() => {
            navigation.navigate(Constant.App.screenNames.Setting);
          }}>
          <CustomText style={styles.itemTextStyle}>
            {lang.account.setting}
          </CustomText>
          <Image
            style={{
              width: 20,
              height: 40,
            }}
            resizeMode="contain"
            source={staticImages.rightChevronIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsParentContainerStyle}
          onPress={() => {
            navigation.navigate(Constant.App.screenNames.TermsAndConditions);
          }}>
          <CustomText style={styles.itemTextStyle}>
            {lang.account.termsPolicies}
          </CustomText>
          <Image
            style={{
              width: 20,
              height: 40,
            }}
            resizeMode="contain"
            source={staticImages.rightChevronIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsParentContainerStyle}
          onPress={() => {
            navigation.navigate(Constant.App.screenNames.PrivacyPolicy);
          }}>
          <CustomText style={styles.itemTextStyle}>
            {lang.account.privacyPolicies}
          </CustomText>
          <Image
            style={{
              width: 20,
              height: 40,
            }}
            resizeMode="contain"
            source={staticImages.rightChevronIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemsParentContainerStyle}
          onPress={() => {
            navigation.navigate(Constant.App.screenNames.Help);
          }}>
          <CustomText style={styles.itemTextStyle}>
            {lang.account.help}
          </CustomText>
          <Image
            style={{
              width: 20,
              height: 40,
            }}
            resizeMode="contain"
            source={staticImages.rightChevronIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutParentContainerStyle}
          onPress={() => {
            const payload = {
              navigation,
              isLoaderShow: true,
            };
            dispatch(signoutApihit(payload));
          }}>
          <CustomText style={styles.logoutTextStyle}>
            {lang.account.logout}
          </CustomText>
        </TouchableOpacity>
      </ScrollView>
      <ChangePlan visible={changePlanVisible} onClose={handleChangePlan} />
    </View>
  );
};

export default Account;
