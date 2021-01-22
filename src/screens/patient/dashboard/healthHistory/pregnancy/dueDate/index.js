import React from 'react';
import {Container, Header, TextButton} from '../../../../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {model} from './model';
import {DatePicker} from './components';
import {updateHealthHistory, updateHealthHistoryAsync} from '../../actions';
import intl from '../../../../../../utils/localization';
import styles from './styles';

const {placeholder, dataKey, title} = model;

const DueDate = ({navigation}) => {
  const dispatch = useDispatch();
  const {answers} = useSelector(
    (state) => state.healthHistory.pregnancyCurrent,
  );

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePicker = (date) => {
    dispatch(
      updateHealthHistory({
        pregnancyCurrent: {
          answers: {...answers, [dataKey]: date},
        },
      }),
    );
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistoryAsync({
        pregnancyCurrent: {answers, completed: true},
        navigation,
      }),
    );
  };

  return (
    <Container>
      <Header title={intl.en.dueDate.title} onBack={handleBackPress} />
      <DatePicker
        placeholder={placeholder}
        title={title}
        onSave={handlePicker}
        value={answers[dataKey]}
      />
      <TextButton
        disabled={!answers[dataKey]}
        styles={{root: styles.button}}
        onPress={handleSave}>
        {intl.en.insurance.save}
      </TextButton>
    </Container>
  );
};

export default DueDate;
