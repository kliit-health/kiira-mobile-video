import React from "react";
import { View, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import CustomText from "../../components/customText";
import styles from "./style";
import Constant from "../../utils/constants";
import Language from "../../utils/localization";
import CustomButton from "../../components/customButton";

let lang = Language["en"];
const GetStarted = (props) => {
  const { navigation } = props;
  const { staticImages } = Constant.App;
  const userData = useSelector((state) => state.authLoadingReducer.userData);

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
          {`${lang.getStarted.title}${userData.profileInfo.firstName} ${
            userData.profileInfo.lastName
          }`}
        </CustomText>
        <CustomText style={styles.subTitleTextStyle}>
          {lang.getStarted.content}
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
          navigation.navigate(Constant.App.stack.AppStack);
        }}
        text={lang.getStarted.btnText}
      />
    );
  };

  return (
    <View style={styles.parentContainerStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainerStyle}>
          {renderLogoView()}
          {renderTitleView()}
          {renderButtonView()}
        </View>
      </ScrollView>
    </View>
  );
};

export default GetStarted;
