import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {string} from 'prop-types';
import styles from './style';
import {withNavigation} from 'react-navigation';

const ExpertHeader = ({navigation, title}) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={{position: 'absolute', top: 40, left: 15}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.image}
              source={require('../../../assets/goBack.png')}
              activeOpacity={0.7}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

ExpertHeader.propTypes = {
  title: string,
};

export default withNavigation(ExpertHeader);
