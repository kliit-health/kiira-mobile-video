import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {switchCase, insertAtIndex} from '../../utils/functions';
import {Container, Header, FooterNavigation} from '../../components';
import intl from '../../utils/localization';
import {initialQuestions, extraQuestions, types} from './model';
import {PolarQuestion, ObjectiveQuestion} from './components';
import {updateHealthHistory} from '../../redux/actions';

import styles from './styles';

const Allergies = ({navigation}) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.healthHistory.allergies.answers);

  const [questions, setQuestions] = useState(initialQuestions);
  const [finish, setFinish] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [{dataKey, question, options, type, index}, setQuestion] = useState({
    ...questions[0],
    index: 0,
  });

  /**
   * @desc adds and removes new questions to the questions array.
   */

  useEffect(() => {
    if (answers && answers[dataKey] === true) {
      const newQuestion = extraQuestions.find(
        (question) => question.link === dataKey,
      );
      setQuestions(insertAtIndex(questions, index + 1, newQuestion));
    } else {
      const newQuestions = questions.filter(
        (question) => question.link !== dataKey,
      );
      setQuestions(newQuestions);
    }
  }, [answers, question]);

  /**
   * @desc handles the state (enabled or disabled) of the finish/next button
   */

  useEffect(() => {
    const data = answers[dataKey];
    setDisabled(data instanceof Array ? data.length === 0 : data === null);
  });

  useEffect(() => {
    setFinish(index === questions.length - 1);
  });

  const dispatchUpdate = (update) => {
    dispatch(
      updateHealthHistory({
        allergies: {
          answers: {
            ...answers,
            [dataKey]: update,
          },
          completed: false,
        },
      }),
    );
  };

  const handlePolarQuestion = (response) => {
    dispatchUpdate(response);
  };

  const handleObjectiveQuestion = (title) => {
    const data = answers[dataKey];

    dispatchUpdate(
      data.includes(title)
        ? data.filter((item) => item !== title)
        : [...data, title],
    );
  };

  const handleNextPress = () => {
    setQuestion({
      ...questions[index + 1],
      index: index + 1,
    });
  };

  const handlePreviousPress = () => {
    setQuestion({
      ...questions[index - 1],
      index: index - 1,
    });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFinishPress = () => {
    dispatch(
      updateHealthHistory({
        allergies: {
          answers,
          completed: true,
        },
        navigation,
      }),
    );
  };

  return (
    <Container>
      <Header title={intl.en.allergies.title} onBack={handleBackPress} />
      <Text style={styles.question}>{question}</Text>
      {switchCase({
        [types.polar]: (
          <PolarQuestion
            value={answers[dataKey]}
            onPress={handlePolarQuestion}
          />
        ),
        [types.objective]: (
          <ObjectiveQuestion
            options={options}
            value={answers[dataKey]}
            onPress={handleObjectiveQuestion}
          />
        ),
      })(undefined)(type)}
      <FooterNavigation
        leftButtonTitle={intl.en.allergies.previous}
        hideLeftButton={index === 0}
        onLeftButtonPress={handlePreviousPress}
        rightButtonTitle={
          finish ? intl.en.allergies.finish : intl.en.allergies.next
        }
        disableRightButton={disabled}
        onRightButotonPress={finish ? handleFinishPress : handleNextPress}
      />
    </Container>
  );
};

export default Allergies;
