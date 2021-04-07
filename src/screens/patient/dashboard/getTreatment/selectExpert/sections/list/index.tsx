import React from 'react';
import {FlatList} from 'react-native';
import {ProfileCard} from 'components';
import {calculateRating} from 'utils/functions';
import styles from './styles';

const List = ({data, onCardPress}) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.uid}
    renderItem={({item, index}) => (
      <ListItem {...item} onCardPress={onCardPress} index={index} />
    )}
    contentContainerStyle={styles.flatlistContainer}
  />
);

const ListItem = (props) => {
  const {profileInfo, isOnline, rating, onCardPress} = props;
  const {
    firstName,
    lastName,
    profileImageUrl,
    profession: {specialities, fullName},
  } = profileInfo;

  const handleCardPress = () => {
    if (onCardPress) {
      onCardPress(props);
    }
  };

  return (
    <ProfileCard
      name={`${firstName} ${lastName}`}
      title={fullName}
      rating={calculateRating(rating)}
      tags={specialities.slice(0, 3)}
      avatar={profileImageUrl}
      online={isOnline}
      onPress={handleCardPress}
    />
  );
};

export default List;
