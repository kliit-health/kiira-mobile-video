import React from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import Constant from '../../../utils/constants';
import IconButton from '../../../components/iconButton';
import styles from './style';

const Header = ({handleClose}) => {
  const {staticImages} = Constant.App;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.xContainer}>
        <IconButton
          source={Constant.App.staticImages.xCloseIcon}
          onPress={handleClose}
        />
      </View>
      <Image
        resizeMode="contain"
        source={staticImages.logoHorizontal}
        style={styles.logoStyle}
      />
      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeadingTitle}>
          Get Treatment{'  '}
          <Image
            resizeMode="contain"
            source={staticImages.bandaidGrey}
            style={styles.bandaid}
          />
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
