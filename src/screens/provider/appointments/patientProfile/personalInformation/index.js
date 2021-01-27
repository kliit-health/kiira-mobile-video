import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Header,
  Container,
  TextInput,
  TextButton,
  ModalDatePicker,
} from '../../../../../components';
import model from './model';
import styles, {modifiers} from './styles';
import {updatePatientDetails} from '../actions';
import moment from 'moment';

const PersonalInformation = ({navigation}) => {
  const dispatch = useDispatch();
  const [updates, setUpdates] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    primaryCarePhysician: '',
  });

  const [picker, setPicker] = useState(false);
  const lang = useSelector((state) => state.language);
  const uid = useSelector((state) => state.user.data.uid);
  const data = useSelector(
    (state) => state.medicalHistory.data.personalInformation,
  );
  useEffect(() => {
    setUpdates(data);
  }, [data]);

  const handleDatePress = () => {
    setPicker(true);
  };

  const handleDateDismiss = () => {
    setPicker(false);
  };

  const handleDateSave = (date) => {
    setUpdates({...updates, dateOfBirth: date});
    setPicker(false);
  };

  const handleUpdate = (dataKey, value) => {
    setUpdates({...updates, [dataKey]: value});
  };

  const handleSave = () => {
    dispatch(
      updatePatientDetails({
        dataKey: 'personalInformation',
        updates,
        uid,
        navigation,
      }),
    );
  };

  return (
    <Container themed>
      <Header
        title={lang.personalInformation.title}
        onBack={() => navigation.goBack()}
        themed
      />
      <View style={styles.body}>
        {model.map(({label, date, dataKey}) => {
          const value = date
            ? moment(updates[dataKey]).format('MM/DD/YYYY')
            : updates[dataKey];

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
        <TextButton
          styles={modifiers.saveButton}
          disabled={!updates}
          onPress={handleSave}>
          {lang.personalInformation.save}
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
