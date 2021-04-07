import React, {Fragment, useState} from 'react';
import {TextInput, ModalPicker} from 'components';

const Picker = ({value, data, title, onSave, placeholder}) => {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(true);
  };

  const handleBackPress = () => {
    setVisible(false);
  };

  const handleSave = (item) => {
    onSave(item);
    setVisible(false);
  };

  return (
    <Fragment>
      <TextInput
        placeholder={placeholder}
        chevron
        value={value}
        onPress={handlePress}
      />
      <ModalPicker
        onBackdropPress={handleBackPress}
        data={data}
        title={title}
        onSave={handleSave}
        visible={visible}
      />
    </Fragment>
  );
};

export default Picker;
