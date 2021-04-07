import React, {useState} from 'react';
import {View} from 'react-native';
import {ModalPicker, TextInput} from 'components';

export const PickerQuestion = ({data, value, onSave, placeholder, title}) => {
  const [visible, setVisible] = useState(false);

  const handleOnLabelPress = () => {
    setVisible(true);
  };

  const handleOnSave = (item) => {
    onSave(item);
    setVisible(false);
  };

  const handleOnBackdropPress = () => {
    setVisible(false);
  };

  return (
    <View>
      <TextInput
        onPress={handleOnLabelPress}
        placeholder={placeholder}
        value={value}
        chevron
      />
      <ModalPicker
        onSave={handleOnSave}
        onBackdropPress={handleOnBackdropPress}
        visible={visible}
        title={title}
        data={data.map((item) => item.toString())}
      />
    </View>
  );
};
