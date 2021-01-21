import React from 'react';
import {FlatList} from 'react-native';
import {colors} from '../../../../utils/constants';
import {ProfileCard, IconButton} from '../../../../components';
import {calculateRating} from '../../../../utils/functions';
import Plus from '../../../../svgs/plus.svg';
import styles from './styles';

const List = ({data, onCardPress, onAddPress, disabledItems}) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.uid}
    renderItem={({item, index}) => (
      <ListItem
        {...item}
        onAddPress={onAddPress}
        onCardPress={onCardPress}
        index={index}
        disabled={disabledItems.some(({uid}) => item.uid === uid)}
      />
    )}
    contentContainerStyle={styles.flatlistContainer}
  />
);

const ListItem = (props) => {
  const {
    profileInfo,
    isOnline,
    rating,
    onCardPress,
    index,
    onAddPress,
    disabled,
  } = props;
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

  const handleAddPress = (itemProps) => {
    onAddPress(itemProps);
  };

  const {blue, gray} = colors;

  return (
    <ProfileCard
      name={`${firstName} ${lastName}`}
      title={fullName}
      rating={calculateRating(rating)}
      tags={specialities.slice(0, 3)}
      avatar={profileImageUrl}
      online={isOnline}
      onPress={handleCardPress}>
      <IconButton disabled={disabled} onPress={() => handleAddPress(props)}>
        <Plus color={disabled ? gray : blue} />
      </IconButton>
    </ProfileCard>
  );
};

export default List;
