import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Container from 'components/container';
import Header from 'components/header';

import styles from './styles';

const VisitEnd = ({navigation}) => {
  return (
    <Container barStyle="dark-content">
      <Header title="Kiira Videochat" />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../../../../../../assets/logo.png')}
      />
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          style={styles.submitButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('TwillioLogin')}>
          <Text style={styles.textStyle}> Return To Visit </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          style={styles.submitButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('VideoRating')}>
          <Text style={styles.textStyle}> End Visit </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default VisitEnd;
