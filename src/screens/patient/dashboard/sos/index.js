import React from 'react';
import {Text, View, Platform, Linking} from 'react-native';
import {Header, Container, TextButton} from '../../../../components';
import Image from 'react-native-fast-image';
import intl from '../../../../utils/localization';
import styles from './styles';

const SOS = ({navigation}) => {
  const handleDial = () => {
    const isAndroid = Platform.OS != 'ios';
    Linking.openURL(isAndroid ? 'tel:${911}' : 'telprompt:${911}');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={intl.en.sos.title} onBack={handleBackPress} />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../../../assets/sos-purple.png')}
      />
      <Text style={styles.title}>{intl.en.sos.emergency}</Text>
      <View style={styles.buttonContainer}>
        <TextButton onPress={handleDial}>{intl.en.sos.yes}</TextButton>
        <TextButton outlined onPress={handleBackPress}>
          {intl.en.sos.no}
        </TextButton>
      </View>
    </Container>
  );
};

export default SOS;
