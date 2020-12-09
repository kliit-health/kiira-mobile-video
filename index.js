/**
 * @format
 */

import React, {PureComponent} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import configStore from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const store = configStore();

class Kiira extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Kiira);
