import React, { useState, useEffect } from 'react';
import { shape, object, bool, string, func, number, oneOf } from 'prop-types';
import { View, TouchableOpacity, Image, Platform, PermissionsAndroid, Alert} from 'react-native';
import { mergeStyles } from '../../utils/functions';
import { RootState } from '~/redux/reducers'; 
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateExpertDataToFirebase } from './actions';
import { showOrHideModal } from '../../components/customModal/action';
import * as actions from '~/redux/actions';
import defaultStyles, { modifiers } from './styles';
import Remove from '../../svgs/remove.svg';  
import * as ImagePicker from "react-native-image-picker"
import { uploadImage } from '~/utils/firebase'; 

const Avatar = ({
    styles: customStyles,
    activeOpacity,
    onLayout,
    source,
    resizeMode,
    size,
    rounded,
    onPress,
    border,
    online,
    deleteMode, 
}) => {
    
    useEffect(() => {
        (async () => {
            await Image.prefetch(source);
            setLoading(false);
        })();
    }, []);

    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.data);
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(source);

    const styles = {
        image: mergeStyles([
            modifiers[size].image,
            [modifiers.rounded.image, rounded],
            customStyles.image,
        ]), 
        root: mergeStyles([
            defaultStyles.root,
            modifiers[size].root,
            [modifiers.rounded.root, rounded],
            [modifiers.border[size].root, border],
            customStyles.root,
        ]),
        status: mergeStyles([
            defaultStyles.status,
            modifiers[size].status,
            [modifiers.online.status, online],
            [modifiers.offline.status, online === false],
            customStyles.status,
        ]),
        deleteIcon: mergeStyles([
            defaultStyles.deleteIcon,
            [modifiers.deleteMode.deleteIcon, deleteMode],
            customStyles.deleteIcon,
        ]),
    };

    const handleLayout = event => {
        const layout = event.nativeEvent.layout;
        onLayout(layout);
    }; 
    

    //didn't finish functions, this should be implemented more
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
                        pickImage();    //we can use the camera
                    } else {
                        pickImage();     //we can't use the camera
                    }
                } else { 
                    pickImage(); //we can't use the camera
                }
            } catch (err) {
                console.log(err);
            }
        } else { 
            pickImage(); 
        }
    };

    const pickImage = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };   

        ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response :any) => {
                if (response.error) {
                    console.log('RESPONSE ERROR', response);
                    Alert.alert('And error occured: ' + JSON.stringify(response));
                } else {
                    console.log('RESPONSE', response);  
                }
            },
        )
    };

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
            <View onLayout={handleLayout} style={styles.root}>
                <Image
                    style={styles.image}
                    source={
                        loading
                            ? require('../../../assets/profile_img_placeholder.png')
                            : { uri: imageUrl }
                    }
                    resizeMode={resizeMode}
                />
                <TouchableOpacity style={defaultStyles.editImage} 
                onPress={requestCameraPermission}
                >
                    <Image source={source ? require('../../../assets/profileEdit.png') : require('../../../assets/profileCreate.png')}/>
                </TouchableOpacity>  
                <View style={styles.status} />
                {deleteMode && (
                    <View style={styles.deleteIcon}>
                        <Remove {...modifiers[size].delete} />
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
    source: string,
    rounded: bool,
    border: bool,
    onPress: func,
    online: bool,
    deleteMode: bool,
    size: oneOf(['small', 'medium', 'large']),
    resizeMode: oneOf(['contain', 'center', 'cover', 'stretch']),
    activeOpacity: number,
    styles: shape({
        root: object,
        image: object, 
        status: object,
    }),
    onLayout: func, 
    
};

Avatar.defaultProps = {
    source: undefined,
    rounded: true,
    border: false,
    online: null,
    deleteMode: false,
    onPress: () => {},
    size: 'medium',
    resizeMode: 'cover',
    activeOpacity: 1,
    onLayout: () => {},
    styles: {},
    navigation: object,
    showHideErrorModal: object,
    updateUserData: object,
};

const mapStateToProps = state => ({
    userData: state.user.data,
    lang: state.language,
});

const mapDispatchToProps = dispatch => ({
    updateUserData: value => dispatch(updateExpertDataToFirebase(value)),
    showHideErrorModal: value => dispatch(showOrHideModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

//export default Avatar;
