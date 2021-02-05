import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {Avatar} from '../../../../../components';
import styles, {modifiers} from './styles';

const ProfileCard = ({profileInfo}) => {
  const {firstName, lastName, profileImageUrl} = profileInfo;
  const language = useSelector((state) => state.language);

  const cardDetails = [
    {
      title: language.expertAccount.born,
      dataKey: 'dob',
    },
    {
      title: language.expertAccount.pronouns,
      dataKey: 'pronouns',
    },
    {
      title: language.expertAccount.location,
      dataKey: 'state',
      secondaryKey: 'code',
    },
  ];

  return (
    <View style={styles.root}>
      <Avatar source={profileImageUrl} size="large" styles={modifiers.avatar} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
      </View>
      <View style={styles.groupContainer}>
        {cardDetails.map(({dataKey, title, secondaryKey}) => {
          return (
            <View key={dataKey} style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{title}</Text>
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
