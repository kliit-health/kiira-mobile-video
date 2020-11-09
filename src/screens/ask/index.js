import React, {PureComponent, Fragment} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
  Alert,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import CustomText from '../../components/customText';
import styles from './style';
import language from '../../utils/localization';
import Constant from '../../utils/constants';
import InputText from '../../components/customInputText/simpleInputText';
import CustomButton from '../../components/customButton';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {getQuestionData, updateQuestion} from './action';
import moment from 'moment';
import {withNavigation} from 'react-navigation';
import {Header} from '../../components';
import Rate, {AndroidMarket} from 'react-native-rate';
import AsyncStorage from '@react-native-community/async-storage';
import {getTerms} from '../termsAndConditions/action';
import {getPolicy} from '../privacyPolicy/action';
import CachedImage from 'react-native-image-cache-wrapper';
import {setUserData} from './action';
import firebase from 'react-native-firebase';
import {getUserData} from '../../utils/firebase';

const lang = language.en;
class Ask extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      questionText: '',
      questions: this.props.userData.questions,
      credits: this.props.userData.credits,
      videoChat: 0,
    };
  }

  async componentDidMount() {
    const {question} = this.props;
    if (question) {
      this.setState({
        questionText: question,
      });
    } else if (!question) {
      this.setState({
        questionText: '',
      });
    }

    this.fetchData();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      var user = firebase.auth().currentUser;
      if (user && user.uid) {
        try {
          const obj = {
            tableName: Constant.App.firebaseTableNames.users,
            uid: user.uid,
          };
          getUserData(
            obj,
            (querySnapshot) => {
              const data = querySnapshot.data();
              this.setState({
                questions: data.questions,
                credits: data.credits,
              });
            },
            (error) => {
              console.log(error);
            },
          );
        } catch (error) {
          console.log(error);
        }
      }
    });
    const isAlreadyRate = await AsyncStorage.getItem('isAlreadyRate');
    const countStartApp = await AsyncStorage.getItem('countStartApp');
    const count = countStartApp ? parseInt(countStartApp) : 1;

    if (!isAlreadyRate && count % 30 === 0) {
      Alert.alert('App Rating', 'Please give us your opinion', [
        {
          text: 'Later',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setTimeout(() => {
              let options = {
                AppleAppID: '1526336962',
                GooglePackageName: 'com.kiira',
                preferredAndroidMarket: AndroidMarket.Google,
                preferInApp: true,
                openAppStoreIfInAppFails: true,
                fallbackPlatformURL: 'https://kirra.io',
              };
              Rate.rate(options, (success) => {
                if (success) {
                  AsyncStorage.setItem('isAlreadyRate', 'true');
                }
              });
            }, 500);
          },
        },
      ]);
    }
    await AsyncStorage.setItem('countStartApp', `${count + 1}`);
  }

  componentDidUpdate() {
    const {question} = this.props;
    if (question) {
      this.setState({
        questionText: question,
      });
    } else if (!question) {
      this.setState({
        questionText: '',
      });
    }
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  onChangeText = (value) => {
    const {setQuestionText, question} = this.props;
    this.setState({
      questionText: value,
    });
    setQuestionText(value);
  };

  fetchData() {
    const {getQuestion, userData} = this.props;
    const params = {
      questionParams: {
        tableName: Constant.App.firebaseTableNames.questions,
        uid: userData.uid,
        collection: Constant.App.firebaseTableNames.questionList,
        key: Constant.App.firebaseTableKeyValuesNames.questionConditionKey,
        value: false,
        userConditionKey:
          Constant.App.firebaseTableKeyValuesNames.questionUserConditionKey,
      },
      expertsParams: {
        tableName: Constant.App.firebaseTableNames.users,
        key: Constant.App.firebaseTableKeyValuesNames.expertsConditionKey,
        value: Constant.App.firebaseTableKeyValuesNames.expertsConditionValue,
      },
      previousQuestionParams: {
        tableName: Constant.App.firebaseTableNames.questions,
        uid: userData.uid,
        collection: Constant.App.firebaseTableNames.questionList,
        key: Constant.App.firebaseTableKeyValuesNames.questionConditionKey,
        value: true,
        userConditionKey:
          Constant.App.firebaseTableKeyValuesNames.questionUserConditionKey,
      },
    };
    getQuestion(params);
  }

  renderHeadingProfileView() {
    const {userData, questionData} = this.props;
    const {firstName, lastName, profileImageUrl} = userData.profileInfo;
    const {staticImages} = Constant.App;
    return (
      <View style={styles.headingProfileImageParentContainer}>
        <View style={styles.headingTextContainerStyle}>
          <CustomText style={styles.headingTextStyle}>
            {lang.askUser.headingText1}
            <CustomText style={styles.headingTextHighlightedStyle}>
              {` ${firstName} `}
            </CustomText>
            {questionData
              ? `, ${lang.askUser.headingTextAfterAskQuestion}`
              : this.state.credits > 0 || this.state.questions > 0
              ? `,\n${lang.askUser.headingText2}`
              : null}
          </CustomText>
        </View>
        <View style={styles.profileImgViewStyle}>
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
            defaultSource={staticImages.profilePlaceholderImg}
            source={{uri: profileImageUrl}}
            activeOpacity={0.7}
          />
          <TouchableOpacity
            style={styles.badgeContainerStyle}
            onPress={() => {}}>
            <CustomText style={styles.badgeTextStyle}>
              {this.state.credits}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderCreditView() {
    return (
      <Fragment>
        <CustomText style={styles.creditTextStyle}>
          {`Unlimited Questions per month`}
        </CustomText>
      </Fragment>
    );
  }

  renderInputTextView() {
    const {question} = this.props;
    const {questionText} = this.state;
    return (
      <View style={styles.inputTextContainerStyle}>
        <InputText
          maxHeight={100}
          multiline={true}
          autoCapitalize="sentences"
          onChangeText={this.onChangeText}
          placeholder={lang.askUser.placehorderText}
          value={questionText}
          style={
            question
              ? styles.inputTypeStyle
              : [styles.inputTypeStyle, {lineHeight: 25}]
          }
          placeholderTextColor={Constant.App.colors.lightGrey}
        />
      </View>
    );
  }

  renderButtonView() {
    const {navigation, question} = this.props;
    return (
      <CustomButton
        disabled={question ? false : true}
        buttonStyle={styles.buttonContainerStyle}
        textStyle={styles.buttonTextStyle}
        onPress={() => {
          navigation.navigate(Constant.App.screenNames.ChooseExpert);
        }}
        text={lang.askUser.btnText}
      />
    );
  }

  renderRecentExpertView() {
    const {staticImages} = Constant.App;
    const {navigation, recentExpertData} = this.props;

    return (
      <View style={styles.recentExpertParentContainerStyle}>
        <CustomText style={styles.myRecentExpertTitleTextStyle}>
          {lang.askUser.myRecentExperts}
        </CustomText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
          keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
          data={recentExpertData}
          horizontal={true}
          renderItem={({item, index}) => {
            item = item.data();
            return (
              <View
                style={
                  index === 0
                    ? styles.myRecentExpertContainerStyle
                    : index === recentExpertData.length - 1
                    ? styles.myRecentExpertContainer2Style
                    : styles.myRecentExpertContainer1Style
                }>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(
                      Constant.App.screenNames.ExpertProfile,
                      {
                        isFrom: Constant.App.screenNames.AskUser,
                        uid: item.uid,
                      },
                    );
                  }}>
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      alignSelf: 'center',
                    }}>
                    <CachedImage
                      containerStyle={{alignSelf: 'center'}}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                      }}
                      source={
                        item.profileInfo.profileImageUrl
                          ? {
                              uri: item.profileInfo.profileImageUrl,
                            }
                          : staticImages.profilePlaceholderImg
                      }
                      activeOpacity={0.7}
                    />
                    {item.isOnline ? (
                      <View
                        style={{
                          width: 16,
                          height: 16,
                          bottom: 3,
                          right: 15,
                          borderRadius: 8,
                          backgroundColor: Constant.App.colors.greenColor,
                          position: 'absolute',
                        }}
                      />
                    ) : (
                      <View
                        style={{
                          width: 16,
                          height: 16,
                          bottom: 3,
                          right: 15,
                          borderRadius: 8,
                          backgroundColor: Constant.App.colors.grayColor,
                          position: 'absolute',
                        }}
                      />
                    )}
                  </View>
                  <CustomText
                    style={
                      styles.expertNameTextStyle
                    }>{`${item.profileInfo.firstName} ${item.profileInfo.lastName}`}</CustomText>
                  <CustomText style={styles.expertProfTextStyle}>
                    {item.profileInfo.profession.fullName}
                  </CustomText>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  renderPreviousQuestionView() {
    const {navigation, previousQuestionData, experts} = this.props;
    return (
      <View style={styles.myPrevQuestionParentContainerStyle}>
        <CustomText style={styles.myPrevQuestionTitleTextStyle}>
          {lang.askUser.myPreviousQuestions}
        </CustomText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
          keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
          data={previousQuestionData}
          renderItem={({item}) => {
            item = item.data();
            return (
              <TouchableOpacity
                onPress={() => {
                  const expertDetails = experts.find(
                    (expert) => expert.uid === item.expertInfo.uid,
                  );

                  navigation.navigate(Constant.App.screenNames.Chat, {
                    questionData: item,
                    expertDetails,
                  });
                }}>
                <View style={styles.myPrevQuestionContainerStyle}>
                  <CustomText style={styles.myPrevQuestionTextStyle}>
                    {item.question}
                  </CustomText>
                  <View style={styles.expertInfoContainerStyle}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(
                          Constant.App.screenNames.ExpertProfile,
                          {
                            isFrom: Constant.App.screenNames.AskUser,
                            uid: item.expertInfo.uid,
                          },
                        );
                      }}>
                      <CachedImage
                        containerStyle={{alignSelf: 'center'}}
                        style={{
                          width: 50,
                          height: 50,
                        }}
                        source={{
                          uri: item.expertInfo.profileInfo.profileImageUrl
                            ? item.expertInfo.profileInfo.profileImageUrl
                            : '',
                        }}
                        activeOpacity={0.7}
                      />
                    </TouchableOpacity>
                    <CustomText style={styles.expertInfoTextStyle}>
                      {`${lang.askUser.answerBy} ${
                        item.expertInfo.profileInfo.firstName
                      }, ${
                        item.expertInfo.profileInfo.profession.shortName
                      }\n${moment
                        .unix(item.resolvedDate)
                        .format(Constant.App.dateFormat)}`}
                    </CustomText>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  renderAskedQuestionView() {
    const {questionData, navigation, experts} = this.props;
    const {staticImages} = Constant.App;
    return (
      <TouchableOpacity
        onPress={() => {
          const expertDetails = experts.find(
            (expert) => expert.uid === questionData.expertInfo.uid,
          );

          console.log({expertDetails});
          navigation.navigate(Constant.App.screenNames.Chat, {
            questionData,
            expertDetails,
          });
        }}>
        <View
          style={
            questionData.userUnreadCount
              ? styles.askedQuestionContainerStyle
              : [
                  styles.askedQuestionContainerStyle,
                  {backgroundColor: Constant.App.colors.greyBgAsk},
                ]
          }>
          <CustomText
            style={
              questionData.userUnreadCount
                ? styles.askedQuestionTextStyle
                : [
                    styles.askedQuestionTextStyle,
                    {color: Constant.App.colors.blackColor},
                  ]
            }>
            {questionData.question}
          </CustomText>
          <View style={styles.expertInfoContainerStyle}>
            <CachedImage
              containerStyle={{alignSelf: 'center'}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
              source={{
                uri: questionData.expertInfo.profileInfo.profileImageUrl
                  ? questionData.expertInfo.profileInfo.profileImageUrl
                  : '',
              }}
              activeOpacity={0.7}
            />
            <CustomText
              style={
                questionData.userUnreadCount
                  ? styles.askedQuestionExpertInfoTextStyle
                  : [
                      styles.askedQuestionExpertInfoTextStyle,
                      {color: Constant.App.colors.blackColor},
                    ]
              }>
              {`${lang.askUser.asking} ${questionData.expertInfo.profileInfo.firstName} ${questionData.expertInfo.profileInfo.lastName}, ${questionData.expertInfo.profileInfo.profession.shortName}`}
            </CustomText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderEmptyCreditView() {
    return (
      <View style={styles.emptyCreditsContainerStyle}>
        <CustomText style={styles.emptyCreditsTextStyle}>
          {lang.askUser.textAfterEmptyCredit}
        </CustomText>
      </View>
    );
  }

  render() {
    const {
      recentExpertData,
      previousQuestionData,
      questionData,
      navigation,
    } = this.props;

    return (
      <View style={styles.container}>
        <Header title="" onBack={() => navigation.goBack()} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.renderHeadingProfileView()}
          {this.renderCreditView()}
          {questionData
            ? this.renderAskedQuestionView()
            : this.renderInputTextView()}
          {!questionData && this.renderButtonView()}
          {!questionData &&
            this.state.credits === 0 &&
            this.state.questions === 0 &&
            this.renderEmptyCreditView()}
          {recentExpertData &&
            recentExpertData.length > 0 &&
            this.renderRecentExpertView()}
          {previousQuestionData &&
            previousQuestionData.length > 0 &&
            this.renderPreviousQuestionView()}
          {Platform.OS === 'ios' && <KeyboardSpacer />}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authLoadingReducer.userData,
  recentExpertData: state.askReducer.recentExpertData,
  previousQuestionData: state.askReducer.previousQuestionData,
  questionData: state.askReducer.questionData,
  question: state.askReducer.question,
  experts: state.careSquad.experts,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setUserData(data)),
  getQuestion: (value) => dispatch(getQuestionData(value, dispatch)),
  setQuestionText: (value) => dispatch(updateQuestion(value)),
  getTerms: () => dispatch(getTerms()),
  getPolicy: () => dispatch(getPolicy()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Ask));
