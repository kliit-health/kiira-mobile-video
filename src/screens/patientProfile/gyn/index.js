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

const GynHistory = ({navigation}) => {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

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
    useContraception: {
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
    numberOfPartners: {
      male: 0,
      female: 0,
      other: 0,
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

  console.log(answers);

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
            <View>
              <CustomTextInput
                onPress={handleOnLabelPress}
                placeholder={'Men'}
                // value={""}
                chevron
              />
              <ModalPicker
                onSave={handleOnSave}
                onBackdropPress={handleOnBackdropPress}
                visible={visible}
                title={'Men'}
                data={numberOfPartners.map((item) => item)}
              />
              <CustomTextInput
                onPress={handleOnLabelPress}
                placeholder={'Women'}
                // value={""}
                chevron
              />
              <ModalPicker
                onSave={handleOnSave}
                onBackdropPress={handleOnBackdropPress}
                visible={visible}
                title={'Other'}
                data={numberOfPartners.map((item) => item)}
              />
              <CustomTextInput
                onPress={handleOnLabelPress}
                placeholder={'Other'}
                // value={""}
                chevron
              />
              <ModalPicker
                onSave={handleOnSave}
                onBackdropPress={handleOnBackdropPress}
                visible={visible}
                title={'Title'}
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

export default GynHistory;

// {switchCase({
//   [types.polar]: (
//     <View>
//     <View style={styles.buttonContainer}>
//       <PolarButton
//         variant="yes"
//         selected={yes}
//         onPress={() => toggleSelection('yes')}
//       />
//       <PolarButton
//         variant="no"
//         selected={no}
//         onPress={() => toggleSelection('no')}
//       />
//     </View>
//     {questions[progress].textPrompt ? (
//       <TextInput
//         style={styles.input}
//         multiline
//         placeholder={questions[progress].textPrompt}
//         placeholderTextColor="black"
//       />
//     ) : (
//       <View style={styles.blank} />
//     )}
//   </View>
//   ),
//   [types.objective]: (
//     questions[progress].options ? (
//       questions[progress].options.map((option) => {
//         return (
//           <CheckBox
//             key={option.title}
//             onPress={() => setAnswer(option)}
//             title={option.title}
//             checkedIcon="check"
//             uncheckedIcon="square-o"
//             checked={answers[option.section][option.key]}
//           />
//         )}))
//   ),
//   [types.picker]: (
//     <View></View>
//   ),
// })(undefined)(type)}

// {questions[progress].options ? (
//   questions[progress].options.map((option) => {
//     return (
//       <CheckBox
//         key={option.title}
//         onPress={() => setAnswer(option)}
//         title={option.title}
//         checkedIcon="check"
//         uncheckedIcon="square-o"
//         checked={answers[option.section][option.key]}
//       />
//     );
//   })
// ) : (
//   <View>
//     <View style={styles.buttonContainer}>
//       <PolarButton
//         variant="yes"
//         selected={yes}
//         onPress={() => toggleSelection('yes')}
//       />
//       <PolarButton
//         variant="no"
//         selected={no}
//         onPress={() => toggleSelection('no')}
//       />
//     </View>
//     {questions[progress].textPrompt ? (
//       <TextInput
//         style={styles.input}
//         multiline
//         placeholder={questions[progress].textPrompt}
//         placeholderTextColor="black"
//       />
//     ) : (
//       <View style={styles.blank} />
//     )}
//   </View>
// )}
