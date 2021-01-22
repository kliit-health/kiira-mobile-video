import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  Header,
  TextButton,
  RadioGroup,
} from '../../../../../../components';
import {model} from './model';
import intl from '../../../../../../utils/localization';
import {updateHealthHistory, updateHealthHistoryAsync} from '../../actions';
import styles, {modifiers} from './styles';

const PregnancyHistory = ({navigation}) => {
  const dispatch = useDispatch();

  const {answers} = useSelector(
    (state) => state.healthHistory.pregnancyHistory,
  );

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleChange = (value, dataKey) => {
    dispatch(
      updateHealthHistory({
        pregnancyHistory: {
          answers: {...answers, [dataKey]: value},
        },
      }),
    );
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistoryAsync({
        pregnancyHistory: {answers, completed: true},
        navigation,
      }),
    );
  };

  return (
    <Container unformatted>
      <Header title={intl.en.pregnancyHistory.title} onBack={handleBackPress} />
      <ScrollView contentContainerStyle={styles.container}>
        {model.map(({question, dataKey, options}) => (
          <View style={styles.questionContainer} key={dataKey}>
            <Text style={styles.question}>{question}</Text>
            <RadioGroup
              data={options}
              initialValue={answers[dataKey]}
              onChange={(value) => handleChange(value, dataKey)}
              horizontal
            />
          </View>
        ))}
        <TextButton
          disabled={Object.values(answers).some((answer) => !answer)}
          styles={modifiers.button}
          onPress={handleSave}>
          {intl.en.insurance.save}
        </TextButton>
      </ScrollView>
    </Container>
  );
};

export default PregnancyHistory;
