import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import PolarButton from '../../../components/polarButton';
import ModalPicker from '../../../components/modalPicker';
import CustomTextInput from '../../../components/textInput';
import {CheckBox} from 'react-native-elements';
import {questions} from './questions';
import {switchCase} from '../../../utils/functions';

import styles from './style';

const PregnancyHistory = ({navigation}) => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const finished = progress === questions.length - 1;
  const [answers, setAnswers] = useState({
    pregnancies: {
      number: '',
    },
    miscarriages: {
      number: '',
    },
    fullTermBirths: {
      number: '',
    },
    abortions: {
      number: '',
    },
    cesarean: {
      number: '',
    },
    livingChildren: {
      number: '',
    },
    pregnancyIssues: {
      history: false,
      notes: '',
    },
  });

  const numberOfPartners = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

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

  const handleOnLabelPress = () => {
    setVisible(true);
  };

  const handleOnSave = (item) => {
    onSave(item);
    setVisible(false);
  };

  const handleOnBackdropPress = () => {
    setVisible(false);
  };

  const types = {
    polar: 'polar',
    objective: 'objective',
    picker: 'picker',
    input: 'input',
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="Pregnancy History" />
      <Text style={styles.question}>{questions[progress].question}</Text>
      <ScrollView>
        {switchCase({
          [types.polar]: (
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
              {questions[progress].textPrompt ? (
                <TextInput
                  style={styles.input}
                  multiline
                  placeholder={questions[progress].textPrompt}
                  placeholderTextColor="black"
                />
              ) : (
                <View style={styles.blank} />
              )}
            </View>
          ),
          [types.input]: (
            <View>
              <TextInput
                style={styles.singleInput}
                placeholder={questions[progress].textPrompt}
                placeholderTextColor="black"
              />
            </View>
          ),
          [types.objective]:
            questions[progress].options &&
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
            }),
          [types.picker]: (
            <View style={{width: 300, alignSelf: 'center'}}>
              <CustomTextInput
                onPress={handleOnLabelPress}
                placeholder={questions[progress].textPrompt}
                // value={""}
                chevron
              />
              <ModalPicker
                onSave={handleOnSave}
                onBackdropPress={handleOnBackdropPress}
                visible={visible}
                title={questions[progress].textPrompt}
                data={numberOfPartners.map((item) => item)}
              />
            </View>
          ),
        })(undefined)(questions[progress].type)}
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

export default PregnancyHistory;
