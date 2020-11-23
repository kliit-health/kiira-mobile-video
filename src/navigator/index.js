import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import NavigationService from './navigationService';
import {Image, View} from 'react-native';

import Account from '../screens/account';
import AccountExpert from '../screens/account/expert';
import AddChild from '../screens/addChild';
import AddCreditOrDebitCard from '../screens/payment/AddCreditOrDebitCard';
import Allergies from '../screens/allergies';
import Appointments from '../screens/appointments/';
import Ask from '../screens/ask';
import AskExpert from '../screens/ask/expert';
import AuthLoadingScreen from '../screens/authLoading';
import BasicInfo from '../screens/basicInfo';
import Birth from '../screens/birth';
import BlockedUsers from '../screens/videoVisit/BlockedUsers';
import BookVisit from '../screens/bookVisit';
import BuyingCredit from '../screens/payment/buyingCredit';
import CallingScreen from '../screens/videoVisit/CallingScreen';
import CareSquad from '../screens/careSquad';
import ChangePassword from '../screens/changePassword';
import ChangePasswordExpert from '../screens/changePassword/expert';
import Chat from '../screens/chat';
import ChatBot from '../screens/chatBot';
import ChatExpert from '../screens/chat/expert';
import Children from '../screens/children';
import ChooseExpert from '../screens/chooseExpert';
import Constant from '../utils/constants';
import CurrentPregnancy from '../screens/pregnancyCurrent';
import Dashboard from '../screens/dashboard';
import DueDate from '../screens/dueDate';
import ExpertAppointments from '../screens/appointments/expert';
import ExpertBlockedUsers from '../screens/videoVisit/BlockedUsers';
import ExpertCallingScreen from '../screens/videoVisit/expert/CallingScreen';
import ExpertMainCallScreen from '../screens/videoVisit/expert/MainCallScreen';
import ExpertChatScreen from '../screens/videoVisit/expert/ChatScreen/ChatScreen';
import ExpertHomeScreen from '../screens/videoVisit/expert/HomeScreen/HomeScreen';
import ExpertImageViewer from '../screens/videoVisit/expert/ImageViewer';
import ExpertProfile from '../screens/expertProfile';
import ExpertSchedule from '../screens/expertSchedule';
import ExpertLoginScreen from '../screens/videoVisit/expert/LoginScreen/LoginScreen';
import ExpertVideoPlayer from '../screens/videoVisit/expert/VideoPlayer';
import ExpertVisit from '../screens/visit/expert';
import ForgotPassword from '../screens/forgotPassword';
import GetStarted from '../screens/getStarted';
import GroupChatScreen from '../screens/videoVisit/GroupChatScreen';
import HealthHistory from '../screens/healthHistory/';
import HomeScreen from '../screens/videoVisit/HomeScreen/HomeScreen';
import GetTreatment from '../screens/getTreatment';
import Help from '../screens/help';
import ImageViewer from '../screens/videoVisit/ImageViewer';
import Insurance from '../screens/insurance';
import Language from '../utils/localization';
import Learn from '../screens/learn';
import Lifestyle from '../screens/lifestyle';
import Loss from '../screens/loss';
import Login from '../screens/login';
import LoginScreen from '../screens/videoVisit/LoginScreen/LoginScreen';
import MainCallScreen from '../screens/videoVisit/MainCallScreen';
import Medications from '../screens/medications';
import MedicalHistory from '../screens/medicalHistory';
import NeedsPresciption from '../screens/needsPrescription';
import NewUser from '../screens/newUser';
import Patients from '../screens/patients';
import PaymentMethods from '../screens/payment/paymentMethods';
import PayPalApproval from '../screens/payment/buyingCredit/paypal';
import Pregnancy from '../screens/pregnancy';
import PregnancyHistory from '../screens/pregnancyHistory';
import PreviousAppointmentsNotes from '../screens/previousAppointmentsNotes';
import PrivacyPolicy from '../screens/privacyPolicy';
import ReferFriend from '../screens/referFriend';
import RescheduleVisit from '../screens/rescheduleVisit';
import RequestVisit from '../screens/requestVisit';
import SignUp from '../screens/signUp';
import SelectExpert from '../screens/selectExpert';
import Setting from '../screens/setting';
import SettingExpert from '../screens/setting/expert';
import SOS from '../screens/sos';
import Tutorial from '../screens/tutorial';
import TermsConditions from '../screens/termsAndConditions';
import TreatmentBot from '../screens/treatmentBot';
import UpdateAvailablity from '../screens/updateAvailablity';
import Verify from '../screens/verify';
import VideoPlayer from '../screens/videoVisit/VideoPlayer';
import Visit from '../screens/visit';
import Welcome from '../screens/welcome';
import TreatmentHistory from '../screens/treatmentHistory';

let lang = Language.en;
let tabIconSize = 25;
const screenNames = Constant.App.screenNames;

