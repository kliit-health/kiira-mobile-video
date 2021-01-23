import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import intl from '../../utils/localization';
import {Header, Container, FooterNavigation} from '../../components';
import {switchCase} from '../../utils/functions';
import {initialQuestions, extraQuestions, types} from './model';
import {useSelector, useDispatch} from 'react-redux';
import {PolarQuestion, ObjectiveQuestion, PickerQuestion} from './components';
import {updateHealthHistory} from '../../redux/actions';
import styles from './styles';

const Lifestyle = ({navigation}) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.healthHistory.lifestyle.answers);
  const [questions, setQuestions] = useState(initialQuestions);
  const [finish, setFinish] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [
    {dataKey, question, options, type, index, extra},
    setQuestion,
  ] = useState({
    ...questions[0],
    index: 0,
  });

  /**
   * @desc adds and removes new questions to the questions array.
   */

  useEffect(() => {
    if (dataKey === 'partnersGender') {
      const newQuestions = answers[dataKey].map((item) =>
        extraQuestions.find((question) => question.link === item),
      );
      setQuestions(initialQuestions.concat(newQuestions));
    }
  }, [answers, question]);

  /**
   * @desc handles the state (enabled or disabled) of the finish/next button
   */

  useEffect(() => {
    const data = answers[dataKey];
    setDisabled(data instanceof Array ? data.length === 0 : data === null);
  });

  /**
   * @desc determines if the finish/next button will be set to next or to finish
   */

  useEffect(() => {
    setFinish(
      index === questions.length - 1 ||
        (dataKey === 'sexuallyActive' && answers[dataKey] === false),
    );
  });

  const dispatchUpdate = (update) => {
    dispatch(
      updateHealthHistory({
        lifestyle: {
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

  const handlePickerQuestion = (response) => {
    dispatchUpdate(response);
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
        lifestyle: {
          answers,
          completed: true,
        },
        navigation,
      }),
    );
  };

  return (
    <Container>
      <Header title={intl.en.lifestyle.title} onBack={handleBackPress} />
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
        [types.picker]: (
          <PickerQuestion
            value={answers[dataKey]}
            onSave={handlePickerQuestion}
            data={options}
            placeholder={extra}
            title={extra}
          />
        ),
      })(undefined)(type)}
      <FooterNavigation
        leftButtonTitle={intl.en.lifestyle.previous}
        hideLeftButton={index === 0}
        onLeftButtonPress={handlePreviousPress}
        rightButtonTitle={
          finish ? intl.en.lifestyle.finish : intl.en.lifestyle.next
        }
        disableRightButton={disabled}
        onRightButotonPress={finish ? handleFinishPress : handleNextPress}
      />
    </Container>
  );
};

export default Lifestyle;
