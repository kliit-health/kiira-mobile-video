import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { View, Text, SectionList } from "react-native";
import moment from "moment";
import { generateIdentifier } from "../../../../utils/functions";
import intl from "../../../../utils/localization";
import { screenNames } from "../../../../utils/constants";
import { ListItem, TextButton } from "../../../../components";
import { getSections, formatTime } from "./helpers";
import {
	listStyles,
	itemFutureStyles,
	itemPastStyles,
	fallbackStyles,
	separatorStyles,
	itemModifiers,
} from "./styles";

const VideoHistory = ({ navigation, expertDetails }) => {
	const { visits } = useSelector(
		state => state.treatmentHistory.videoHistory,
		shallowEqual
	);

	const handleViewDetails = visit => {
		navigation.navigate(screenNames.Visit, {
			uid: expertDetails.uid,
			visit,
		});
	};

	return (
		<SectionList
			style={listStyles.root}
			contentContainerStyle={listStyles.contentContainer}
			ListEmptyComponent={() => <Fallback />}
			sections={getSections(
				visits.filter(visit => visit.expert.uid === expertDetails.uid)
			)}
			renderSectionHeader={({ section }) => <SectionSeparator {...section} />}
			renderItem={({ item: { visit, isUpcoming } }) => {
				const key = generateIdentifier();
				return isUpcoming ? (
					<ItemFuture
						key={key}
						{...visit}
						onPress={() => handleViewDetails(visit)}
					/>
				) : (
					<ItemPast key={key} {...visit} />
				);
			}}
		/>
	);
};

const ItemFuture = ({ reason, time, expert, onPress }) => {
	const { firstName, lastName } = expert;

	return (
		<View style={itemFutureStyles.root}>
			<View style={itemFutureStyles.headerContainer}>
				<Text style={itemFutureStyles.title}>
					{`${intl.en.videoHistory.videoWith} ${firstName} ${lastName}`}
				</Text>
				<View style={itemFutureStyles.subtitleContainer}>
					<Text style={itemFutureStyles.subject}>
						{intl.en.videoHistory.subject}
					</Text>
					<Text style={itemFutureStyles.subtitle}>{reason}</Text>
				</View>
			</View>
			<View style={itemFutureStyles.timeContainer}>
				{formatTime(time).map(({ primary, secondary }) => (
					<View style={itemFutureStyles.timeItem}>
						<Text style={itemFutureStyles.primaryText}>{primary}</Text>
						<Text style={itemFutureStyles.secondaryText}>{secondary}</Text>
					</View>
				))}
			</View>
			<TextButton onPress={onPress} outlined styles={itemModifiers.button}>
				{intl.en.videoHistory.viewDetails}
			</TextButton>
		</View>
	);
};

const ItemPast = ({ reason, time, id }) => (
	<ListItem styles={itemModifiers.list}>
		<View>
			<View style={itemPastStyles.subtitleContainer}>
				<Text style={itemPastStyles.subject}>
					{intl.en.videoHistory.subject}
				</Text>
				<Text style={itemPastStyles.subtitle}>{reason}</Text>
			</View>
			<View style={itemPastStyles.subtitleContainer}>
				<Text style={itemPastStyles.subject}>
					{intl.en.videoHistory.visitId}
				</Text>
				<Text style={itemPastStyles.subtitle}>{id}</Text>
			</View>
		</View>
		<View style={itemPastStyles.subtitleContainer}>
			<Text style={itemPastStyles.dateText}>
				{moment.unix(time).calendar(null, {
					sameElse: "DD/MM/YYYY",
				})}
			</Text>
		</View>
	</ListItem>
);

const SectionSeparator = ({ title }) => (
	<View style={separatorStyles.container}>
		<Text style={separatorStyles.title}>{title}</Text>
	</View>
);

const Fallback = () => (
	<View style={fallbackStyles.container}>
		<Text style={fallbackStyles.description}>{intl.en.videoHistory.empty}</Text>
	</View>
);

export default VideoHistory;
