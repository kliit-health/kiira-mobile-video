import React from 'react';
import {View, Text} from 'react-native';
import {ListItem} from '../../../../../components';
import model from './model';
import styles from './styles';

export default ({onItemPress}) => (
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
