import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {string} from 'prop-types';
import styles from './style';
import {withNavigation} from 'react-navigation';

const ExpertHeader = ({navigation, title}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.image}
          source={require('../../../assets/goBack.png')}
          activeOpacity={0.7}
        />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

ExpertHeader.propTypes = {
  title: string,
};

export default withNavigation(ExpertHeader);
