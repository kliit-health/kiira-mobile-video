import React, {PureComponent} from 'react';
import {
  View,
  Alert,
  BackHandler,
  AppState,
  LogBox,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import AppNavigator from './src/navigator';
import {showOrHideModal} from './src/components/customModal/action';
import CustomLoader from './src/components/customLoader';
import CustomModal from './src/components/customModal';
import CustomToast from './src/components/customToast';
import {getBottomSpace} from './src/components/iPhoneXHelper';
import firebase from 'react-native-firebase';
import {
  setFcmToken,
  setAppState,
  setAppScreen,
} from './src/screens/authLoading/action';
import {signOut} from './src/screens/account/action';
import Constant from './src/utils/constants';
import FastImage from 'react-native-fast-image';
// import BackgroundTask from 'react-native-background-task';
// import BackgroundTimerMain from 'react-native-background-timer';
import {updateStatus} from './src/utils/firebase';
import {NavigationService} from './src/navigator';
import {setCurrentRoute, setPreviousRoute} from './src/redux/actions';

class App extends PureComponent {
  constructor(props) {
    super(props);
    firebase.app();
    this.state = {
      appState: AppState.currentState,
    };
  }

  async componentDidMount() {
    LogBox.ignoreAllLogs();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
    // BackgroundTask.schedule();
    AppState.addEventListener('change', this._handleAppStateChange);
    FastImage.preload([
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158453698551228C511E5-726E-4A6A-B48F-5789FB54A554.jpg?alt=media&token=0e896a21-1c3e-4fb8-b401-a3724d60339b',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1585955584718B9108868-3D87-4332-997C-D57BDC94A9CE.jpg?alt=media&token=fd676602-f4d7-41de-bc31-d37ca8e10d94',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158278580245518424.jpeg?alt=media&token=cb39b2f9-9712-4307-9521-fc346e8d9120',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158275803271418421.jpeg?alt=media&token=ec94cd04-0010-4631-96f0-ea698a1aad96',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1580857797665E118A4E7-CBC3-4337-9397-631C8FC63164.jpg?alt=media&token=14f0e805-28b0-4dfe-9cc4-820344d0a465',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158949711060350622E2C-7688-4C0D-98E6-8E3F1D22CF45.jpg?alt=media&token=ff56a38b-abdf-4774-9eb6-7c380a7ca091',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1591229415428C4A07D08-AB4C-48DF-959E-45E28EA2D5F4.jpg?alt=media&token=e494faff-8eb5-4e8e-adce-21cf113597fd',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1591206219146F08CEA92-EDB4-4DEC-9D5A-1F9828C37BBD.jpg?alt=media&token=21cee628-6a1a-44f8-bdce-cd6bfacc91f1',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F159122772273362D509B0-AD92-49C2-AB0F-9B390AEB7DC9.jpg?alt=media&token=4997aa43-9f60-46aa-96ce-df08ffff8b8e',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1583730173970C2B96E94-916B-445A-999C-8E0B1583B10C.jpg?alt=media&token=3c6c68dd-b22d-4f51-aebb-1f0783895cae',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1588710676616A35BA904-2E4E-47B8-9A0F-F8A43009F2D5.jpg?alt=media&token=dd075403-d180-4ad3-9e26-7a468b258434',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1583348784419863E37D8-BCB6-443B-A3CF-381194EFBF02.jpg?alt=media&token=cccf1b7a-2b90-43fc-8827-9eb900f90af1',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F1589390627635F1D06990-A2A5-4D54-BAD5-990CFA681E74.jpg?alt=media&token=fde22ced-bb50-46a3-8d92-6e3c41f72bd7',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kliit-health-app.appspot.com/o/Kliit%2F158991152208724457F6C-FD35-4484-89B4-B1FFD8CD61FB.jpg?alt=media&token=8a1a2096-a8a8-445f-bb88-c473814331ba',
      },
      {
        uri:
          'https://firebasestorage.googleapis.com/v0/b/kiira-health-app.appspot.com/o/Kiira%2Fplaceholder.png?alt=media&token=ea401fa3-3f5c-4c29-9109-f1d0e4bbffdf',
      },
    ]);
  }

  componentDidUpdate() {
    const {isActive, userData} = this.props;
    if (isActive && userData && userData.uid && !userData.isOnline) {
      const updateStatusParams = {
        uid: userData.uid,
        updatedData: {
          isOnline: isActive,
        },
      };
      updateStatus(updateStatusParams);
    } else if (!isActive && userData && userData.uid) {
      const updateStatusParams = {
        uid: userData.uid,
        updatedData: {
          isOnline: isActive,
        },
      };
      updateStatus(updateStatusParams);
    }
  }

  componentWillUnmount() {
    // firebase.auth().signOut();
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  _handleAppStateChange = (nextAppState) => {
    const {setState, signOut} = this.props;

    if (nextAppState !== 'active') {
      // BackgroundTask.define(() => {
      //   setState(false);
      //   const payload = {
      //     navigation: this.navigator._navigation,
      //     isLoaderShow: false,
      //   };
      //   signOut(payload);
      //   Alert.alert(
      //     'Log Out',
      //     'For your security, you have been logged out.',
      //     [{text: 'OK', onPress: () => {}}],
      //     {cancelable: false},
      //   );
      //   BackgroundTask.finish();
      // });
    }
  };

  handleBackButtonClick() {
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
        {cancelable: false},
      );
    }, 400);
    return true;
  }

  getCurrentRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return this.getCurrentRouteName(route);
    }
    return route.routeName;
  }

  render() {
    const {
      spinnerState,
      errorMessage,
      hideErrorModal,
      showModalError,
      toastState,
      setScreen,
      setCurrentRoute,
      setPreviousRoute,
    } = this.props;

    return (
      <View
        style={{
          flex: 1,
          marginBottom: getBottomSpace(),
        }}>
        <AppNavigator
          ref={(nav) => {
            this.navigator = nav;
            NavigationService.navigator = nav;
          }}
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = this.getCurrentRouteName(currentState);
            const prevScreen = this.getCurrentRouteName(prevState);
            const obj = {
              currentScreen,
              prevScreen,
            };
            setScreen(obj);
            setCurrentRoute(currentScreen);
            setPreviousRoute(prevScreen);
          }}
        />
        {showModalError ? (
          <CustomModal
            onPressErrorButtonOk={() => hideErrorModal()}
            showLoader={showModalError}
            errorMsg={errorMessage}
          />
        ) : null}

        {spinnerState.showLoader ? (
          <CustomLoader
            showLoader={spinnerState.showLoader}
            textMsg={spinnerState.textMessage}
          />
        ) : null}

        {toastState.showToast ? (
          <CustomToast
            showToast={toastState.showToast}
            textMsg={toastState.textMessage}
            dispatch={toastState.dispatch}
            delay={toastState.delay}
          />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  spinnerState: state.loaderReducer,
  toastState: state.toastReducer,
  showModalError: state.modalReducer.showModalError,
  errorMessage: state.modalReducer.errorMessage,
  userData: state.authLoadingReducer.userData,
  isActive: state.authLoadingReducer.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  hideErrorModal: () => dispatch(showOrHideModal()),
  setToken: (value) => dispatch(setFcmToken(value)),
  setState: (value) => dispatch(setAppState(value)),
  signOut: (value) => dispatch(signOut(value)),
  setScreen: (value) => dispatch(setAppScreen(value)),
  setCurrentRoute: (value) => dispatch(setCurrentRoute(value)),
  setPreviousRoute: (value) => dispatch(setPreviousRoute(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
