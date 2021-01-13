import React, {useState} from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {useDispatch} from 'react-redux';
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

const GynHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const finished = progress === questions.length - 1;
  const [answers, setAnswers] = useState({
    lastPeriod: {
      notes: '',
    },
    periodLength: {
      lessThan: false,
      moreThan: false,
    },
    abnormalPap: {
      history: false,
      notes: '',
    },
    cycleLength: {
      lessThan: false,
      about: false,
      moreThan: false,
    },
    menarche: {
      notes: '',
    },
    papDate: {
      notes: '',
    },
    sti: {
      chlamydia: false,
      gonorrhea: false,
      genitalWarts: false,
      herpes: false,
      trichomonas: false,
      syphilis: false,
      none: false,
    },
    hiv: {
      history: false,
      notes: '',
    },
    des: {
      history: false,
      notes: '',
    },
    sexuallyActive: {
      history: false,
      notes: '',
    },
    underAge: {
      history: false,
      notes: '',
    },
    multiplePartners: {
      history: false,
      notes: '',
    },
    useContraception: {
      history: false,
      notes: '',
    },
    useBirthControl: {
      history: false,
      notes: '',
    },
    contraceptions: {
      condoms: false,
      thePill: false,
      pullOut: false,
      tubesTied: false,
      diaphram: false,
      patch: false,
      flim: false,
      other: false,
    },
    active: {
      history: false,
      notes: '',
    },
    activeCurrent: {
      history: false,
      notes: '',
    },
    sexualPartners: {
      men: false,
      women: false,
      other: false,
    },
    currentlyActive: {
      history: false,
      notes: '',
    },
    numberOfPartners: {
      male: {
        number: '',
        visible: false,
      },
      female: {
        number: '',
        visible: false,
      },
      other: {
        number: '',
        visible: false,
      },
    },
  });

  const numberOfPartners = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10+',
  ];

  const payload = {
    gyn: {
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

  const toggleModal = (option) => {
    let answerToSet = {...answers};
    answerToSet[option.section][option.key].visible = !answerToSet[
      option.section
    ][option.key].visible;

    setAnswers(answerToSet);
  };

  const handleOnSave = (selection, option) => {
    let answerToSet = {...answers};
    answerToSet[option.section][option.key].number = selection;
    setAnswers(answerToSet);
    toggleModal(option);
  };

  const setNotes = (key, text) => {
    let answerToSet = {...answers};
    answerToSet[key].notes = text;
    setAnswers(answerToSet);
  };

  const types = {
    polar: 'polar',
    objective: 'objective',
    picker: 'picker',
    input: 'input',
  };

  return (
    <View style={styles.container}>
      <ExpertHeader title="GYN History" />
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
                  onChangeText={(text) =>
                    setNotes(questions[progress].key, text)
                  }
                  style={styles.input}
                  value={answers[questions[progress].key].notes}
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
                onChangeText={(text) => setNotes(questions[progress].key, text)}
                style={styles.singleInput}
                value={answers[questions[progress].key].notes}
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
              {questions[progress].picker &&
                questions[progress].options.map((option, index) => {
                  return (
                    <View key={questions[progress].options[index].title}>
                      <CustomTextInput
                        onPress={() => toggleModal(option)}
                        placeholder={option.title}
                        value={answers.numberOfPartners[option.key].number}
                        chevron
                      />
                      <ModalPicker
                        onSave={(selection) => handleOnSave(selection, option)}
                        onBackdropPress={() => toggleModal(option)}
                        visible={answers.numberOfPartners[option.key].visible}
                        title={option.title}
                        data={numberOfPartners.map((item) => item)}
                      />
                    </View>
                  );
                })}
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

export default GynHistory;
