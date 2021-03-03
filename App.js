import React, {PureComponent} from 'react';
import {View, Alert, BackHandler, AppState, LogBox} from 'react-native';
import {connect} from 'react-redux';
import AppNavigator from './src/navigation';
import {Messaging} from './src/services';
import {showOrHideModal} from './src/components/customModal/action';
import CustomLoader from './src/components/customLoader';
import CustomModal from './src/components/customModal';
import CustomToast from './src/components/customToast';
import {getBottomSpace} from './src/components/iPhoneXHelper';
// import app from '@react-native-firebase/app';
import {
  setFcmToken,
  setAppState,
  setAppScreen,
} from './src/screens/auth/authLoading/action';
import {signOut} from './src/screens/patient/account/action';
import Constant from './src/utils/constants';
import BackgroundTimer from 'react-native-background-timer';
import {updateStatus} from './src/utils/firebase';
import {NavigationService} from './src/navigation';
import {setCurrentRoute, setPreviousRoute} from './src/redux/actions';

class App extends PureComponent {
  constructor(props) {
    super(props);
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

    AppState.addEventListener('change', this._handleAppStateChange);
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

  async componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  _handleAppStateChange = (nextAppState) => {
    const {setState, signOut} = this.props;

    if (nextAppState === 'active') {
      setState(true);
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.timeoutId) {
        BackgroundTimer.clearTimeout(this.timeoutId);
      }
    } else {
      setState(false);

      if (this.timeoutId) {
        BackgroundTimer.clearTimeout(this.timeoutId);
      }

      this.timeoutId = BackgroundTimer.setTimeout(() => {
        const payload = {
          navigation: this.navigator._navigation,
          isLoaderShow: false,
        };
        signOut(payload);
        Alert.alert(
          'Log Out',
          'For your security, you have been logged out due to inactivity.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }, Constant.App.logoutInterval);
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
        <Messaging />
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
  spinnerState: state.loader,
  toastState: state.toast,
  showModalError: state.modal.showModalError,
  errorMessage: state.modal.errorMessage,
  userData: state.authLoading.userData,
  isActive: state.authLoading.isActive,
});

const mapDispatchToProps = (dispatch) => ({
  hideErrorModal: () => dispatch(showOrHideModal()),
  setToken: (value) => dispatch(setFcmToken(value)),
  setState: (value) => dispatch(setAppState(value)),
  timeOut: () => dispatch(timeOut()),
  setScreen: (value) => dispatch(setAppScreen(value)),
  setCurrentRoute: (value) => dispatch(setCurrentRoute(value)),
  setPreviousRoute: (value) => dispatch(setPreviousRoute(value)),
  signOut: (data) => dispatch(signOut(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
