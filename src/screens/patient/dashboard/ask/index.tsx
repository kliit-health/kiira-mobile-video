import React, {PureComponent} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Platform,
  Image,
  Modal
} from 'react-native';
import {connect} from 'react-redux';
import CustomText from '~/components/customText';
import styles from './style';
import Constant, {screenNames} from '~/utils/constants';
import InputText from '~/components/customInputText/simpleInputText';
import CustomButton from '~/components/customButton';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {getQuestionData, updateQuestion, setTopic} from './action';
import moment from 'moment';
import {withNavigation} from 'react-navigation';
import {Header} from '~/components';
import FastImage from 'react-native-fast-image';
import {setuser} from './action';
import auth from '@react-native-firebase/auth';
import {getUserData} from '~/utils/firebase';
import {showOrHideModal} from '~/components/customModal/action';
import {topics} from '~/models';

class Ask extends PureComponent {
	public state: any;
	public props: any;
	public setState: any;
	public focusListener: any;
	public question: string;
	public setQuestionText: any;
	public getQuestion: any;
	public user: any;
	public questionData: any;
	public lang: any;
	public firstName: string;
	public profileImageUrl: any;
	public staticImages: any;
	public questionText: string;
	public navigation: any;
	public showHideErrorModal: any;
	public recentExpertData: any;
	public previousQuestionData: any;
	public experts: any;
  public showActionModal: boolean;

  constructor(props) {
    super(props);
    this.state = {
      questionText: '',
      questions: this.props.user.questions,
      credits: this.props.user.credits,
      videoChat: 0,
      showActionModal: false,
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
      var user = auth().currentUser;
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
    const {getQuestion, user} = this.props;
    const params = {
      questionParams: {
        tableName: Constant.App.firebaseTableNames.questions,
        uid: user.uid,
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
        uid: user.uid,
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
    const {user, questionData, lang} = this.props;
    const {firstName, profileImageUrl} = user.profileInfo;
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
        </View>
      </View>
    );
  }

  renderCreditView() {
    return (
      <>
        <CustomText style={styles.creditTextStyle}>
          {`Unlimited Questions per month`}
        </CustomText>
      </>
    );
  }

  renderInputTextView() {
    const {question, lang} = this.props;
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

  renderTopicButton() {
    const {question,lang} = this.props;
    return (
      <CustomButton
        disabled={question ? false : true}
        buttonStyle={question ? styles.buttonContainerStyle : [styles.buttonContainerStyle, styles.disabled]}
        textStyle={styles.buttonTextStyle}
        onPress={() => this.setState({ showActionModal: true})}
        text={lang.askUser.selectTopic}
      />
    );
  }

  renderAskButton() {
    const {navigation, reason, lang} = this.props;
    return (
      <CustomButton
        disabled={reason ? false : true}
        buttonStyle={reason ? styles.buttonContainerStyle : [styles.buttonContainerStyle, styles.disabled]}
        textStyle={styles.buttonTextStyle}
        onPress={() => navigation.navigate(Constant.App.screenNames.ChooseExpert)}
        text={lang.askUser.btnText}
      />
    );
  }

  renderRecentExpertView() {
    const {staticImages} = Constant.App;
    const {navigation, recentExpertData, lang} = this.props;
    const chatEnabled = recentExpertData.filter((expert) => expert.data().chatEnabled);
  
    return (
      <View style={styles.recentExpertParentContainerStyle}>
        <CustomText style={styles.myRecentExpertTitleTextStyle}>
          {lang.askUser.myRecentExperts}
        </CustomText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
          keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
          data={chatEnabled}
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
                    <FastImage
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
    const {navigation, previousQuestionData, experts, lang} = this.props;
    return (
      <View style={styles.myPrevQuestionParentContainerStyle}>
        <CustomText style={styles.myPrevQuestionTitleTextStyle}>
          {lang.askUser.myPreviousQuestions}
        </CustomText>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'none' : 'on-drag'}
          keyboardShouldPersistTaps={Platform.OS === 'ios' ? 'never' : 'always'}
          data={previousQuestionData}
          renderItem={({item}) => {
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
                      <FastImage
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
    const {questionData, navigation, experts, lang} = this.props;

    return (
      <TouchableOpacity
        onPress={() => {
          const expertDetails = experts.find(
            (expert) => expert.uid === questionData.expertInfo.uid,
          );
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
            <FastImage
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
    const {lang} = this.props;
    return (
      <View style={styles.emptyCreditsContainerStyle}>
        <CustomText style={styles.emptyCreditsTextStyle}>
          {lang.askUser.textAfterEmptyCredit}
        </CustomText>
      </View>
    );
  }

  renderActionModal() {
    const {showActionModal} = this.state;
    const {lang, setTopic} = this.props;

    return (
      <Modal
        animationType="fade"
        onRequestClose={() => {}}
        transparent
        isVisible={showActionModal}>
        <View style={styles.actionModalParentContainerStyle}>
          <View style={styles.actionModalInnerContainerStyle}>
            <CustomText style={styles.actionModalTitleTextStyle}>
              {'Category:'}
            </CustomText>
            {topics.map(({title}) => (
              <TouchableOpacity
                key={title}
                onPress={() => {
                  setTopic(title);
                  this.setState({ showActionModal: false })
                }}>
                <CustomText style={styles.actionModalBlueTextStyle}>
                  {title}
                </CustomText>
              </TouchableOpacity>
            ))}
          </View>
          <CustomButton
            buttonStyle={styles.actionModalOkBtnErrorContainerStyle}
            textStyle={styles.actionModalOkBtnErrorTextStyle}
            text={lang.chat.cancel}
            onPress={() => {
              this.setState({
                showActionModal: false,
              });
            }}
          />
        </View>
      </Modal>
    );
  }

  render() {
    const {showActionModal} = this.state

    const {
      recentExpertData,
      previousQuestionData,
      questionData,
      navigation,
    } = this.props;

    return (
      <View style={styles.container}>
        <Header
          title=""
          onBack={() => navigation.navigate(screenNames.BottomTab)}
        />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.renderHeadingProfileView()}
          {this.renderCreditView()}
          {questionData
            ? this.renderAskedQuestionView()
            : this.renderInputTextView()}
          {showActionModal && this.renderActionModal()}
          {!questionData && this.renderTopicButton()}
          {!questionData && this.renderAskButton()}
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
  user: state.user.data,
  reason: state.ask.reason,
  recentExpertData: state.ask.recentExpertData,
  previousQuestionData: state.questions.resolved.data,
  questionData: state.ask.questionData,
  question: state.ask.question,
  experts: state.experts.data,
  lang: state.language,
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setuser(data)),
  setTopic: (data) => dispatch(setTopic(data)),
  getQuestion: (value) => dispatch(getQuestionData(value, dispatch)),
  setQuestionText: (value) => dispatch(updateQuestion(value)),
  showHideErrorModal: (value) => dispatch(showOrHideModal(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Ask));
