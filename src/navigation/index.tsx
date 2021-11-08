import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NavigationService from './navigationService';
import { Image, View, StyleSheet } from 'react-native';
import { Text } from '~/components';
import Account from '../screens/patient/account';
import Activate from '../screens/auth/activate';
import AccountExpert from '../screens/provider/account';
import AccountSupport from '../screens/support/account';
import AddChild from '../screens/patient/dashboard/healthHistory/pregnancy/addChild';
import Allergies from '../screens/patient/dashboard/healthHistory/allergies';
import AllergiesHistory from '../screens/provider/appointments/patientProfile/allergies';
import Appointments from '../screens/patient/dashboard/appointments';
import AskExpert from '../screens/provider/ask';
import AskSupport from '../screens/support/ask';
import BasicInfo from '../screens/patient/dashboard/healthHistory/basicInfo';
import Birth from '../screens/patient/dashboard/healthHistory/pregnancy/birth';
import Book from '../screens/patient/dashboard/book';
import Calendar from '../screens/patient/dashboard/book/screens/calendar';
import CareSquad from '../screens/patient/dashboard/careSquad';
import ChangePassword from '../screens/patient/account/settings/changePassword';
import ChangePasswordExpert from '../screens/provider/account/settings/changePassword';
import Chat from '../screens/patient/dashboard/chat';
import ChatBot from '../screens/auth/chatBot';
import ChatExpert from '../screens/provider/ask/chat';
import Children from '../screens/patient/dashboard/healthHistory/pregnancy/children';
import Consent from '../screens/provider/appointments/patientProfile/consent';
import CurrentPregnancy from '../screens/patient/dashboard/healthHistory/pregnancy/pregnancyCurrent';
import Dashboard from '../screens/patient/dashboard';
import DueDate from '../screens/patient/dashboard/healthHistory/pregnancy/dueDate';
import ExpertAppointments from '../screens/provider/appointments';
import ExpertProfile from '../screens/patient/dashboard/appointments/expertProfile';
import ExpertTwillioLogin from '../screens/provider/appointments/twillio/Login';
import ExpertTwillioCalling from '../screens/provider/appointments/twillio/Callling';
import ExpertVisit from '../screens/provider/appointments/visit';
import FamilyHistory from '../screens/provider/appointments/patientProfile/family';
import ForgotPassword from '../screens/auth/forgotPassword';
import GynHistory from '../screens/provider/appointments/patientProfile/gyn';
import HealthHistory from '../screens/patient/dashboard/healthHistory';
import HealthAssessmentConfirmation from '../screens/patient/dashboard/healthAssesment/confirmation';
import HealthAssessmentSchedule from '../screens/patient/dashboard/healthAssesment/scheduleModal';
import Help from '../screens/common/help';
import Learn from '../screens/patient/blog';
import Lifestyle from '../screens/patient/dashboard/healthHistory/lifestyle';
import Loss from '../screens/patient/dashboard/healthHistory/pregnancy/loss';
import Login from '../screens/auth/login';
import Medications from '../screens/patient/dashboard/healthHistory/medications';
import MedicationsHistory from '../screens/provider/appointments/patientProfile/medications';
import MedicalHistory from '../screens/patient/dashboard/healthHistory/medicalHistory';
import MedicalHistoryExpert from '../screens/provider/appointments/patientProfile/medicalHistory';
import Messages from '../screens/patient/dashboard/chat/screens/message';
import NewUser from '../screens/auth/newUser';
import Confirm from '../screens/provider/appointments/patientProfile/confirm';
import Patients from '../screens/provider/patients';
import PatientProfile from '../screens/provider/appointments/patientProfile';
import Payment from '../screens/patient/dashboard/book/screens/payment';
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
import SelectChatProvider from '~/screens/patient/dashboard/chat/screens/selectProvider';
import SelectProvider from '~/screens/patient/dashboard/book/screens/selectProvider';
import Settings from '../screens/patient/account/settings';
import SettingsExpert from '../screens/provider/account/settings';
import SocialHistory from '../screens/provider/appointments/patientProfile/social';
import SurgicalHistory from '../screens/provider/appointments/patientProfile/surgical';
import Summary from '../screens/provider/appointments/patientProfile/summary';
import Landing from '../screens/auth/landing';
import TermsConditions from '../screens/common/termsAndConditions';
import UpdateAvailablity from '../screens/provider/account/updateAvailablity';
import Visit from '../screens/patient/dashboard/appointments/visit/index';
import VisitExpert from '../screens/provider/appointments/visit';
import Welcome from '../screens/auth/welcome';
import TreatmentHistory from '../screens/patient/dashboard/careSquad/treatmentHistory';
import TwillioCalling from '../screens/patient/dashboard/appointments/twillio/Callling';
import PersonalInformation from '../screens/provider/appointments/patientProfile/personalInformation';
import AgreementDetails from '../screens/provider/appointments/patientProfile/agreementDetails';
import VisitEnd from '../screens/patient/dashboard/appointments/twillio/visitEnd';
import VisitSummary from '../screens/patient/dashboard/careSquad/treatmentHistory/visitSummary';
import VisitOverView from '../screens/patient/dashboard/appointments/visitSummary';

