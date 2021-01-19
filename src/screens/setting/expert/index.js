import React, {PureComponent} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import CustomText from '../../../components/customText';
import Language from '../../../utils/localization';
import Constant from '../../../utils/constants';
import {Avatar} from 'react-native-elements';
import CustomInputText from '../../../components/customInputText';
import CustomSelectModal from '../../../components/customselectModal';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ImagePicker from 'react-native-image-picker';
import {updateExpertDataToFirebase} from './action';
import {showOrHideModal} from '../../../components/customModal/action';

let lang = Language['en'];
class SettingExpert extends PureComponent {
  constructor(props) {
    super(props);
    const {userData} = this.props;
    this.state = {
      bio: userData.profileInfo.bio,
      clinicInfo: userData.clinicInfo,
      credits: userData.credits,
      dob: userData.profileInfo.dob,
      email: userData.profileInfo.email,
      filepath: '',
      file: '',
      firstName: userData.profileInfo.firstName,
      gender: userData.profileInfo.gender,
      imageSrc: userData.profileInfo.profileImageUrl,
      imageUri: '',
      lastName: userData.profileInfo.lastName,
      license: userData.profileInfo.state.code,
      location: userData.clinicInfo.name,
      profileInfo: userData.profileInfo,
      selectedState: userData.profileInfo.state,
      showIosDateModal: false,
      showSelectStateModal: false,
      showSelectSexualityModal: false,
      states: Constant.App.Modal.states,
      pronounsArr: [
        {
          title: lang.addProfileData.sheHer,
          selected:
            userData.profileInfo.pronouns &&
            userData.profileInfo.pronouns === lang.addProfileData.sheHer
              ? true
              : false,
        },
        {
          title: lang.addProfileData.heHim,
          selected:
            userData.profileInfo.pronouns &&
            userData.profileInfo.pronouns === lang.addProfileData.heHim
              ? true
              : false,
        },
        {
          title: lang.addProfileData.theyThem,
          selected:
            userData.profileInfo.pronouns &&
            userData.profileInfo.pronouns === lang.addProfileData.theyThem
              ? true
              : false,
        },
      ],
    };
  }

  isPronounSelected(pronounsArr) {
    let isSelected = false;
    pronounsArr.forEach((element) => {
      if (element.selected) {
        isSelected = true;
      }
    });
    return isSelected;
  }

