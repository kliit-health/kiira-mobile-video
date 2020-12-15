import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Header,
  Container,
  TextInput,
  TextButton,
  ModalDatePicker,
} from '../../components';
import model from './model';
import styles, {modifiers} from './styles';
import {updatePersonalInformation} from './actions';
import moment from 'moment';
import intl from '../../utils/localization';

const PersonalInformation = ({navigation}) => {
  const dispatch = useDispatch();
  const [picker, setPicker] = useState(false);
  const data = useSelector((state) => state.personalInformation.data);

  const handleChange = (dataKey, value) => {
    dispatch(updatePersonalInformation({dataKey, value}));
  };

  const handleDatePress = () => {
    setPicker(true);
  };

  const handleDateDismiss = () => {
    setPicker(false);
  };

  const handleDateSave = (date) => {
    setPicker(false);
  };

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <Container themed>
      <Header
        title={intl.en.personalInformation.title}
        onBack={() => navigation.goBack()}
        themed
      />
      <View style={styles.body}>
        {model.map(({label, date, dataKey}) => {
          const value = date
            ? moment.unix(data[dataKey]).format('MM/DD/YYYY')
            : data[dataKey];

          return (
            <TextInput
              outlined
              key={label}
              label={label}
              chevron={date}
              onPress={date ? handleDatePress : null}
              defaultValue={value}
              onChange={(value) => handleChange(dataKey, value)}
            />
          );
        })}
        <TextButton styles={modifiers.saveButton} onPress={handleSave}>
          {intl.en.personalInformation.save}
        </TextButton>
      </View>
      <ModalDatePicker
        onBackdropPress={handleDateDismiss}
        visible={picker}
        onSave={handleDateSave}
      />
    </Container>
  );
};

export default PersonalInformation;