import { colors, icons } from '../utils/constants';
import { default as globalStyles } from '~/components/styles';

let tabIconSize = 25;

const TransparentStyle = StyleSheet.create({
    cardStyle: {
        backgroundColor: colors.white,
    },

    containerStyle: {
        backgroundColor: colors.white,
    },
});

const { blue, tiny, regular, space_sm, gray_dark } = globalStyles;

const selected = [blue, tiny, regular, space_sm];
const notSelected = [tiny, gray_dark, regular, space_sm];

const AuthStack = createStackNavigator(
    {
        Activate: { screen: Activate },
        ChatBot: { screen: ChatBot },
        ForgotPassword: { screen: ForgotPassword },
        Landing: { screen: Landing },
        Login: { screen: Login },
        Welcome: { screen: Welcome },
    },
    {
        headerMode: 'none',
        initialRouteName: 'Landing',
        defaultNavigationOptions: {
            ...TransparentStyle,
        },
    },
);

const BottomTab = createBottomTabNavigator(
    {
        Community: {
            screen: Learn,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    return (
                        <View
                            testID="Community Tab"
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderTopWidth: focused ? 2 : 0,
                                borderTopColor: colors.primaryBlue,
                                padding: focused ? 8 : 10,
                                marginTop: 10,
                            }}
                        >
                            <Image
                                resizeMode={'contain'}
                                style={{
                                    width: tabIconSize,
                                    height: tabIconSize,
                                }}
                                source={focused ? icons.blogActive : icons.blog}
                            />
                            <Text options={focused ? selected : notSelected}>
                                Blog
                            </Text>
                        </View>
                    );
                },
            },
        },
        Home: {
            screen: Dashboard,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <View
                        testID="Home Tab"
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderTopWidth: focused ? 2 : 0,
                            borderTopColor: colors.primaryBlue,
                            padding: focused ? 8 : 10,
                            marginTop: 10,
                        }}
                    >
                        <Image
                            resizeMode={'contain'}
                            style={{ width: tabIconSize, height: tabIconSize }}
                            source={focused ? icons.homeActive : icons.home}
                        />
                        <Text options={focused ? selected : notSelected}>
                            Home
                        </Text>
                    </View>
                ),
            },
        },
        Me: {
            screen: Account,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    return (
                        <View
                            testID="Profile Tab"
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderTopWidth: focused ? 2 : 0,
                                borderTopColor: colors.primaryBlue,
                                padding: focused ? 8 : 10,
                                marginTop: 10,
                            }}
                        >
                            <Image
                                resizeMode={'contain'}
                                style={{
                                    width: tabIconSize,
                                    height: tabIconSize,
                                }}
                                source={
                                    focused
                                        ? icons.profileActive
                                        : icons.profile
                                }
                            />
                            <Text options={focused ? selected : notSelected}>
                                Profile
                            </Text>
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
            tabBarTestID: 'Patient',
        },
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            showLabel: false,
            style: {
                backgroundColor: 'white',
                height: 40,
                shadowColor: colors.black,
                shadowOffset: { width: 1, height: 1 },
                shadowRadius: 5,
                shadowOpacity: 0.2,
                borderWidth: 0,
            },
        },
    },
);

