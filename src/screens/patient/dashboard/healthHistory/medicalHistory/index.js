import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {model} from './model';
import {
  Container,
  Header,
  TextInput,
  TextButton,
} from '../../../../../components';
import {updateHealthHistory} from '../../../../../redux/actions';
import styles from './styles';

const MedicalHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const user = useSelector((state) => state.user.data);
  const answers = useSelector(
    (state) => state.healthHistory.data.medicalHistory.answers,
  );

  const [medicalHistory, setMedicalHistory] = useState({
    ongoingHealthConditions: '',
    medicalHistory: '',
  });

  useEffect(() => {
    if (answers) {
      setMedicalHistory(answers);
    }
  }, [answers]);

  const handleChange = (dataKey, value) => {
    setMedicalHistory({...medicalHistory, [dataKey]: value});
  };

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        navigation,
        medicalHistory: {
          answers: medicalHistory,
          completed: true,
        },
      }),
    );
  };
  return (
    <Container>
      <Header title={lang.medicalHistory.title} onBack={handleOnBackPress} />
      {model.map(({dataKey, placeholder}) => (
        <TextInput
          key={dataKey}
          styles={styles.input}
          defaultValue={medicalHistory[dataKey]}
          placeholder={placeholder}
          onChange={(value) => handleChange(dataKey, value)}
          multiline
          blurOnSubmit
          onSubmitEditing={() => Keyboard.dismiss()}
        />
      ))}
      <TextButton styles={styles.button} onPress={handleSave}>
        {lang.medicalHistory.save}
      </TextButton>
    </Container>
  );
};

export default MedicalHistory;
