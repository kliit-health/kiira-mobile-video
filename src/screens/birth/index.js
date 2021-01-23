import React from 'react';
import {Container, Header, TextButton} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';
import intl from '../../utils/localization';
import {screenNames} from '../../utils/constants';
import {updateHealthHistory} from '../../redux/actions';
import styles from './styles';

const initialState = {
  answers: {
    dueDate: null,
  },
  completed: false,
};

const Birth = ({navigation}) => {
  const dispatch = useDispatch();
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
      <Header title={intl.en.birth.title} onBack={handleBackPress} />
      <Text style={styles.title}>{intl.en.birth.congratulations}</Text>
      <Text style={styles.description}>{intl.en.birth.help}</Text>
      <TextButton styles={{root: styles.button}} onPress={handleSave}>
        {intl.en.loss.confirm}
      </TextButton>
    </Container>
  );
};

export default Birth;
