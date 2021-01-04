import React from 'react';
import {View, Linking, Text} from 'react-native';
import {Header, Container, TextButton} from '../../components';
import Image from 'react-native-fast-image';
import intl from '../../utils/localization';
import styles, {modifiers} from './styles';

const Help = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleAsk = () => {
    Linking.openURL('mailto:support@kiira.io?subject=Kiira Support');
  };

  return (
    <Container>
      <Header title={intl.en.help.title} onBack={handleBack} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/logo-sm.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>{intl.en.help.question}</Text>
      <TextButton styles={modifiers.button} onPress={handleAsk}>
        {intl.en.help.ask}
      </TextButton>
    </Container>
  );
};

export default Help;
