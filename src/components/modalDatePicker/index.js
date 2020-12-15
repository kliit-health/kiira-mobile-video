import React, {useState, useMemo} from 'react';
import {View, Text} from 'react-native';
import {shape, object, func, string, instanceOf, oneOf} from 'prop-types';
import TextButton from '../textButton';
import Modal from '../modal';
import DatePicker from '@react-native-community/datetimepicker';
import defaultStyles from './styles';
import moment from 'moment';

const ModalDatePicker = ({
  styles: customStyles,
  visible,
  title,
  onSave,
  onBackdropPress,
  mode,
  value,
  maximumDate,
}) => {
  const initialState = moment().valueOf();
  const [date, setDate] = useState(initialState);

  const handleChange = (_, newDate) => {
    const unixTime = moment(newDate).valueOf();
    setDate(unixTime);
  };

  const handleSave = () => {
    onSave(date);
    setDate(initialState);
  };

  const styles = {
    container: [defaultStyles.container, customStyles.container],
    title: [defaultStyles.title, customStyles.title],
    button: {root: defaultStyles.button},
    picker: [defaultStyles.picker, customStyles.picker],
  };

  return (
    <Modal onBackdropPress={onBackdropPress} visible={visible}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {useMemo(
          () => (
            <DatePicker
              onChange={handleChange}
              value={value}
              style={styles.picker}
              mode={mode}
              maximumDate={maximumDate}
            />
          ),
          [value],
        )}
        <TextButton onPress={handleSave}>Save</TextButton>
      </View>
    </Modal>
  );
};

ModalDatePicker.propTypes = {
  styles: shape({
    container: object,
    title: object,
    picker: object,
    button: object,
  }),
  onSave: func.isRequired,
  onBackgroundPress: func,
  title: string,
  value: instanceOf(Date),
  maximumDate: instanceOf(Date),
  mode: oneOf(['date', 'time', 'datetime', 'countdown']),
};

ModalDatePicker.defaultProps = {
  styles: {},
  onBackgroundPress: () => {},
  title: undefined,
  value: new Date(),
  maximumDate: new Date(),
  mode: 'date',
};

export default ModalDatePicker;
