import React from "react";
import { View, TouchableOpacity, Image, Linking, Text } from "react-native";
import styles from "./styles";
import CustomText from "../../components/customText";
import CustomButton from "../../components/customButton";
import Constant from "../../utils/constants";

const Help = (props) => {
  const renderHeaderView = () => {
    const { navigation } = props;
    const { staticImages } = Constant.App;
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={{
              width: 20,
              height: 40,
              transform: [{ rotate: "180deg" }],
            }}
            resizeMode="contain"
            source={staticImages.rightChevronIcon}
          />
        </TouchableOpacity>
        <CustomText style={styles.titleTextStyle}>Help</CustomText>
        <CustomText style={styles.doneTextStyle}>{}</CustomText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeaderView()}
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/logo-sm.png")}
          style={{
            width: 220,
            height: 110,
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Have a question?</Text>
      <CustomButton
        buttonStyle={styles.buttonContainerStyle}
        textStyle={styles.buttonTextStyle}
        onPress={() => {
          Linking.openURL("mailto:support@kiira.io?subject=Kiira Support");
        }}
        text="Ask the Kiira support team"
      />
    </View>
  );
};

export default Help;
