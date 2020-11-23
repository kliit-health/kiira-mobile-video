import React from 'react';
import {View, Image, Text} from 'react-native';
import Constant from '../../../utils/constants';
import style from './style';

const Header = () => {
  const {staticImages} = Constant.App;

  return (
    <View style={style.container}>
      <Image
        resizeMode="contain"
        source={staticImages.logoHorizontal}
        style={style.logoStyle}
      />
      <View style={style.subHeadingContainer}>
        <Text style={style.subHeadingTitle}>
          Get Treatment{'  '}
          <Image
            resizeMode="contain"
            source={staticImages.bandaidGrey}
            style={style.bandaid}
          />
        </Text>
      </View>
    </View>
  );
};

export default Header;
