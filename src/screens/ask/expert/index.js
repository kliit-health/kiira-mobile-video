import React, { useEffect } from "react";
import {
	Image,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	FlatList,
	Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style";
import Language from "../../../utils/localization";
import CustomText from "../../../components/customText";
import Constant from "../../../utils/constants";
import { getExpertQuestionData } from "./action";
import { getTerms } from "../../termsAndConditions/action";
import { getPolicy } from "../../privacyPolicy/action";
import moment from "moment";
import CachedImage from "react-native-image-cache-wrapper";

const lang = Language["en"];
const AskExpert = props => {
	const dispatch = useDispatch();
	const userData = useSelector(state => state.authLoadingReducer.userData);
	const resolvedQuestionsData = useSelector(
		state => state.askExpertReducer.resolvedQuestionsData
	);
	const questionData = useSelector(
		state => state.askExpertReducer.questionData
	);
	const isDataFetch = useSelector(state => state.askExpertReducer.isDataFetch);

	const { staticImages } = Constant.App;
	const { navigation } = props;

	useEffect(() => {
		fetchData();
		dispatch(getTerms());
		dispatch(getPolicy());
	}, []);

	const fetchData = () => {
		const params = {
			questionParams: {
				tableName: Constant.App.firebaseTableNames.questions,
				uid: userData.uid,
				collection: Constant.App.firebaseTableNames.questionList,
				key: Constant.App.firebaseTableKeyValuesNames.questionConditionKey,
				value: false,
				userConditionKey:
					Constant.App.firebaseTableKeyValuesNames.questionExpertConditionKey,
			},
			previousQuestionParams: {
				tableName: Constant.App.firebaseTableNames.questions,
				uid: userData.uid,
				collection: Constant.App.firebaseTableNames.questionList,
				key: Constant.App.firebaseTableKeyValuesNames.questionConditionKey,
				value: true,
				userConditionKey:
					Constant.App.firebaseTableKeyValuesNames.questionExpertConditionKey,
			},
		};
		dispatch(getExpertQuestionData(params, dispatch));
	};

	const renderRecentChatView = () => {
		return (
			<View style={styles.recentChatParentContainerStyle}>
				<View style={styles.subtitleContainerStyle}>
					<CustomText style={styles.subtitleTextStyle}>
						{lang.askExpert.recent}
					</CustomText>
				</View>
				<FlatList
					showsHorizontalScrollIndicator={false}
					keyboardDismissMode={Platform.OS === "ios" ? "none" : "on-drag"}
					keyboardShouldPersistTaps={Platform.OS === "ios" ? "never" : "always"}
					data={questionData}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate(Constant.App.screenNames.ChatExpert, {
									questionData: item,
								});
							}}
						>
							<View style={styles.recentChatContainerStyle}>
								<TouchableOpacity onPress={() => {}}>
									<CachedImage
										containerStyle={{ alignSelf: "center" }}
										style={{
											width: 80,
											height: 80,
											borderRadius: 50,
										}}
										source={
											item.userInfo.profileInfo.profileImageUrl
												? {
														uri: item.userInfo.profileInfo.profileImageUrl,
												  }
												: staticImages.profilePlaceholderImg
										}
										activeOpacity={0.7}
									/>
								</TouchableOpacity>
								<View style={styles.userInfoContainerStyle}>
									<CustomText style={styles.userInfoTextBoldStyle}>
										{`${item.userInfo.profileInfo.firstName} ${item.userInfo.profileInfo.lastName} (${item.userInfo.profileInfo.pronouns})`}
									</CustomText>
									<CustomText
										style={styles.userInfoTextStyle}
										numberOfLines={1}
									>
										{item.lastMessage ? item.lastMessage : item.question}
									</CustomText>
									<CustomText style={styles.userInfoTextStyle}>
										{item.modifiedDate
											? moment.unix(item.modifiedDate).fromNow(true)
											: moment.unix(item.createdAt).fromNow(true)}
									</CustomText>
								</View>
								{item.expertUnreadCount ? (
									<View style={styles.unreadCountContainerStyle}>
										<CustomText style={styles.unreadCountTextStyle}>
											{item.expertUnreadCount}
										</CustomText>
									</View>
								) : null}
							</View>
						</TouchableOpacity>
					)}
					ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	};

	const renderResolvedChatView = () => {
		return (
			<View style={styles.resolvedChatParentContainerStyle}>
				<View style={styles.subtitleContainerStyle}>
					<CustomText style={styles.subtitleTextStyle}>
						{lang.askExpert.resolved}
					</CustomText>
				</View>
				<FlatList
					showsHorizontalScrollIndicator={false}
					keyboardDismissMode={Platform.OS === "ios" ? "none" : "on-drag"}
					keyboardShouldPersistTaps={Platform.OS === "ios" ? "never" : "always"}
					data={resolvedQuestionsData}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate(Constant.App.screenNames.ChatExpert, {
									questionData: item,
								});
							}}
						>
							<View style={styles.recentChatContainerStyle}>
								<TouchableOpacity onPress={() => {}}>
									<CachedImage
										containerStyle={{ alignSelf: "center" }}
										style={{
											width: 80,
											height: 80,
											borderRadius: 50,
										}}
										source={
											item.userInfo.profileInfo.profileImageUrl
												? {
														uri: item.userInfo.profileInfo.profileImageUrl,
												  }
												: staticImages.profilePlaceholderImg
										}
										activeOpacity={0.7}
									/>
								</TouchableOpacity>
								<View style={styles.userInfoContainerResolvedChatStyle}>
									<CustomText style={styles.userInfoTextBoldStyle}>
										{`${item.userInfo.profileInfo.firstName} ${item.userInfo.profileInfo.lastName} (${item.userInfo.profileInfo.pronouns})`}
									</CustomText>
									<CustomText
										numberOfLines={1}
										style={styles.userInfoTextStyle}
									>
										{item.lastMessage ? item.lastMessage : item.question}
									</CustomText>
									<CustomText style={styles.userInfoTextStyle}>
										{moment
											.unix(item.createdAt)
											.format(Constant.App.dateFormat)}
									</CustomText>
								</View>
							</View>
						</TouchableOpacity>
					)}
					ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	};

	const renderEmptyView = () => {
		return (
			<View style={styles.emptyViewContainerStyle}>
				<Image
					style={{
						width: 150,
						height: 150,
						alignSelf: "center",
						marginTop: 20,
					}}
					resizeMode="contain"
					source={require("../../../../assets/logo.png")}
				/>
				<Text style={styles.title}>
					You have not been asked any questions. Check back later.
				</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<ScrollView
				keyboardShouldPersistTaps="handled"
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.titleContainerStyle}>
					<CustomText style={styles.titleTextStyle}>
						{lang.askExpert.title}
					</CustomText>
				</View>
				{questionData && questionData.length > 0
					? renderRecentChatView()
					: null}
				{resolvedQuestionsData && resolvedQuestionsData.length > 0
					? renderResolvedChatView()
					: null}
				{isDataFetch &&
				questionData &&
				questionData.length === 0 &&
				resolvedQuestionsData &&
				resolvedQuestionsData.length === 0
					? renderEmptyView()
					: null}
			</ScrollView>
		</View>
	);
};

export default AskExpert;
