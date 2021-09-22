/**
 * @format
 */

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

const test = 'pk_test_lNJDgwEtGeMEcjcOBWzmVttH00Ig4ewVWF';
const prod = 'pk_live_btVnfQvMZs05jE2zOqzFYPUT00X4YNC57K';
const store = configStore();
class Kiira extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <StripeProvider
                        publishableKey={test}
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
