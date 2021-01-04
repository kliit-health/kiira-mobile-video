import React, {useEffect} from 'react';
import {Linking, Text, View} from 'react-native';
import {Container, Header, TextButton} from '../../components';
import {useSelector} from 'react-redux';
import intl from '../../utils/localization';
import Constant from '../../utils/constants';
import styles, {modifiers} from './styles';

const Learn = ({navigation}) => {
  const handleOpenUrl = () => {
    Linking.openURL(Constant.App.learnTabUrl);
  };

  return (
    <Container styles={modifiers.container}>
      <Text style={styles.question}>{intl.en.learn.learnMore}</Text>
      <Header title={intl.en.learn.title} />
      <TextButton onPress={handleOpenUrl} styles={modifiers.button}>
        {intl.en.learn.seeArticles}
      </TextButton>
    </Container>
  );
};

export default Learn;
