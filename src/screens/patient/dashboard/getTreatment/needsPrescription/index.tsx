import React from 'react';
import {withNavigation} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {TextButton, Header, Container} from '~/components';
import {needsPrescription} from '../expertSchedule/action';
import {screenNames} from '~/utils/constants';
import styles, {modifiers} from './style';

const NeedsPresciption = (props) => {
  const {navigation} = props;
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="" onBack={() => navigation.goBack()} />
      <Text style={styles.question}>{lang.needsPrescription.question}</Text>
      <View style={styles.container}>
        <TextButton
          onPress={() => {
            dispatch(needsPrescription(true));
            navigation.navigate(screenNames.selectExpert);
          }}>
          {lang.needsPrescription.yes}
        </TextButton>
        <TextButton
          onPress={() => {
            dispatch(needsPrescription(false));
            navigation.navigate(screenNames.selectExpert);
          }}
          styles={modifiers.button}>
          {lang.needsPrescription.no}
        </TextButton>
        <TextButton
          outlined
          onPress={() => {
            dispatch(needsPrescription(false));
            navigation.navigate(screenNames.selectExpert);
          }}>
          {lang.needsPrescription.notSure}
        </TextButton>
      </View>
    </Container>
  );
};

export default withNavigation(NeedsPresciption);
