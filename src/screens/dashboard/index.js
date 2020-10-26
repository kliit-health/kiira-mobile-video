import React, {PureComponent} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import CustomText from '../../components/customText';
import styles from './style';
import language from '../../utils/localization';
import Constant from '../../utils/constants';
import {getQuestionData, updateQuestion} from './action';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {getTerms} from '../termsAndConditions/action';
import {getPolicy} from '../privacyPolicy/action';
import {setUserData} from './action';
import firebase from 'react-native-firebase';
import {getUserData, getRecentExpertsData} from '../../utils/firebase';
import {getHealthHistoryAsync} from '../healthHistory/actions';
import {
  getExpertsDetailsAsync,
  getFavoriteExpertsAsync,
} from '../careSquad/actions';

const lang = language.en;
class Dashboard extends PureComponent {
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
    const {
      question,
      getPolicy,
      getHealthHistory,
      getExpertsDetails,
      getFavoriteExperts,
    } = this.props;

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
        getHealthHistory();
        getExpertsDetails();
        getFavoriteExperts();
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

    if (!isAlreadyRate && count % 15 === 0) {
      // Alert.alert("App Rating", "Please give us your opinion", [
      //   {
      //     text: "Later",
      //     onPress: () => console.log("Cancel Pressed"),
      //     style: "cancel",
      //   },
      //   {
      //     text: "OK",
      //     onPress: () => {
      //       setTimeout(() => {
      //         let options = {
      //           AppleAppID: "1487436865",
      //           GooglePackageName: "com.klit",
      //           preferredAndroidMarket: AndroidMarket.Google,
      //           preferInApp: true,
      //           openAppStoreIfInAppFails: true,
      //           fallbackPlatformURL: "https://kliit.com",
      //         };
      //         Rate.rate(options, (success) => {
      //           if (success) {
      //             AsyncStorage.setItem("isAlreadyRate", "true");
      //           }
      //         });
      //       }, 500);
      //     },
      //   },
      // ]);
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

  Header = () => {
    const {staticImages} = Constant.App;

    return (
      <View>
        <Image
          resizeMode="contain"
          source={staticImages.logoHorizontal}
          style={styles.logoStyle}
        />
      </View>
    );
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
    getRecentExpertsData(params);
  }

  renderHeadingProfileView() {
    const {userData} = this.props;
    const {firstName, profileImageUrl} = userData.profileInfo;
    const {staticImages} = Constant.App;
    return (
      <View style={styles.headingProfileImageParentContainer}>
        <View style={styles.headingTextContainerStyle}>
          <CustomText style={styles.headingTextStyle}>
            {`Hello, ${firstName} !`}
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

  renderDashBoard() {
    const bandaid = require('../../../assets/bandaid.png');
    const squad = require('../../../assets/squad.png');
    const chat = require('../../../assets/chat.png');
    const clipboard = require('../../../assets/clipboard.png');
    const reminders = require('../../../assets/reminders.png');
    const sos = require('../../../assets/sos.png');
    const {navigation} = this.props;

    return (
      <View style={styles.dashboardContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Constant.App.screenNames.RequestVisit)
          }>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={bandaid}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.dashboardItemText}>Get Treatment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Constant.App.screenNames.CareSquad)
          }>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={squad}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.dashboardItemText}>My Squad</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Constant.App.screenNames.AskUser)}>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={chat}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.dashboardItemText}>Chat with an Expert</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Constant.App.screenNames.HealthHistory)
          }>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={clipboard}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.dashboardItemText}>My History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Constant.App.screenNames.Appointments)
          }>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={reminders}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.dashboardItemText}>Reminders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Constant.App.screenNames.SOS)}>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={sos}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.dashboardItemText}>SOS</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {
      recentExpertData,
      previousQuestionData,
      questionData,
      userData,
    } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.Header()}
          {this.renderHeadingProfileView()}
          {this.renderDashBoard()}
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
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setUserData(data)),
  getQuestion: (value) => dispatch(getQuestionData(value, dispatch)),
  setQuestionText: (value) => dispatch(updateQuestion(value)),
  getTerms: () => dispatch(getTerms()),
  getPolicy: () => dispatch(getPolicy()),
  getHealthHistory: () => dispatch(getHealthHistoryAsync()),
  getExpertsDetails: () => dispatch(getExpertsDetailsAsync()),
  getFavoriteExperts: () => dispatch(getFavoriteExpertsAsync()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Dashboard));
