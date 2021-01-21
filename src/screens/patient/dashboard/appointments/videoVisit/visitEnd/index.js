import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CometChat} from '@cometchat-pro/react-native-chat';

import styles from './styles';

class VisitEnd extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  buttonPressed = () => {
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
            this.props.navigation.navigate('RatingScreen');
          },
        );
      },
      (err) => {
        console.log('Error ending call', err);
      },
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" translucent={true} />
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../../../assets/logo.png')}
        />
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.submitButtonStyle}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.textStyle}> Return To Waiting Room </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonStyle}>
          <TouchableOpacity
            style={styles.submitButtonStyle}
            activeOpacity={0.5}
            onPress={this.buttonPressed}>
            <Text style={styles.textStyle}> End Visit </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default VisitEnd;
