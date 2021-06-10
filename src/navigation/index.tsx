import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import NavigationService from './navigationService';
import {Image, View} from 'react-native';

import Account from '../screens/patient/account';
import AccountExpert from '../screens/provider/account';
import AddChild from '../screens/patient/dashboard/healthHistory/pregnancy/addChild';
import AddCreditOrDebitCard from '../screens/patient/dashboard/getTreatment/payment/AddCreditOrDebitCard';
import Allergies from '../screens/patient/dashboard/healthHistory/allergies';
import AllergiesHistory from '../screens/provider/appointments/patientProfile/allergies';
import Appointments from '../screens/patient/dashboard/appointments';
import Ask from '../screens/patient/dashboard/ask';
import AskExpert from '../screens/provider/ask';
import BasicInfo from '../screens/patient/dashboard/healthHistory/basicInfo';
import Birth from '../screens/patient/dashboard/healthHistory/pregnancy/birth';
import BookVisit from '../screens/patient/dashboard/getTreatment/bookVisit';
import BuyingCredit from '../screens/patient/dashboard/getTreatment/payment/buyingCredit';
import CareSquad from '../screens/patient/dashboard/careSquad';
import ChangePassword from '../screens/patient/account/settings/changePassword';
import ChangePasswordExpert from '../screens/provider/account/settings/changePassword';
import Chat from '../screens/patient/dashboard/ask/chat';
import ChatBot from '../screens/auth/chatBot';
import ChatExpert from '../screens/provider/ask/chat';
import Children from '../screens/patient/dashboard/healthHistory/pregnancy/children';
import ChooseExpert from '../screens/patient/dashboard/ask/chooseExpert';
import Consent from '../screens/provider/appointments/patientProfile/consent';
import CurrentPregnancy from '../screens/patient/dashboard/healthHistory/pregnancy/pregnancyCurrent';
import Dashboard from '../screens/patient/dashboard';
import DueDate from '../screens/patient/dashboard/healthHistory/pregnancy/dueDate';
import ExpertAppointments from '../screens/provider/appointments';
import ExpertProfile from '../screens/patient/dashboard/appointments/expertProfile';
import ExpertSchedule from '../screens/patient/dashboard/getTreatment/expertSchedule';
import ExpertTwillioLogin from '../screens/provider/appointments/twillio/Login';
import ExpertTwillioCalling from '../screens/provider/appointments/twillio/Callling';
import ExpertVisit from '../screens/provider/appointments/visit';
import FamilyHistory from '../screens/provider/appointments/patientProfile/family';
import ForgotPassword from '../screens/auth/forgotPassword';
import GynHistory from '../screens/provider/appointments/patientProfile/gyn';
import HealthHistory from '../screens/patient/dashboard/healthHistory';
import GetTreatment from '../screens/patient/dashboard/getTreatment';
import Help from '../screens/common/help';
import Learn from '../screens/patient/learn';
import Lifestyle from '../screens/patient/dashboard/healthHistory/lifestyle';
import Loss from '../screens/patient/dashboard/healthHistory/pregnancy/loss';
import Login from '../screens/auth/login';
import Medications from '../screens/patient/dashboard/healthHistory/medications';
import MedicationsHistory from '../screens/provider/appointments/patientProfile/medications';
import MedicalHistory from '../screens/patient/dashboard/healthHistory/medicalHistory';
import MedicalHistoryExpert from '../screens/provider/appointments/patientProfile/medicalHistory';
import NeedsPresciption from '../screens/patient/dashboard/getTreatment/needsPrescription';
import NewUser from '../screens/auth/newUser';
import Confirm from '../screens/provider/appointments/patientProfile/confirm';
import Patients from '../screens/provider/patients';
import PatientProfile from '../screens/provider/appointments/patientProfile';
import PaymentMethods from '../screens/patient/dashboard/getTreatment/payment/paymentMethods';
import PayPalApproval from '../screens/patient/dashboard/getTreatment/payment/buyingCredit/paypal';
import PersonalMedicalHistory from '../screens/provider/appointments/patientProfile/pmh';
import PhysicalExam from '../screens/provider/appointments/patientProfile/physical';
import Plan from '../screens/provider/appointments/patientProfile/plan';
import Pregnancy from '../screens/patient/dashboard/healthHistory/pregnancy';
import PregnancyHistory from '../screens/patient/dashboard/healthHistory/pregnancy/pregnancyHistory';
import PregnancyHistoryExpert from '../screens/provider/appointments/patientProfile/pregnancy';
import PreviousVisits from '../screens/provider/appointments/patientProfile/previousVisits';
import PrivacyPolicy from '../screens/common/privacyPolicy';
import VideoRating from '../screens/patient/dashboard/appointments/twillio/rating';
import Recap from '../screens/provider/appointments/patientProfile/recap';
import ReferFriend from '../screens/patient/account/settings/referFriend';
import RescheduleVisit from '../screens/patient/dashboard/appointments/rescheduleVisit';
import RequestVisit from '../screens/patient/dashboard/getTreatment/requestVisit';
import SelectCareType from '../screens/patient/dashboard/getTreatment/selectCareType';
import SelectExpert from '../screens/patient/dashboard/getTreatment/selectExpert';
import Settings from '../screens/patient/account/settings';
import SettingsExpert from '../screens/provider/account/settings';
import SocialHistory from '../screens/provider/appointments/patientProfile/social';
import SurgicalHistory from '../screens/provider/appointments/patientProfile/surgical';
import Summary from '../screens/provider/appointments/patientProfile/summary';
import SOS from '../screens/patient/dashboard/sos';
import Landing from '../screens/auth/landing';
import TermsConditions from '../screens/common/termsAndConditions';
import TreatmentBot from '../screens/patient/dashboard/treatmentBot';
import UpdateAvailablity from '../screens/provider/account/updateAvailablity';
import Verify from '../screens/auth/verify';
import Visit from '../screens/patient/dashboard/appointments/visit/index';
import VisitExpert from '../screens/provider/appointments/visit';
import Welcome from '../screens/auth/welcome';
import TreatmentHistory from '../screens/patient/dashboard/careSquad/treatmentHistory';
import TwillioLogin from '../screens/patient/dashboard/appointments/twillio/Login';
import TwillioCalling from '../screens/patient/dashboard/appointments/twillio/Callling';
import PersonalInformation from '../screens/provider/appointments/patientProfile/personalInformation';
import AgreementDetails from '../screens/provider/appointments/patientProfile/agreementDetails';
import VisitEnd from '../screens/patient/dashboard/appointments/twillio/visitEnd';
import VisitSummary from '../screens/patient/dashboard/careSquad/treatmentHistory/visitSummary';

