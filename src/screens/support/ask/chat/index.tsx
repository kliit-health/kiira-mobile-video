import React from 'react';
import {
    View,
    TouchableOpacity,
    FlatList,
    Platform,
    Image,
    Modal,
    AppState,
    Alert
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import styles from './style';
import CustomText from '~/components/customText';
import Constant from '~/utils/constants';
import ImagePicker from 'react-native-image-picker';
import InputText from '~/components/customInputText/simpleInputText';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import MessageContainer from './MessageContainer';
import metrices from '~/utils/metrices';
import {
    loadExpertMessages,
    sendMessageExpert,
    setQuestionExpertData,
    clearChatExpertState,
    checkUserStatus,
    toggleExpertStatus,
    resolveQuestion,
} from './action';
import { getChatItems } from './selectors';
import moment from 'moment';
import CustomButton from '~/components/customButton';
import { stopObserverChat } from './action';
import { topics } from '~/models';

let key;
class ChatExpert extends React.PureComponent {
    public state: any;
    public props: any;
    public setState: any;
    public flatList: any;
    public navigation: any;
    public toggleStatus: any;
    public userData: any;
    public questionData: any;
    public loadUserMessages: any;
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
    public staticImages: any;
    public lang: any;
    public messages: any;
    public showActionModal: any;
    public resolve: any;

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            showActionModal: false,
            appState: AppState.currentState,
            imageUri: '',
            name: '',
            filename: '',
            path: '',
            rating: 0,
        };
    }

    initStatus(status) {
        const { navigation, toggleStatus, userData } = this.props;
        const { questionData } = navigation.state.params;
        const payloadToggleStatus = {
            userInfo: userData,
            toggleStatusParams: {
                uid: userData.uid,
                updatedData: {
                    isActive: status,
                    activeTime: moment().unix(),
                    toUserId:
                        questionData && questionData.userInfo.uid
                            ? questionData.userInfo.uid
                            : '',
                },
            },
            questionData,
        };
        toggleStatus(payloadToggleStatus);
    }

    async componentDidMount() {
        const { loadUserMessages, navigation, setId, checkStatus } = this.props;
        // key = await sendEncryptedKeyToFirebase();
        // rsa.setPublicString(JSON.parse(key.publicKey));
        const { questionData } = navigation.state.params;
        this.initStatus(true);
        const payloadCheckStatus = {
            userInfo: questionData.userInfo,
            questionData,
        };
        checkStatus(payloadCheckStatus);
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
 
        const { createdMessage } = navigation.state.params;
        if(createdMessage){
            this.handleButtonPress();
        }
    }

    componentWillUnmount() {
        const { clearState, stopObervers } = this.props;
        clearState();
        this.initStatus(false);
        stopObervers();
    }

    handleButtonPress() {
        const { sendMessageUser, messageId, questionId } = this.props;
        const { message, imageUri, filename, path } = this.state;
        var encrypted = '';
        var payloadData = {};
        // rsa.setPublicString(JSON.parse(key.publicKey));
        if (message && imageUri) {
            // encrypted = rsa.encrypt(message);
            payloadData = {
                questionId,
                id: messageId,
                lastMessage: message,
                messageParams: {
                    // text: encrypted,
                    text: message,
                    type: 'Expert',
                    createdAt: moment().unix(),
                    questionId: '',
                    isRead: false,
                    image: '',
                },
                imageParams: {
                    file: Platform.OS == 'ios' ? imageUri : path,
                    filename,
                },
            };
        } else if (message) {
            // encrypted = rsa.encrypt(message);
            // encrypted = message;
            payloadData = {
                questionId,
                id: messageId,
                lastMessage: message,
                messageParams: {
                    // text: encrypted,
                    text: message,
                    type: 'Expert',
                    createdAt: moment().unix(),
                    questionId: '',
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
                    type: 'Expert',
                    createdAt: moment().unix(),
                    questionId: '',
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

    pickImage() {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('You cancelled image picker');
            } else if (response.error) {
                Alert.alert('And error occured: ' + JSON.stringify(response));
            } else {
                let name = response.uri.substring(
                    response.uri.lastIndexOf('/') + 1,
                    response.uri.length,
                );
                const ext = response.type.split('/').pop();
                const filename =
                    Platform.OS === 'ios'
                        ? `${Math.floor(Date.now())}${name}`
                        : `${Math.floor(Date.now())}${name}.${ext}`;
                this.setState({
                    imageUri: response.uri,
                    name,
                    filename,
                    path: response.path,
                });
            }
        });
    }

    renderHeaderView() {
        const { navigation } = this.props;
        const { staticImages } = Constant.App;
        const { questionData } = navigation.state.params;
        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                    }}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        resizeMode="contain"
                        source={staticImages.backIcon}
                    />
                </TouchableOpacity>
                <View style={styles.profileHeaderStyle}>
                    <FastImage
                        containerStyle={{ alignSelf: 'center' }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                        }}
                        source={{
                            uri: questionData.userInfo.profileInfo
                                .profileImageUrl,
                        }}
                        activeOpacity={0.7}
                    />
                    <CustomText style={styles.titleTextStyle}>
                        {`${questionData.userInfo.profileInfo.firstName} ${questionData.userInfo.profileInfo.lastName}`}
                    </CustomText>
                </View>
                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        opacity:
                            questionData && questionData.isResolved ? 0 : 100,
                    }}
                    onPress={() => {
                        this.setState({
                            showActionModal: true,
                        });
                    }}
                >
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        resizeMode="contain"
                        source={staticImages.menuDotIcon}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderFooterView() {
        const { staticImages } = Constant.App;
        const { message, imageUri } = this.state;
        const { lang } = this.props;
        return (
            <View style={styles.chatInputParentContainer}>
                {imageUri ? (
                    <View style={styles.imageParentContainerStyle}>
                        <TouchableOpacity
                            style={styles.imageCrossContainerStyle}
                            onPress={() =>
                                this.setState({
                                    imageUri: '',
                                    name: '',
                                    filename: '',
                                    path: '',
                                })
                            }
                        >
                            <Image
                                style={styles.imageCrossStyle}
                                resizeMode="contain"
                                source={staticImages.crossIcon}
                            />
                        </TouchableOpacity>
                        <View style={styles.imageContainerStyle}>
                            <Image
                                style={{
                                    height: metrices.width - 100,
                                    width: metrices.width * 0.65,
                                    resizeMode: 'cover',
                                }}
                                source={{
                                    uri: imageUri,
                                }}
                                defaultSource={
                                    Constant.App.staticImages
                                        .profilePlaceholderImg
                                }
                            />
                        </View>
                    </View>
                ) : null}
                <View style={styles.chatInputContainer}>
                    {/* {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={styles.cameraContainerStyle}
              onPress={() => this.pickImage()}>
              <Image
                style={{
                  width: 28,
                  height: 28,
                }}
                resizeMode="contain"
                source={staticImages.cameraGreyIcon}
              />
            </TouchableOpacity>
          )} */}
                    <View style={styles.textContainerStyle}>
                        <InputText
                            maxHeight={100}
                            multiline={true}
                            autoCapitalize="sentences"
                            onChangeText={value => {
                                this.setState({
                                    message: value,
                                });
                            }}
                            placeholder={lang.chat.enterMsg}
                            value={message}
                            style={styles.textInputStyle}
                            placeholderTextColor={Constant.App.colors.lightGrey}
                        />
                        <TouchableOpacity
                            style={styles.sendButtonContainerStyle}
                            onPress={() =>
                                (message || imageUri) &&
                                this.handleButtonPress()
                            }
                        >
                            <Image
                                style={{
                                    width: 28,
                                    height: 28,
                                }}
                                resizeMode="contain"
                                source={staticImages.sendIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    renderResolvedFooterView() {
        const { lang } = this.props;
        return (
            <View style={styles.resolvedParentContainer}>
                <CustomText style={styles.resovledTextStyle}>
                    {lang.chat.resolvedConversationMsg}
                </CustomText>
            </View>
        );
    }
    renderMessageList(item, index, datamessage) {
        return (
            <MessageContainer
                item={item}
                index={index}
                lastIndex={datamessage.length}
                textkey={key}
            />
        );
    }

    renderMessageView() {
        const { messages } = this.props;
        const datamessage = getChatItems(messages);
        return (
            <FlatList
                ref={ref => {
                    this.flatList = ref;
                }}
                data={datamessage}
                style={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) =>
                    this.renderMessageList(item, index, datamessage)
                }
                inverted={true}
            />
        );
    }

    renderActionModal() {
        const { showActionModal } = this.state;
        const { questionData, resolve, navigation, lang } = this.props;

        const resolveQuestionByCategory = topic => {
            this.setState({
                showActionModal: false,
            });
            const questionRef = Object.assign({}, questionData);
            questionRef.isResolved = true;
            questionRef.resolvedDate = moment().unix();
            questionRef.isRated = false;
            questionRef.category = topic;
            const payloadData = {
                resolveQuestionParams: questionRef,
                navigation,
            };
            resolve(payloadData);
        };

        return (
            <Modal
                animationType="fade"
                onRequestClose={() => {}}
                transparent
                visible={showActionModal}
            >
                <View style={styles.actionModalParentContainerStyle}>
                    <View style={styles.actionModalInnerContainerStyle}>
                        <CustomText style={styles.actionModalTitleTextStyle}>
                            {'Resolve question by topic:'}
                        </CustomText>
                        {topics.map(({ title }) => (
                            // <View key={title} style={styles.actionModalLineSeperator}>
                            <TouchableOpacity
                                onPress={() => {
                                    resolveQuestionByCategory(title);
                                }}
                            >
                                <CustomText
                                    style={styles.actionModalBlueTextStyle}
                                >
                                    {title}
                                </CustomText>
                            </TouchableOpacity>
                            // </View>
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
        const { navigation } = this.props;
        const { questionData } = navigation.state.params;
        const { showActionModal } = this.state;
        return (
            <View style={styles.parentContainer}>
                {this.renderHeaderView()}
                {this.renderMessageView()}
                {questionData && questionData.isResolved
                    ? this.renderResolvedFooterView()
                    : this.renderFooterView()}
                {showActionModal ? this.renderActionModal() : null}
                {Platform.OS === 'ios' ? <KeyboardSpacer /> : null}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    userData: state.user.data,
    messages: state.chatExpert.messages,
    messageId: state.chatExpert.messageId,
    questionId: state.chatExpert.questionId,
    questionData: state.chatExpert.questionData,
    userStatusData: state.chatExpert.userStatusData,
    isActive: state.user.data.isActive,
    lang: state.language,
});

const mapDispatchToProps = dispatch => ({
    loadUserMessages: value => dispatch(loadExpertMessages(value, dispatch)),
    sendMessageUser: value => dispatch(sendMessageExpert(value)),
    setId: value => dispatch(setQuestionExpertData(value)),
    clearState: () => dispatch(clearChatExpertState()),
    checkStatus: value => dispatch(checkUserStatus(value, dispatch)),
    toggleStatus: value => dispatch(toggleExpertStatus(value)),
    resolve: value => dispatch(resolveQuestion(value)),
    stopObervers: () => dispatch(stopObserverChat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatExpert);
