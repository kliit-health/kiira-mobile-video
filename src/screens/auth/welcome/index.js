import React from 'react';
import {View, Image, Text} from 'react-native';
import Constant from '../../../utils/constants';
import styles from './styles';
import CustomButton from '../../../components/customButton';

const Welcome = (props) => {
  const {staticImages} = Constant.App;
  const {navigation} = props;
  const {userData} = props.navigation.state.params;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={staticImages.logoHorizontal}
        style={styles.logoStyle}
      />
      <View>
        <Text style={styles.title}>
          {`Welcome ${userData.displayName}! \n Let's Set up your profile.`}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/kiira_penguin_b.png')}
            style={{
              height: 400,
            }}
            resizeMode="contain"
          />
        </View>

        <CustomButton
          buttonStyle={styles.buttonContainerStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => {
            navigation.navigate(Constant.App.screenNames.AddProfileData, {
              userData,
            });
          }}
          text="Get Started"
        />
      </View>
    </View>
  );
};

export default Welcome;