const TransparentStyle = {
  transparentCard: true,
  cardStyle: {
    opacity: 1,
  },
  transitionConfig: () => ({
    containerStyle: {
      backgroundColor: 'transparent',
    },
  }),
};

const AuthStack = createStackNavigator(
  {
    AddProfileData: {screen: ChatBot},
    ForgotPassword: {screen: ForgotPassword},
    Tutorial: {screen: Tutorial},
    GetStarted: {screen: GetStarted},
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    Verify: {screen: Verify},
    Welcome: {screen: Welcome},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Tutorial',
  },
);

const PaymentStack = createStackNavigator(
  {
    [screenNames.BuyingCredit]: {screen: BuyingCredit},
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: screenNames.BuyingCredit,
    ...TransparentStyle,
  },
);
const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? '#e4fdfd' : '',
              padding: focused ? 10 : 0,
              marginTop: 5,
              borderRadius: 20,
            }}>
            <Image
              resizeMode={'contain'}
              style={{width: tabIconSize, height: tabIconSize}}
              source={
                focused
                  ? require('../../assets/home-active.png')
                  : require('../../assets/home.png')
              }
            />
          </View>
        ),
      },
    },
    Team: {
      screen: RequestVisit,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? '#e4fdfd' : '',
              padding: focused ? 10 : 0,
              marginTop: 5,
              borderRadius: 20,
            }}>
            <Image
              resizeMode={'contain'}
              style={{
                width: tabIconSize,
                height: tabIconSize,
              }}
              source={
                focused
                  ? require('../../assets/doctor-active.png')
                  : require('../../assets/doctor.png')
              }
            />
          </View>
        ),
      },
    },
    Community: {
      screen: Learn,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#e4fdfd' : '',
                padding: focused ? 10 : 0,
                marginTop: 5,
                borderRadius: 20,
              }}>
              <Image
                resizeMode={'contain'}
                style={{width: tabIconSize, height: tabIconSize}}
                source={
                  focused
                    ? require('../../assets/community-active.png')
                    : require('../../assets/community.png')
                }
              />
            </View>
          );
        },
      },
    },
    Me: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#e4fdfd' : '',
                padding: focused ? 10 : 0,
                marginTop: 5,
                borderRadius: 20,
              }}>
              <Image
                resizeMode={'contain'}
                style={{width: tabIconSize, height: tabIconSize}}
                source={
                  focused
                    ? require('../../assets/me-active.png')
                    : require('../../assets/me.png')
                }
              />
            </View>
          );
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarposition: 'bottom',
    swipeEnabled: true,
    defaultNavigationOptions: {
      route: 'Home',
    },
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      showLabel: false,
      style: {
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginHorizontal: 5,
        height: 40,
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 7,
      },
    },
  },
);

const BottomTabExpert = createBottomTabNavigator(
  {
    AccountExpert: {
      screen: AccountExpert,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? '#e4fdfd' : '',
              padding: focused ? 10 : 0,
              marginTop: 5,
              borderRadius: 20,
            }}>
            <Image
              resizeMode={'contain'}
              style={{width: tabIconSize, height: tabIconSize}}
              source={
                focused
                  ? require('../../assets/me-active.png')
                  : require('../../assets/me.png')
              }
            />
          </View>
        ),
      },
    },
    AskExpert: {
      screen: AskExpert,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? '#e4fdfd' : '',
              padding: focused ? 10 : 0,
              marginTop: 5,
              borderRadius: 20,
            }}>
            <Image
              resizeMode={'contain'}
              style={{
                width: tabIconSize,
                height: tabIconSize,
              }}
              source={
                focused
                  ? require('../../assets/chat-new-active.png')
                  : require('../../assets/chat-new.png')
              }
            />
          </View>
        ),
      },
    },
    ExpertAppointments: {
      screen: ExpertAppointments,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? '#e4fdfd' : '',
              padding: focused ? 10 : 0,
              marginTop: 5,
              borderRadius: 20,
            }}>
            <Image
              resizeMode={'contain'}
              style={{
                width: tabIconSize,
                height: tabIconSize,
              }}
              source={
                focused
                  ? require('../../assets/doctor-active.png')
                  : require('../../assets/doctor.png')
              }
            />
          </View>
        ),
      },
    },
    Community: {
      screen: Patients,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: focused ? '#e4fdfd' : '',
                padding: focused ? 10 : 0,
                marginTop: 5,
                borderRadius: 20,
              }}>
              <Image
                resizeMode={'contain'}
                style={{width: tabIconSize, height: tabIconSize}}
                source={
                  focused
                    ? require('../../assets/history-active.png')
                    : require('../../assets/history.png')
                }
              />
            </View>
          );
        },
      },
    },
  },
  {
    initialRouteName: 'AskExpert',
    tabBarposition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      showLabel: false,
      style: {
        backgroundColor: 'white',
        borderRadius: 12,
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginHorizontal: 5,
        height: 40,
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 7,
      },
    },
  },
);

