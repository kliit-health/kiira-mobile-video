import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {screenNames} from '../../../../../utils/constants';
import {ListItem} from '../../../../../components';
import styles from './styles';

export default ({onItemPress}) => {
  const language = useSelector((state) => state.language);

  const model = [
    {
      title: language.account.settings,
      destination: screenNames.settings,
    },
    {
      title: language.account.termsAndConditions,
      destination: screenNames.termsAndConditions,
    },
    {
      title: language.account.privacyPolicies,
      destination: screenNames.privacyPolicies,
    },
    {
      title: language.account.help,
      destination: screenNames.help,
    },
  ];

  return (
    <View>
      {model.map(({title, destination}) => (
        <ListItem
          key={title}
          id={destination}
          onPress={onItemPress}
          displayChevron>
          <Text style={styles.title}>{title}</Text>
        </ListItem>
      ))}
    </View>
  );
};
