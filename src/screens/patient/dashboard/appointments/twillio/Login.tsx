import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  setCallConfig,
  getCallToken,
} from '~/redux/actions/twillio';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

import Header from '~/components/header';
import Container from '~/components/container';
import {ActivityIndicator} from 'react-native-paper';

import {
  checkMultiple,
  request,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

import styles from './styles';

const TwillioLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const callConfig = useSelector((state) => state.twillio);
  const {profileInfo} = useSelector((state) => state.user.data);
  const {visit} = useSelector((state) => state.visit);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const isExpert = true;
  const {uid} = visit;

  const checkPermissions = (callback) => {
    const iosPermissions = [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE];
    const androidPermissions = [
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
    ];
    checkMultiple(
      Platform.OS === 'ios' ? iosPermissions : androidPermissions,
    ).then((statuses) => {
      const [CAMERA, AUDIO] =
        Platform.OS === 'ios' ? iosPermissions : androidPermissions;
      if (
        statuses[CAMERA] === RESULTS.UNAVAILABLE ||
        statuses[AUDIO] === RESULTS.UNAVAILABLE
      ) {
        Alert.alert(
          'Error',
          'Hardware to support video calls is not available',
        );
      } else if (
        statuses[CAMERA] === RESULTS.BLOCKED ||
        statuses[AUDIO] === RESULTS.BLOCKED
      ) {
        Alert.alert(
          'Error',
          'Permission to access hardware was blocked, please grant manually',
        );
      } else {
        if (
          statuses[CAMERA] === RESULTS.DENIED &&
          statuses[AUDIO] === RESULTS.DENIED
        ) {
          requestMultiple(
            Platform.OS === 'ios' ? iosPermissions : androidPermissions,
          ).then((newStatuses) => {
            if (
              newStatuses[CAMERA] === RESULTS.GRANTED &&
              newStatuses[AUDIO] === RESULTS.GRANTED
            ) {
              callback && callback();
            } else {
              Alert.alert('Error', 'One of the permissions was not granted');
            }
          });
        } else if (
          statuses[CAMERA] === RESULTS.DENIED ||
          statuses[AUDIO] === RESULTS.DENIED
        ) {
          request(statuses[CAMERA] === RESULTS.DENIED ? CAMERA : AUDIO).then(
            (result) => {
              if (result === RESULTS.GRANTED) {
                callback && callback();
              } else {
                Alert.alert('Error', 'Permission not granted');
              }
            },
          );
        } else if (
          statuses[CAMERA] === RESULTS.GRANTED ||
          statuses[AUDIO] === RESULTS.GRANTED
        ) {
          callback && callback();
        }
      }
    });
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  useEffect(() => {}, []);

  const sessionStart = () => {
    setLoaderVisible(true);
    dispatch(
      setCallConfig({
        ...callConfig,
        userName: uid,
        roomName: uid,
      }),
    );
    checkPermissions(() => {
      setLoaderVisible(false);
      dispatch(getCallToken({navigation, uid, isExpert}));
    });
  };

  return (
    <Container barStyle="dark-content">
      <Header
        title="Please Confirm"
        onBack={() => navigation.navigate('Appointments')}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.container}>
          <View style={styles.inputsContainer}>
            <Image
              resizeMode="contain"
              style={[{height: 150}, {width: 120}, {alignSelf: 'center'}]}
              source={require('../../../../../../assets/logo.png')}
            />
            <View style={styles.textlayout}>
              <Text style={styles.subtitle}>
                {`I certify that I am currently in the state of ${profileInfo.state.value} and that this consultation will be conducted while within state boundaries.`}
              </Text>
            </View>
            <View style={styles.buttonStyle}>
              <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={0.5}
                onPress={sessionStart}>
                <Text style={styles.TextStyle}> CONFIRM </Text>
              </TouchableOpacity>
            </View>
            <ActivityIndicator
              style={styles.LoadingIndicator}
              size={30}
              animating={loaderVisible}
              color={'#3f51b5'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default TwillioLogin;
