import React, { useState } from 'react';
import {
    View,
    Text,
    Alert,
    Platform,
    PermissionsAndroid,
    TouchableOpacity,
    Image,
} from 'react-native';
import { get } from 'lodash';
import { cardDetails } from './model';
import { Icon, Header, Screen } from '~/components';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import Constant, { screenNames } from '~/utils/constants';
import { updateAccount } from '~/redux/reducers/account';
import { useDispatch } from 'react-redux';

export default ({ profileInfo, navigation, setShowModal, intakeData }) => {
    const { firstName, lastName, profileImageUrl } = profileInfo;
    const { staticImages } = Constant.App;
    const dispatch = useDispatch();
    const [imageUri, setImageUri] = useState(profileImageUrl);
    const handleOnBackPress = () => {
        navigation.goBack();
    };
    const handleSetting = () => {
        if (!intakeData) {
            setShowModal(true);
        } else {
            navigation.navigate(screenNames.settings);
        }
    };

    const getFieldNames = (value, fieldName) => {
        console.log(fieldName, value);
        if (value == null || value == '') {
            if (fieldName == 'state.value') {
                return 'Location';
            } else if (fieldName == 'pronouns') {
                return 'Gender';
            } else if (fieldName == 'sexuality.value') {
                return 'Orientation';
            } else if (fieldName == 'dob') {
                return 'Birthday';
            }
        }
        return value;
    };
    const dispatchAccount = value => {
        dispatch(updateAccount(value));
    };
    const pickImage = () => {
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
                const ext = response.type && response.type.split('/').pop();
                const filename =
                    Platform.OS === 'ios'
                        ? `${Math.floor(Date.now())}${name}`
                        : `${Math.floor(Date.now())}${name}.${ext}`;
                setImageUri(response.uri);

                const payloadData = {
                    userParams: {
                        ...profileInfo,
                    },
                    imageParams: {
                        file:
                            Platform.OS === 'ios'
                                ? response.uri
                                : response.path,
                        filename,
                    },
                };
                response.uri && dispatchAccount(payloadData);
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

    const renderImageView = () => {
        return (
            <TouchableOpacity
                style={styles.imageView}
                onPress={() => {
                    requestCameraPermission();
                }}
            >
                <View style={styles.imageStyle}>
                    <Image
                        style={styles.image}
                        resizeMode="stretch"
                        source={
                            imageUri
                                ? { uri: imageUri }
                                : staticImages.profilePlaceholderImg
                        }
                    />
                </View>

                <TouchableOpacity>
                    <Image
                        style={styles.AddEditImage}
                        source={
                            imageUri
                                ? require('../../../../../../assets/profileEdit.png')
                                : require('../../../../../../assets/profileCreate.png')
                        }
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <Screen>
            <View style={styles.headerStyle}>
                <Header
                    title="Basic Plan"
                    onBack={handleOnBackPress}
                    OnSettingPress={handleSetting}
                />
            </View>

            {renderImageView()}

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
            </View>

            <View style={styles.root}>
                {cardDetails.map(({ icon, value }) => (
                    <View style={styles.itemContainer}>
                        <Icon options={[styles.icon]} source={icon} />
                        <Text
                            style={
                                get(profileInfo, value)
                                    ? styles.itemTitle
                                    : styles.itemEmptyTitle
                            }
                        >
                            {getFieldNames(get(profileInfo, value), value)}
                        </Text>
                    </View>
                ))}
            </View>
        </Screen>
    );
};
