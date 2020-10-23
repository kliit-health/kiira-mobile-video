import React from "react";
import {
	View,
	ScrollView,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";
import { useDispatch } from "react-redux";
import styles from "./style";
import CustomText from "../../components/customText";
import Constant from "../../utils/constants";
import reasonsForVisit from "../../utils/constants/requestVisit";
import { reasonForVisit } from "../expertSchedule/action";
import { Header } from "../../components";

const RequestVisit = props => {
	const { navigation } = props;
	const { staticImages } = Constant.App;
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Header title="Request a visit" onBack={() => navigation.goBack()} />
			<FlatList
				showsVerticalScrollIndicator={false}
				keyboardDismissMode={Platform.OS === "ios" ? "none" : "on-drag"}
				keyboardShouldPersistTaps={Platform.OS === "ios" ? "never" : "always"}
				data={reasonsForVisit}
				decelerationRate={"fast"}
				renderItem={({ item, index }) => {
					return (
						<TouchableOpacity
							style={styles.itemsParentContainerStyle}
							onPress={() => {
								dispatch(reasonForVisit(item.title));
								navigation.navigate(Constant.App.screenNames.NeedsPresciption);
							}}
						>
							<CustomText style={styles.itemTextStyle}>{item.title}</CustomText>
							<Image
								style={{
									width: 20,
									height: 40,
								}}
								resizeMode="contain"
								source={staticImages.rightChevronIcon}
							/>
						</TouchableOpacity>
					);
				}}
				keyExtractor={index => index.title}
			/>
		</View>
	);
};

export default RequestVisit;
