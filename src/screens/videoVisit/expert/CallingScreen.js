/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { CometChat } from "@cometchat-pro/react-native-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class ExpertCallingScreen extends Component {
	constructor(props) {
		super(props);
		this.addCallListner();
		this.Call = this.props.navigation.getParam("call", {});
		this.defaultLayout = this.props.navigation.getParam(
			"enableDefaultLayout",
			1
		);
		this.isCallOutGoing = this.props.navigation.getParam("isOutgoingCall", 1);
		this.entity = this.props.navigation.getParam("entity", {});
		this.entityType = this.props.navigation.getParam("entityType", "default");
		this.acceptedFrom = this.props.navigation.getParam("acceptedFrom", "Home");
	}

	componentWillUnmount() {
		CometChat.removeCallListener("CALLING_SCREEN_CALL_LISTENER");
	}

	addCallListner() {
		var listnerID = "CALLING_SCREEN_CALL_LISTENER";
		var that = this;
		CometChat.addCallListener(
			listnerID,
			new CometChat.CallListener({
				onIncomingCallReceived(call) {
					var sessionID = call.getSessionId();
					var status = CometChat.CALL_STATUS.BUSY;
					CometChat.rejectCall(sessionID, status).then(
						rejectedCall => {
							console.log("Incoming Call rejected", rejectedCall);
						},
						error => {
							console.log("Call rejection failed with error:", error);
						}
					);
				},
				onOutgoingCallAccepted(call) {
					that.startCall();
				},
				onOutgoingCallRejected(call) {
					this.props.navigation.navigate("ExpertAppointments");
				},
				onIncomingCallCancelled(call) {
					this.props.navigation.navigate("ExpertAppointments");
				},
			})
		);
	}

	static navigationOptions = () => {
		return {
			header: () => null,
		};
	};

	gotoChat() {
		if (this.acceptedFrom === "Home") {
			this.props.navigation.navigate("Home");
		} else {
			if (this.entityType === "user") {
				this.props.navigation.navigate("Chat", {
					uid: this.entity.uid,
					username: this.entity.name,
					status: this.entity.status,
					avatar: this.entity.avatar ? this.entity.avatar : "user",
				});
			} else {
				this.props.navigation.navigate("Group", {
					uid: this.entity.uid,
					username: this.entity.name,
					avatar: this.entity.avatar ? this.entity.avatar : "group",
				});
			}
		}
	}

	renderIncomingCallScreen() {
		if (this.entityType === "user") {
			var initiator = this.Call.getCallInitiator();
		} else {
			var initiator = this.Call.getCallReceiver();
		}
		console.log(initiator);
		var avatar = initiator.avatar;
		var name = initiator.name;
		if (avatar === "" || avatar === undefined || avatar === null) {
			if (this.entityType === "user") {
				avatar = "user";
			} else {
				avatar = "group";
			}
		}
		return (
			<View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
				<Image
					style={{
						height: 136,
						width: 136,
						borderRadius: 50,
						marginVertical: 16,
						zIndex: 1,
					}}
					resizeMode={"cover"}
					source={{ uri: avatar }}
				/>
				<Text style={{ fontSize: 32, color: "#FFF", marginVertical: 16 }}>
					{name}
				</Text>
				<View
					style={{
						flexDirection: "row",
						marginVertical: 16,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							this.acceptCall();
						}}
					>
						<MaterialCommunityIcons
							style={{
								overflow: "hidden",
								marginHorizontal: 32,
								padding: 16,
								borderRadius: 32,
								borderWidth: 1,
								backgroundColor: "green",
								height: 64,
								width: 64,
								overflow: "hidden",
							}}
							name="phone"
							size={32}
							color="white"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							this.rejectCall(CometChat.CALL_STATUS.REJECTED);
						}}
					>
						<MaterialCommunityIcons
							style={{
								overflow: "hidden",
								marginHorizontal: 32,
								padding: 16,
								borderRadius: 32,
								borderWidth: 1,
								backgroundColor: "red",
								height: 64,
								width: 64,
								overflow: "hidden",
							}}
							name="phone-hangup"
							size={32}
							color="white"
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	renderOutgoingCallScreen() {
		var receiver = this.Call.getCallReceiver();
		var avatar = receiver.avatar;
		var name = receiver.name;
		console.log(receiver);
		if (avatar === "" || avatar === undefined || avatar === null) {
			if (this.entityType === "user") {
				avatar = "user";
			} else {
				avatar = "group";
			}
		}
		return (
			<View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
				{avatar === "user" || avatar === "group" ? (
					<FontAwesome
						style={[
							{ height: 136, width: 136, borderRadius: 50, marginVertical: 16 },
						]}
						name={avatar}
						size={136}
						color="#fff"
					/>
				) : (
					<Image
						style={{
							height: 136,
							width: 136,
							borderRadius: 60,
							marginVertical: 16,
						}}
						source={{ uri: avatar }}
					/>
				)}
				<Text style={{ fontSize: 32, color: "#FFF", marginVertical: 16 }}>
					{name}
				</Text>
				<View style={{ flexDirection: "row", marginVertical: 16 }}>
					<TouchableOpacity
						onPress={() => {
							this.rejectCall(CometChat.CALL_STATUS.CANCELLED);
							this.props.navigation.navigate("ExpertHomeScreen");
						}}
					>
						<MaterialCommunityIcons
							style={{
								overflow: "hidden",
								padding: 16,
								borderRadius: 32,
								borderWidth: 1,
								backgroundColor: "red",
								height: 64,
								width: 64,
							}}
							name="phone-hangup"
							size={32}
							color="white"
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	rejectCall(status) {
		var sessionID = this.Call.getSessionId();
		console.log("Session ID", sessionID);
		CometChat.rejectCall(sessionID, status).then(
			call => {
				console.log("Call rejected successfully:", call);
				this.props.navigation.navigate("ExpertHomeScreen");
			},
			error => {
				console.log("Call rejection failed with error", error);
				this.props.navigation.navigate("ExpertHomeScreen");
			}
		);
	}

	renderMainCallScreen() {
		this.props.navigation.navigate("ExpertMainCallScreen", {
			sessionId: this.Call.sessionId,
			enableDefaultLayout: this.defaultLayout,
			entity: this.entity,
			entityType: this.entityType,
			acceptedFrom: this.acceptedFrom,
		});
	}

	startCall() {
		this.renderMainCallScreen();
	}

	acceptCall() {
		CometChat.acceptCall(this.Call.sessionId).then(Call => {
			this.renderMainCallScreen();
		});
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.9)" }}>
				{this.isCallOutGoing
					? this.renderOutgoingCallScreen()
					: this.renderIncomingCallScreen()}
			</View>
		);
	}
}

export default withNavigation(ExpertCallingScreen);
