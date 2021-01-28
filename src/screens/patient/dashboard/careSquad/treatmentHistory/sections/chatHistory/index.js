import React, {memo} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {View, Text, FlatList} from 'react-native';
import moment from 'moment';
import {colors, screenNames} from '../../../../../../../utils/constants';
import {ListItem} from '../../../../../../../components';
import {styles, itemStyles, fallbackStyles, itemModifiers} from './styles';

const ChatHistory = ({navigation, expertDetails}) => {
  const {questions} = useSelector(
    (state) => state.treatmentHistory.chatHistory,
    shallowEqual,
  );

  const handleItemPress = (item) => {
    navigation.navigate(screenNames.Chat, {
      questionData: item,
      expertDetails,
    });
  };

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      data={questions.filter(
        (question) => question.expertInfo.uid === expertDetails.uid,
      )}
      renderItem={({item, index}) => {
        return (
          <ChatHistoryItem
            key={index}
            {...item}
            onPress={() => handleItemPress(item)}
          />
        );
      }}
      ListEmptyComponent={() => <Fallback />}
    />
  );
};

const ChatHistoryItem = ({
  question,
  modifiedDate,
  lastMessage,
  isResolved,
  onPress,
}) => {
  return (
    <ListItem styles={itemModifiers.list} onPress={onPress}>
      <View style={itemStyles.messagesContainer}>
        <Text numberOfLines={1} style={itemStyles.title}>
          {question}
        </Text>
        <Text numberOfLines={1} style={itemStyles.lastMessage}>
          {lastMessage}
        </Text>
      </View>
      <View style={itemStyles.detailsContainer}>
        <Text numberOfLines={1} style={itemStyles.date}>
          {moment.unix(modifiedDate).fromNow()}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            ...itemStyles.status,
            color: isResolved ? colors.green : colors.orange,
          }}>
          {isResolved ? lang.chatHistory.resolved : lang.chatHistory.unresolved}
        </Text>
      </View>
    </ListItem>
  );
};

const Fallback = () => {
  const lang = useSelector((state) => state.language);

  return (
    <View style={fallbackStyles.container}>
      <Text style={fallbackStyles.description}>{lang.chatHistory.empty}</Text>
    </View>
  );
};
export default memo(ChatHistory);
