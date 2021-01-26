import React from 'react';
import {Image, SafeAreaView} from 'react-native';
import Constant from '../../../../utils/constants';
import style from './style';

const Header = () => {
  const {staticImages} = Constant.App;

  return (
    <SafeAreaView>
      <Image
        resizeMode="contain"
        source={staticImages.logoHorizontal}
        style={style.logoStyle}
      />
    </SafeAreaView>
  );
};

export default Header;
