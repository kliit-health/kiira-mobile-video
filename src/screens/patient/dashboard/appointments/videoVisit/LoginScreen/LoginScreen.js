import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Header} from '../../../components';
import {CometChat} from '@cometchat-pro/react-native-chat';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import {decode, encode} from 'base-64';
import styles from './styles';
import {generateCometChatUser} from '../../../utils/helper';
import {createCometChatUser} from '../../../utils/firebase';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

this.DOMParser = require('xmldom').DOMParser;

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      loaderVisible: false,
      UID: generateCometChatUser(props.userData),
      apikey: props.cometChat.apikey,
      appId: props.cometChat.appid,
    };
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  componentDidMount() {
    var appSettings = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(this.props.cometChat.appregion)
      .build();
    const {appId} = this.state;

    CometChat.init(appId, appSettings).then(
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
    this.cometchatLogin();
  }

  cometchatLogin() {
    this.setState({loaderVisible: true});
    CometChat.login(this.state.UID, this.state.apikey).then(
      (user) => {
        this.setState({loaderVisible: false});
        this.props.navigation.navigate('Home');
      },
      (error) => {
        if (error.code === 'ERR_UID_NOT_FOUND') {
          this.createUser();
        }
        console.log('Login failed with exception:', {error});
      },
    );
  }

  async createUser() {
    const {userData} = this.props;

    try {
      await createCometChatUser(userData);
      this.cometchatLogin();
    } catch (error) {
      console.log('Error: ', error);
    }
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
  cometChat: state.visitReducer.details.data,
});

export default connect(mapStateToProps)(LoginScreen);
