import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {model} from './model';
import {
  Container,
  Header,
  TextInput,
  TextButton,
} from '~/components';
import {updateHealthHistory} from '~/redux/actions';
import styles from './styles';

const Medications = ({navigation}) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const user = useSelector((state) => state.user.data);
  const answers = useSelector(
    (state) => state.healthHistory.data.medications.answers,
  );

  const [medications, setMedications] = useState({
    currentMedications: '',
    previousMedications: '',
  });

  useEffect(() => {
    if (answers) {
      setMedications(answers);
    }
  }, [answers]);

  const handleChange = (dataKey, value) => {
    setMedications({...medications, [dataKey]: value});
  };

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        navigation,
        medications: {
          answers: medications,
          completed: true,
        },
      }),
    );
  };

  return (
    <Container>
      <Header title={lang.medications.title} onBack={handleOnBackPress} />
      {model.map(({dataKey, placeholder}) => (
        <TextInput
          key={dataKey}
          styles={styles.input}
          defaultValue={medications[dataKey]}
          placeholder={placeholder}
          onChange={(value) => handleChange(dataKey, value)}
          multiline
          blurOnSubmit
          onSubmitEditing={() => Keyboard.dismiss()}
        />
      ))}
      <TextButton styles={styles.button} onPress={handleSave}>
        {lang.medications.save}
      </TextButton>
    </Container>
  );
};

export default Medications;