const BottomTabExpert = createBottomTabNavigator(
    {
        AccountExpert: {
            screen: AccountExpert,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <View
                        testID="Expert Profile Tab"
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: focused ? '#e4fdfd' : '',
                            padding: focused ? 10 : 0,
                            marginTop: 5,
                            borderRadius: 20,
                        }}
                    >
                        <Image
                            resizeMode={'contain'}
                            style={{ width: tabIconSize, height: tabIconSize }}
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
                tabBarIcon: ({ tintColor, focused }) => (
                    <View
                        testID="Expert Chat Tab"
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: focused ? '#e4fdfd' : '',
                            padding: focused ? 10 : 0,
                            marginTop: 5,
                            borderRadius: 20,
                        }}
                    >
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
                tabBarIcon: ({ tintColor, focused }) => (
                    <View
                        testID="Expert Appointments Tab"
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: focused ? '#e4fdfd' : '',
                            padding: focused ? 10 : 0,
                            marginTop: 5,
                            borderRadius: 20,
                        }}
                    >
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
                tabBarIcon: ({ focused }) => {
                    return (
                        <View
                            testID="Expert Community Tab"
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: focused ? '#e4fdfd' : '',
                                padding: focused ? 10 : 0,
                                marginTop: 5,
                                borderRadius: 20,
                            }}
                        >
                            <Image
                                resizeMode={'contain'}
                                style={{
                                    width: tabIconSize,
                                    height: tabIconSize,
                                }}
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
                shadowOffset: { width: 0, height: 2 },
                shadowColor: '#000000',
                shadowOpacity: 1,
                shadowRadius: 7,
            },
        },
    },
);

const BottomTabSupport = createBottomTabNavigator(
    {
        AccountSupport: {
            screen: AccountSupport,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: focused ? '#e4fdfd' : '',
                            padding: focused ? 10 : 0,
                            marginTop: 5,
                            borderRadius: 20,
                        }}
                    >
                        <Image
                            resizeMode={'contain'}
                            style={{ width: tabIconSize, height: tabIconSize }}
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
        AskSupport: {
            screen: AskSupport,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: focused ? '#e4fdfd' : '',
                            padding: focused ? 10 : 0,
                            marginTop: 5,
                            borderRadius: 20,
                        }}
                    >
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
    },
    {
        initialRouteName: 'AskSupport',
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
                shadowOffset: { width: 0, height: 2 },
                shadowColor: '#000000',
                shadowOpacity: 1,
                shadowRadius: 7,
            },
        },
    },
);

const AppStackExpert = createStackNavigator(
    {
        AllergiesHistory: { screen: AllergiesHistory },
        BottomTabExpert: { screen: BottomTabExpert },
        Consent: { screen: Consent },
        ChangePasswordExpert: { screen: ChangePasswordExpert },
        ChatExpert: { screen: ChatExpert },
        ExpertTwillioLogin: { screen: ExpertTwillioLogin },
        ExpertTwillioCalling: { screen: ExpertTwillioCalling },
        ExpertVisit: { screen: ExpertVisit },
        FamilyHistory: { screen: FamilyHistory },
        GynHistory: { screen: GynHistory },
        Help: { screen: Help },
        Learn: { screen: Learn },
        MedicationsHistory: { screen: MedicationsHistory },
        MedicalHistoryExpert: { screen: MedicalHistoryExpert },
        Confirm: { screen: Confirm },
        PatientProfile: { screen: PatientProfile },
        PersonalMedicalHistory: { screen: PersonalMedicalHistory },
        PhysicalExam: { screen: PhysicalExam },
        Plan: { screen: Plan },
        PregnancyHistoryExpert: { screen: PregnancyHistoryExpert },
        PreviousVisits: { screen: PreviousVisits },
        PrivacyPolicy: { screen: PrivacyPolicy },
        Recap: { screen: Recap },
        SocialHistory: { screen: SocialHistory },
        SettingsExpert: { screen: SettingsExpert },
        Summary: { screen: Summary },
        SurgicalHistory: { screen: SurgicalHistory },
        TermsConditions: { screen: TermsConditions },
        UpdateAvailablity: { screen: UpdateAvailablity },
        PersonalInformation: { screen: PersonalInformation },
        AgreementDetails: { screen: AgreementDetails },
        VisitExpert: { screen: VisitExpert },
    },
    {
        headerMode: 'none',
        initialRouteName: 'BottomTabExpert',
    },
);

