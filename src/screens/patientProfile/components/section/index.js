import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import styles from './style';

const Section = ({title, image}) => {
  console.log(image);
  //   let imagePath = require(image);
  return (
    <TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          containerStyle={{alignSelf: 'center'}}
          style={styles.icon}
          //   source={imagePath}
          activeOpacity={0.7}
        />
        <Text style={styles.info}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Section;
