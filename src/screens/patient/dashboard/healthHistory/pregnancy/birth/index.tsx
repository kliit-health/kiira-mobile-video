import React from 'react';
import {Container, Header, TextButton} from '~/components';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {screenNames} from '~/utils/constants';
import {updateHealthHistory} from '~/redux/actions';
import styles from './styles';

const initialState = {
  answers: {
    dueDate: null,
  },
  completed: false,
};

const Birth = ({navigation}) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const user = useSelector((state) => state.user.data);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        pregnancyCurrent: initialState,
      }),
    );

    navigation.navigate(screenNames.AddChild, {
      destination: screenNames.Children,
    });
  };

  return (
    <Container>
      <Header title={lang.birth.title} onBack={handleBackPress} />
      <Text style={styles.title}>{lang.birth.congratulations}</Text>
      <Text style={styles.description}>{lang.birth.help}</Text>
      <TextButton styles={{root: styles.button}} onPress={handleSave}>
        {lang.loss.confirm}
      </TextButton>
    </Container>
  );
};

export default Birth;
