import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {View, Text} from 'react-native';
import {get} from 'lodash';

import {ListItem} from '../../../../../components';
import styles from './styles';

export default ({onItemPress}) => {
  const language = useSelector((state) => state.language, shallowEqual);

  return (
    <View>
      {model.map(({title, destination}) => (
        <ListItem
          key={get(language, title)}
          id={destination}
          onPress={onItemPress}
          displayChevron>
          <Text style={styles.title}>{title}</Text>
        </ListItem>
      ))}
    </View>
  );
};
