import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../../components';
import {CometChat} from '@cometchat-pro/react-native-chat';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {decode, encode} from 'base-64';
import styles from './styles';
import {generateCometChatUser} from '../../../utils/helper';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

this.DOMParser = require('xmldom').DOMParser;

let appID = '250962e6be718e6';
let apiKey = 'f9fdf2c3b58835823c6f3d05e1217a1343a43fee';
let restKey = 'c8e128ec8a07b1a15d77c9820095dc3c6bc53e38';
let appRegion = 'US';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      loaderVisible: false,
    };
    this.state.entredUID = '';
    this.buttonPressed = this.buttonPressed.bind(this);
    var appSettings = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(appRegion)
      .build();
    CometChat.init(appID, appSettings).then(
      () => {
        CometChat.addConnectionListener(
          'XMPPConnectionListener',
          new CometChat.ConnectionListener({
            onConnected: () => {
              console.log('ConnectionListener => On Connected');
            },
            inConnecting: () => {
              console.log('ConnectionListener => In connecting');
            },
            onDisconnected: () => {
              console.log('ConnectionListener => On Disconnected');
            },
          }),
        );
        CometChat.getLoggedinUser().then((user) => {
          if (user !== null) {
            this.props.navigation.navigate('Home');
          }
        });
      },
      (error) => {
        console.log('Initialization failed with error:', error);
      },
    );
  }

  buttonPressed() {
    UID = generateCometChatUser(this.props.userData);
    this.cometchatLogin();
  }

  cometchatLogin() {
    this.setState({loaderVisible: true});
    CometChat.login(UID, apiKey).then(
      (user) => {
        this.setState({loaderVisible: false});
        this.props.navigation.navigate('Home');
      },
      (error) => {
        this.setState({loaderVisible: false});
        this.createUser();
        console.log('Login failed with exception:', {error});
      },
    );
  }

  createUser() {
    const {userData} = this.props;
    const uid = generateCometChatUser(userData);
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        apiKey: restKey,
        appId: appID,
      },
      body: {
        uid: generateCometChatUser(userData),
        name: `${userData.firstName} ${userData.lastName}`,
      },
    };

    fetch(
      `https://api-us.cometchat.io/v2.0/users?name=${userData.firstName} ${userData.lastName}&uid=${uid}`,
      options,
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.data.name) {
          this.cometchatLogin();
        } else {
          console.log('Error', res);
        }
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Please Confirm"
          onBack={() => this.props.navigation.navigate('Appointments')}
        />
        <View style={styles.inputsContainer}>
          <Image
            resizeMode="contain"
            style={[{height: 150}, {width: 120}, {alignSelf: 'center'}]}
            source={require('../../../../assets/logo.png')}
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
              onPress={this.buttonPressed}>
              <Text style={styles.TextStyle}> CONFIRM </Text>
            </TouchableOpacity>
          </View>
          <ActivityIndicator
            style={styles.LoadingIndicator}
            size={30}
            animating={this.state.loaderVisible}
            color={'#3f51b5'}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authLoadingReducer.userData,
});

export default connect(mapStateToProps)(LoginScreen);
