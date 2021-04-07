import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const NoProviders = () => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../../assets/bell.png')}
      />
      <Text style={styles.title}>No Providers found</Text>
      <Text style={styles.subtitle}>
        We'll notifiy you when providers are available in your area
      </Text>
    </View>
  )
};


export default NoProviders;





