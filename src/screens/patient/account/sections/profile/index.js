import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Avatar} from '../../../../../components';
import styles, {modifiers} from './styles';

export default ({profileInfo}) => {
  const {firstName, lastName, profileImageUrl} = profileInfo;
  const language = useSelector((state) => state.language);

  const cardDetails = [
    {
      title: language.account.born,
      dataKey: 'dob',
    },
    {
      title: language.account.pronouns,
      dataKey: 'pronouns',
    },
    {
      title: language.account.sexuality,
      dataKey: 'sexuality',
      secondaryKey: 'value',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.curtain} />
      <View style={styles.root}>
        <Avatar
          source={profileImageUrl}
          size="large"
          styles={modifiers.avatar}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.groupContainer}>
          {cardDetails.map(({dataKey, title, secondaryKey}) => (
            <View key={dataKey} style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{title}</Text>
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
