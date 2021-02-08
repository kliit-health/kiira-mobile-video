/**
 * @format
 */

import React, {PureComponent} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';
import {name as appName} from './app.json';
import {store, persistor} from './src/redux/store';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

class Kiira extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <App />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Kiira);
