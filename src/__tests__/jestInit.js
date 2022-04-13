import React, { Component } from 'react';
import mockStripe from '@stripe/stripe-react-native/jest/mock.js';

jest.mock('@notifee/react-native', () => 'notifee');
jest.mock('react-native-device-info', () =>
    require('react-native-device-info/mock'),
);
jest.mock('react-native-permissions', () =>
    require('react-native-permissions/mock'),
);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock(
    '../../node_modules/@react-native-firebase/app/lib/internal/RNFBNativeEventEmitter.js',
    () => {
        const { EventEmitter } = require('events');
        return EventEmitter;
    },
);
jest.mock('react-native-device-info', () => {
    return {
        getVersion: () => 4,
    };
});
jest.mock('@stripe/stripe-react-native', () => mockStripe);
jest.mock('react-native-text-input-mask', () => 'TextInputMask');

jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: jest.fn(() => ({
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    })),
}));

jest.mock('../svgs/search.svg', () => 'Search');
jest.mock('../svgs/cart.svg', () => 'Cart');
jest.mock('../svgs/dollar.svg', () => 'Dollar');
jest.mock('../svgs/camera_black.svg', () => 'CameraBlack');

jest.mock('react-redux', () => 'useDispatch');

const mockDispatch = jest.fn();
jest.mock('react-redux', () => {
    return {
        connect: (mapStateToProps, mapDispatchToProps) => ReactComponent => ({
            mapStateToProps,
            mapDispatchToProps,
            ReactComponent,
        }),
        Provider: ({ children }) => children,
        useDispatch: () => mockDispatch,
        useSelector: () => ({
            navigator: {
                previousRoute: 'Confirm',
            },
            expertAppointments: {
                title: 'Test Appointment',
            },
            visitSummary: {
                afterVisitSummary: 'afterVisitSummary',
                visitInformation: 'visitInformation',
                chiefComplaint: 'chiefComplaint',
                assessmentPlan: 'assessmentPlan',
                patientName: 'patientName',
                dateAndTime: 'dateAndTime',
                provider: 'provider',
                locked: 'locked',
                title: 'title',
            },
            profileInfo: {
                firstName: 'firstName',
                lastName: 'lastName',
                profileImageUrl: 'profileImageUrl',
                pronouns: 'pronouns',
                phoneNumber: 'phoneNumber',
                dob: 'dob',
                gender: 'gender',
                insurance: 'insurance',
            },
            visit: {
                expert: {
                    uid: 'uid',
                    profileInfo: {
                        firstName: 'firstName',
                        lastName: 'lastName',
                        profession: 'profession',
                        imageUrl: 'imageUrl',
                        phoneNumber: 'phoneNumber',
                        rating: 'rating',
                    },
                },
                uid: 'uid',
                time: {
                    date: 'date',
                },
                details: {
                    duration: 'duration',
                },
            },
        }),
    };
});

jest.mock('react-navigation-stack', () => {
    return {
        createStackNavigator: jest.fn().mockImplementation(nav => {
            return {
                router: {
                    getStateForAction: jest
                        .fn()
                        .mockImplementation(component => component),
                },
            };
        }),
    };
});

jest.mock('react-navigation', () => {
    return {
        createAppContainer: jest
            .fn()
            .mockReturnValue(function NavigationContainer(props) {
                return null;
            }),
        createDrawerNavigator: jest.fn().mockImplementation(nav => {
            return {};
        }),
        createMaterialTopTabNavigator: jest.fn(),
        createSwitchNavigator: jest.fn().mockImplementation(nav => {
            return {};
        }),
        StackRouter: jest.fn().mockImplementation(nav => {
            return {};
        }),
        createNavigator: jest.fn().mockImplementation(component => component),
        TabRouter: jest.fn().mockImplementation(component => component),
        createBottomTabNavigator: jest.fn(),
        withNavigation: jest.fn().mockImplementation(navigation => {
            return {
                state: {
                    params: {},
                },
            };
        }),
        StackActions: {
            push: jest
                .fn()
                .mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
            replace: jest.fn().mockImplementation(x => ({
                ...x,
                type: 'Navigation/REPLACE',
            })),
        },
        NavigationActions: {
            navigate: jest.fn().mockImplementation(x => x),
        },
        ThemeColors: {
            light: {
                bodyContent: '',
            },
            dark: {
                bodyContent: '',
            },
        },
    };
});

jest.mock('react-native-twilio-video-webrtc', () => {
    return {
        TwilioVideo: Component => {
            return [
                (Component.connect = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.disconnect = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.setLocalAudioEnabled = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.setLocalVideoEnabled = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.toggleSoundSetup = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.flipCamera = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.setRemoteAudioPlayback = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.getStats = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.onRoomDidConnect = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.onRoomDidFailToConnect = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.onParticipantAddedVideoTrack = jest
                    .fn()
                    .mockImplementation(component => component)),
                (Component.onParticipantRemovedVideoTrack = jest
                    .fn()
                    .mockImplementation(component => component)),
            ];
        },
        TwilioVideoLocalView: Component => {
            return [
                (Component.enabled = jest.fn().mockImplementation(x => x)),
                (Component.style = jest.fn().mockImplementation(x => x)),
            ];
        },
        TwilioVideoParticipantView: {},
    };
});

jest.mock('react-native-keep-awake', () => 'KeepAwake');
jest.mock('react-native-reanimated', () =>
    require('react-native-reanimated/mock'),
);
