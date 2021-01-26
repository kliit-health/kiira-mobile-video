import React from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import CheckItem from './common/checkItem';
import {socialModel} from './models';
import {convertCamelCase} from '../../../../../../utils/helper';

import styles from '../style';

const Social = ({social}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.title}>Social History</Text>
      </View>
      <Text style={styles.subheading}>Habits</Text>
      {socialModel.habits.map((item) => {
        return (
          <CheckItem
            key={item.key}
            checked={social[item.key].history}
            title={item.title}
            notes={social[item.key].notes}
          />
        );
      })}

      <Text style={styles.subheading}>{`\n Marital Status`}</Text>
      {Object.keys(social.status).map((key) => {
        return (
          <CheckItem
            key={key}
            checked={social.status[key]}
            title={convertCamelCase(key)}
            notes={null}
          />
        );
      })}

      <Text style={styles.subheading}>Education Level</Text>
      {Object.keys(social.education).map((key) => {
        return (
          <View key={key} style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              center
              key={key}
              checkedIcon="check"
              uncheckedIcon="square-o"
              checked={social.education[key]}
            />
            <Text>{convertCamelCase(key)}</Text>
          </View>
        );
      })}

      <Text style={styles.subheading}>Lifestyle</Text>
      {socialModel.lifestyle.map((item) => {
        return (
          <CheckItem
            key={item.key}
            checked={social[item.key].history}
            title={item.title}
            notes={social[item.key].notes}
          />
        );
      })}
    </View>
  );
};

export default Social;
