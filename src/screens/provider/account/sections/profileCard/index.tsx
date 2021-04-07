import React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {View, Text} from 'react-native';
import {Avatar} from 'components';
import {get} from 'lodash';
import model from './model';
import styles, {modifiers} from './styles';

const ProfileCard = ({profileInfo}) => {
  const {firstName, lastName, profileImageUrl} = profileInfo;
  const language = useSelector((state) => state.language, shallowEqual);

  return (
    <View style={styles.root}>
      <Avatar source={profileImageUrl} size="large" styles={modifiers.avatar} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
      </View>
      <View style={styles.groupContainer}>
        {model.map(({dataKey, title, secondaryKey}) => {
          return (
            <View key={dataKey} style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{get(language, title)}</Text>
              <Text style={styles.itemValue}>
                {secondaryKey
                  ? profileInfo[dataKey][secondaryKey]
                  : profileInfo[dataKey]}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProfileCard;
