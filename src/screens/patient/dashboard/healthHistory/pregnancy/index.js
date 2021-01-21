import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Header, ListItem, Container} from '../../../../../components';
import intl from '../../../../../utils/localization';
import model from './model';
import styles from './styles';

const Pregnancy = ({navigation}) => (
  <Container unformatted>
    <Header
      title={intl.en.pregnancy.title}
      onBack={() => navigation.goBack()}
    />
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {model.map(({title, destination}) => (
        <ListItem
          displayChevron
          key={title}
          title={title}
          onPress={() => navigation.navigate(destination)}>
          <Text style={styles.title}>{title}</Text>
        </ListItem>
      ))}
    </ScrollView>
  </Container>
);

export default Pregnancy;
