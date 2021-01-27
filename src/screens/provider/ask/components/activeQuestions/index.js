import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import moment from 'moment';
import {View, Text, TouchableOpacity} from 'react-native';
import {TimeDisplay} from '../../../../../components';
import {screenNames} from '../../../../../utils/constants';
import styles from './styles';

const ActiveQuestions = ({data, navigation, visible}) => {
  const handleItemPress = (questionData) => {
    navigation.navigate(screenNames.expertChat, {questionData});
  };

  return visible ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item.uid}
      contentContainerStyle={styles.list.listContainer}
      style={styles.list.mainContainer}
      ListEmptyComponent={() => <Fallback />}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <ListItem {...item} onPress={handleItemPress} />
      )}
    />
  ) : (
    <View />
  );
};

const ListItem = (props) => {
  const {userInfo, lastMessage, modifiedDate, onPress} = props;
  const {firstName, lastName} = userInfo.profileInfo;
  const lang = useSelector((state) => state.language);

  const handlePress = () => {
    if (onPress) {
      onPress(props);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.item.card}
      onPress={handlePress}>
      <View style={styles.item.outerContainer}>
        <View>
          <Text style={styles.item.title}>{lang.expertChats.patientName}</Text>
          <Text style={styles.item.subtitle}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.item.innerContainer}>
          <Text numberOfLines={1} style={styles.item.title}>
            {lang.expertChats.lastMessage}
          </Text>
          <Text numberOfLines={1} style={styles.item.subtitle}>
            {lastMessage}
          </Text>
        </View>
      </View>
      <TimeDisplay time={moment(modifiedDate).format('hh:mm A')} />
    </TouchableOpacity>
  );
};

const Fallback = () => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={styles.fallBack.container}>
      <Text style={styles.fallBack.text}>{lang.expertChats.noQuestions}</Text>
    </View>
  );
};

export default ActiveQuestions;
