import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {Header, Container, FooterNavigation} from 'components';
import {switchCase} from 'utils/functions';
import {initialQuestions, extraQuestions, types} from './model';
import {useSelector, useDispatch} from 'react-redux';
import {PolarQuestion, ObjectiveQuestion, PickerQuestion} from './components';
import {updateHealthHistory} from 'redux/actions';
import styles from './styles';

const Lifestyle = ({navigation}) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const user = useSelector((state) => state.user.data);
  const answers = useSelector(
    (state) => state.healthHistory.data.lifestyle.answers,
  );
  const [questions, setQuestions] = useState(initialQuestions);
  const [finish, setFinish] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [lifestyle, setLifestyle] = useState({
    sexuallyActive: '',
    partnersGender: [],
    malePartners: '',
    femalePartners: '',
    otherPartners: '',
  });

  const [
    {dataKey, question, options, type, index, extra},
    setQuestion,
  ] = useState({
    ...questions[0],
    index: 0,
  });

  useEffect(() => {
    if (answers) {
      setLifestyle(answers);
    }
  }, [answers]);

  /**
   * @desc adds and removes new questions to the questions array.
   */

  useEffect(() => {
    if (dataKey === 'partnersGender') {
      const newQuestions = lifestyle[dataKey].map((item) =>
        extraQuestions.find((question) => question.link === item),
      );
      setQuestions(initialQuestions.concat(newQuestions));
    }
  }, [lifestyle, question]);

  /**
   * @desc handles the state (enabled or disabled) of the finish/next button
   */

  useEffect(() => {
    const data = lifestyle[dataKey];
    setDisabled(data instanceof Array ? data.length === 0 : data === null);
  });

  /**
   * @desc determines if the finish/next button will be set to next or to finish
   */

  useEffect(() => {
    setFinish(
      index === questions.length - 1 ||
        (dataKey === 'sexuallyActive' && lifestyle[dataKey] === false),
    );
  });

  const handleChange = (dataKey, value) => {
    setLifestyle({...lifestyle, [dataKey]: value});
  };

  const handleObjectiveQuestion = (title) => {
    const data = lifestyle[dataKey];
    setLifestyle({
      ...lifestyle,
      [dataKey]: data.includes(title)
        ? data.filter((item) => item !== title)
        : [...data, title],
    });
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

  const handleSave = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        navigation,
        lifestyle: {
          answers: lifestyle,
          completed: true,
        },
      }),
    );
  };

  return (
    <Container>
      <Header title={lang.lifestyle.title} onBack={handleBackPress} />
      <Text style={styles.question}>{question}</Text>
      {switchCase({
        [types.polar]: (
          <PolarQuestion
            value={lifestyle[dataKey]}
            onPress={(value) => handleChange(dataKey, value)}
          />
        ),
        [types.objective]: (
          <ObjectiveQuestion
            options={options}
            value={lifestyle[dataKey]}
            onPress={handleObjectiveQuestion}
          />
        ),
        [types.picker]: (
          <PickerQuestion
            value={lifestyle[dataKey]}
            onSave={(value) => handleChange(dataKey, value)}
            data={options}
            placeholder={extra}
            title={extra}
          />
        ),
      })(undefined)(type)}
      <FooterNavigation
        leftButtonTitle={lang.lifestyle.previous}
        hideLeftButton={index === 0}
        onLeftButtonPress={handlePreviousPress}
        rightButtonTitle={finish ? lang.lifestyle.finish : lang.lifestyle.next}
        disableRightButton={disabled}
        onRightButotonPress={finish ? handleSave : handleNextPress}
      />
    </Container>
  );
};

export default Lifestyle;