const AppStackSupport = createStackNavigator(
    {
        BottomTabSupport: { screen: BottomTabSupport },
        // ChatSupport: { screen: CSupport },
        AccountSupport: { screen: AccountSupport },
    },
    {
        headerMode: 'none',
        initialRouteName: 'BottomTabSupport',
    },
);

const MainAppStack = createStackNavigator(
    {
        AddChild: { screen: AddChild },
        Allergies: { screen: Allergies },
        Appointments: { screen: Appointments },
        BasicInfo: { screen: BasicInfo },
        Birth: { screen: Birth },
        Book: { screen: Book },
        BottomTab: { screen: BottomTab },
        Calendar: { screen: Calendar },
        CareSquad: { screen: CareSquad },
        TreatmentHistory: { screen: TreatmentHistory },
        ChangePassword: { screen: ChangePassword },
        Chat: { screen: Chat },
        Children: { screen: Children },
        DueDate: { screen: DueDate },
        ExpertProfile: { screen: ExpertProfile },
        HealthHistory: { screen: HealthHistory },
        HealthAssessmentConfirmation: { screen: HealthAssessmentConfirmation },
        HealthAssessmentSchedule: { screen: HealthAssessmentSchedule },
        Help: { screen: Help },
        Learn: { screen: Learn },
        Lifestyle: { screen: Lifestyle },
        Loss: { screen: Loss },
        Medications: { screen: Medications },
        MedicalHistory: { screen: MedicalHistory },
        Messages: { screen: Messages },
        NewUser: { screen: NewUser },
        Payment: { screen: Payment },
        PregnancyAndChildren: { screen: Pregnancy },
        PregnancyCurrent: { screen: CurrentPregnancy },
        PregnancyHistory: { screen: PregnancyHistory },
        PrivacyPolicy: { screen: PrivacyPolicy },
        ReferFriend: { screen: ReferFriend },
        RescheduleVisit: { screen: RescheduleVisit },
        SelectChatProvider: { screen: SelectChatProvider },
        SelectProvider: { screen: SelectProvider },
        Settings: { screen: Settings },
        TermsConditions: { screen: TermsConditions },
        Visit: { screen: Visit },
        VisitOverView: { screen: VisitOverView },
        VisitSummary: { screen: VisitSummary },
        VideoRating: { screen: VideoRating },
        TwillioCalling: { screen: TwillioCalling },
        VisitEnd: { screen: VisitEnd },
    },
    {
        headerMode: 'none',
        initialRouteName: 'BottomTab',
    },
);

const AppStack = createStackNavigator(
    {
        MainApp: MainAppStack,
    },
    {
        mode: 'modal',
        headerMode: 'none',
        initialRouteName: 'MainApp',
        defaultNavigationOptions: {
            ...TransparentStyle,
        },
    },
);

const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack,
        AppExpert: AppStackExpert,
        AppSupport: AppStackSupport,
    },
    {
        initialRouteName: 'Auth',
        headerMode: 'none',
        ...TransparentStyle,
    },
);

const prevGetStateForActionHomeStack = AuthStack.router.getStateForAction;

AuthStack.router.getStateForAction = (action, state) => {
    if (state && action.type === 'Navigation/REPLACE') {
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
    if (state && action.type === 'Navigation/REPLACE') {
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
export { NavigationService };
