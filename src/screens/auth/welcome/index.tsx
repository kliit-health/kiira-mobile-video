import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import TextInputMask from 'react-native-text-input-mask';
import Constant, { colors, icons } from '~/utils/constants';
import styles from './styles';
import CustomButton from '~/components/customButton';
import { CustomText, Icon } from '~/components';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CustomSelectModal from '~/components/customselectModal';
import ImagePicker from 'react-native-image-picker';
import { handleNavigation } from '~/utils/functions';

const Welcome = ({ navigation }) => {
  const { staticImages, screenNames } = Constant.App;

  const [showStateModal, setShowStateModal] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showPronounModal, setShowPronounModal] = useState(false);
  const [userProfileData, setUserProfileData] = useState({
    firstName: '',
    nickName: '',
    lastName: '',
    birthday: '',
    imageSrc: '',
    imageUri: '',
    selectedState: { code: '', value: '' },
    selectedGender: { code: '', value: '' },
    selectedPronoun: { code: '', value: '' },
  });
  const [filePath, setFilePath] = useState('');
  const [file, setFile] = useState({});
  const RenderStateModalView = () => {
    return (
      <CustomSelectModal
        data={Constant.App.Modal.states}
        onSelection={item => {
          console.log('---onSelection CustomSelectModal---', item);
          setUserProfileData({
            ...userProfileData,
            selectedState: item,
          });
          setShowStateModal(false);
        }}
        onClose={() => {
          console.log('---onClose CustomSelectModal---');
          setShowStateModal(false);
        }}
      />
    );
  };
  const RenderGenderModalView = () => {
    return (
      <CustomSelectModal
        data={Constant.App.Modal.gender}
        onSelection={item => {
          console.log('---onSelection CustomSelectModal---', item);
          setUserProfileData({
            ...userProfileData,
            selectedGender: item,
          });
          setShowGenderModal(false);
        }}
        onClose={() => {
          console.log('---onClose CustomSelectModal---');
          setShowGenderModal(false);
        }}
      />
    );
  };
  const RenderPronounModalView = () => {
    return (
      <CustomSelectModal
        data={Constant.App.Modal.Pronouns}
        onSelection={item => {
          console.log('---onSelection CustomSelectModal---', item);
          setUserProfileData({
            ...userProfileData,
            selectedPronoun: item,
          });
          setShowPronounModal(false);
        }}
        onClose={() => {
          console.log('---onClose CustomSelectModal---');
          setShowPronounModal(false);
        }}
      />
    );
  };

  const RenderDropdownsView = () => {
    return (
      <View>
        <View style={styles.stateDropDownContainerStyle}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => setShowStateModal(true)}>
            <CustomText
              style={
                userProfileData.selectedState.value
                  ? styles.selectedTextStyle
                  : styles.stateDropDownTextStyle
              }>
              {userProfileData.selectedState.value
                ? userProfileData.selectedState.value
                : 'Select State of Residency'}
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
            onPress={() => setShowGenderModal(true)}>
            <CustomText
              style={
                userProfileData.selectedGender.value
                  ? styles.selectedTextStyle
                  : styles.stateDropDownTextStyle
              }>
              {userProfileData.selectedGender.value
                ? userProfileData.selectedGender.value
                : 'Gender assigned at birth'}
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
            onPress={() => setShowPronounModal(true)}>
            <CustomText
              style={
                userProfileData.selectedPronoun.value
                  ? styles.selectedTextStyle
                  : styles.stateDropDownTextStyle
              }>
              {userProfileData.selectedPronoun.value
                ? userProfileData.selectedPronoun.value
                : 'Preferred Pronouns'}
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
  };
  const pickImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxWidth: 400,
      maxHeight: 400,
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('You cancelled image picker');
      } else if (response.error) {
        Alert.alert('And error occured: ' + JSON.stringify(response));
      } else {
        setUserProfileData({
          ...userProfileData,
          imageUri: response.uri,
          imageSrc: response.uri,
        });
        setFile(response);
        setFilePath(response.path);
      }
    });
  };
  const requestCameraPermission = async () => {
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
            pickImage();
          } else {
            pickImage();
          }
        } else {
          pickImage();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      pickImage();
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            options={{
              transform: [{ rotate: '180deg' }],
              margin: 30,
            }}
            source={icons.chevron}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Complete your profile</Text>
        <Text style={styles.informationText}>
          We will need this information to match you with clinicians and get
          your proper care
        </Text>
      </View>
      <View style={{ margin: '6%' }}>
        <View style={styles.imageBackground}>
          <TouchableOpacity
            style={styles.imageView}
            onPress={() => {
              requestCameraPermission();
            }}>
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 1000,
              }}
              resizeMode="stretch"
              source={
                userProfileData.imageSrc
                  ? { uri: userProfileData.imageSrc }
                  : staticImages.profilePlaceholderImg
              }
            />

            <TouchableOpacity style={styles.AddEditImage}>
              <Image
                source={
                  userProfileData.imageSrc
                    ? require('../../../../assets/profileEdit.png')
                    : require('../../../../assets/profileCreate.png')
                }
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: '13%' }}>
          <TextInput
            testID="firstName"
            style={
              !userProfileData.firstName
                ? styles.namesTextInput
                : styles.nameTextInputOnChange
            }
            placeholderTextColor={colors.greyDark}
            placeholder="First Name"
            value={userProfileData.firstName}
            onChangeText={e =>
              setUserProfileData({
                ...userProfileData,
                firstName: e,
              })
            }
          />
          <TextInput
            testID="nickName"
            style={
              !userProfileData.nickName
                ? styles.namesTextInput
                : styles.nameTextInputOnChange
            }
            placeholderTextColor={colors.greyDark}
            placeholder="Nick Name"
            value={userProfileData.nickName}
            onChangeText={e =>
              setUserProfileData({
                ...userProfileData,
                nickName: e,
              })
            }
          />
        </View>
        <View style={{ marginBottom: '2%' }}>
          <TextInput
            testID="lastName"
            style={
              !userProfileData.lastName
                ? styles.otherTextInput
                : styles.OtherTextInputOnChange
            }
            placeholderTextColor={colors.greyDark}
            placeholder="Last Name"
            value={userProfileData.lastName}
            onChangeText={e =>
              setUserProfileData({
                ...userProfileData,
                lastName: e,
              })
            }
          />
          <TextInputMask
            style={
              !userProfileData.birthday
                ? styles.otherTextInput
                : styles.OtherTextInputOnChange
            }
            placeholderTextColor={colors.greyDark}
            placeholder="Birthday MM/DD/YYYY"
            value={userProfileData.birthday}
            onChangeText={(formatted, extracted) => {
              setUserProfileData({
                ...userProfileData,
                birthday: formatted,
              });
            }}
            mask={'[00]{/}[00]{/}[0000]'}
          />
        </View>
        {showStateModal && <RenderStateModalView />}
        {showGenderModal && <RenderGenderModalView />}
        {showPronounModal && <RenderPronounModalView />}
        <RenderDropdownsView />
        <CustomText style={styles.pageNumber}>1 of 2</CustomText>
        <CustomButton
          disabled={
            !userProfileData.firstName ||
            !userProfileData.lastName ||
            !userProfileData.birthday ||
            !userProfileData.selectedState.value ||
            !userProfileData.selectedGender.value ||
            !userProfileData.selectedPronoun.value
          }
          buttonStyle={
            !userProfileData.firstName ||
            !userProfileData.lastName ||
            !userProfileData.birthday ||
            !userProfileData.selectedState.value ||
            !userProfileData.selectedGender.value ||
            !userProfileData.selectedPronoun.value
              ? styles.disabledButton
              : styles.buttonContainer
          }
          textStyle={styles.buttonText}
          onPress={() =>
            handleNavigation('AdditionalInformation', {
              userProfileData,
              filePath,
            })
          }
          text="Continue"
        />
      </View>
    </ScrollView>
  );
};

export default Welcome;
