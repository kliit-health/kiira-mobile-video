import React, { PureComponent } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView,
    PermissionsAndroid,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import CustomText from '~/components/customText';
import Constant from '~/utils/constants';
import { Avatar } from 'react-native-elements';
import CustomInputText from '~/components/customInputText';
import CustomSelectModal from '~/components/customselectModal';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ImagePicker from 'react-native-image-picker';
import { updateAccount } from '~/redux/reducers/account';
import { showOrHideModal } from '~/components/customModal/action';

class Setting extends PureComponent {
    public props: any;
    public state: any;
    public setState: any;
    public userData: any;
    public lang: any;
    public navigation: any;
    public showHideErrorModal: any;
    public updateUserData: any;
    public firstName: any;
    public lastName: any;
    public dob: any;
    public email: any;
    public pronounsArr: any;
    public imageUri: any;
    public file: any;
    public filepath: any;
    public selectedState: any;
    public selectedSexuality: any;
    public insurance: any;
    public insurancePlan: any;
    public zipcode: any;
    public enrollment: any;
    public income: any;
    public homeSecure: any;
    public foodSecure: any;
    public ethnicity: any;
    public phoneNumber: any;
    public gender: any;
    public staticImages: any;
    public imageSrc: any;
    public showSelectStateModal: any;
    public showSelectSexualityModal: any;

    constructor(props) {
        super(props);
        const { userData, lang } = this.props;
        this.state = {
            firstName: userData.profileInfo.firstName,
            lastName: userData.profileInfo.lastName,
            imageSrc: userData.profileInfo.profileImageUrl,
            email: userData.profileInfo.email,
            imageUri: '',
            filepath: '',
            file: '',
            showIosDateModal: false,
            showSelectStateModal: false,
            showSelectSexualityModal: false,
            dob: userData.profileInfo.dob,
            gender: userData.profileInfo.gender,
            selectedState: userData.profileInfo.state,
            selectedSexuality: userData.profileInfo.sexuality,
            states: Constant.App.Modal.states,
            sexuality: Constant.App.Modal.sexuality,
            insurance: userData.profileInfo.insurance,
            insurancePlan: userData.profileInfo.insurancePlan,
            zipcode: userData.profileInfo.zipcode,
            enrollment: userData.profileInfo.enrollment,
            income: userData.profileInfo.income,
            homeSecure: userData.profileInfo.homeSecure,
            foodSecure: userData.profileInfo.foodSecure,
            ethnicity: userData.profileInfo.ethnicity,
            lang: 'en',
            phoneNumber: userData.profileInfo.phoneNumber,
            pronounsArr: [
                {
                    title: lang.addProfileData.sheHer,
                    selected:
                        userData.profileInfo.pronouns &&
                        userData.profileInfo.pronouns ===
                            lang.addProfileData.sheHer
                            ? true
                            : false,
                },
                {
                    title: lang.addProfileData.heHim,
                    selected:
                        userData.profileInfo.pronouns &&
                        userData.profileInfo.pronouns ===
                            lang.addProfileData.heHim
                            ? true
                            : false,
                },
                {
                    title: lang.addProfileData.theyThem,
                    selected:
                        userData.profileInfo.pronouns &&
                        userData.profileInfo.pronouns ===
                            lang.addProfileData.theyThem
                            ? true
                            : false,
                },
            ],
        };
    }

    isPronounSelected(pronounsArr) {
        let isSelected = false;
        pronounsArr.forEach(element => {
            if (element.selected) {
                isSelected = true;
            }
        });
        return isSelected;
    }

    getSelectedPronoun(pronounsArr) {
        let selectedValue = '';
        pronounsArr.forEach(element => {
            if (element.selected) {
                selectedValue = element.title;
            }
        });
        return selectedValue;
    }

