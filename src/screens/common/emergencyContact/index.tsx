import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers'; 
import Header from '../../../components/header';  
import Screen from '~/components/screen';  
import EditModal from './editModal'; 
import * as actions from '~/redux/actions'; 
import styles from './styles';

const EmergencyContact = ({ navigation }) => {
    const dispatch = useDispatch();
    const lang = useSelector((state: RootState) => state.language);
    const user:any = useSelector((state: RootState) => state.user.data);
    const [emergencyContactInfo, setEmergencyContactInfo] = useState(user.profileInfo ? user.profileInfo.emergencyContactInfo : null);
    const [firstName, setFirstName] = useState((emergencyContactInfo && emergencyContactInfo.firstName) ? emergencyContactInfo.firstName : '');
    const [lastName, setLastName] = useState((emergencyContactInfo && emergencyContactInfo.lastName) ? emergencyContactInfo.lastName : '');
    const [phoneNumber, setPhoneNumber] = useState((emergencyContactInfo && emergencyContactInfo.phoneNumber) ? emergencyContactInfo.phoneNumber : '');
    const [secondNumber, setSecondNumber] = useState((emergencyContactInfo && emergencyContactInfo.secondNumber) ? emergencyContactInfo.secondNumber : '');
    const [relationship, setRelationship] = useState((emergencyContactInfo && emergencyContactInfo.relationship) ? emergencyContactInfo.relationship : '');    
    const [showEdit, setShowEdit] = useState(false);
 
    const sections = useSelector(
        (state: RootState) => state.termsAndConditions.data.sections,
    );
 
    const handleOnBackPress = () => {
        navigation.goBack();
    }; 

    const phoneNumberValidation = (number) => {
        var pattern = new RegExp(/^[0-9\-\b]+$/);
        if (!pattern.test(number)) {        
            Alert.alert("Please enter only number.");  
            return false;   
        }else if(number.length != 12){         
            Alert.alert("Please enter valid phone number.");   
            return false;
        }
        return true;
    }

    const toggleModal = (toggle, emergencyContactInfo) =>{  
        if(!emergencyContactInfo){
            setShowEdit(false);
            return;
        }   
        setFirstName(emergencyContactInfo.firstName);
        setLastName(emergencyContactInfo.lastName);
        setPhoneNumber(emergencyContactInfo.phoneNumber);
        setSecondNumber(emergencyContactInfo.secondNumber);
        setRelationship(emergencyContactInfo.relationship);

        var emergency = {firstName: emergencyContactInfo.firstName, lastName: emergencyContactInfo.lastName, 
            phoneNumber: emergencyContactInfo.phoneNumber, secondNumber: emergencyContactInfo.secondNumber, relationship: emergencyContactInfo.relationship};
        setEmergencyContactInfo(emergency);

        const profileInfo = {
            ...user.profileInfo,
            emergencyContactInfo: emergency
        };

        dispatch(actions.updateUser({ profileInfo })); 
        setShowEdit(false);
    }

    return (
        <Screen test="Select Chat Expert"> 
            <View style={styles.headerStyle}>
                <Header 
                    onBack={handleOnBackPress}
                    title={lang.emergencyContact.title}
                    onEditBilling={() => setShowEdit(true)}
                />
            </View>
            {showEdit && (
                <EditModal
                    show={showEdit}
                    lang={lang}
                    emergencyContactInfo={emergencyContactInfo} 
                    toggleModal={toggleModal}  
                />
            )}
            {!showEdit && (<View style={styles.inputTextParentNotEditContainerStyle}>
                <View style={styles.bartellsStyle}> 
                    <View style={ firstName ? styles.inputTypeStyleNotEdit : (firstName ? styles.noStyle : styles.inputEmptyTypeStyle) }> 
                        <Text style={  firstName ? [styles.textStyleNotEdit, {fontSize: 28}]: styles.textEmptyStyle }>
                            {firstName ? firstName + ' ' + lastName : (firstName ? "" : lang.emergencyContact.firstLastName)}
                        </Text>
                    </View> 
                </View> 
                <View style={styles.inputTextContainerStyle}> 
                    <View style={ relationship ? styles.inputTypeStyleNotEdit : styles.inputEmptyTypeStyle }>
                        <Text style={  relationship ? [styles.textStyleNotEdit, {color:'#868992', fontSize:20, fontWeight: '400'} ]: styles.textEmptyStyle }>
                            {relationship ? relationship : lang.emergencyContact.relationshipToYou}
                        </Text>
                    </View>  
                </View> 
                <View style={styles.inputTextContainerStyle}> 
                    <View style={ phoneNumber ? styles.inputTypeStyleNotEdit : styles.inputEmptyTypeStyle }>
                        <Text style={  phoneNumber ? [styles.textStyleNotEdit, {color:'#000B1E', fontWeight:'300'} ]: styles.textEmptyStyle }>
                            {phoneNumber ? phoneNumber : lang.emergencyContact.phoneNumber}
                        </Text>
                    </View>  
                </View> 
                  
                 
            </View>
            
            )}
        </Screen>
    );
};

export default EmergencyContact;