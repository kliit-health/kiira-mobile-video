import React from 'react';
import { Container, Header, TextButton } from '~/components';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateHealthHistory } from '~/redux/actions';
import styles from './styles';

const initialState = {
    answers: {
        dueDate: null,
    },
    completed: false,
};

const Loss = ({ navigation }) => {
    const dispatch = useDispatch();
    const lang = useSelector(state => state.language);
    const user = useSelector(state => state.user.data);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleSave = () => {
        dispatch(
            updateHealthHistory({
                navigation,
                uid: user.uid,
                pregnancyCurrent: initialState,
            }),
        );
    };

    return (
        <Container>
            <Header title={lang.loss.title} onBack={handleBackPress} />
            <Text style={styles.title}>{lang.loss.weAreSorry}</Text>
            <Text style={styles.description}>{lang.loss.youAreNotAlone}</Text>
            <Text style={styles.description}>{lang.loss.expertsNetwork}</Text>
            <TextButton styles={{ root: styles.button }} onPress={handleSave}>
                {lang.loss.confirm}
            </TextButton>
        </Container>
    );
};

export default Loss;
