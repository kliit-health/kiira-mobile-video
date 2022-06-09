import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '~/components';
import { icons, screenNames } from '~/utils/constants';
import styles from './styles';
import None from '../none';
import { SwipeButtonsContainer, SwipeItem } from 'react-native-swipe-item';
import { resolveQuestion } from '~/redux/actions/chat';
import moment from 'moment';

const ActiveQuestions = ({ data, navigation, visible }) => {
  const handleItemPress = questionData => {
    navigation.navigate(screenNames.expertChat, { questionData });
  };
  const dispatch = useDispatch();
  const resolve = item => {
    const question = Object.assign({}, item);
    question.isResolved = true;
    question.resolvedDate = moment().unix();
    question.isRated = false;
    const payloadData = {
      resolveQuestionParams: question,
      navigation,
    };
    dispatch(resolveQuestion(payloadData));
  };
  return visible ? (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.uid}
      ListEmptyComponent={() => <Fallback />}
      renderItem={({ item }) => {
        return (
          <SwipeItem
            disableSwipeIfNoButton
            style={styles.item.button}
            swipeContainerStyle={styles.item.swipeContentContainerStyle}
            rightButtons={
              <SwipeButtonsContainer style={styles.item.rightButton}>
                <TouchableOpacity onPress={() => resolve(item)}>
                  <Icon
                    options={[styles.item.resolve]}
                    source={icons.resolve}
                  />
                  <Text style={styles.item.label}>Resolve</Text>
                </TouchableOpacity>
              </SwipeButtonsContainer>
            }>
            <ListItem {...item} onPress={handleItemPress} />
          </SwipeItem>
        );
      }}
    />
  ) : (
    <View />
  );
};

const ListItem = props => {
  const { userInfo, lastMessage, modifiedDate, onPress } = props;
  const { firstName, lastName } = userInfo.profileInfo;
  const lang = useSelector(state => state.language);
  const handlePress = () => {
    if (onPress) {
      onPress(props);
    }
  };

  const convertModifiedTime = date => {
    var dt = new Date(date * 1000);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    var hours = dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours();
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    var minutes =
      dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();
    var finalTime = hours + ':' + minutes + ' ' + AmOrPm;
    return dt === today
      ? finalTime
      : dt === yesterday
      ? 'Yesterday'
      : dt.toLocaleDateString();
  };

  const time = convertModifiedTime(modifiedDate);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.item.card}
      onPress={handlePress}>
      <View style={styles.item.outerContainer}>
        <View>
          <Text style={styles.item.subtitle}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.item.innerContainer}>
          <Text numberOfLines={1} style={styles.item.message}>
            {lastMessage}
          </Text>
        </View>
      </View>
      <Text style={styles.item.time}>{time}</Text>
    </TouchableOpacity>
  );
};

const Fallback = () => {
  return (
    <View style={styles.fallBack.container}>
      <None />
    </View>
  );
};

export default ActiveQuestions;