    renderHeaderView() {
        const {
            navigation,
            showHideErrorModal,
            updateUserData,
            userData,
            lang,
        } = this.props;
        const {
            firstName,
            lastName,
            dob,
            email,
            pronounsArr,
            imageUri,
            file,
            filepath,
            selectedState,
            selectedSexuality,
            insurance,
            insurancePlan,
            zipcode,
            enrollment,
            income,
            homeSecure,
            foodSecure,
            ethnicity,
            phoneNumber,
            gender,
        } = this.state;
        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <CustomText style={styles.cancelTextStyle}>
                        {lang.setting.cancel}
                    </CustomText>
                </TouchableOpacity>
                <CustomText style={styles.titleTextStyle}>
                    {lang.setting.title}
                </CustomText>
                <TouchableOpacity
                    onPress={() => {
                        if (!firstName.trim()) {
                            showHideErrorModal(
                                lang.addProfileData.emptyFirstNameMsg,
                            );
                        } else if (!lastName.trim()) {
                            showHideErrorModal(
                                lang.addProfileData.emptyLastNameMsg,
                            );
                        } else if (!selectedState) {
                            showHideErrorModal(
                                lang.addProfileData.emptyStateSelectionMsg,
                            );
                        } else if (
                            pronounsArr.length > 0 &&
                            !this.isPronounSelected(pronounsArr)
                        ) {
                            showHideErrorModal(
                                lang.addProfileData.emptyPronounsMsg,
                            );
                        } else {
                            let filename = null;
                            const payloadData = {
                                userParams: {
                                    firstName: firstName.trim(),
                                    lastName: lastName.trim(),
                                    dob: dob ? dob : '',
                                    email: email,
                                    pronouns:
                                        this.getSelectedPronoun(pronounsArr),
                                    state: selectedState,
                                    sexuality: selectedSexuality,
                                    insurance,
                                    insurancePlan,
                                    zipcode,
                                    enrollment,
                                    income,
                                    homeSecure,
                                    foodSecure,
                                    ethnicity,
                                    phoneNumber,
                                    lang: 'en',
                                    gender,
                                },
                                navigation,
                            };
                            if (imageUri) {
                                let name = imageUri.substring(
                                    imageUri.lastIndexOf('/') + 1,
                                    imageUri.length,
                                );
                                const ext = file.type.split('/').pop(); // Extract image extension
                                filename =
                                    Platform.OS === 'ios'
                                        ? `${Math.floor(Date.now())}${name}`
                                        : `${Math.floor(
                                              Date.now(),
                                          )}${name}.${ext}`;
                            } else if (userData.profileInfo.profileImageUrl) {
                                payloadData.userParams.profileImageUrl =
                                    userData.profileInfo.profileImageUrl;
                            }

                            if (filename) {
                                payloadData.imageParams = {
                                    file:
                                        Platform.OS == 'ios'
                                            ? imageUri
                                            : filepath,
                                    filename,
                                };
                            }
                            updateUserData(payloadData);
                        }
                    }}
                >
                    <CustomText style={styles.doneTextStyle}>
                        {lang.setting.done}
                    </CustomText>
                </TouchableOpacity>
            </View>
        );
    }

    requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    const grantedAgain = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    );
                    if (grantedAgain === PermissionsAndroid.RESULTS.GRANTED) {
                        this.pickImage();
                    } else {
                        this.pickImage();
                    }
                } else {
                    this.pickImage();
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            this.pickImage();
        }
    };

    pickImage = () => {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('RESPONSE BEGINING', response);
            if (response.error) {
                console.log('RESPONSE ERROR', response);
                alert('And error occured: ' + JSON.stringify(response));
            } else {
                console.log('RESPONSE', response);
                const source = { uri: response.uri };
                this.setState({
                    imageSrc: response.uri,
                    imageUri: response.uri,
                    filepath: response.path,
                    file: response,
                });
            }
        });
    };

    renderProfileImageView() {
        const { staticImages } = Constant.App;
        const { imageSrc } = this.state;
        const { lang } = this.props;
        return (
            <View style={styles.profileImgViewStyle}>
                <Avatar
                    containerStyle={{ alignSelf: 'center' }}
                    renderPlaceholderContent={
                        <Image
                            style={{
                                width: 120,
                                height: 120,
                            }}
                            resizeMode="stretch"
                            source={staticImages.profilePlaceholderImg}
                        />
                    }
                    size={120}
                    rounded
                    source={{ uri: imageSrc ? imageSrc : '' }}
                    activeOpacity={0.7}
                />
                {Platform.OS === 'ios' && (
                    <TouchableOpacity
                        onPress={() => {
                            this.requestCameraPermission();
                        }}
                    >
                        <CustomText style={styles.changeProfileTextStyle}>
                            {lang.setting.changePhoto}
                        </CustomText>
                    </TouchableOpacity>
                )}
            </View>
        );
    }

    renderInputTextView() {
        const {
            firstName,
            lastName,
            dob,
            showSelectStateModal,
            showSelectSexualityModal,
            selectedState,
            selectedSexuality,
            insurance,
            insurancePlan,
        } = this.state;
        const { lang } = this.props;
        const { staticImages } = Constant.App;
        return (
            <View style={styles.inputTextParentContainerStyle}>
                <View style={styles.inputTextContainerStyle}>
                    <View style={styles.inputTextFirstNameContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words"
                            onChangeText={value =>
                                this.setState({ firstName: value })
                            }
                            placeholder={lang.addProfileData.firstName}
                            value={firstName}
                            style={
                                firstName
                                    ? styles.inputTypeStyle
                                    : [
                                          styles.inputTypeStyle,
                                          { fontWeight: '100' },
                                      ]
                            }
                            placeholderTextColor={
                                Constant.App.colors.blackColor
                            }
                        />
                    </View>
                    <View style={styles.inputTextFirstNameContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words"
                            onChangeText={value =>
                                this.setState({ lastName: value })
                            }
                            placeholder={lang.addProfileData.lastName}
                            value={lastName}
                            style={
                                lastName
                                    ? styles.inputTypeStyle
                                    : [
                                          styles.inputTypeStyle,
                                          { fontWeight: '100' },
                                      ]
                            }
                            placeholderTextColor={
                                Constant.App.colors.blackColor
                            }
                        />
                    </View>
                </View>

                <View style={styles.inputTextContainerStyle}>
                    <View style={styles.inputTextFirstNameContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words"
                            onChangeText={value =>
                                this.setState({ insurance: value })
                            }
                            placeholder={lang.addProfileData.insurance}
                            value={insurance}
                            style={
                                insurance
                                    ? styles.inputTypeStyle
                                    : [
                                          styles.inputTypeStyle,
                                          { fontWeight: '100' },
                                      ]
                            }
                            placeholderTextColor={
                                Constant.App.colors.blackColor
                            }
                        />
                    </View>
                    <View style={styles.inputTextFirstNameContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words"
                            onChangeText={value =>
                                this.setState({ insurancePlan: value })
                            }
                            placeholder={lang.addProfileData.plan}
                            value={insurancePlan}
                            style={
                                insurancePlan
                                    ? styles.inputTypeStyle
                                    : [
                                          styles.inputTypeStyle,
                                          { fontWeight: '100' },
                                      ]
                            }
                            placeholderTextColor={
                                Constant.App.colors.blackColor
                            }
                        />
                    </View>
                </View>

                <View style={styles.birthDayContainerStyle}>
                    <CustomInputText
                        onChangeText={value => this.setState({ dob: value })}
                        placeholder={'DOB'}
                        value={dob}
                        style={styles.birthDayTextStyle}
                        placeholderTextColor={Constant.App.colors.blackColor}
                    />
                </View>

                <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => {
                            this.setState({
                                showSelectStateModal: !showSelectStateModal,
                            });
                        }}
                    >
                        <CustomText style={styles.stateDropDownTextStyle}>
                            {selectedState
                                ? selectedState.value
                                : lang.addProfileData.stateText}
                        </CustomText>
                        <Image
                            resizeMode="contain"
                            source={staticImages.downArrow}
                            style={styles.dropDownIconStyle}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => {
                            this.setState({
                                showSelectSexualityModal:
                                    !showSelectSexualityModal,
                            });
                        }}
                    >
                        <CustomText style={styles.stateDropDownTextStyle}>
                            {selectedSexuality
                                ? selectedSexuality.value
                                : lang.addProfileData.sexuality}
                        </CustomText>
                        <Image
                            resizeMode="contain"
                            source={staticImages.downArrow}
                            style={styles.dropDownIconStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    renderPronounsView() {
        const { staticImages } = Constant.App;
        const { pronounsArr } = this.state;
        const { lang } = this.props;
        return (
            <View style={styles.pronounsParentContainerStyle}>
                <CustomText style={styles.pronounsTitleTextStyle}>
                    {lang.addProfileData.pronounsTitle}
                </CustomText>
                {pronounsArr.map((item, key) => (
                    <TouchableOpacity
                        key={key}
                        onPress={() => {
                            pronounsArr.forEach((element, index) => {
                                if (element.selected) {
                                    pronounsArr[index].selected = false;
                                }
                            });
                            pronounsArr[key].selected = true;
                            this.setState({
                                pronounsArr: Object.assign([], [], pronounsArr),
                            });
                        }}
                    >
                        <View style={styles.pronounsContainerStyle}>
                            <Image
                                resizeMode="contain"
                                source={
                                    item.selected
                                        ? staticImages.checkBoxSelectedIcon
                                        : staticImages.checkBoxIcon
                                }
                                style={styles.pronounsChecboxIconStyle}
                            />
                            <CustomText style={styles.pronounsTextStyle}>
                                {item.title}
                            </CustomText>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    renderButtonView() {
        const { navigation, lang } = this.props;
        return (
            <TouchableOpacity
                style={styles.btnContainerStyle}
                onPress={() => {
                    navigation.navigate(
                        Constant.App.screenNames.ChangePassword,
                    );
                }}
            >
                <CustomText style={styles.btnTextStyle}>
                    {lang.setting.changePassword}
                </CustomText>
            </TouchableOpacity>
        );
    }

    render() {
        const { showSelectStateModal, showSelectSexualityModal } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" translucent={true} />
                {this.renderHeaderView()}
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderProfileImageView()}
                    {this.renderInputTextView()}
                    {this.renderPronounsView()}
                    {this.renderButtonView()}
                    {showSelectStateModal ? (
                        <CustomSelectModal
                            data={this.state.states}
                            onSelection={item => {
                                console.log(
                                    '---onSelection CustomSelectModal---',
                                    item,
                                );
                                this.setState({
                                    selectedState: item,
                                    showSelectStateModal: false,
                                });
                            }}
                            onClose={() => {
                                console.log('---onClose CustomSelectModal---');
                                this.setState({
                                    showSelectStateModal: false,
                                });
                            }}
                        />
                    ) : null}
                    {showSelectSexualityModal ? (
                        <CustomSelectModal
                            data={this.state.sexuality}
                            onSelection={item => {
                                console.log(
                                    '---onSelection CustomSelectModal---',
                                    item,
                                );
                                this.setState({
                                    selectedSexuality: item,
                                    showSelectSexualityModal: false,
                                });
                            }}
                            onClose={() => {
                                console.log('---onClose CustomSelectModal---');
                                this.setState({
                                    showSelectSexualityModal: false,
                                });
                            }}
                        />
                    ) : null}
                </ScrollView>
                {Platform.OS === 'ios' && <KeyboardSpacer />}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => ({
    userData: state.user.data,
    lang: state.language,
});

const mapDispatchToProps = dispatch => ({
    updateUserData: value => dispatch(updateAccount(value)),
    showHideErrorModal: value => dispatch(showOrHideModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
