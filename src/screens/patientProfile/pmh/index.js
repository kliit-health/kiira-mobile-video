import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import PolarButton from '../../../components/polarButton';
import {CheckBox} from 'react-native-elements';
import {questions} from './questions';

import styles from './style';

const PersonalMedicalHistory = ({navigation}) => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [progress, setProgress] = useState(0);

  const finished = progress === questions.length - 1;
  const [answers, setAnswers] = useState({
    cancer: {
      history: false,
      notes: '',
    },
    disease: {
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

  const toggleSelection = (selection) => {
    if (selection === 'yes') {
      setYes(!yes);
      setNo(false);
    }

    if (selection === 'no') {
      setYes(false);
      setNo(!no);
    }
  };

  const setAnswer = (option) => {
    let answerToSet = {...answers};

    answerToSet[option.section][option.key] = !answerToSet[option.section][
      option.key
    ];

    setAnswers(answerToSet);
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Past Medical History" />
      <Text style={styles.question}>{questions[progress].question}</Text>
      <ScrollView>
        {questions[progress].options ? (
          questions[progress].options.map((option) => {
            return (
              <CheckBox
                key={option.title}
                onPress={() => setAnswer(option)}
                title={option.title}
                checkedIcon="check"
                uncheckedIcon="square-o"
                checked={answers[option.section][option.key]}
              />
            );
          })
        ) : (
          <View>
            <View style={styles.buttonContainer}>
              <PolarButton
                variant="yes"
                selected={yes}
                onPress={() => toggleSelection('yes')}
              />
              <PolarButton
                variant="no"
                selected={no}
                onPress={() => toggleSelection('no')}
              />
            </View>
            <TextInput
              style={styles.input}
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
              setProgress(progress + 1);
            }}
            text={finished ? 'Submit' : 'Next'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalMedicalHistory;
