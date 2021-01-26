import React, {Component} from 'react';
import {View, Image, FlatList, Pressable, Text} from 'react-native';
import {CometChat} from '@cometchat-pro/react-native-chat';
import FastImage from 'react-native-fast-image';
import {withNavigation} from 'react-navigation';
import {MenuContext, MenuOptions, MenuOption} from 'react-native-popup-menu';
import styles from './styles';

class Contacts extends Component {
  showActionSheet = (item) => {
    this.setState({block: item});
    this.ActionSheet.show();
  };

  constructor() {
    super();
    this.state = {
      dataItem: '?',
      users: [],
      block: [],
    };
    this.onPress = this.onPress.bind(this);
    this.addCallListner = this.addCallListner.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
    this.props.navigation.setParams({initiateCall: this.initiateCall});
    this.addUserListner();
    this.addCallListner();
  }

  componentWillUnmount() {
    CometChat.removeUserListener('CONTACT_USER_LISTNER');
  }

  async logout() {
    CometChat.removeConnectionListener('XMPPConnectionListener');
    await CometChat.logout();
    this.props.navigation.navigate('ExpertAppointments');
  }

  fetchUser() {
    let {visit} = this.props.navigation.state.params;

    let limit = 30;
    let usersRequest = new CometChat.UsersRequestBuilder()
      .setLimit(limit)
      .build();
    usersRequest.fetchNext().then(
      (userList) => {
        if (userList.length > 0) {
          CometChat.getUnreadMessageCountForAllUsers().then((array) => {
            var unread = Object.keys(array);
            if (unread.length > 0) {
              unread.map((uid) => {
                var index = userList.findIndex((user) => user.uid == uid);
                if (index != -1) {
                  userList[index].unreadCount = array[uid];
                }
              });
            }
            const filtered = userList.filter((user) => {
              return user.uid === visit.comet;
            });
            this.setState({
              users: filtered,
            });
          });
        }
      },
      (error) => {
        console.log('User list fetching failed with error:', error);
      },
    );
  }

  addCallListner() {
    var listnerID = 'CHAT_SCREEN_CALL_LISTNER';
    var that = this;
    CometChat.addCallListener(
      listnerID,
      new CometChat.CallListener({
        onIncomingCallReceived(call) {
          const defaultLayout = 1;
          const isOutgoing = 0;
          that.props.navigation.navigate('ExpertCallingScreen', {
            call: call,
            enableDefaultLayout: defaultLayout,
            isOutgoingCall: isOutgoing,
            entity: call.getCallInitiator(),
            entityType: 'user',
            acceptedFrom: 'Chat',
          });
        },
      }),
    );
  }

  addUserListner() {
    let listenerID = 'CONTACT_USER_LISTNER';
    let that = this;
    CometChat.addUserListener(
      listenerID,
      new CometChat.UserListener({
        onUserOnline: (onlineUser) => {
          console.log('useronline');
          that.state.users.map((user) => {
            if (user.uid == onlineUser.uid) {
              user.status = 'online';
              that.setState({users: [...that.state.users]});
            }
          });
        },
        onUserOffline: (offlineUser) => {
          console.log('useroffline');
          that.state.users.map((user) => {
            if (user.uid == offlineUser.uid) {
              user.status = 'offline';
              that.setState({users: [...that.state.users]});
            }
          });
        },
      }),
    );
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

  renderItem = ({item}) => {
    var isOnline, showUnreadCount, showBlockedLabel;
    const {
      reason,
      firstName,
      lastName,
      avatar,
    } = this.props.navigation.state.params.visit;

    console.log(this.props.navigation.state.params.visit);
    item.avatar = item.avatar ? item.avatar : 'user';
    item.status === 'online' ? (isOnline = true) : (isOnline = false);
    item.unreadCount > 0 ? (showUnreadCount = true) : (showUnreadCount = false);
    item.blockedByMe == true
      ? (showBlockedLabel = true)
      : (showBlockedLabel = false);

    return (
      <View style={styles.infoContainer}>
        <FastImage
          containerStyle={{alignSelf: 'center'}}
          style={styles.image}
          source={{uri: item.avatar}}
        />
        <View style={styles.detailsContainer}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.circle,
                {
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginRight: 10,
                  backgroundColor: isOnline ? '#76ff03' : '#9e9e9e',
                },
              ]}
            />
            <Text
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                fontSize: 15,
              }}>
              {item.status.toUpperCase()}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
            }}>{`${firstName} ${lastName}`}</Text>
          <Text
            style={{
              fontSize: 15,
            }}>{`CC: ${reason}`}</Text>

          <View style={styles.buttonContainer}>
            <Pressable
              disabled={item.status === 'offline'}
              onPress={() => this.onPress(item)}
              style={isOnline ? styles.button : styles.buttonDisabled}>
              <Text style={isOnline ? styles.textStyle : styles.textDisabled}>
                Join
              </Text>
            </Pressable>
            <Pressable onPress={this.goHome} style={styles.button}>
              <Text style={styles.textStyle}>Home</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  onPress(item) {
    var call = new CometChat.Call(item.uid, 'video', 'user');
    let {expert} = this.props.navigation.state.params.visit;
    let expertUID =
      expert.firstName.toLowerCase() +
      '_' +
      expert.lastName.toLowerCase() +
      '_' +
      expert.uid.substr(-5).toLowerCase();

    CometChat.initiateCall(call).then((Call) => {
      CometChat.getUser(expertUID).then((user) => {
        if (user) {
          const isAudio = 0;
          const defaultLayout = 1;
          const initiator = 1;
          const isOutgoing = 1;
          this.props.navigation.navigate('ExpertCallingScreen', {
            call: Call,
            isInitiator: initiator,
            isAudioOnly: isAudio,
            enableDefaultLayout: defaultLayout,
            isOutgoingCall: isOutgoing,
            entity: user,
            entityType: 'user',
          });
        }
      });
    });
  }

  render() {
    return (
      <View style={styles.activityBackground}>
        <Image
          resizeMode="contain"
          style={[{height: 150, width: '90%', alignSelf: 'center'}]}
          source={require('../../../../../../assets/logo-sm.png')}
        />
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => item.uid}
          renderItem={this.renderItem}
        />
        <View style={styles.activityView}>
          <MenuContext>
            <MenuOptions>
              <MenuOption onSelect={this.logout} text="Logout" />
            </MenuOptions>
          </MenuContext>
        </View>
      </View>
    );
  }
}

export default withNavigation(Contacts);
