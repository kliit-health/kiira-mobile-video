import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import Constant from '../../../utils/constants';
import CustomText from '../../../components/customText';
import CustomButton from '../../../components/customButton';
import {agreeToTerms} from './actions';

const NewUser = (props) => {
  const {staticImages} = Constant.App;
  const {navigation} = props;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authLoadingReducer.userData);
  const [agreeArr, setAgreeArr] = useState([
    {
      title: 'I agree to the terms of service',
      selected: false,
    },
  ]);

  const renderHeaderView = () => {
    return (
      <View style={styles.headerStyle}>
        <CustomText style={styles.titleTextStyle}>Last Steps</CustomText>
      </View>
    );
  };

  const renderAgreementView = () => {
    return (
      <View style={styles.pronounsParentContainerStyle}>
        {agreeArr.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => {
              agreeArr.forEach((element, index) => {
                agreeArr[index].selected = !element.selected;
              });
              setAgreeArr(Object.assign([], [], agreeArr));
            }}>
            <View style={styles.pronounsContainerStyle}>
              <Image
                resizeMode="contain"
                source={
                  item.selected
                    ? staticImages.checkBoxSelectedIcon
                    : staticImages.checkBoxIcon
                }
                style={styles.pronounsChecboxIconStyle}
              />
              <CustomText style={styles.pronounsTextStyle}>
                {item.title}
              </CustomText>
            </View>
          </TouchableOpacity>
        ))}
        <CustomButton
          buttonStyle={styles.agreementButtonContainerStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => {
            navigation.navigate(Constant.App.screenNames.TermsAndConditions);
          }}
          text="Terms and Conditions"
        />
        <CustomButton
          buttonStyle={styles.agreementButtonContainerStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => {
            navigation.navigate(Constant.App.screenNames.PrivacyPolicy);
          }}
          text="Privacy Policy"
        />
      </View>
    );
  };

  const renderButtonView = () => {
    return (
      <CustomButton
        buttonStyle={
          agreeArr[0].selected !== true
            ? styles.disabledButtonContainerStyle
            : styles.buttonContainerStyle
        }
        textStyle={styles.buttonTextStyle}
        disabled={agreeArr[0].selected !== true}
        onPress={() => {
          const data = {
            params: {
              agreeToTerms: true,
            },
            navigation,
            userData,
            agree: true,
          };
          dispatch(agreeToTerms(data));
        }}
        text="Complete Registration"
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderHeaderView()}
      {renderAgreementView()}
      {renderButtonView()}
    </View>
  );
};

export default NewUser;
