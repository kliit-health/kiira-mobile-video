import React, { useState } from 'react';
import { View, ScrollView, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '~/components/customButton';
import ExpertHeader from '~/components/expertHeader';
import PolarButton from '~/components/polarButton';
import ModalPicker from '~/components/modalPicker';
import CustomTextInput from '~/components/textInput';
import { CheckBox } from 'react-native-elements';
import { questions } from './questions';
import { switchCase } from '~/utils/functions';
import { updateMedicalHistoryExpert } from '../actions';

import styles from './style';

const GynHistory = ({ navigation }) => {
  const {
    lastPeriod,
    periodLength,
    abnormalPap,
    cycleLength,
    menarche,
    papDate,
    sti,
    hiv,
    des,
    sexuallyActive,
    underAge,
    multiplePartners,
    useContraception,
    useBirthControl,
    contraceptions,
    active,
    activeCurrent,
    sexualPartners,
    currentlyActive,
    numberOfPartners,
  } = useSelector(state => state.medicalHistory.gyn);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const finished = progress === questions.length - 1;
  const [answers, setAnswers] = useState({
    lastPeriod: {
      notes: lastPeriod.notes,
    },
    periodLength: {
      lessThan: periodLength.lessThan,
      moreThan: periodLength.moreThan,
    },
    abnormalPap: {
      history: abnormalPap.history,
      notes: abnormalPap.notes,
    },
    cycleLength: {
      lessThan: cycleLength.lessThan,
      about: cycleLength.about,
      moreThan: cycleLength.moreThan,
    },
    menarche: {
      notes: menarche.notes,
    },
    papDate: {
      notes: papDate.notes,
    },
    sti: {
      chlamydia: sti.chlamydia,
      gonorrhea: sti.gonorrhea,
      genitalWarts: sti.genitalWarts,
      herpes: sti.herpes,
      trichomonas: sti.trichomonas,
      syphilis: sti.syphilis,
      none: sti.none,
    },
    hiv: {
      history: hiv.history,
      notes: hiv.notes,
    },
    des: {
      history: des.history,
      notes: des.notes,
    },
    sexuallyActive: {
      history: sexuallyActive.history,
      notes: sexuallyActive.notes,
    },
    underAge: {
      history: underAge.history,
      notes: underAge.notes,
    },
    multiplePartners: {
      history: multiplePartners.history,
      notes: multiplePartners.notes,
    },
    useContraception: {
      history: useContraception.history,
      notes: useContraception.notes,
    },
    useBirthControl: {
      history: useBirthControl.history,
      notes: useBirthControl.notes,
    },
    contraceptions: {
      condoms: contraceptions.condoms,
      thePill: contraceptions.thePill,
      pullOut: contraceptions.pullOut,
      tubesTied: contraceptions.tubesTied,
      diaphram: contraceptions.diaphram,
      patch: contraceptions.patch,
      flim: contraceptions.flim,
      other: contraceptions.other,
    },
    active: {
      history: active.history,
      notes: active.notes,
    },
    activeCurrent: {
      history: activeCurrent.history,
      notes: activeCurrent.notes,
    },
    sexualPartners: {
      men: sexualPartners.men,
      women: sexualPartners.women,
      other: sexualPartners.other,
    },
    currentlyActive: {
      history: currentlyActive.history,
      notes: currentlyActive.notes,
    },
    numberOfPartners: {
      male: {
        number: numberOfPartners.male.number,
        visible: false,
      },
      female: {
        number: numberOfPartners.female.number,
        visible: false,
      },
      other: {
        number: numberOfPartners.other.number,
        visible: false,
      },
    },
  });

  const partners = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  const payload = {
    gyn: {
      ...answers,
      complete: true,
    },
  };

  const toggleSelection = key => {
    let answerToSet = { ...answers };
    answerToSet[key].history = !answerToSet[key].history;
    setAnswers(answerToSet);
  };

  const setAnswer = option => {
    let answerToSet = { ...answers };

    answerToSet[option.section][option.key] =
      !answerToSet[option.section][option.key];

    setAnswers(answerToSet);
  };

  const toggleModal = option => {
    let answerToSet = { ...answers };
    answerToSet[option.section][option.key].visible =
      !answerToSet[option.section][option.key].visible;

    setAnswers(answerToSet);
  };

  const handleOnSave = (selection, option) => {
    let answerToSet = { ...answers };
    answerToSet[option.section][option.key].number = selection;
    setAnswers(answerToSet);
    toggleModal(option);
  };

  const setNotes = (key, text) => {
    let answerToSet = { ...answers };
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
                  onChangeText={text => setNotes(questions[progress].key, text)}
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
                onChangeText={text => setNotes(questions[progress].key, text)}
                style={styles.singleInput}
                value={answers[questions[progress].key].notes}
                placeholder={questions[progress].textPrompt}
                placeholderTextColor="black"
              />
            </View>
          ),
          [types.objective]:
            questions[progress].options &&
            questions[progress].options.map(option => {
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
            <View style={{ width: 300, alignSelf: 'center' }}>
              {questions[progress].picker &&
                questions[progress].options.map((option, index) => {
                  return (
                    <View key={questions[progress].options[index].title}>
                      <Text>{option.title}</Text>
                      <CustomTextInput
                        editable={false}
                        onPress={() => toggleModal(option)}
                        placeholder={option.title}
                        value={answers.numberOfPartners[
                          option.key
                        ].number.toString()}
                        chevron
                      />
                      <ModalPicker
                        onSave={selection => handleOnSave(selection, option)}
                        onBackdropPress={() => toggleModal(option)}
                        visible={answers.numberOfPartners[option.key].visible}
                        title={option.title}
                        data={partners.map(item => item)}
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
