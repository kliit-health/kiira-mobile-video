import React from 'react';
import {View, Linking, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Header, Container, TextButton} from '../../../components';
import Image from 'react-native-fast-image';
import {screenNames} from '../../../utils/constants';
import styles, {modifiers} from './styles';

const Help = ({navigation}) => {
  // const {appScreen} = useSelector((state) => state.authLoading);
  const lang = useSelector((state) => state.language);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAsk = () => {
    // if (appScreen && appScreen.currentScreen === screenNames.Help) {
    Linking.openURL('mailto:support@kiira.io?subject=Kiira Support');
    setTimeout(() => {
      navigation.navigate(
        appScreen.prevScreen ? appScreen.prevScreen : screenNames.Help,
      );
    }, 200);
    // }
  };

  return (
    <Container>
      <Header title={lang.help.title} onBack={handleBack} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../../assets/logo-sm.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>{lang.help.question}</Text>
      <TextButton styles={modifiers.button} onPress={handleAsk}>
        {lang.help.ask}
      </TextButton>
    </Container>
  );
};

export default Help;