import Constant from '../utils/constants';

let tabIconSize = 25;
const screenNames = Constant.App.screenNames;

const TransparentStyle = {
  cardStyle: {
    // opacity: 1,
    backgroundColor: '#fff',
  },

  containerStyle: {
    backgroundColor: '#fff',
  },
};

const AuthStack = createStackNavigator(
  {
    ChatBot: {screen: ChatBot},
    ForgotPassword: {screen: ForgotPassword},
    Landing: {screen: Landing},
    Login: {screen: Login},
    Verify: {screen: Verify},
    Welcome: {screen: Welcome},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Landing',
    ...TransparentStyle,
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
    RequestVisit: {
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
                    ? require('../../assets/kiira_icon.png')
                    : require('../../assets/kiira_icon_inactive.png')
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
    AllergiesHistory: {screen: AllergiesHistory},
    BottomTabExpert: {screen: BottomTabExpert},
    Consent: {screen: Consent},
    ChangePasswordExpert: {screen: ChangePasswordExpert},
    ChatExpert: {screen: ChatExpert},
    ExpertTwillioLogin: {screen: ExpertTwillioLogin},
    ExpertTwillioCalling: {screen: ExpertTwillioCalling},
    ExpertVisit: {screen: ExpertVisit},
    FamilyHistory: {screen: FamilyHistory},
    GynHistory: {screen: GynHistory},
    Help: {screen: Help},
    Learn: {screen: Learn},
    MedicationsHistory: {screen: MedicationsHistory},
    MedicalHistoryExpert: {screen: MedicalHistoryExpert},
    Confirm: {screen: Confirm},
    PatientProfile: {screen: PatientProfile},
    PersonalMedicalHistory: {screen: PersonalMedicalHistory},
    PhysicalExam: {screen: PhysicalExam},
    Plan: {screen: Plan},
    PregnancyHistoryExpert: {screen: PregnancyHistoryExpert},
    PreviousVisits: {screen: PreviousVisits},
    PrivacyPolicy: {screen: PrivacyPolicy},
    Recap: {screen: Recap},
    SocialHistory: {screen: SocialHistory},
    SettingsExpert: {screen: SettingsExpert},
    Summary: {screen: Summary},
    SurgicalHistory: {screen: SurgicalHistory},
    TermsConditions: {screen: TermsConditions},
    UpdateAvailablity: {screen: UpdateAvailablity},
    PersonalInformation: {screen: PersonalInformation},
    AgreementDetails: {screen: AgreementDetails},
    VisitExpert: {screen: VisitExpert},
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
    PregnancyHistory: {screen: PregnancyHistory},
    PrivacyPolicy: {screen: PrivacyPolicy},
    ReferFriend: {screen: ReferFriend},
    RescheduleVisit: {screen: RescheduleVisit},
    RequestVisit: {screen: RequestVisit},
    SelectCareType: {screen: SelectCareType},
    SelectExpert: {screen: SelectExpert},
    Settings: {screen: Settings},
    SOS: {screen: SOS},
    TermsConditions: {screen: TermsConditions},
    TreatmentBot: {screen: TreatmentBot},
    Visit: {screen: Visit},
    VisitSummary: {screen: VisitSummary},
    VideoRating: {screen: VideoRating},
    TwillioLogin: {screen: TwillioLogin},
    TwillioCalling: {screen: TwillioCalling},
    VisitEnd: {screen: VisitEnd},
  },
  {
    headerMode: 'none',
    initialRouteName: 'BottomTab',
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
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    ...TransparentStyle,
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
