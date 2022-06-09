import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, TextButton, RadioGroup } from '~/components';
import { model } from './model';
import { updateHealthHistory } from '~/redux/actions';
import styles, { modifiers } from './styles';

const PregnancyHistory = ({ navigation }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    pregnancies: null,
    fulltermBirths: null,
    pretermBirths: null,
    abortions: null,
    miscarriages: null,
  });

  const lang = useSelector(state => state.language);
  const user = useSelector(state => state.user.data);
  const answers = useSelector(
    state => state.healthHistory.data.pregnancyHistory.answers,
  );

  useEffect(() => {
    if (answers) {
      setData(answers);
    }
  }, [answers]);

  const handleChange = (dataKey, value) => {
    setData({ ...data, [dataKey]: value });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        navigation,
        pregnancyHistory: {
          answers: data,
          completed: true,
        },
      }),
    );
  };

  return (
    <Container unformatted>
      <Header title={lang.pregnancyHistory.title} onBack={handleBackPress} />
      <ScrollView contentContainerStyle={styles.container}>
        {model.map(({ question, dataKey, options }) => (
          <View style={styles.questionContainer} key={dataKey}>
            <Text style={styles.question}>{question}</Text>
            {data && (
              <RadioGroup
                data={options}
                initialValue={data[dataKey]}
                onChange={value => handleChange(dataKey, value)}
                horizontal
              />
            )}
          </View>
        ))}
        <TextButton
          disabled={Object.values(data).some(answer => !answer)}
          styles={modifiers.button}
          onPress={handleSave}>
          {lang.insurance.save}
        </TextButton>
      </ScrollView>
    </Container>
  );
};

export default PregnancyHistory;
