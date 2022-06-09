import React, { useState } from 'react';
import { Container, Header, TextButton, TextInput } from '~/components';
import { useDidMount } from '~/utils/hooks';
import { View } from 'react-native';
import { switchCase } from '~/utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import { model, types } from './model';
import { DatePicker, Picker } from './components';
import { isNumber } from 'lodash';
import { updateHealthHistory } from '~/redux/actions';
import styles from './styles';

const AddChild = ({ navigation }) => {
  const index = navigation.getParam('index');
  const destination = navigation.getParam('destination');

  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    dateOfBirth: '',
    sex: '',
  });

  const lang = useSelector(state => state.language);
  const user = useSelector(state => state.user.data);
  const answers = useSelector(
    state => state.healthHistory.data.children.answers,
  );

  useDidMount(() => {
    if (isNumber(index)) {
      setData(answers.children[index]);
    }
  });

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
        children: {
          completed: true,
          answers: {
            children: isNumber(index)
              ? answers.children.map((child, position) =>
                  position === index ? data : child,
                )
              : [...answers.children, { ...data }],
          },
        },
      }),
    );
    destination ? navigation.popToTop() : navigation.goBack();
  };

  const handleDelete = () => {
    dispatch(
      updateHealthHistory({
        uid: user.uid,
        navigation,
        children: {
          completed: true,
          answers: {
            children: answers.children.filter(
              (_, position) => position !== index,
            ),
          },
        },
      }),
    );
  };

  return (
    <Container>
      <Header title={lang.addChild.title} onBack={handleBackPress} />
      {model.map(({ type, dataKey, title, placeholder, options }) =>
        switchCase({
          [types.textInput]: (
            <TextInput
              key={title}
              value={data[dataKey]}
              placeholder={title}
              onChange={value => handleChange(dataKey, value)}
            />
          ),
          [types.picker]: (
            <Picker
              key={title}
              value={data[dataKey]}
              onSave={value => handleChange(dataKey, value)}
              data={options}
              title={title}
              placeholder={placeholder}
            />
          ),
          [types.datePicker]: (
            <DatePicker
              key={title}
              value={data[dataKey]}
              title={title}
              placeholder={placeholder}
              onSave={value => handleChange(dataKey, value)}
            />
          ),
        })(undefined)(type),
      )}
      <View style={styles.navigation}>
        {isNumber(index) && (
          <TextButton outlined onPress={handleDelete}>
            {lang.addChild.delete}
          </TextButton>
        )}
        <TextButton
          disabled={Object.entries(data).some(([_, value]) => value == false)}
          styles={{ root: styles.button }}
          onPress={handleSave}>
          {lang.addChild.save}
        </TextButton>
      </View>
    </Container>
  );
};

export default AddChild;