const AppStackExpert = createStackNavigator(
  {
    BottomTabExpert: {screen: BottomTabExpert},
    ChangePasswordExpert: {screen: ChangePasswordExpert},
    ChatExpert: {screen: ChatExpert},
    ExpertBlockedUsers: {screen: ExpertBlockedUsers},
    ExpertCallingScreen: {screen: ExpertCallingScreen},
    ExpertChatScreen: {screen: ExpertChatScreen},
    ExpertMainCallScreen: {screen: ExpertMainCallScreen},
    ExpertHomeScreen: {screen: ExpertHomeScreen},
    ExpertImageViewer: {screen: ExpertImageViewer},
    ExpertLoginScreen: {screen: ExpertLoginScreen},
    ExpertVideoPlayer: {screen: ExpertVideoPlayer},
    ExpertVisit: {screen: ExpertVisit},
    Help: {screen: Help},
    Learn: {screen: Learn},
    PrivacyPolicy: {screen: PrivacyPolicy},
    SettingExpert: {screen: SettingExpert},
    TermsConditions: {screen: TermsConditions},
    UpdateAvailablity: {screen: UpdateAvailablity},
  },
  {
    headerMode: 'none',
    initialRouteName: 'BottomTabExpert',
  },
);

const MainAppStack = createStackNavigator(
  {
    Ask: {screen: Ask},
    AddChild: {screen: AddChild},
    AddCreditOrDebitCard: {screen: AddCreditOrDebitCard},
    Allergies: {screen: Allergies},
    Appointments: {screen: Appointments},
    BasicInfo: {screen: BasicInfo},
    Birth: {screen: Birth},
    BookVisit: {screen: BookVisit},
    BottomTab: {screen: BottomTab},
    CareSquad: {screen: CareSquad},
    GetTreatment: {screen: GetTreatment},
    TreatmentHistory: {screen: TreatmentHistory},
    ChangePassword: {screen: ChangePassword},
    Chat: {screen: Chat},
    Children: {screen: Children},
    ChooseExpert: {screen: ChooseExpert},
    DueDate: {screen: DueDate},
    ExpertProfile: {screen: ExpertProfile},
    ExpertSchedule: {screen: ExpertSchedule},
    HealthHistory: {screen: HealthHistory},
    Help: {screen: Help},
    Insurance: {screen: Insurance},
    Learn: {screen: Learn},
    Lifestyle: {screen: Lifestyle},
    Loss: {screen: Loss},
    Medications: {screen: Medications},
    MedicalHistory: {screen: MedicalHistory},
    NeedsPresciption: {screen: NeedsPresciption},
    NewUser: {screen: NewUser},
    PaymentMethods: {screen: PaymentMethods},
    PayPalApproval: {screen: PayPalApproval},
    PregnancyAndChildren: {screen: Pregnancy},
    PregnancyCurrent: {screen: CurrentPregnancy},
    PreviousAppointmentsNotes: {screen: PreviousAppointmentsNotes},
    PregnancyHistory: {screen: PregnancyHistory},
    PrivacyPolicy: {screen: PrivacyPolicy},
    ReferFriend: {screen: ReferFriend},
    RescheduleVisit: {screen: RescheduleVisit},
    RequestVisit: {screen: RequestVisit},
    SelectExpert: {screen: SelectExpert},
    Setting: {screen: Setting},
    SOS: {screen: SOS},
    TermsConditions: {screen: TermsConditions},
    TreatmentBot: {screen: TreatmentBot},
    Visit: {screen: Visit},
  },
  {
    headerMode: 'none',
    initialRouteName: 'BottomTab',
  },
);

const VideoStack = createStackNavigator(
  {
    VideoLogin: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    // VideoChat: ChatScreen,
    Group: {screen: GroupChatScreen},
    Video: {screen: VideoPlayer},
    Block: {screen: BlockedUsers},
    Image: {screen: ImageViewer},
    MainCallScreen: {screen: MainCallScreen},
    CallingScreen: {screen: CallingScreen},
  },
  {
    initialRouteName: 'VideoLogin',
  },
);

const AppStack = createStackNavigator(
  {
    MainApp: MainAppStack,
    Payment: PaymentStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'MainApp',
    ...TransparentStyle,
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
    AppExpert: AppStackExpert,
    AuthLoading: AuthLoadingScreen,
    Video: VideoStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  },
);

const prevGetStateForActionHomeStack = AuthStack.router.getStateForAction;

AuthStack.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      index: routes.length - 1,
      routes,
    };
  }
  return prevGetStateForActionHomeStack(action, state);
};

const prevGetStateForActionAppStack = AppStack.router.getStateForAction;

AppStack.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      index: routes.length - 1,
      routes,
    };
  }
  return prevGetStateForActionAppStack(action, state);
};

const prevGetStateForActionAppStackExpert =
  AppStackExpert.router.getStateForAction;

AppStackExpert.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      index: routes.length - 1,
      routes,
    };
  }
  return prevGetStateForActionAppStackExpert(action, state);
};

export default createAppContainer(AppNavigator);
export {NavigationService};
