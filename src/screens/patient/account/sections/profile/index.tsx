import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {View, Text} from 'react-native';
import {get} from 'lodash';
import {cardDetails} from './model';
import {Avatar} from '~/components';
import styles, {modifiers} from './styles';

export default ({profileInfo}) => {
  const language = useSelector((state) => state.language, shallowEqual);
  const {firstName, lastName, profileImageUrl} = profileInfo;

  return (
    <View style={styles.container}>
      <View style={styles.curtain} />
      <View style={styles.root}>
        <Avatar
          source={profileImageUrl != null ? profileImageUrl : ''}
          size="large"
          styles={modifiers.avatar}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.groupContainer}>
          {cardDetails.map(({dataKey, title, secondaryKey}) => (
            <View key={dataKey} style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{get(language, title)}</Text>
              <Text style={styles.itemValue}>
                {secondaryKey
                  ? profileInfo[dataKey][secondaryKey]
                  : profileInfo[dataKey]}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
