import React, {Component} from 'react';
import {View, Image, FlatList} from 'react-native';
import {CometChat} from '@cometchat-pro/react-native-chat';
import {withNavigation} from 'react-navigation';
import {
  TouchableRipple,
  Text,
  BottomNavigation,
  DefaultTheme,
} from 'react-native-paper';
import {Header} from '../../../../components';
import {
  requestMultiple,
  checkMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuContext,
} from 'react-native-popup-menu';
import ActionSheet from 'react-native-actionsheet';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    NavigationService.navigate('Login');
  }

  fetchUser() {
    let {visit} = this.props.navigation.state.params;
    let patientName = `${visit.firstName} ${visit.lastName}`;
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
            const filtered = userList.filter(
              (user) => user.name === patientName,
            );
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

  renderItem = ({item}) => {
    var isOnline, showUnreadCount, showBlockedLabel;
    const {
      reason,
      firstName,
      lastName,
    } = this.props.navigation.state.params.visit;
    console.log(this.props.navigation.state.params.visit);
    item.avatar = item.avatar ? item.avatar : 'user';
    item.status === 'online' ? (isOnline = true) : (isOnline = false);
    item.unreadCount > 0 ? (showUnreadCount = true) : (showUnreadCount = false);
    item.blockedByMe == true
      ? (showBlockedLabel = true)
      : (showBlockedLabel = false);

    return (
      <View style={styles.item}>
        {item.avatar === 'user' ? (
          <FontAwesome
            style={[
              {
                alignSelf: 'center',
                height: 50,
                width: 50,
                borderRadius: 30,
              },
            ]}
            name="user"
            size={50}
            color="#3f51b5"
          />
        ) : (
          <Image
            style={styles.image}
            resizeMode={'cover'}
            defaultSource={require('../../../../../assets/profile_img_placeholder.png')}
            source={{uri: item.avatar}}
          />
        )}
        <View>
          <View style={styles.itemView}>
            <Text style={{fontSize: 20, marginLeft: 15}}>{firstName}</Text>
            <Text style={{fontSize: 20, marginLeft: 5}}>{lastName}</Text>
            <View
              style={[
                styles.circle,
                {
                  marginTop: 10,
                  backgroundColor: isOnline ? '#76ff03' : '#9e9e9e',
                },
              ]}
            />
            <Text style={{fontSize: 20, marginStart: 5}}>{item.status}</Text>
          </View>
          <View style={styles.itemView}></View>
          <View style={{marginBottom: 15, ...styles.itemView}}>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 15,
                width: 200,
              }}>{`Reason: ${reason}`}</Text>
          </View>
          <View style={styles.itemView}>
            <TouchableOpacity
              disabled={item.status === 'offline'}
              onPress={() => this.onPress(item)}
              style={{marginLeft: 15}}>
              <Text
                style={{
                  //   overflow: 'hidden',
                  alignSelf: 'center',
                  backgroundColor: '#6AC5FF',
                  color: '#FFF',
                  padding: 10,
                  justifyContent: 'center',
                  borderRadius: 5,
                  elevation: 3,
                }}>
                Join
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  onPress(item) {
    var call = new CometChat.Call(item.uid, 'video', 'user');
    CometChat.initiateCall(call).then((Call) => {
      CometChat.getUser('candice_fraser').then((user) => {
        console.log(user);
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
    console.log('PROPS', this.props);
    return (
      <View style={styles.activityBackground}>
        <Image
          resizeMode="contain"
          style={[{height: 150, width: '90%', alignSelf: 'center'}]}
          source={require('../../../../../assets/logo-sm.png')}
        />
        <View style={styles.inputsContainer}>
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
      </View>
    );
  }
}

export default withNavigation(Contacts);
