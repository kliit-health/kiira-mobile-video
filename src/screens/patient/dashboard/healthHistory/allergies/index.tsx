import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { switchCase, insertAtIndex } from '~/utils/functions';
import { Container, Header, FooterNavigation } from '~/components';
import { initialQuestions, extraQuestions, types } from './model';
import { PolarQuestion, ObjectiveQuestion } from './components';
import { updateHealthHistory } from '~/redux/actions';
import styles from './styles';

const Allergies = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.data);
    const lang = useSelector((state: any) => state.language);
    const answers = useSelector(
        (state: any) => state.healthHistory.data.allergies.answers,
    );
    const [questions, setQuestions] = useState(initialQuestions);
    const [finish, setFinish] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [allergies, setAllergies] = useState({
        medicationAllergic: null,
        medicationAllergies: [],
        foodAllergic: null,
        foodAllergies: [],
    });

    const [{ dataKey, question, options, type, index }, setQuestion] = useState(
        {
            ...questions[0],
            index: 0,
        },
    );

    useEffect(() => {
        if (answers) {
            setAllergies(answers);
        }
    }, [answers]);

    /**
     * @desc adds and removes new questions to the questions array.
     */

    useEffect(() => {
        if (allergies[dataKey] === true) {
            const newQuestion = extraQuestions.find(
                question => question.link === dataKey,
            );
            setQuestions(insertAtIndex(questions, index + 1, newQuestion));
        } else {
            const newQuestions = questions.filter(
                question => question.link !== dataKey,
            );
            setQuestions(newQuestions);
        }
    }, [allergies, question]);

    /**
     * @desc handles the state (enabled or disabled) of the finish/next button
     */

    useEffect(() => {
        const data = allergies[dataKey];
        setDisabled(data instanceof Array ? data.length === 0 : data === null);
    });

    useEffect(() => {
        setFinish(index === questions.length - 1);
    });

    const handleChange = (dataKey, value) => {
        setAllergies({ ...allergies, [dataKey]: value });
    };

    const handleObjectiveQuestion = title => {
        const data = allergies[dataKey];
        setAllergies({
            ...allergies,
            [dataKey]: data.includes(title)
                ? data.filter(item => item !== title)
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
                allergies: {
                    answers: allergies,
                    completed: true,
                },
            }),
        );
    };

    return (
        <Container>
            <Header title={lang.allergies.title} onBack={handleBackPress} />
            <Text style={styles.question}>{question}</Text>
            {switchCase({
                [types.polar]: (
                    <PolarQuestion
                        value={allergies[dataKey]}
                        onPress={value => handleChange(dataKey, value)}
                    />
                ),
                [types.objective]: (
                    <ObjectiveQuestion
                        options={options}
                        value={allergies[dataKey]}
                        onPress={handleObjectiveQuestion}
                    />
                ),
            })(undefined)(type)}
            <FooterNavigation
                leftButtonTitle={lang.allergies.previous}
                hideLeftButton={index === 0}
                onLeftButtonPress={handlePreviousPress}
                rightButtonTitle={
                    finish ? lang.allergies.finish : lang.allergies.next
                }
                disableRightButton={disabled}
                onRightButotonPress={finish ? handleSave : handleNextPress}
            />
        </Container>
    );
};

export default Allergies;
