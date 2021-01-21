import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../components/customButton';
import ExpertHeader from '../../../components/expertHeader';
import PolarButton from '../../../components/polarButton';
import ModalPicker from '../../../components/modalPicker';
import CustomTextInput from '../../../components/textInput';
import {CheckBox} from 'react-native-elements';
import {questions} from './questions';
import {switchCase} from '../../../utils/functions';
import {updateMedicalHistoryExpert} from '../actions';

import styles from './style';

const PregnancyHistory = ({navigation}) => {
  const {
    pregnancies,
    miscarriages,
    fullTermBirths,
    abortions,
    cesarean,
    livingChildren,
    pregnancyIssues,
  } = useSelector((state) => state.medicalHistory.pregnancy);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const finished = progress === questions.length - 1;
  const [answers, setAnswers] = useState({
    pregnancies: {
      number: pregnancies.number,
    },
    miscarriages: {
      number: miscarriages.number,
    },
    fullTermBirths: {
      number: fullTermBirths.number,
    },
    abortions: {
      number: abortions.number,
    },
    cesarean: {
      number: cesarean.number,
    },
    livingChildren: {
      number: livingChildren.number,
    },
    pregnancyIssues: {
      history: pregnancyIssues.history,
      notes: pregnancyIssues.notes,
    },
  });

  const modalData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  const payload = {
    pregnancy: {
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

  const toggleModal = () => {
    setVisible(!visible);
  };

  const handleOnSave = (selection, key) => {
    let answerToSet = {...answers};

    answerToSet[key].number = selection;
    setAnswers(answerToSet);
    toggleModal();
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
                  selected={answers[questions[progress].key].history}
                  onPress={() => toggleSelection(questions[progress].key)}
                />
                <PolarButton
                  variant="no"
                  selected={!answers[questions[progress].key].history}
                  onPress={() => toggleSelection(questions[progress].key)}
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
                editable={false}
                onPress={toggleModal}
                placeholder={questions[progress].textPrompt}
                value={answers[questions[progress].key].number}
                chevron
              />
              <ModalPicker
                onSave={(selection) =>
                  handleOnSave(selection, questions[progress].key)
                }
                onBackdropPress={toggleModal}
                visible={visible}
                title={questions[progress].textPrompt}
                data={modalData.map((item) => item)}
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

export default PregnancyHistory;
