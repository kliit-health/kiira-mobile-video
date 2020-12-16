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
import {updatePersonalInformation, savePersonalInformation} from './actions';
import moment from 'moment';
import intl from '../../utils/localization';

const PersonalInformation = ({navigation}) => {
  const dispatch = useDispatch();
  const [picker, setPicker] = useState(false);
  const data = useSelector((state) => state.personalInformation.data);
  const uid = navigation.state.params.uid;

  const handleDatePress = () => {
    setPicker(true);
  };

  const handleDateDismiss = () => {
    setPicker(false);
  };

  const handleDateSave = (date) => {
    handleUpdate('dateOfBirth', date);
    setPicker(false);
  };

  const handleUpdate = (dataKey, value) => {
    dispatch(updatePersonalInformation({dataKey, value}));
  };

  const handleSave = () => {
    dispatch(savePersonalInformation({uid, data, navigation}));
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
            ? moment(data[dataKey]).format('MM/DD/YYYY')
            : data[dataKey];

          return (
            <TextInput
              outlined
              key={label}
              label={label}
              chevron={date}
              onPress={date ? handleDatePress : null}
              defaultValue={value}
              onChange={(value) => handleUpdate(dataKey, value)}
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