  getSelectedPronoun(pronounsArr) {
    let selectedValue = '';
    pronounsArr.forEach((element) => {
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
    } = this.props;
    const {
      bio,
      clinicInfo,
      credits,
      dob,
      email,
      file,
      filepath,
      firstName,
      gender,
      imageUri,
      lastName,
      license,
      location,
      profileInfo,
      pronounsArr,
      selectedState,
    } = this.state;
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
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
              showHideErrorModal(lang.addProfileData.emptyFirstNameMsg);
            } else if (!lastName.trim()) {
              showHideErrorModal(lang.addProfileData.emptyLastNameMsg);
            } else if (!selectedState) {
              showHideErrorModal(lang.addProfileData.emptyStateSelectionMsg);
            } else if (
              pronounsArr.length > 0 &&
              !this.isPronounSelected(pronounsArr)
            ) {
              showHideErrorModal(lang.addProfileData.emptyPronounsMsg);
            } else {
              let filename = null;
              const payloadData = {
                userParams: {
                  firstName: firstName.trim(),
                  lastName: lastName.trim(),
                  dob: dob ? dob : '',
                  email: email,
                  gender,
                  pronouns: this.getSelectedPronoun(pronounsArr),
                  state: selectedState,
                  credits,
                  bio,
                  license,
                  location,
                  clinicInfo,
                  profileInfo,
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
                    : `${Math.floor(Date.now())}${name}.${ext}`;
              } else if (userData.profileInfo.profileImageUrl) {
                payloadData.userParams.profileImageUrl =
                  userData.profileInfo.profileImageUrl;
              }

              if (filename) {
                payloadData.imageParams = {
                  file: Platform.OS == 'ios' ? imageUri : filepath,
                  filename,
                };
              }
              updateUserData(payloadData);
            }
          }}>
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
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('You cancelled image picker');
      } else if (response.error) {
        alert('And error occured: ' + JSON.stringify(response));
      } else {
        const source = {uri: response.uri};
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
    const {staticImages} = Constant.App;
    const {imageSrc} = this.state;
    return (
      <View style={styles.profileImgViewStyle}>
        <Avatar
          containerStyle={{alignSelf: 'center'}}
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
          source={{uri: imageSrc ? imageSrc : ''}}
          activeOpacity={0.7}
        />
        {Platform.OS === 'ios' && (
          <TouchableOpacity
            onPress={() => {
              this.requestCameraPermission();
            }}>
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
      bio,
      firstName,
      lastName,
      showSelectStateModal,
      selectedState,
      license,
      location,
    } = this.state;
    const {staticImages} = Constant.App;
    return (
      <View style={styles.inputTextParentContainerStyle}>
        <View style={styles.inputTextContainerStyle}>
          <View style={styles.inputTextFirstNameContainerStyle}>
            <CustomInputText
              autoCapitalize="words"
              onChangeText={(value) => this.setState({firstName: value})}
              placeholder={lang.addProfileData.firstName}
              value={firstName}
              style={
                firstName
                  ? styles.inputTypeStyle
                  : [styles.inputTypeStyle, {fontWeight: '100'}]
              }
              placeholderTextColor={Constant.App.colors.blackColor}
            />
          </View>
          <View style={styles.inputTextFirstNameContainerStyle}>
            <CustomInputText
              multiline
              autoCapitalize="words"
              onChangeText={(value) => this.setState({lastName: value})}
              placeholder={lang.addProfileData.lastName}
              value={lastName}
              style={
                lastName
                  ? styles.inputTypeStyle
                  : [styles.inputTypeStyle, {fontWeight: '100'}]
              }
              placeholderTextColor={Constant.App.colors.blackColor}
            />
          </View>
        </View>

        <View style={styles.inputTextContainerStyle}>
          <View style={styles.inputTextFirstNameContainerStyle}>
            <CustomInputText
              autoCapitalize="words"
              onChangeText={(value) => this.setState({location: value})}
              placeholder={'Location'}
              value={location}
              style={
                location
                  ? styles.inputTypeStyle
                  : [styles.inputTypeStyle, {fontWeight: '100'}]
              }
              placeholderTextColor={Constant.App.colors.blackColor}
            />
          </View>
          <View style={styles.inputTextFirstNameContainerStyle}>
            <CustomInputText
              autoCapitalize="words"
              onChangeText={(value) => this.setState({license: value})}
              placeholder={'License'}
              value={license}
              style={
                license
                  ? styles.inputTypeStyle
                  : [styles.inputTypeStyle, {fontWeight: '100'}]
              }
              placeholderTextColor={Constant.App.colors.blackColor}
            />
          </View>
        </View>

        <View style={styles.inputTextBioContainer}>
          <CustomInputText
            autoCapitalize="words"
            multiline
            onChangeText={(value) => this.setState({bio: value})}
            placeholder={'Bio'}
            value={bio}
            style={
              bio
                ? styles.inputTypeBio
                : [styles.inputTypeBio, {fontWeight: '100'}]
            }
            placeholderTextColor={Constant.App.colors.blackColor}
          />
        </View>

        <View style={styles.stateDropDownContainerStyle}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              this.setState({showSelectStateModal: !showSelectStateModal});
            }}>
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
      </View>
    );
  }

  renderPronounsView() {
    const {staticImages} = Constant.App;
    const {pronounsArr} = this.state;
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
            }}>
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
    const {navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.btnContainerStyle}
        onPress={() => {
          navigation.navigate(Constant.App.screenNames.ChangePassword);
        }}>
        <CustomText style={styles.btnTextStyle}>
          {lang.setting.changePassword}
        </CustomText>
      </TouchableOpacity>
    );
  }

  render() {
    const {showSelectStateModal} = this.state;
    return (
      <View style={styles.container}>
        {this.renderHeaderView()}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.renderProfileImageView()}
          {this.renderInputTextView()}
          {this.renderPronounsView()}
          {this.renderButtonView()}
          {showSelectStateModal ? (
            <CustomSelectModal
              data={this.state.states}
              onSelection={(item) => {
                console.log('---onSelection CustomSelectModal---', item);
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
        </ScrollView>
        {Platform.OS === 'ios' && <KeyboardSpacer />}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.authLoadingReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (value) => dispatch(updateExpertDataToFirebase(value)),
  showHideErrorModal: (value) => dispatch(showOrHideModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingExpert);
