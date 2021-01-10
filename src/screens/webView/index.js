import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Header, Container, TextButton} from '../../components';
import Image from 'react-native-fast-image';
import intl from '../../utils/localization';
import {WebView as ReactNativeWebView} from 'react-native-webview';
import {mergeStyles} from '../../utils/functions';
import defaultStyles, {modifiers} from './styles';

const WebView = ({navigation}) => {
  const {url, title} = navigation.state.params;
  const [loading, setLoading] = useState(false);

  const styles = {
    loadingContainer: mergeStyles([
      defaultStyles.loadingContainer,
      [modifiers.loading.loadingContainer, !loading],
    ]),
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <Container unformatted>
      <Header title={title} onBack={handleBackPress} />
      <ReactNativeWebView
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        source={{uri: url}}
      />
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    </Container>
  );
};

export default WebView;
