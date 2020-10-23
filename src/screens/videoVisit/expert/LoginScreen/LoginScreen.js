import React, { Component } from "react";
import {
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import { Header } from "../../../../components";
import { CometChat } from "@cometchat-pro/react-native-chat";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { decode, encode } from "base-64";
import styles from "./styles";
import { SafeAreaView } from "react-navigation";

if (!global.btoa) {
	global.btoa = encode;
}

if (!global.atob) {
	global.atob = decode;
}

this.DOMParser = require("xmldom").DOMParser;

let appID = "24040819d9bfac8",
	apiKey = "fb7f672e5bcb70ee02b1338a49265cd4b7e65fe4",
	appRegion = "US";

class ExpertLoginScreen extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor() {
		super();
		this.state = {
			loaderVisible: false,
		};
		this.state.entredUID = "James";
		this.buttonPressed = this.buttonPressed.bind(this);
		var appSettings = new CometChat.AppSettingsBuilder()
			.subscribePresenceForAllUsers()
			.setRegion(appRegion)
			.build();
		CometChat.init(appID, appSettings).then(
			() => {
				CometChat.addConnectionListener(
					"XMPPConnectionListener",
					new CometChat.ConnectionListener({
						onConnected: () => {
							console.log("ConnectionListener => On Connected");
						},
						inConnecting: () => {
							console.log("ConnectionListener => In connecting");
						},
						onDisconnected: () => {
							console.log("ConnectionListener => On Disconnected");
						},
					})
				);
				CometChat.getLoggedinUser().then(user => {
					if (user !== null) {
						const { visit } = this.props.navigation.state.params;
						this.props.navigation.navigate("ExpertHomeScreen", {
							visit: visit,
							user: user,
						});
					}
				});
			},
			error => {
				console.log("Initialization failed with error:", error);
			}
		);
	}

	buttonPressed() {
		const { visit } = this.props.navigation.state.params;
		const expert = {
			firstName: visit.expert.firstName.toLowerCase(),
			lastName: visit.expert.lastName.toLowerCase(),
		};
		const expertUID = `${expert.firstName}_${expert.lastName}`;
		UID = expertUID;
		this.cometchatLogin();
	}

	cometchatLogin() {
		this.setState({ loaderVisible: true });
		const { visit } = this.props.navigation.state.params;
		console.log("EXPERT LOGIN", visit);
		CometChat.login(UID, apiKey).then(
			user => {
				this.setState({ loaderVisible: false });
				this.props.navigation.navigate("ExpertHomeScreen", {
					visit: visit,
					user: user,
				});
			},
			error => {
				console.log("Login failed with exception:", { error });
			}
		);
	}

	render() {
		console.log(this.props);
		const { visit } = this.props.navigation.state.params;
		console.log("EXPERT LOGIN", visit);
		return (
			<SafeAreaView style={styles.container}>
				<Header
					title="Kiira Video Chat"
					onBack={this.props.navigation.goBack}
				/>
				<View style={styles.inputsContainer}>
					<Image
						resizeMode="contain"
						style={[{ height: 150, width: "90%", alignSelf: "center" }]}
						source={require("../../../../../assets/logo-sm.png")}
					/>
					<View style={styles.textlayout}>
						<Text style={styles.subtitle}>
							{`Please tap start to login to the video chat platform, when your patient is online simply tap join and the call will begin.`}
						</Text>
					</View>
					<View style={styles.buttonStyle}>
						<TouchableOpacity
							style={styles.SubmitButtonStyle}
							activeOpacity={0.5}
							onPress={this.buttonPressed}
						>
							<Text style={styles.TextStyle}> START </Text>
						</TouchableOpacity>
					</View>
					<ActivityIndicator
						style={styles.LoadingIndicator}
						size={30}
						animating={this.state.loaderVisible}
						color={"#3f51b5"}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = state => ({
	userData: state.authLoadingReducer.userData,
});

export default connect(mapStateToProps)(ExpertLoginScreen);
