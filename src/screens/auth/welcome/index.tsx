import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Text, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Constant from '~/utils/constants';
import styles from './styles';
import CustomButton from '~/components/customButton';
import CustomInputText from '~/components/customInputText';
import * as actions from '~/redux/actions';
import DeviceInfo from 'react-native-device-info';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { usePromoCode } from '~/utils/firebase';

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  const { staticImages, screenNames } = Constant.App;
  const [code, setCode] = useState('');

  useEffect(() => {
    const device = {
      manufacturer: DeviceInfo.getManufacturerSync(),
      model: DeviceInfo.getModel(),
      osVersion: DeviceInfo.getSystemVersion(),
      appVersion: DeviceInfo.getVersion(),
    };
    dispatch(actions.updateUser({ device }));
  }, []);

  const user = useSelector(state => state.user.data);

  const handlePress = () => {
    if (code.length) {
      usePromoCode(code.toLowerCase());
    }

    navigation.navigate(screenNames.ChatBot);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          resizeMode="contain"
          source={staticImages.logoHorizontal}
          style={styles.logoStyle}
        />
        <View>
          <View style={styles.imageContainer}>
            <Text style={styles.title}>{`Welcome ${user.displayName}!`}</Text>
            <Image
              source={staticImages.penguin_b}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.heading}>Do you have a promo code?</Text>
            <Text style={styles.bodyText}>
              If not, that's fine just press Set Up Profile.
            </Text>
            <View style={styles.inputTextContainerStyle}>
              <CustomInputText
                autoCapitalize="none"
                onChangeText={value => setCode(value)}
                placeholder="Enter Promo Code"
                value={code}
                style={styles.inputTypeStyle}
              />
            </View>
          </View>

          <CustomButton
            buttonStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            onPress={handlePress}
            text="Set Up Profile"
          />
        </View>
      </ScrollView>
      {Platform.OS === 'ios' && <KeyboardSpacer />}
    </View>
  );
};

export default withNavigation(Welcome);
