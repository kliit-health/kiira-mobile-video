import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import PolarButton from '../../../components/polarButton';
import {CheckBox} from 'react-native-elements';
import {questions} from './questions';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const FamilyHistory = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const finished = progress === questions.length - 1;
  const [answers, setAnswers] = useState({
    cancer: {
      history: false,
      notes: '',
    },
    illnesses: {
      diabetes: false,
      highBloodPressure: false,
      giReflux: false,
      giDisease: false,
      fibroids: false,
      endometriosos: false,
      osteopenia: false,
      osteoporosis: false,
      heartDisease: false,
      highCholesterol: false,
      hepatitis: false,
      liverProblems: false,
      kidneyProblems: false,
      arthritis: false,
      jointPain: false,
      fracture: false,
      anxiety: false,
      depression: false,
      seizures: false,
      asthma: false,
      lungProblems: false,
      tuberculosis: false,
      thyroidDisease: false,
      clottingDisorder: false,
      none: false,
    },
  });

  const payload = {
    family: {
      ...answers,
      complete: true,
    },
  };

  const toggleSelection = (key) => {
    let answerToSet = {...answers};

    answerToSet[key].history = !answerToSet[key].history;

    setAnswers(answerToSet);
  };

  const setAnswer = (key) => {
    let answerToSet = {...answers};

    answerToSet.illnesses[key] = !answerToSet.illnesses[key];

    setAnswers(answerToSet);
  };

  const setNotes = (key, text) => {
    let answerToSet = {...answers};

    answerToSet[key].notes = text;

    setAnswers(answerToSet);
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Family History" />
      <Text style={styles.question}>{questions[progress].question}</Text>
      <ScrollView>
        {questions[progress].options ? (
          questions[progress].options.map((option) => {
            return (
              <CheckBox
                key={option.title}
                onPress={() => setAnswer(option.key)}
                title={option.title}
                checkedIcon="check"
                uncheckedIcon="square-o"
                checked={answers.illnesses[option.key]}
              />
            );
          })
        ) : (
          <View>
            <View style={styles.buttonContainer}>
              <PolarButton
                variant="yes"
                selected={answers[questions[progress].key].history}
                onPress={() => toggleSelection(questions[progress].key)}
              />
              <PolarButton
                variant="no"
                selected={!answers[questions[progress].key].history}
                onPress={() => toggleSelection(questions[progress].key)}
              />
            </View>
            <TextInput
              onChangeText={(text) => setNotes(questions[progress].key, text)}
              style={styles.input}
              value={answers[questions[progress].key].notes}
              multiline
              placeholder={questions[progress].textPrompt}
              placeholderTextColor="black"
            />
          </View>
        )}
        <View style={styles.progressContainer}>
          <CustomButton
            disabled={progress === 0}
            buttonStyle={styles.prevButtonContainerStyle}
            textStyle={styles.prevButtonTextStyle}
            onPress={() => {
              setProgress(progress - 1);
            }}
            text="Previous"
          />
          <CustomButton
            buttonStyle={styles.nextButtonContainerStyle}
            textStyle={styles.nextButtonTextStyle}
            onPress={() => {
              finished
                ? (dispatch(updateMedicalHistoryExpert(payload)),
                  navigation.goBack())
                : setProgress(progress + 1);
            }}
            text={finished ? 'Submit' : 'Next'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FamilyHistory;
