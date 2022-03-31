import React, { PureComponent } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { StripeProvider } from '@stripe/stripe-react-native';

import App from './App';
import { name as appName } from './app.json';
import configStore from './src/redux/store';
import {
    SafeAreaProvider,
    initialWindowMetrics,
} from 'react-native-safe-area-context';

import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

(async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    await notifee.setBadgeCount(0);

    if (enabled) {
        notifee.createChannel({
            id: 'kiira-health',
            name: 'Kiira Health',
            importance: AndroidImportance.HIGH,
            bypassDnd: true,
            description: 'Kiira Health Description',
            sound: 'default',
        });

        const onMessageReceived = async message => {
            const android = {
                channelId: 'kiira-health',
                smallIcon: 'notification',
                color: '#223ad6',
                pressAction: {
                    id: 'open-kiira',
                    launchActivity: 'default',
                },
            };

            const notification = JSON.parse(message.data.notifee);
            notification.android = android;
            notifee.displayNotification(notification);
            await notifee.incrementBadgeCount();
        };

        notifee.onBackgroundEvent(async ({ type, detail }) => {
            const { notification, pressAction } = detail;
            if (
                type === EventType.ACTION_PRESS &&
                pressAction.id === 'mark-as-read'
            ) {
                await notifee.decrementBadgeCount();
                await notifee.cancelNotification(notification.id);
            }
        });

        messaging().onMessage(onMessageReceived);
        messaging().setBackgroundMessageHandler(onMessageReceived);
    }
})();

const test = 'pk_test_lNJDgwEtGeMEcjcOBWzmVttH00Ig4ewVWF';
const prod = 'pk_live_btVnfQvMZs05jE2zOqzFYPUT00X4YNC57K';

const store = configStore();
class Kiira extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <StripeProvider
                        publishableKey={prod}
                        merchantIdentifier="merchant.com.kliit"
                    >
                        <App />
                    </StripeProvider>
                </SafeAreaProvider>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Kiira);
