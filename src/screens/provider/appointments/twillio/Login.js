import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  setExpertCallConfig,
  getExpertCallToken,
} from '../../../../redux/actions/twillio';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  Image,
} from 'react-native';

import Container from '../../../../components/container';
import Header from '../../../../components/header';
import {ActivityIndicator} from 'react-native-paper';

import {
  checkMultiple,
  request,
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';

import styles from './styles';

const ExpertTwillioLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const callConfig = useSelector((state) => state.twillio);
  const {visit} = useSelector((state) => state.visit);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const {expert, uid} = visit;
  const euid = expert.uid;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sessionStart = () => {
    setLoaderVisible(true);
    dispatch(
      setExpertCallConfig({
        ...callConfig,
        userName: euid,
        roomName: uid,
      }),
    );
    checkPermissions(() => {
      setLoaderVisible(false);
      dispatch(getExpertCallToken({navigation, euid}));
    });
  };

  return (
    <Container barStyle="dark-content">
      <Header title="Kiira Video Chat" onBack={navigation.goBack} />
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <Image
            resizeMode="contain"
            style={[{height: 150, width: '90%', alignSelf: 'center'}]}
            source={require('../../../../../assets/logo-sm.png')}
          />
          <View style={styles.textlayout}>
            <Text style={styles.subtitle}>
              {`When you press Start your session will begin.`}
            </Text>
          </View>
          <View style={styles.buttonStyle}>
            <TouchableOpacity
              style={styles.SubmitButtonStyle}
              activeOpacity={0.5}
              onPress={sessionStart}>
              <Text style={styles.TextStyle}> START </Text>
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
    </Container>
  );
};

export default ExpertTwillioLogin;
