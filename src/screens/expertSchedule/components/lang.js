import React from "react";
import { View } from "react-native";
import CustomText from "../../../components/customText";
import Language from "../../../utils/localization";
import styles from "../style";

const lang = Language["en"];

const Languages = ({ expertData }) => {
	return (
		<View style={styles.bioContainerStyle}>
			<CustomText style={styles.bioTitleTextStyle}>
				{lang.expertProfile.languages}
			</CustomText>
			<CustomText style={styles.bioTextStyle}>
				{expertData.profileInfo.languages.map((item, key) => `${item.value}  `)}
			</CustomText>
		</View>
	);
};

export default Languages;
