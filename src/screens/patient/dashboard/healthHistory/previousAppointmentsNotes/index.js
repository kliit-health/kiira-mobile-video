import React, {useState} from 'react';
import {Container, Header} from '../../../../../components';
import intl from '../../../../../utils/localization';

const PreviousAppointmentsNotes = ({navigation}) => {
  const [selected, setSelected] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    setSelected(!selected);
  };

  const handleChange = (item, index) => {
    console.log(item, index);
  };

  return (
    <Container>
      <Header
        title={intl.en.previousAppointmentsNotes.title}
        onBack={handleBackPress}
      />
    </Container>
  );
};

export default PreviousAppointmentsNotes;
