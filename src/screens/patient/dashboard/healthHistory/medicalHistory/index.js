import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import intl from '../../../../../utils/localization';
import {model} from './model';
import {
  Container,
  Header,
  TextInput,
  TextButton,
} from '../../../../../components';
import {
  updateHealthHistory,
  updateHealthHistoryAsync,
} from '../../healthHistory/actions';
import styles from './styles';

const MedicalHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const {answers} = useSelector((state) => state.healthHistory.medicalHistory);

  const dispatchUpdate = (dataKey, data) => {
    dispatch(
      updateHealthHistory({
        medicalHistory: {
          answers: {...answers, [dataKey]: data},
        },
      }),
    );
  };

  const handleTextInputChange = (dataKey, data) => {
    dispatchUpdate(dataKey, data);
  };

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistoryAsync({
        medicalHistory: {answers, completed: true},
        navigation,
      }),
    );
  };

  return (
    <Container>
      <Header title={intl.en.medicalHistory.title} onBack={handleOnBackPress} />
      {model.map(({dataKey, placeholder}) => (
        <View key={dataKey} style={styles.container}>
          <TextInput
            style={styles.input}
            defaultValue={answers[dataKey]}
            placeholder={placeholder}
            onChange={(value) => handleTextInputChange(dataKey, value)}
            multiline
            numberOfLines={5}
          />
        </View>
      ))}
      <TextButton
        styles={{root: styles.button}}
        onPress={handleSave}
        disabled={Object.values(answers).every((answer) => !answer)}>
        {intl.en.medicalHistory.save}
      </TextButton>
    </Container>
  );
};

export default MedicalHistory;
