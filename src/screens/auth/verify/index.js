import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import Constant from '../../../utils/constants';
import CustomInputText from '../../../components/customInputText';
import CustomButton from '../../../components/customButton';
import {showOrHideModal} from '../../../components/customModal/action';
import {isEmail} from '../../../utils/helper';
import {sendVerification} from './action';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const Verify = (props) => {
  const dispatch = useDispatch();
  const {navigation} = props;
  const {staticImages} = Constant.App;
  const [email, setEmail] = useState('');
  const lang = useSelector((state) => state.language);

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
          } else {
            const data = {
              params: {
                email: email.trim(),
              },
              navigation,
            };
            dispatch(sendVerification(data));
          }
        }}
        text={lang.login.Verify}
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
          {renderInputTextView()}
          {renderButtonView()}
        </View>
      </ScrollView>
      {Platform.OS === 'ios' && <KeyboardSpacer />}
    </View>
  );
};

export default Verify;
