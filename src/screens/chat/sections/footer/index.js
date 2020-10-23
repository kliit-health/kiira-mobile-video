import React, { Fragment } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import Image from "react-native-fast-image";
import { icons, colors } from "../../../../utils/constants";
import metrices from "../../../../utils/metrices";
import Language from "../../../../utils/localization";

import styles from "./styles";

const lang = Language["en"];

const Footer = ({
	message,
	onPickerPress,
	onPickerCancel,
	onChangeText,
	imageUri: uri,
	onSendPress,
	resolved,
}) => {
	const handleSend = () => {
		onSendPress();
	};

	return (
		<Fragment>
			{resolved ? (
				<View style={styles.resolvedParentContainer}>
					<Text style={styles.resovledTextStyle}>
						{lang.chat.resolvedConversationMsg}
					</Text>
				</View>
			) : (
				<View style={styles.chatInputParentContainer}>
					{uri ? (
						<View style={styles.imageParentContainerStyle}>
							<TouchableOpacity
								style={styles.imageCrossContainerStyle}
								onPress={onPickerCancel}
							>
								<Image
									style={styles.imageCrossStyle}
									resizeMode="contain"
									source={icons.crossIcon}
								/>
							</TouchableOpacity>
							<View style={styles.imageContainerStyle}>
								<Image
									resizeMode="cover"
									style={{
										height: metrices.DEVICE_WIDTH - 100,
										width: metrices.DEVICE_WIDTH * 0.65,
									}}
									source={{ uri }}
								/>
							</View>
						</View>
					) : null}
					<View style={styles.chatInputContainer}>
						<TouchableOpacity
							style={styles.cameraContainerStyle}
							onPress={onPickerPress}
						>
							<Image
								style={{
									width: 28,
									height: 28,
								}}
								resizeMode="contain"
								source={icons.cameraGreyIcon}
							/>
						</TouchableOpacity>
						<View style={styles.textContainerStyle}>
							<TextInput
								maxHeight={100}
								multiline={true}
								autoCapitalize="sentences"
								onChangeText={onChangeText}
								placeholder={lang.chat.enterMsg}
								value={message}
								style={styles.textInputStyle}
								placeholderTextColor={colors.lightGrey}
							/>
							<TouchableOpacity
								style={styles.sendButtonContainerStyle}
								onPress={() => (message || uri) && handleSend()}
							>
								<Image
									style={{
										width: 28,
										height: 28,
									}}
									resizeMode="contain"
									source={icons.sendIcon}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			)}
		</Fragment>
	);
};

Footer.displayName = "Footer";

export default Footer;
