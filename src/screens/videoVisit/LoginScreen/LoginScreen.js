import React, { Component } from "react";
import {
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import { Header } from "../../../components";
import { CometChat } from "@cometchat-pro/react-native-chat";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { decode, encode } from "base-64";
import styles from "./styles";

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

class LoginScreen extends Component {
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
						this.props.navigation.navigate("Home");
					}
				});
			},
			error => {
				console.log("Initialization failed with error:", error);
			}
		);
	}

	buttonPressed() {
		UID = this.state.entredUID;
		this.cometchatLogin();
	}

	cometchatLogin() {
		this.setState({ loaderVisible: true });
		CometChat.login(UID, apiKey).then(
			user => {
				this.setState({ loaderVisible: false });
				this.props.navigation.navigate("Home");
			},
			error => {
				console.log("Login failed with exception:", { error });
			}
		);
	}

	render() {
		console.log(this.props);
		return (
			<View style={styles.container}>
				<Header
					title="Please Confirm"
					onBack={() => this.props.navigation.navigate("Appointments")}
				/>
				<View style={styles.inputsContainer}>
					<Image
						style={[{ height: 150 }, { width: 120 }, { alignSelf: "center" }]}
						source={require("../../../../assets/logo.png")}
					/>
					<View style={styles.textlayout}>
						<Text style={styles.subtitle}>
							{`I certify that I am currently in the state of ${this.props.userData.profileInfo.state.value} and that this consultation will be conducted while within state boundaries.`}
						</Text>
					</View>
					<View style={styles.buttonStyle}>
						<TouchableOpacity
							style={styles.SubmitButtonStyle}
							activeOpacity={0.5}
							onPress={this.buttonPressed}
						>
							<Text style={styles.TextStyle}> CONFIRM </Text>
						</TouchableOpacity>
					</View>
					<ActivityIndicator
						style={styles.LoadingIndicator}
						size={30}
						animating={this.state.loaderVisible}
						color={"#3f51b5"}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	userData: state.authLoadingReducer.userData,
});

export default connect(mapStateToProps)(LoginScreen);
