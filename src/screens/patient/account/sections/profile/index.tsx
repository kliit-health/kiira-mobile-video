import React, { useState } from 'react';
import { View, Text, Alert, Platform, PermissionsAndroid, TouchableOpacity, Image, } from 'react-native';
import { get } from 'lodash';
import { cardDetails } from './model';
import { Icon, Header, Screen } from '~/components';
import styles, { modifiers } from './styles'; 
import ImagePicker from 'react-native-image-picker';
import { Avatar } from 'react-native-elements';
import Constant, { colors, icons } from '~/utils/constants';
import { updateAccount } from '~/redux/reducers/account';
import { useDispatch } from 'react-redux';


export default ( user ) => {
    const { firstName, lastName,profileImageUrl } = user.profileInfo;
    const { staticImages } = Constant.App;
    // const [path,setPath] = useState('')
    // const [imageUri,setImageUri] = useState(profileImageUrl)
    // const [name,setName] = useState('')
    // const[filename,setFilename] = useState('')
    const dispatch = useDispatch()
    const [imageData,setImageData] = useState({
        imageSrc:profileImageUrl,
        imageUri:'',
        filepath:'',
        file:null
    })
   
    // const handleOnBackPress = () => {
    //     navigation.goBack();
    // }; 

    const handleSetting = () => {
         
    }; 

   console.log('--------USER----',user.profileInfo)

    const getFieldNames = (value, fieldName) => { 
        console.log(fieldName, value)
         if(value == null || value == ""){
            if(fieldName == 'state.value'){
                return "Location";
            }
            else if(fieldName == 'pronouns'){
                return "Gender";
            }
            else if(fieldName == 'sexuality.value'){
                return "Orientation";
            }
            else if(fieldName == 'dob'){
                return "Birthday";
            }
         }
         return value;
    }
    
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
                const source = { uri: response.uri };
                setImageData({
                    imageSrc: source,
                    imageUri: source.uri,
                    filepath: response.path,
                    file: response,
                })
              
                console.log('-------',response.uri)

                let name = imageData.imageUri.substring(
                    imageData.imageUri.lastIndexOf('/') + 1,
                    imageData.imageUri.length,
                );

                console.log('Name----',name)
                const ext = imageData.imageUri.substr(imageData.imageUri.lastIndexOf('.') + 1); 
                console.log('extension',ext)// Extract image extension
                const filename =
                    Platform.OS === 'ios'
                        ? `${Math.floor(Date.now())}${name}`
                        : `${Math.floor(Date.now())}${name}.${ext}`;
                        console.log('-----fileName',filename)
                const payloadData = {
                    userParams:{
                        ...user.profileInfo,
                    },
                    imageParams: {
                        file:
                            Platform.OS === 'ios'
                                ? imageData.imageUri
                                : imageData.filepath,
                        filename,
                    },
                };
                // dispatch(updateAccount(payloadData))
                // let name = response.uri.substring(
                //     response.uri.lastIndexOf('/') + 1,
                //     response.uri.length,
                // );
                // const ext = response.type.split('/').pop();
                // const filename =
                //     Platform.OS === 'ios'
                //         ? `${Math.floor(Date.now())}${name}`
                //         : `${Math.floor(Date.now())}${name}.${ext}`;
                //         setImageUri(response.uri)
                //         setName(name)
                //         setFilename(filename)
                //          setPath(response.path)
                //          const payloadData = {
                //              imageParams: {
                //             file:
                //                 Platform.OS === 'ios'
                //                     ? imageUri
                //                     : path,
                //             filename,
                //         },
                //     }
                  dispatch(updateAccount(payloadData))
                
                // setImageSrc(response.uri)
                // const payload={
                //     userParams: {
                //         ...user.profileInfo,
                //         profileImageUrl: imageSrc
                //     }
                // }
                //  dispatch(updateAccount(payload))
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
    return ( <TouchableOpacity
        // style={styles.imageView}
        onPress={() => {
            requestCameraPermission();
        }}
    >
        <Avatar
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
            size={90}
            rounded
            source={{
                uri: imageData.imageUri
                    ? imageData.imageUri
                    : '',
            }}
            activeOpacity={0.7}
        />

        <TouchableOpacity >
            <Image
                source={
                    imageData.imageUri
                        ? require('../../../../../../assets/profileEdit.png')
                        : require('../../../../../../assets/profileCreate.png')
                }
            />
        </TouchableOpacity>
    </TouchableOpacity>)
    }

    return (
        <Screen>
            <View style={styles.headerStyle}>
                <Header 
                    title="Basic Plan"  
                    // onBack={handleOnBackPress}
                    OnSettingPress={handleSetting}  
                />
            </View>
            {/* <Avatar
                source={profileImageUrl ? profileImageUrl : ''}
                size="large"
                styles={modifiers.avatar}
            /> */}
            {renderImageView()}
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{`${firstName} ${lastName}`}</Text>
            </View>
            <View style={styles.root}>
                {cardDetails.map(({ icon, value }) => (
                    <View style={styles.itemContainer}>
                        <Icon options={[styles.icon]} source={icon} /> 
                        <Text style={get(user.profileInfo, value) ? styles.itemTitle : styles.itemEmptyTitle}>
                            {getFieldNames(get(user.profileInfo, value), value)}
                        </Text>
                    </View>
                ))}
            </View>
        </Screen>
    );
};
