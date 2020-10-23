import React, { useEffect } from "react";
import { View, Linking } from "react-native";
import { useSelector } from "react-redux";
import { getStatusBarHeight } from "../../components/iPhoneXHelper";
import Constant from "../../utils/constants";

const Learn = (props) => {
  const userData = useSelector((state) => state.authLoadingReducer.userData);
  const appScreen = useSelector((state) => state.authLoadingReducer.appScreen);

  useEffect(() => {
    const { navigation } = props;

    if (
      appScreen &&
      (appScreen.currentScreen === Constant.App.screenNames.Learn ||
        appScreen.currentScreen === Constant.App.screenNames.LearnExpert)
    ) {
      Linking.openURL(Constant.App.learnTabUrl);
      setTimeout(() => {
        if (userData.role === "Expert") {
          navigation.navigate(
            appScreen.prevScreen
              ? appScreen.prevScreen
              : Constant.App.screenNames.AskExpert
          );
        } else {
          navigation.navigate(
            appScreen.prevScreen
              ? appScreen.prevScreen
              : Constant.App.screenNames.AskUser
          );
        }
      }, 200);
    }
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        marginTop: getStatusBarHeight(),
      }}
    />
  );
};

export default Learn;
