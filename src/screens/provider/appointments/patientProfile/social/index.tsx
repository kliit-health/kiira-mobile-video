import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../../../components/customButton';
import ExpertHeader from '../../../../../components/expertHeader';
import PolarButton from '../../../../../components/polarButton';
import {CheckBox} from 'react-native-elements';
import {questions} from './questions';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const SocialHistory = ({navigation}) => {
  const {
    smoke,
    alcohol,
    drugs,
    caffine,
    safe,
    abuse,
    currentAbuse,
    status,
    education,
    exercise,
    diet,
  } = useSelector((state) => state.medicalHistory.social);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const finished = progress === questions.length - 1;
  const [answers, setAnswers] = useState({
    smoke: {
      history: smoke.history,
      notes: smoke.notes,
    },
    alcohol: {
      history: alcohol.history,
      notes: alcohol.notes,
    },
    drugs: {
      history: drugs.history,
      notes: drugs.notes,
    },
    caffine: {
      history: caffine.history,
      notes: caffine.notes,
    },
    safe: {
      history: safe.history,
      notes: safe.notes,
    },
    abuse: {
      history: abuse.history,
      notes: abuse.notes,
    },
    currentAbuse: {
      history: currentAbuse.history,
      notes: currentAbuse.notes,
    },
    status: {
      married: status.married,
      single: status.single,
      divorced: status.divorced,
      widowed: status.widowed,
      involved: status.involved,
      partner: status.partner,
    },
    education: {
      highSchool: education.highSchool,
      college: education.college,
      graduate: education.graduate,
      other: education.other,
    },
    exercise: {
      history: exercise.history,
      notes: exercise.notes,
    },
    diet: {
      history: diet.history,
      notes: diet.notes,
    },
  });

  const payload = {
    social: {
      ...answers,
      complete: true,
    },
  };

  const toggleSelection = (key) => {
    let answerToSet = {...answers};

    answerToSet[key].history = !answerToSet[key].history;
    setAnswers(answerToSet);
  };

  const setAnswer = (option) => {
    let answerToSet = {...answers};

    answerToSet[option.section][option.key] = !answerToSet[option.section][
      option.key
    ];
    setAnswers(answerToSet);
  };

  const setNotes = (key, text) => {
    let answerToSet = {...answers};

    answerToSet[key].notes = text;
    setAnswers(answerToSet);
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Social History" />
      <ScrollView>
        <Text style={styles.question}>{questions[progress].question}</Text>
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

export default SocialHistory;
