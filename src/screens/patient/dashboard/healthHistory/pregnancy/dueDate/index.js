import React, {useState, useEffect} from 'react';
import {Container, Header, TextButton} from '../../../../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {model} from './model';
import {DatePicker} from './components';
import {updateHealthHistory} from '../../../../../../redux/actions';
import intl from '../../../../../../utils/localization';
import styles from './styles';

const {placeholder, dataKey, title} = model;

const DueDate = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    dueDate: '',
  });
  const user = useSelector((state) => state.user.data);
  const answers = useSelector(
    (state) => state.healthHistory.data.pregnancyCurrent.answers,
  );

  useEffect(() => {
    if (answers) {
      setData(answers);
    }
  }, [answers]);

  const handleChange = (dataKey, value) => {
    setData({...data, [dataKey]: value});
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        navigation,
        pregnancyCurrent: {
          answers: data,
          completed: true,
        },
      }),
    );
  };

  return (
    <Container>
      <Header title={intl.en.dueDate.title} onBack={handleBackPress} />
      <DatePicker
        placeholder={placeholder}
        title={title}
        onSave={(date) => handleChange('dueDate', date)}
        value={data[dataKey]}
      />
      <TextButton
        disabled={!data[dataKey]}
        styles={{root: styles.button}}
        onPress={handleSave}>
        {intl.en.insurance.save}
      </TextButton>
    </Container>
  );
};

export default DueDate;
