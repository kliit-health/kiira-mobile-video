import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {Avatar} from '~/components';
import styles from './styles';

const Favorites = ({data, deleteMode, onItemPress}) => (
  <View style={styles.listContainer}>
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.uid}
      renderItem={({item, index}) => (
        <FavoritesItem
          onPress={onItemPress}
          deleteMode={deleteMode}
          {...item}
          index={index}
        />
      )}
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={() => <ItemSeparator />}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const FavoritesItem = (props) => {
  const {profileInfo, deleteMode, onPress} = props;
  const {profileImageUrl, lastName} = profileInfo;

  const handleItemPress = (item) => {
    if (onPress) {
      onPress(item);
    }
  };

  return (
    <View style={styles.favoritesItem}>
      <Avatar
        deleteMode={deleteMode}
        onPress={() => handleItemPress(props)}
        size="small"
        source={profileImageUrl != null ? profileImageUrl : ''}
        border
      />
      <Text style={styles.favoritesItemText}>{lastName}</Text>
    </View>
  );
};

Favorites.displayName = 'FavoritesBar';

export default Favorites;
