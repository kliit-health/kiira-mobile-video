import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomText from '../../../components/customText';
import styles from './style';
import Constant from '../../../utils/constants';
import CustomInputText from '../../../components/customInputText';
import CustomButton from '../../../components/customButton';
import {showOrHideModal} from '../../../components/customModal/action';
import {isEmail} from '../../../utils/helper';
import {loginApi, resetLoginState} from './action';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const Login = (props) => {
  const lang = useSelector((state) => state.language);
  const loginFailure = useSelector((state) => state.login.loginFailure);
  const dispatch = useDispatch();
  const {navigation} = props;
  const {staticImages} = Constant.App;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (loginFailure) {
      setPassword('');
      dispatch(resetLoginState());
    }
  });

  const renderInputTextView = () => {
    return (
      <View style={styles.inputTextParentContainerStyle}>
        <View style={styles.inputTextContainerStyle}>
          <CustomInputText
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
            placeholder={lang.login.Email}
            value={email}
            style={
              email
                ? styles.inputTypeStyle
                : [styles.inputTypeStyle, {fontWeight: '100'}]
            }
            placeholderTextColor={Constant.App.colors.blackColor}
          />
        </View>
        <View style={styles.inputTextContainerStyle}>
          <CustomInputText
            autoCapitalize="none"
            onChangeText={(value) => setPassword(value)}
            placeholder={lang.login.Password}
            value={password}
            secureTextEntry={!showPassword}
            style={
              password
                ? styles.inputTypePasswordStyle
                : [styles.inputTypePasswordStyle, {fontWeight: '100'}]
            }
            placeholderTextColor={Constant.App.colors.blackColor}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              resizeMode="contain"
              source={
                showPassword
                  ? staticImages.passwordVisibleIcon
                  : staticImages.passwordInvisibleIcon
              }
              style={styles.passwordHideShowIconStyle}
            />
          </TouchableOpacity>
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
      <View style={styles.contentContainerStyle}>
        <Image
          resizeMode="contain"
          source={staticImages.loginLogoImage}
          style={styles.logoStyle}
        />
        <Image
          resizeMode="contain"
          source={staticImages.loginLogoImage2}
          style={styles.logo2Style}
        />
      </View>
    );
  };

  const renderButtonView = () => {
    return (
      <CustomButton
        buttonStyle={styles.loginButtonContainerStyle}
        textStyle={styles.loginButtonTextStyle}
        onPress={() => {
          if (!email.trim()) {
            dispatch(showOrHideModal(lang.login.EmptyEmailMsg));
          } else if (!isEmail(email.trim())) {
            dispatch(showOrHideModal(lang.login.InvalidEmailMsg));
          } else if (!password) {
            dispatch(showOrHideModal(lang.login.EmptyPasswordMsg));
          } else {
            const data = {
              params: {
                email: email.trim(),
                password: password.trim(),
              },
              navigation,
            };
            dispatch(loginApi(data));
          }
        }}
        text={lang.login.Login}
      />
    );
  };

  const renderForgotPasswordView = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Constant.App.screenNames.ForgotPassword);
        }}>
        <CustomText style={styles.forgotPasswordTextStyle}>
          {lang.login.ForgotPassword}
        </CustomText>
      </TouchableOpacity>
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
          {renderInputTextView()}
          {renderButtonView()}
          {renderForgotPasswordView()}
        </View>
      </ScrollView>
      {Platform.OS === 'ios' && <KeyboardSpacer />}
    </View>
  );
};

export default Login;
