import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchCase } from '~/utils/functions';
import { units } from '~/utils/constants';
import { model, types } from './model';
import { Container, Header, TextInput, TextButton } from '~/components';
import { Picker, DatePicker } from './components';
import { updateHealthHistory } from '~/redux/actions';
import styles from './styles';

const BasicInfo = ({ navigation }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    gender: '',
    dateOfBirth: '',
    height: '',
    weight: '',
  });

  const lang = useSelector(state => state.language);
  const user = useSelector(state => state.user.data);
  const answers = useSelector(
    state => state.healthHistory.data.basicInfo.answers,
  );

  useEffect(() => {
    if (answers) {
      setData(answers);
    }
  }, [answers]);

  const handleChange = (dataKey, value) => {
    setData({ ...data, [dataKey]: value });
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        navigation,
        basicInfo: {
          answers: data,
          completed: true,
        },
      }),
    );
  };

  return (
    <Container>
      <Header title={lang.basicInfo.title} onBack={handleBackPress} />
      {model.map(({ type, dataKey, title, placeholder }) =>
        switchCase({
          [types.textInput]: (
            <TextInput
              key={dataKey}
              styles={{ fontSize: 15 }}
              defaultValue={data[dataKey]}
              placeholder={title}
              onChange={value => handleChange(dataKey, value)}
            />
          ),
          [types.picker]: (
            <Picker
              key={dataKey}
              value={data[dataKey]}
              onSave={value => handleChange(dataKey, value)}
              data={units[dataKey]}
              title={title}
              placeholder={placeholder}
            />
          ),
          [types.datePicker]: (
            <DatePicker
              key={dataKey}
              value={data[dataKey]}
              title={title}
              placeholder={placeholder}
              onSave={value => handleChange(dataKey, value)}
            />
          ),
        })(undefined)(type),
      )}
      <TextButton
        styles={{ root: styles.button }}
        onPress={handleSave}
        disabled={Object.values(data).every(answer => !answer)}>
        {lang.basicInfo.save}
      </TextButton>
    </Container>
  );
};

export default BasicInfo;
