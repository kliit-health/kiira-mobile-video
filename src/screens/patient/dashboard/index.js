import React, {PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Alert,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components';
import {showOrHideModal} from '../../../components/customModal/action';
import styles from './style';
import language from '../../../utils/localization';
import Constant, {screenNames} from '../../../utils/constants';
// import {getQuestionData, updateQuestion} from './action';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {getTerms} from '../../common/termsAndConditions/action';
import {getPolicy} from '../../common/privacyPolicy/action';
import {getLicenses} from '../../auth/authLoading/action';
import {setUserData} from './action';
import firebase from 'react-native-firebase';
import {getUserData, getRecentExpertsData} from '../../../utils/firebase';
import {getHealthHistoryAsync} from './healthHistory/actions';
import {
  getExpertsDetailsAsync,
  getFavoriteExpertsAsync,
} from './careSquad/actions';
import Rate, {AndroidMarket} from 'react-native-rate';
import CustomButton from '../../../components/customButton';
import {getAgreements} from './getTreatment/agreements/actions';
import {getUserDetails} from '../../../redux/actions';

const lang = language.en;
class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // questionText: '',
      // questions: this.props.userData.questions,
      // credits: this.props.userData.credits,
      videoChat: 0,
      videoEnabled: false,
      chatEnabled: this.props.userData.chats === 'Unlimited',
      modalOpen: true,
    };
  }

  async componentDidMount() {
    const {
      // question,
      getTerms,
      getHealthHistory,
      // getExpertsDetails,
      // getFavoriteExperts,
      getLicenses,
      getAgreements,
      getUserDetails,
      userData,
    } = this.props;
    if (userData.firstLogin) {
      this.props.navigation.navigate(screenNames.Login);
    }
    getLicenses();
    getAgreements();
    getTerms();

    this.checkLicenseStatus();
    // if (question) {
    //   this.setState({
    //     questionText: question,
    //   });
    // } else if (!question) {
    //   this.setState({
    //     questionText: '',
    //   });
    // }

    this.fetchData();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      getHealthHistory();
      // getExpertsDetails();

      var user = firebase.auth().currentUser;
      if (user && user.uid) {
        // getFavoriteExperts();
        getUserDetails(user.uid);

        try {
          const obj = {
            tableName: Constant.App.firebaseTableNames.users,
            uid: user.uid,
          };
          getUserData(
            obj,
            (querySnapshot) => {
              const data = querySnapshot.data();
              // this.setState({
              //   questions: data.questions,
              //   credits: data.credits,
              // });
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
                OtherAndroidURL:
                  'https://play.google.com/store/apps/details?id=com.kiira&hl=en_US&gl=US',
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
    const {getLicenses} = this.props;
    this.checkLicenseStatus();
    getLicenses();
    // if (question) {
    //   this.setState({
    //     questionText: question,
    //   });
    // } else if (!question) {
    //   this.setState({
    //     questionText: '',
    //   });
    // }
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  // onChangeText = (value) => {
  //   const {setQuestionText, question} = this.props;
  //   this.setState({
  //     questionText: value,
  //   });
  //   setQuestionText(value);
  // };

  checkLicenseStatus = () => {
    const {licenses} = this.props;
    if (licenses) {
      const isValid = licenses.includes(
        this.props.userData.profileInfo.state.code,
      );
      if (isValid) {
        this.setState({videoEnabled: true});
      }
    }
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
    const {
      // getQuestion,
      userData,
      getHealthHistory,
      getExpertsDetails,
    } = this.props;
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
    // getQuestion(params);
    getRecentExpertsData(params);
    getHealthHistory();
    getExpertsDetails();
  }

  renderHeadingProfileView() {
    const {userData} = this.props;
    const {firstName, profileImageUrl} = userData.profileInfo;
    console.log(userData);
    return (
      <View style={styles.headingProfileImageParentContainer}>
        {/* <View style={styles.headingTextContainerStyle}>
          <CustomText style={styles.headingTextStyle}>
            {`Hello, ${firstName} !`}
          </CustomText>
        </View>
        <View style={styles.profileImgViewStyle}>
          <FastImage
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
            }}
            resizeMode="cover"
            source={{uri: profileImageUrl}}
          />
        </View> */}
      </View>
    );
  }

  renderDashBoard() {
    const {staticImages} = Constant.App;
    const {navigation, showHideErrorModal} = this.props;
    const {videoEnabled, chatEnabled} = this.state;

    return (
      <View style={styles.dashboardContainer}>
        <TouchableOpacity
          onPress={() => {
            if (videoEnabled) {
              navigation.navigate(Constant.App.screenNames.RequestVisit);
            } else {
              showHideErrorModal('Currently unavailable in your state');
            }
          }}>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={staticImages.bandaid}
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
                source={staticImages.squad}
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
          onPress={() => {
            if (chatEnabled) {
              navigation.navigate(Constant.App.screenNames.AskUser);
            } else {
              showHideErrorModal('Chat unavailable with current plan');
            }
          }}>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={staticImages.chat}
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
                source={staticImages.clipboard}
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
          onPress={() => {
            if (videoEnabled) {
              navigation.navigate(Constant.App.screenNames.Appointments);
            } else {
              showHideErrorModal('Currently unavailable in your state');
            }
          }}>
          <View style={styles.dashboardItem}>
            <View style={styles.dashboardItemLogo}>
              <Image
                source={staticImages.reminders}
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
                source={staticImages.sos}
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
    const {staticImages, screenNames} = Constant.App;
    const {navigation, showHideErrorModal} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" translucent={true} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.Header()}
          {this.renderHeadingProfileView()}
          {this.renderDashBoard()}
          <View style={styles.botContainer}>
            <Image
              resizeMode="contain"
              source={staticImages.loginLogoImage}
              style={styles.botLogo}
            />
            <View>
              <Text style={styles.botTitle}>Kiira</Text>
              <Text style={styles.botDescription}>
                Doctors and therapists (your Squad) are important folks, in
                sickness and in health! Are you feeling sick right now?
              </Text>
              <CustomButton
                buttonStyle={styles.buttonContainerStyle}
                textStyle={styles.buttonTextStyle}
                onPress={() =>
                  showHideErrorModal(
                    "That's great, if that changes let us know.",
                  )
                }
                text="I'm not feeling sick"
              />
              <CustomButton
                buttonStyle={styles.buttonContainerStyle}
                textStyle={styles.buttonTextStyle}
                onPress={() => navigation.navigate('TreatmentBot')}
                text="Now that you mention it..."
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  licenses: state.authLoadingReducer.licenses,
  userData: state.authLoadingReducer.userData,
  // recentExpertData: state.askReducer.recentExpertData,
  // previousQuestionData: state.askReducer.previousQuestionData,
  // questionData: state.askReducer.questionData,
  // question: state.askReducer.question,
});

const mapDispatchToProps = (dispatch) => ({
  // setData: (data) => dispatch(setUserData(data)),
  // getQuestion: (value) => dispatch(getQuestionData(value, dispatch)),
  // setQuestionText: (value) => dispatch(updateQuestion(value)),
  getTerms: () => dispatch(getTerms()),
  getPolicy: () => dispatch(getPolicy()),
  getLicenses: () => dispatch(getLicenses()),
  getHealthHistory: () => dispatch(getHealthHistoryAsync()),
  getExpertsDetails: () => dispatch(getExpertsDetailsAsync()),
  getFavoriteExperts: () => dispatch(getFavoriteExpertsAsync()),
  showHideErrorModal: (value) => dispatch(showOrHideModal(value)),
  getAgreements: () => dispatch(getAgreements()),
  getUserDetails: (uid) => dispatch(getUserDetails(uid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Dashboard));
