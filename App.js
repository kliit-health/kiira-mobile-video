import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Alert, BackHandler, AppState, LogBox } from 'react-native';
import AppNavigator from './src/navigation';
import { Messaging } from './src/services';
import { showOrHideModal } from './src/components/customModal/action';
import Conditional from './src/components/conditional';
import CustomLoader from './src/components/customLoader';
import CustomModal from './src/components/customModal';
import CustomToast from './src/components/customToast';
import messaging from '@react-native-firebase/messaging';
import analytics from '@react-native-firebase/analytics';
import { signOut } from './src/screens/patient/account/action';
import Constant from './src/utils/constants';
import BackgroundTimer from 'react-native-background-timer';
import FastImage from 'react-native-fast-image';
import { NavigationService } from './src/navigation/';
import { setCurrentRoute, setPreviousRoute } from './src/redux/actions';

const App = () => {
  const dispatch = useDispatch();
  let navigationRef = useRef();

  const spinner = useSelector((state) => state.loader);
  const toast = useSelector((state) => state.toast);
  const { showModalError, errorMessage } = useSelector((state) => state.modal);

  FastImage.preload([
    {
        uri: 'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158453698551228C511E5-726E-4A6A-B48F-5789FB54A554.jpg?alt=media&token=0e896a21-1c3e-4fb8-b401-a3724d60339b',
    },
])

  useEffect(async () => {
    LogBox.ignoreAllLogs();
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    AppState.addEventListener('change', _handleAppStateChange);

    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const {title, body} = remoteMessage.notification;
      Alert.alert(title, body);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    return BackHandler.removeEventListener(
      'hardwareBackPress',
      handleBackButtonClick,
    );
  });

  useEffect(() => {
    (async () => {
      const enabled = await messaging().hasPermission();
      if (enabled) {
        messaging().setBackgroundMessageHandler(async (remoteMessage) => {
          console.log('Message handled in the background!', remoteMessage);
        });
      } else {
        try {
          await messaging().requestPermission();
          messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log('Message handled in the background!', remoteMessage);
          });
        } catch (error) {
          console.log('permission rejected');
        }
      }
    })();
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    let timeoutId;
    
    if (nextAppState === 'active') {
      if (timeoutId) {
        BackgroundTimer.clearTimeout(timeoutId);
      }
      
    } else {
      if (timeoutId) {
        BackgroundTimer.clearTimeout(timeoutId);
      }

      timeoutId = BackgroundTimer.setTimeout(() => {
        
        const payload = {
          isLoaderShow: false,
        };
        dispatch(signOut(payload));
        Alert.alert(
          'Log Out',
          'For your security, you have been logged out due to inactivity.',
          [{ text: 'OK', onPress: () => { } }],
          { cancelable: false },
        );
      }, Constant.App.logoutInterval);
    }
  };

  const handleBackButtonClick = () => {
    setTimeout(() => {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit the App?',
        [
          {
            text: 'OK',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
          {
            text: 'Cancel',
            onPress: () => {
              console.log('Cancel Pressed');
            },
          },
        ],
        { cancelable: false },
      );
    }, 400);
    return true;
  };

  const getCurrentRouteName = (navigationState) => {
    if (!navigationState) return null;

    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return getCurrentRouteName(route);
    }

    return route.routeName;
  };

  return (
    <View style={{ flex: 1 }}>
      <AppNavigator
        ref={(nav) => {
          navigationRef = nav;
          NavigationService.navigator = nav;
        }}
        onNavigationStateChange={async (prevState, currentState) => {
          const currentScreen = getCurrentRouteName(currentState);
          const prevScreen = getCurrentRouteName(prevState);

          if (prevScreen !== currentScreen) {
            await analytics().logScreenView({
              screen_name: currentScreen,
              screen_class: currentScreen
            });
          }

          dispatch(setCurrentRoute(currentScreen));
          dispatch(setPreviousRoute(prevScreen));
        }}
      />
      <Messaging />
      <Conditional if={showModalError}>
        <CustomModal
          onPressErrorButtonOk={() => dispatch(showOrHideModal())}
          showLoader={showModalError}
          errorMsg={errorMessage}
        />
      </Conditional>
      <Conditional if={spinner.showLoader}>
        <CustomLoader
          showLoader={spinner.showLoader}
          textMsg={spinner.textMessage}
        />
      </Conditional>
      <Conditional if={toast.showToast}>
        <CustomToast
          showToast={toast.showToast}
          textMsg={toast.textMessage}
          dispatch={toast.dispatch}
          delay={toast.delay}
        />
      </Conditional>
    </View>
  );
};

export default App;
