import React from 'react';
import {withNavigation} from 'react-navigation';
import {useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {TextButton, Header, Container} from '../../components';
import {needsPrescription} from '../expertSchedule/action';
import {screenNames} from '../../utils/constants';
import intl from '../../utils/localization';
import styles, {modifiers} from './style';

const NeedsPresciption = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="" onBack={() => navigation.goBack()} />
      <Text style={styles.question}>{intl.en.needsPrescription.question}</Text>
      <View style={styles.container}>
        <TextButton
          onPress={() => {
            dispatch(needsPrescription());
            navigation.navigate(screenNames.selectExpert);
          }}>
          {intl.en.needsPrescription.yes}
        </TextButton>
        <TextButton
          onPress={() => navigation.navigate(screenNames.selectExpert)}
          styles={modifiers.button}>
          {intl.en.needsPrescription.no}
        </TextButton>
        <TextButton
          outlined
          onPress={() => {
            navigation.navigate(screenNames.selectExpert);
          }}>
          {intl.en.needsPrescription.notSure}
        </TextButton>
      </View>
    </Container>
  );
};

export default withNavigation(NeedsPresciption);
