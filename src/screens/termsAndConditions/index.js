import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import CustomText from "../../components/customText";
import Constant from "../../utils/constants";

const TermsConditions = (props) => {
  const [terms, setTerms] = useState([]);
  const legal = useSelector((state) => state.termsReducer.legal.sections);

  useEffect(() => {
    setTerms(legal);
  }, [terms]);

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
        <CustomText style={styles.titleTextStyle}>
          Terms and Conditions
        </CustomText>
        <CustomText style={styles.doneTextStyle}>{}</CustomText>
      </View>
    );
  };

  const renderInfo = () => {
    if (terms) {
      return terms.map((section) => {
        return (
          <View key={section.title} style={styles.sectionContainerStyle}>
            <CustomText style={styles.sectionTitleTextStyle}>
              {section.title}
            </CustomText>
            <CustomText style={styles.sectionTextStyle}>
              {section.body.replace(/\\n/g, "\n")}
            </CustomText>
          </View>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderHeaderView()}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
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
        {renderInfo()}
      </ScrollView>
    </View>
  );
};

export default TermsConditions;
