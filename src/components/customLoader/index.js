/* eslint-disable react/prop-types */
import React from "react";
import { View, Modal, Image } from "react-native";
import style from "./style";
import * as Animatable from "react-native-animatable";

const CustomLoader = ({ showLoader, textMsg }) => {
  return (
    <Modal onRequestClose={() => {}} transparent isVisible={showLoader}>
      <View style={style.parentContainerStyle}>
        <View style={style.innerContainerStyle}>
          <Animatable.View iterationCount="infinite" animation="bounce">
            <Image
              source={require("../../../assets/logo.png")}
              style={{ width: 100, height: 80 }}
              resizeMode="cover"
            />
          </Animatable.View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomLoader;
