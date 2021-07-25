import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { get } from 'lodash';
import { routes, features, colors } from '~/utils/constants';
import { Item as ItemType } from './types';
import { ChevronRight } from '~/svgs';
import styles from './styles';

export type ItemProps = {
  index: number;
  onPress: (destination: routes, features: features) => void;
} & ItemType;

const Item = ({
  title,
  description,
  index,
  destination,
  onPress,
  features,
  icon: Icon,
}: ItemProps) => {
  const language = useSelector(state => state.language, shallowEqual);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.root, { borderTopWidth: index === 0 ? 0.4 : 0 }]}
      onPress={() => onPress(destination, features)}
    >
      <View style={styles.icon}>
        <Icon />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{get(language, title)}</Text>
        <Text style={styles.description}>{get(language, description)}</Text>
      </View>
      <View style={styles.chevron}>
        <ChevronRight color={colors.gray} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
