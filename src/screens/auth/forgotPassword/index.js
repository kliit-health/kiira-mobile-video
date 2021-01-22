import React, {useState, useEffect} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomText from '../../../components/customText';
import styles from './style';
import Constant from '../../../utils/constants';
import CustomInputText from '../../../components/customInputText';
import Language from '../../../utils/localization';
import CustomButton from '../../../components/customButton';
import {showOrHideModal} from '../../../components/customModal/action';
import {forgotPasswordApiHit, resertForgotPasswordState} from './action';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {isEmail} from '../../../utils/helper';

let lang = Language['en'];
const ForgotPassword = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const {navigation} = props;
  const {staticImages} = Constant.App;
  const forgotPasswordSuccess = useSelector(
    (state) => state.forgotPasswordReducer.forgotPasswordSuccess,
  );

  useEffect(() => {
    if (forgotPasswordSuccess) {
      setEmail('');
      dispatch(resertForgotPasswordState());
    }
  });

  const renderInputTextView = () => {
    return (
      <View style={styles.inputTextParentContainerStyle}>
        <View style={styles.inputTextContainerStyle}>
          <CustomInputText
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
            placeholder={lang.forgotPassword.Email}
            value={email}
            style={
              email
                ? styles.inputTypeStyle
                : [styles.inputTypeStyle, {fontWeight: '100'}]
            }
            placeholderTextColor={Constant.App.colors.blackColor}
          />
        </View>
      </View>
    );
  };

  const renderCrossIconView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          resizeMode="contain"
          source={staticImages.crossIcon}
          style={styles.backIconStyle}
        />
      </TouchableOpacity>
    );
  };

  const renderLogoView = () => {
    return (
      <Image
        resizeMode="contain"
        source={staticImages.loginLogoImage}
        style={styles.logoStyle}
      />
    );
  };

  const renderTitleView = () => {
    return (
      <View style={styles.titleContainer}>
        <CustomText style={styles.titleTextStyle}>
          {lang.forgotPassword.Title}
        </CustomText>
        <CustomText style={styles.subTitleTextStyle}>
          {lang.forgotPassword.Subtitle}
        </CustomText>
      </View>
    );
  };

  const renderButtonView = () => {
    return (
      <CustomButton
        buttonStyle={styles.buttonContainerStyle}
        textStyle={styles.buttonTextStyle}
        onPress={() => {
          if (!email.trim()) {
            dispatch(showOrHideModal(lang.login.EmptyEmailMsg));
          } else if (!isEmail(email.trim())) {
            dispatch(showOrHideModal(lang.login.InvalidEmailMsg));
          } else {
            const payload = {
              email,
            };
            dispatch(forgotPasswordApiHit(payload));
          }
        }}
        text={lang.forgotPassword.Submit}
      />
    );
  };

  return (
    <View style={styles.parentContainerStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {renderCrossIconView()}
        <View style={styles.contentContainerStyle}>
          {renderLogoView()}
          {renderTitleView()}
          {renderInputTextView()}
          {renderButtonView()}
        </View>
      </ScrollView>
      {Platform.OS === 'ios' && <KeyboardSpacer />}
    </View>
  );
};

export default ForgotPassword;
