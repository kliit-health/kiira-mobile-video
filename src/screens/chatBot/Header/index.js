import React from "react";
import { View, Image } from "react-native";
import Constant from "../../../utils/constants";
import style from "./style";

const Header = () => {
  const { staticImages } = Constant.App;

  return (
    <View>
      <Image
        resizeMode="contain"
        source={staticImages.logoHorizontal}
        style={style.logoStyle}
      />
    </View>
  );
};

export default Header;
