import React, {Component} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import Contacts from './Contacts';
import {CometChat} from '@cometchat-pro/react-native-chat';
import {withNavigation} from 'react-navigation';
import {Header} from '../../../../../components';
import {
  requestMultiple,
  checkMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import styles from './styles';

class ExpertHomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      dataItem: '?',
      index: 0,
      routes: [
        {
          key: 'single',
          title: 'Contacts',
          icon: 'contacts',
          color: '#3F51B5',
        },
        {key: 'groups', title: 'Group', icon: 'group', color: '#009688'},
      ],
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
            that.props.navigation.navigate('ExpertCallingScreen', {
              call: call,
              enableDefaultLayout: defaultLayout,
              isOutgoingCall: isOutgoing,
              entity: call.getCallInitiator(),
              entityType: 'user',
              acceptedFrom: 'ExpertHome',
            });
          } else {
            that.props.navigation.navigate('ExpertCallingScreen', {
              call: call,
              enableDefaultLayout: defaultLayout,
              isOutgoingCall: isOutgoing,
              entity: call.getCallReceiver(),
              entityType: 'group',
              acceptedFrom: 'ExpertHome',
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

  goHome = () => {
    CometChat.logout().then(
      () => {
        console.log('Logout completed successfully');
        this.props.navigation.navigate('ExpertAppointments');
      },
      (error) => {
        console.log('Logout failed with exception:', {error});
        this.props.navigation.navigate('ExpertAppointments');
      },
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Kiira Video Chat" onBack={this.goHome} />
        <Contacts />
      </SafeAreaView>
    );
  }
}

export default withNavigation(ExpertHomeScreen);
