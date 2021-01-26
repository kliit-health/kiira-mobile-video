import React from 'react';
import {Container, Header, TextButton} from '../../../../../../components';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import intl from '../../../../../../utils/localization';
import {updateHealthHistory} from '../../../../../../redux/actions';
import styles from './styles';

const initialState = {
  answers: {
    dueDate: null,
  },
  completed: false,
};

const Loss = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

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
      <Header title={intl.en.loss.title} onBack={handleBackPress} />
      <Text style={styles.title}>{intl.en.loss.weAreSorry}</Text>
      <Text style={styles.description}>{intl.en.loss.youAreNotAlone}</Text>
      <Text style={styles.description}>{intl.en.loss.expertsNetwork}</Text>
      <TextButton styles={{root: styles.button}} onPress={handleSave}>
        {intl.en.loss.confirm}
      </TextButton>
    </Container>
  );
};

export default Loss;
