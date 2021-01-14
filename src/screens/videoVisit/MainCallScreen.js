/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View} from 'react-native';
import {CometChat} from '@cometchat-pro/react-native-chat';
class MainCallScreen extends Component {
  constructor(props) {
    super(props);

    let callListener = new CometChat.OngoingCallListener({
      onUserJoined: (user) => {
        console.log('OngoingCallListener: User joined call:', user.getUid());
      },
      onUserLeft: (user) => {
        console.log('OngoingCallListener: User left call:', user.getUid());

        CometChat.endCall(this.sessionId).then(
          (call) => {
            console.log('Called Ended by User', call);
            CometChat.logout().then(
              () => {
                console.log('Logout completed successfully');
                this.props.navigation.navigate('RatingScreen');
              },
              (error) => {
                console.log('Logout failed with exception:', {error});
              },
            );
          },
          (err) => {
            console.log('Error ending call', err);
          },
        );
      },

      onCallEnded: (call) => {
        console.log(
          'OngoingCallListener: Call ended listener',
          call.getSessionId(),
        );

        CometChat.endCall(this.sessionId).then(
          (call) => {
            console.log('Called Ended by User', call);
            CometChat.logout().then(
              () => {
                console.log('Logout completed successfully');
                this.props.navigation.navigate('RatingScreen');
              },
              (error) => {
                console.log('Logout failed with exception:', {error});
              },
            );
          },
          (err) => {
            console.log('Error ending call', err);
          },
        );
      },
    });
    this.addCallListner();
    this.sessionId = this.props.navigation.getParam('sessionId', 'sessionid');
    this.defaultLayout = this.props.navigation.getParam(
      'enableDefaultLayout',
      1,
    );
    this.entity = this.props.navigation.getParam('entity', {});
    this.entityType = this.props.navigation.getParam('entityType', 'user');
    this.acceptedFrom = this.props.navigation.getParam('acceptedFrom', 'Home');
    this.callSettings = new CometChat.CallSettingsBuilder()
      .setSessionID(this.sessionId)
      .enableDefaultLayout(true)
      .setMode('CometChat.CALL_MODE.SPOTLIGHT')
      .setCallEventListener(callListener)
      .build();
  }

  static navigationOptions = () => {
    return {
      header: () => null,
    };
  };

  addCallListner() {
    var listnerID = 'MAIN_CALLING_SCREEN_CALL_LISTENER';
    CometChat.addCallListener(
      listnerID,
      new CometChat.CallListener({
        onIncomingCallReceived(call) {
          var sessionID = call.getSessionId();
          var status = CometChat.CALL_STATUS.BUSY;
          CometChat.rejectCall(sessionID, status).then(
            (rejectedCall) => {
              console.log('Incoming Call rejected', rejectedCall);
              CometChat.logout().then(
                () => {
                  console.log('Logout completed successfully');
                  this.props.navigation.navigate('Appointments');
                },
                (error) => {
                  console.log('Logout failed with exception:', {error});
                },
              );
            },
            (error) => {
              console.log('Call rejection failed with error:', error);
            },
          );
        },
      }),
    );
  }

  componentWillUnmount() {
    CometChat.removeCallListener('MAIN_CALLING_SCREEN_CALL_LISTENER');
  }

  gotoChat() {
    if (this.acceptedFrom === 'Home') {
      this.props.navigation.navigate('Home');
    } else {
      if (this.entityType === 'user') {
        this.props.navigation.navigate('Chat', {
          uid: this.entity.uid,
          username: this.entity.name,
          status: this.entity.status,
          avatar: this.entity.avatar ? this.entity.avatar : 'user',
        });
      } else {
        this.props.navigation.navigate('Group', {
          uid: this.entity.guid,
          username: this.entity.name,
          avatar: this.entity.avatar ? this.entity.avatar : 'group',
        });
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1, background: '#000'}}>
        <CometChat.CallingComponent
          callsettings={this.callSettings}
          onFailure={(e) => {
            console.log('error', e);
          }}
        />
      </View>
    );
  }
}

export default MainCallScreen;
