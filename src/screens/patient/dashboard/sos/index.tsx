import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View, Platform, Linking} from 'react-native';
import {Header, Container, TextButton} from '~/components';
import Image from 'react-native-fast-image';
import styles from './styles';

const SOS = ({navigation}) => {
  const lang = useSelector((state) => state.language);

  const handleDial = () => {
    const isAndroid = Platform.OS != 'ios';
    Linking.openURL(isAndroid ? 'tel:${911}' : 'telprompt:${911}');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={lang.sos.title} onBack={handleBackPress} />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../../../assets/sos-purple.png')}
      />
      <Text style={styles.title}>{lang.sos.emergency}</Text>
      <View style={styles.buttonContainer}>
        <TextButton onPress={handleDial}>{lang.sos.yes}</TextButton>
        <TextButton outlined onPress={handleBackPress}>
          {lang.sos.no}
        </TextButton>
      </View>
    </Container>
  );
};

export default SOS;
