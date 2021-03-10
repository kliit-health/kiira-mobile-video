import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';
import {get} from 'lodash';
import Image from 'react-native-fast-image';
import model from './model';
import styles from './styles';

export default ({onPress}) => {
  const language = useSelector((state) => state.language, shallowEqual);

  return (
    <View style={styles.mainContainer}>
      {model.map(({title, destination, icon, features}) => (
        <TouchableOpacity
          key={title}
          activeOpacity={0.8}
          onPress={() => onPress(destination, features)}
          style={styles.container}>
          <View style={styles.box}>
            <Image style={styles.image} resizeMode="contain" source={icon} />
          </View>
          <Text style={styles.title}>{get(language, title)}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
