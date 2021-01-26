import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';
import styles from './styles';
import model from './model';

export default ({onPress}) => (
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
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
