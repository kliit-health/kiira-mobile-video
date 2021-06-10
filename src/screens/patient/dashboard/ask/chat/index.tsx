import React from 'react';
import {Platform, AppState} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {
  loadMessages,
  sendMessage,
  setQuestion,
  clearChatState,
  setQuestionId,
  setExpertRating,
  checkExpertStatus,
  toggleUserStatus,
  stopObserverChat,
} from './action';
import moment from 'moment';
import {Container, Header, RatingModal} from '~/components';
import {MessageList, Footer} from './sections';
import {screenNames} from '~/utils/constants';
class Chat extends React.PureComponent {
	public state: any;
	public props: any;
	public setState: any;
	public navigation: any;
	public toggleStatus: any;
	public userData: any;
	public expertDetails: any;
	public questionData: any;
	public questionValue: any;
	public loadUserMessages: any;
	public question: any;
	public addQuestion: any;
	public setId: any;
	public checkStatus: any;
	public clearState: any;
	public stopObervers: any;
	public sendMessageUser: any;
	public messageId: any;
	public questionId: any;
	public message: any;
	public imageUri: any;
	public filename: any;
	public path: any;
	public rateExpert: any;
	public showRatingModal: any;
	public profileInfo: any;
	public firstName: any;
	public lastName: any;
	public profileImageUrl: any;

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showRatingModal: false,
      appState: AppState.currentState,
      imageUri: '',
      name: '',
      filename: '',
      path: '',
    };
  }

  initStatus(status) {
    const {navigation, toggleStatus, userData} = this.props;
    const {expertDetails, questionData} = navigation.state.params;
    const payloadToggleStatus = {
      userInfo: userData,
      toggleStatusParams: {
        uid: userData.uid,
        updatedData: {
          isActive: status,
          toUserId: status
            ? expertDetails
              ? expertDetails.uid
              : questionData.expertInfo.uid
            : '',
        },
      },
      questionData,
    };
    toggleStatus(payloadToggleStatus);
  }

  componentDidUpdate() {
    const {questionValue} = this.props;

    if (questionValue && questionValue.isResolved && !questionValue.isRated) {
      setTimeout(() => {
        this.setState({
          showRatingModal: true,
        });
      }, 500);
    }
  }

  componentDidMount() {
    const {
      loadUserMessages,
      navigation,
      question,
      addQuestion,
      userData,
      setId,
      checkStatus,
      questionValue,
    } = this.props;

    const {expertDetails, questionData} = navigation.state.params;
    this.initStatus(true);
    const payloadCheckStatus = {
      expertInfo: expertDetails ? expertDetails : questionData.expertInfo,
      questionData: questionData ? questionData : null,
    };
    checkStatus(payloadCheckStatus);
    if (expertDetails && !questionData) {
      const payloadData = {
        userInfo: userData,
        expertInfo: expertDetails,
        questionEncrypted: '',
        question,
      };
      addQuestion(payloadData);
    } else {
      const payloadData = {
        id: questionData.messageId,
      };
      const ids = {
        messageId: questionData.messageId,
        questionId: questionData.questionId,
        questionData,
      };
      setId(ids);
      loadUserMessages(payloadData);
    }
    if (questionValue && questionValue.isResolved && !questionValue.isRated) {
      this.setState({
        showRatingModal: true,
      });
    }
  }

  componentWillUnmount() {
    const {clearState, stopObervers} = this.props;
    this.initStatus(false);
    clearState();
    stopObervers();
  }

  handleSend() {
    const {sendMessageUser, messageId, questionId} = this.props;
    const {message, imageUri, filename, path} = this.state;
    var encrypted = '';
    var payloadData = {};
    if (message && imageUri) {
      encrypted = message;
      payloadData = {
        questionId,
        id: messageId,
        lastMessage: message,
        messageParams: {
          text: encrypted,
          type: 'User',
          createdAt: moment().unix(),
          isRead: false,
          image: '',
        },
        imageParams: {
          file: Platform.OS == 'ios' ? imageUri : path,
          filename,
        },
      };
    } else if (message) {
      encrypted = message;
      payloadData = {
        questionId,
        id: messageId,
        lastMessage: message,
        messageParams: {
          text: encrypted,
          type: 'User',
          createdAt: moment().unix(),
          isRead: false,
          image: '',
        },
      };
    } else if (imageUri) {
      payloadData = {
        questionId,
        id: messageId,
        lastMessage: 'Sent a image',
        messageParams: {
          text: '',
          type: 'User',
          createdAt: moment().unix(),
          isRead: false,
          image: '',
        },
        imageParams: {
          file: Platform.OS == 'ios' ? imageUri : path,
          filename,
        },
      };
    }
    sendMessageUser(payloadData);
    this.setState({
      message: '',
      imageUri: '',
      name: '',
      filename: '',
      path: '',
    });
  }

  handlePicker() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('You cancelled image picker');
      } else if (response.error) {
        alert('And error occured: ' + JSON.stringify(response));
      } else {
        let name = response.uri.substring(
          response.uri.lastIndexOf('/') + 1,
          response.uri.length,
        );
        const ext = response.type.split('/').pop();
        const filename = Platform.OS === 'ios' ? name : `${name}.${ext}`;
        this.setState({
          imageUri: response.uri,
          name,
          filename,
          path: response.path,
        });
      }
    });
  }

  handleBackPress = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  handlePickerCancel = () => {
    this.setState({
      imageUri: '',
      name: '',
      filename: '',
      path: '',
    });
  };

  handleTextChange = (value) => {
    this.setState({
      message: value,
    });
  };

  handleRatingSubmit = ({rating, questionId, expertDetails}) => {
    const {
      rateExpert,
      userData: {uid},
    } = this.props;
    const userRating = [...expertDetails.userRating, {rating, uid}];
    rateExpert({questionId, userRating, expertId: expertDetails.uid});
  };

  render() {
    const {navigation, questionId} = this.props;
    const {questionData, expertDetails} = navigation.state.params;
    const {imageUri, showRatingModal} = this.state;
    const {profileInfo} = expertDetails;
    const {firstName, lastName, profileImageUrl} = profileInfo;
    const fullName = `${firstName} ${lastName}`;

    return (
      <Container unformatted>
        <Header
          title={fullName}
          onBack={() => this.handleBackPress()}
          onClose={() => navigation.navigate(screenNames.BottomTab)}
        />

        <MessageList messages={this.props.messages} />
        <Footer
          message={this.state.message}
          onSendPress={() => this.handleSend()}
          onChangeText={(value) => this.handleTextChange(value)}
          onPickerPress={() => this.handlePicker()}
          onPickerCancel={() => this.handlePickerCancel()}
          imageUri={imageUri}
          resolved={questionData ? questionData.isResolved : false}
        />
        <RatingModal
          visible={showRatingModal}
          title="Your question has been resolved!"
          description={`Rate your conversation with ${fullName}`}
          avatarUrl={profileImageUrl}
          onSubmit={(rating) =>
            this.handleRatingSubmit({
              rating: rating * 2,
              questionId,
              expertDetails,
            })
          }
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.ask.question,
  userData: state.user.data,
  messages: state.chat.messages,
  messageId: state.chat.messageId,
  questionId: state.chat.questionId,
  questionValue: state.chat.questionData,
  expertStatusData: state.chat.expertStatusData,
  isActive: state.user.data.isActive,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadUserMessages: (value) => dispatch(loadMessages(value, dispatch)),
  sendMessageUser: (value) => dispatch(sendMessage(value)),
  addQuestion: (value) => dispatch(setQuestion(value, dispatch)),
  clearState: () => dispatch(clearChatState()),
  setId: (value) => dispatch(setQuestionId(value)),
  rateExpert: (value) =>
    dispatch(setExpertRating({...value, navigation: ownProps.navigation})),
  checkStatus: (value) => dispatch(checkExpertStatus(value, dispatch)),
  toggleStatus: (value) => dispatch(toggleUserStatus(value)),
  stopObervers: () => dispatch(stopObserverChat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
