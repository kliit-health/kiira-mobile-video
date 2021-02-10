import React, {Component} from 'react';
import {View, Platform, SafeAreaView, Image, Text} from 'react-native';
import {CometChat} from '@cometchat-pro/react-native-chat';
import {Header} from '../../../../../../components';
import {
  requestMultiple,
  checkMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      dataItem: '?',
      index: 0,
    };
    var listnerID = 'USER_CALL_LISTENER';
    var that = this;
    CometChat.addCallListener(
      listnerID,
      new CometChat.CallListener({
        onIncomingCallReceived(call) {
          const defaultLayout = 1;
          const isOutgoing = 0;
          if (call.getReceiverType() === 'user') {
            that.props.navigation.navigate('CallingScreen', {
              call: call,
              enableDefaultLayout: defaultLayout,
              isOutgoingCall: isOutgoing,
              entity: call.getCallInitiator(),
              entityType: 'user',
              acceptedFrom: 'Home',
            });
          } else {
            that.props.navigation.navigate('CallingScreen', {
              call: call,
              enableDefaultLayout: defaultLayout,
              isOutgoingCall: isOutgoing,
              entity: call.getCallReceiver(),
              entityType: 'group',
              acceptedFrom: 'Home',
            });
          }
        },
      }),
    );
    if (Platform.OS === 'android') {
      checkMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.RECORD_AUDIO,
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ])
        .then((statuses) => {
          for (var key in statuses) {
            if (statuses.hasOwnProperty(key)) {
              switch (statuses[key]) {
                case RESULTS.UNAVAILABLE:
                  break;
                case RESULTS.DENIED:
                  requestMultiple([
                    PERMISSIONS.ANDROID.CAMERA,
                    PERMISSIONS.ANDROID.RECORD_AUDIO,
                    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
                  ]).then((result) => {});
                  break;
                case RESULTS.GRANTED:
                  break;
                case RESULTS.BLOCKED:
                  break;
              }
            }
          }
        })
        .catch((error) => {
          console.log('The permission error', error);
        });
    }
  }

  componentWillUnmount() {
    CometChat.removeCallListener('USER_CALL_LISTENER');
  }

  handleBackPress = () => {
    CometChat.logout().then(
      () => {
        this.props.navigation.navigate('Appointments');
      },
      //Logout completed successfully
      (error) => {
        //Logout failed with exception
        console.log('Logout failed with exception:', {error});
        this.props.navigation.navigate('Appointments');
      },
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <View style={styles.container}>
          <Header title={'Waiting room'} onBack={this.handleBackPress} />
          <View style={styles.parentContainerStyle}>
            <Image
              style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                marginTop: 30,
              }}
              resizeMode="contain"
              source={require('../../../../../../../assets/logo.png')}
            />
            <Text style={styles.title}>
              Your Provider will connect with you shortly
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
