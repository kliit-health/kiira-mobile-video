import React from 'react';
import ChatBot from 'components/chatBot';
import {Header} from './sections';
import {screenNames} from 'utils/constants';

const TreatmentBotScreen = ({navigation}) => {
  const handleClose = () => {
    navigation.goBack();
  };

  const handleNavigation = () => {
    navigation.navigate(screenNames.requestVisit);
  };

  return (
    <ChatBot
      handleEnd={handleNavigation}
      headerComponent={<Header onClose={handleClose} />}
      steps={[
        {
          id: 'intro',
          message:
            "Sorry to hear you aren't feeling 100%. If you're experiencing an emergency, please exit our chat and call 911. \n \n Is this an emergency?",
          trigger: '0',
          color: 'green',
        },
        {
          id: '0',
          options: [
            {
              value: "No, this isn't an emergency",
              label: "No, this isn't an emergency",
              trigger: '1',
            },
            {
              value: 'Exit',
              label: 'Exit',
              trigger: handleClose,
            },
          ],
        },
        {
          id: '1',
          message: 'Do you know what kind of treatment you need?',
          trigger: 'treatment',
        },
        {
          id: 'treatment',
          options: [
            {
              value: 'Yes',
              label: 'Yes',
              trigger: '3',
            },
            {
              value: 'No',
              label: 'No',
              trigger: '5',
            },
          ],
        },
        {
          id: '3',
          message: "Alright let's book a visit.",
          trigger: 'book_visit',
        },
        {
          id: 'book_visit',
          options: [
            {
              value: 'Book Visit',
              label: 'Book Visit',
              end: true,
            },
            {
              value: 'Exit',
              label: 'Exit',
              trigger: handleClose,
            },
          ],
        },
        {
          id: '5',
          message: 'We can help with a variety of conditions: ',
          trigger: 'conditions',
        },

        {
          id: 'conditions',
          options: [
            {
              value: 'Fertility',
              label: 'Fertility',
              end: true,
            },
            {
              value: 'Birth Control',
              label: 'Birth Control',
              end: true,
            },
            {
              value: 'Injury or Pain',
              label: 'Injury or Pain',
              end: true,
            },
            {
              value: 'Urinary or Yeast Infection',
              label: 'Urinary or Yeast Infection',
              end: true,
            },
            {
              value: 'Prenatal Health',
              label: 'Prenatal Health',
              end: true,
            },
            {
              value: 'Postpartum',
              label: 'Postpartum',
              end: true,
            },
            {
              value: 'Sex Therapy',
              label: 'Sex Therapy',
              end: true,
            },
            {
              value: 'Therapy',
              label: 'Therapy',
              end: true,
            },
            {
              value: 'STI or STD',
              label: 'STI or STD',
              end: true,
            },
          ],
          trigger: 'check_book',
        },
        {
          id: 'check_book',
          options: [
            {value: 'Yes', label: 'Yes', end: true},
            {value: 'No', label: 'No', trigger: handleClose},
          ],
        },
      ]}
    />
  );
};

export default TreatmentBotScreen;
