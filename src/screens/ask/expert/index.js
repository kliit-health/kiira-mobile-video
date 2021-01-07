import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import Language from '../../../utils/localization';
import CustomText from '../../../components/customText';
import Constant from '../../../utils/constants';
import {getExpertQuestionData} from './action';
import {getTerms} from '../../termsAndConditions/action';
import moment from 'moment';
import {SearchBar, TextButton} from '../../../components';

const lang = Language['en'];
const AskExpert = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authLoadingReducer.userData);
  const resolvedQuestionsData = useSelector(
    (state) => state.askExpertReducer.resolvedQuestionsData,
  );
  const questionData = useSelector(
    (state) => state.askExpertReducer.questionData,
  );
  const isDataFetch = useSelector(
    (state) => state.askExpertReducer.isDataFetch,
  );

  const [recentActive, setRecentActive] = useState(true);
  const [resolvedActive, setResolvedActive] = useState(false);
  const [resolved, setResolved] = useState(resolvedQuestionsData);
  const [current, setCurrent] = useState(questionData);
  const {staticImages} = Constant.App;
  const {navigation} = props;

  useEffect(() => {
    fetchData();
    dispatch(getTerms());
  }, []);

  useEffect(() => {
    setCurrent(questionData);
    setResolved(resolvedQuestionsData);
  });

  const toogleActive = () => {
    setRecentActive(!recentActive);
    setResolvedActive(!resolvedActive);
  };

  const filterData = (input) => {
    if (recentActive) {
      if (input.length) {
        let currentFiltered = current.filter((question) => {
          return question.userInfo.profileInfo.firstName.includes(input);
        });
        setCurrent(currentFiltered);
      } else {
        setCurrent(questionData);
      }
    } else {
      if (input.length) {
        let resolvedFiltered = resolved.filter((question) => {
          return question.userInfo.profileInfo.firstName.includes(input);
        });
        setResolved(resolvedFiltered);
      } else {
        setResolved(resolvedQuestionsData);
      }
    }
  };

  const fetchData = () => {
    const params = {
      questionParams: {
        tableName: Constant.App.firebaseTableNames.questions,
        uid: userData.uid,
        collection: Constant.App.firebaseTableNames.questionList,
        key: Constant.App.firebaseTableKeyValuesNames.questionConditionKey,
        value: false,
        userConditionKey:
          Constant.App.firebaseTableKeyValuesNames.questionExpertConditionKey,
      },
      previousQuestionParams: {
        tableName: Constant.App.firebaseTableNames.questions,
        uid: userData.uid,
        collection: Constant.App.firebaseTableNames.questionList,
        key: Constant.App.firebaseTableKeyValuesNames.questionConditionKey,
        value: true,
        userConditionKey:
          Constant.App.firebaseTableKeyValuesNames.questionExpertConditionKey,
      },
    };
    dispatch(getExpertQuestionData(params, dispatch));
  };

  const renderRecentChatView = () => {
    return (
      <View style={styles.resolveContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
          keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
          data={current}
          renderItem={({item}) => {
            return (
              <View style={styles.recentChatParentContainerStyle}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Constant.App.screenNames.ChatExpert, {
                      questionData: item,
                    });
                  }}>
                  <View style={styles.recentChatContainerStyle}>
                    <Image
                      containerStyle={{alignSelf: 'center'}}
                      defaultSource={staticImages.profilePlaceholderImg}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 50,
                      }}
                      source={{
                        uri: item.userInfo.profileInfo.profileImageUrl,
                      }}
                      activeOpacity={0.7}
                    />
                    <View style={styles.userInfoContainerStyle}>
                      <View style={{flexDirection: 'row'}}>
                        <CustomText style={styles.userInfoTextBoldStyle}>
                          {`${item.userInfo.profileInfo.firstName} ${item.userInfo.profileInfo.lastName}`}
                        </CustomText>
                        <View style={styles.timeContainer}>
                          <Image
                            style={{
                              width: 20,
                              height: 20,
                              padding: 5,
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                            }}
                            resizeMode="contain"
                            defaultSource={require('../../../../assets/clock.png')}
                            source={require('../../../../assets/clock.png')}
                          />
                          <CustomText style={styles.userInfoTextStyle}>
                            {item.modifiedDate
                              ? moment.unix(item.modifiedDate).fromNow(true)
                              : moment.unix(item.createdAt).fromNow(true)}
                          </CustomText>
                        </View>
                      </View>
                      <CustomText numberOfLines={4}>
                        {item.lastMessage ? item.lastMessage : item.question}
                      </CustomText>
                    </View>
                    {/* {item.expertUnreadCount ? (
                      <View style={styles.unreadCountContainerStyle}>
                        <CustomText style={styles.unreadCountTextStyle}>
                          {item.expertUnreadCount}
                        </CustomText>
                      </View>
                    ) : null} */}
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const renderResolvedChatView = () => {
    return (
      <View style={styles.resolveContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
          keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
          data={resolved}
          renderItem={({item}) => {
            return (
              <View style={styles.recentChatParentContainerStyle}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(Constant.App.screenNames.ChatExpert, {
                      questionData: item,
                    });
                  }}>
                  <View style={styles.recentChatContainerStyle}>
                    <TouchableOpacity onPress={() => {}}>
                      <Image
                        containerStyle={{alignSelf: 'center'}}
                        defaultSource={staticImages.profilePlaceholderImg}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 50,
                        }}
                        source={{
                          uri: item.userInfo.profileInfo.profileImageUrl,
                        }}
                        activeOpacity={0.7}
                      />
                    </TouchableOpacity>
                    <View style={styles.userInfoContainerStyle}>
                      <View style={{flexDirection: 'row'}}>
                        <CustomText style={styles.userInfoTextBoldStyle}>
                          {`${item.userInfo.profileInfo.firstName} ${item.userInfo.profileInfo.lastName}`}
                        </CustomText>
                        <View style={styles.timeContainer}>
                          <Image
                            style={{
                              width: 20,
                              height: 20,
                              padding: 5,
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                            }}
                            resizeMode="contain"
                            defaultSource={require('../../../../assets/clock.png')}
                            source={require('../../../../assets/clock.png')}
                          />
                          <CustomText style={styles.userInfoTextStyle}>
                            {item.modifiedDate
                              ? moment.unix(item.modifiedDate).fromNow(true)
                              : moment.unix(item.createdAt).fromNow(true)}
                          </CustomText>
                        </View>
                      </View>
                      <CustomText numberOfLines={4}>
                        {item.lastMessage ? item.lastMessage : item.question}
                      </CustomText>
                    </View>
                    {item.expertUnreadCount ? (
                      <View style={styles.unreadCountContainerStyle}>
                        <CustomText style={styles.unreadCountTextStyle}>
                          {item.expertUnreadCount}
                        </CustomText>
                      </View>
                    ) : null}
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };

  const renderEmptyView = () => {
    return (
      <View style={styles.emptyViewContainerStyle}>
        <Image
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            marginTop: 20,
          }}
          resizeMode="contain"
          source={require('../../../../assets/logo.png')}
        />
        <Text style={styles.title}>
          You have not been asked any questions. Check back later.
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainerStyle}>
          <CustomText style={styles.titleTextStyle}>
            {lang.askExpert.title}
          </CustomText>
        </View>
        <SearchBar onChange={filterData} placeholder={'Search'} />
        <View style={styles.buttonsContainer}>
          <TextButton
            disabled={recentActive}
            activeOpacity={1}
            onPress={toogleActive}>
            {'Recent'}
          </TextButton>
          <View style={styles.divider} />
          <TextButton
            disabled={resolvedActive}
            activeOpacity={1}
            onPress={toogleActive}>
            {'Resolved'}
          </TextButton>
        </View>
        {recentActive && questionData && questionData.length > 0
          ? renderRecentChatView()
          : null}
        {resolvedActive &&
        resolvedQuestionsData &&
        resolvedQuestionsData.length > 0
          ? renderResolvedChatView()
          : null}
        {isDataFetch &&
        questionData &&
        questionData.length === 0 &&
        resolvedQuestionsData &&
        resolvedQuestionsData.length === 0
          ? renderEmptyView()
          : null}
      </ScrollView>
    </View>
  );
};

export default AskExpert;
