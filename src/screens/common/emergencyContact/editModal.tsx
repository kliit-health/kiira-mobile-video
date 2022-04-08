import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Image, Text, Alert } from 'react-native'; 
import { Header, Screen, Button, Column, Row } from '~/components';
import CustomInputText from '~/components/customInputText';
import Constant from '~/utils/constants'; 
import styles from './styles';

const EditModal = ({ show, lang, emergencyContactInfo, toggleModal}) => {
     
    const pattern = new RegExp(/^[0-9\-\b]+$/);
    const [lEmergencyContactInfo, setEmergencyContactInfo] = useState(emergencyContactInfo); 
    const [lastName, setLastName] = useState((emergencyContactInfo && emergencyContactInfo.lastName) ? emergencyContactInfo.lastName : '');
    const [firstName, setFirstName] = useState((emergencyContactInfo && emergencyContactInfo.firstName) ? emergencyContactInfo.firstName + '&' + lastName : '');    
    const [phoneNumber, setPhoneNumber] = useState((emergencyContactInfo && emergencyContactInfo.phoneNumber) ? emergencyContactInfo.phoneNumber : '');
    const [secondNumber, setSecondNumber] = useState((emergencyContactInfo && emergencyContactInfo.secondNumber) ? emergencyContactInfo.secondNumber : '');
    const [relationship, setRelationship] = useState((emergencyContactInfo && emergencyContactInfo.relationship) ? emergencyContactInfo.relationship : '');    
    const [disabled, setDisabled] = useState(false)

    useEffect(() => { 

    }, []);  

    const canConfirm = (first, last, phone1, phone2, relation)=>{ 
        if(phone1.length == 12 && phone2.length == 12 && first && 
            (first.indexOf('&') <= first.length - 2) && first.indexOf('&') > 0 && relation){
            setDisabled(false); 
            return false;
        }
        else{
            setDisabled(true); 
            return true;
        }  
    }

    const setValidPhoneNumber = (value, second) =>{ 
        if (!pattern.test(value)) {  
            if(second){
                setSecondNumber(value.substr(0, value.length - 1)); 
            }
            else{
                setPhoneNumber(value.substr(0, value.length - 1)); 
            }
            return false;
        } 

        if(value.length > 12){
            if(second){
                setSecondNumber(value.substr(0, 12)); 
            }
            else{
                setPhoneNumber(value.substr(0, 12)); 
            } 
            return false;
        } 

        if(value.length > 3 && value.substr(3,1) != '-'){
            value = value.substr(0, 3) + '-' + value.substr(3, value.length);
        }

        if(value.length > 7 && value.substr(7,1) != '-'){
            value = value.substr(0, 7) + '-' + value.substr(7, value.length);
        } 
          
        if(second){
            if((value.length == 3 || value.length == 7) && secondNumber.substr(secondNumber.length - 1, 1) != '-'){
                value = value + "-";
            }
        }
        else{
            if((value.length == 3 || value.length == 7) && phoneNumber.substr(phoneNumber.length - 1, 1) != '-'){
                value = value + "-";
            }
        }

        if(value.length == 12){
            if(second){
                canConfirm(firstName, lastName, phoneNumber, value, relationship);

            } 
            else{
                canConfirm(firstName, lastName, value, secondNumber, relationship);
            }
        }
        else{
            setDisabled(true);
        } 

        if(second){
            setSecondNumber(value); 
        }
        else{
            setPhoneNumber(value); 
        } 
        return true;
    }

    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={show}
        >
            <Screen>
                <View style={styles.headerStyle}>
                    <Header
                        title={lang.emergencyContact.title}
                        onBack={() => { 
                            toggleModal(false, null);
                        }}
                    />
                </View>
                <View style={styles.inputTextParentContainerStyle}>
                    <View style={styles.inputTextContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words"
                            onChangeText={value =>{
                                setFirstName(value); 
                                canConfirm(value, lastName, phoneNumber, secondNumber, relationship);
                            }
                            }
                            placeholder={lang.emergencyContact.firstLastName}
                            value={firstName}
                            style={
                                (firstName)
                                ? styles.inputEditTypeStyle
                                : [
                                    styles.inputEmptyTypeStyle,
                                    { fontWeight: '300' },
                                ]
                            }
                            placeholderTextColor={
                                "#868992"
                            }
                        />
                    </View>
                    <View style={styles.inputTextContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words" 
                            onChangeText={value => {
                                setValidPhoneNumber(value, false);
                            }}
                            placeholder={lang.emergencyContact.phoneNumber}
                            value={phoneNumber}
                            style={ 
                                phoneNumber
                                ? styles.inputEditTypeStyle
                                : [
                                    styles.inputEmptyTypeStyle,
                                    { fontWeight: '300' },
                                ]
                            }
                            placeholderTextColor={
                                "#868992"
                            }
                        />
                    </View> 
                    <View style={styles.inputTextContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words" 
                            onChangeText={value => { 
                                setValidPhoneNumber(value, true);
                            }} 
                            placeholder={lang.emergencyContact.secondaryPhoneNumber}
                            value={secondNumber}
                            style={ 
                                secondNumber
                                ? styles.inputEditTypeStyle
                                : [
                                    styles.inputEmptyTypeStyle,
                                    { fontWeight: '300' },
                                ]
                            }
                            placeholderTextColor={
                                "#868992"
                            }
                        />
                    </View>  
                    <View style={styles.inputTextContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words" 
                            onChangeText={value => {
                                setRelationship(value);
                                canConfirm(firstName, lastName, phoneNumber, secondNumber, value);
                            }} 
                            placeholder={lang.emergencyContact.relationshipToYou}
                            value={relationship}
                            style={ 
                                relationship
                                ? styles.inputEditTypeStyle
                                : [
                                    styles.inputEmptyTypeStyle,
                                    { fontWeight: '300' },
                                ]
                            }
                            placeholderTextColor={
                                "#868992"
                            }
                        />
                    </View>  
                     
                </View>
                <Button 
                    onPress={() => {   
                        var emergency = {firstName: firstName.substr(0, firstName.indexOf('&')), lastName: firstName.substr(firstName.indexOf('&') + 1), 
                            phoneNumber: phoneNumber, secondNumber: secondNumber, relationship: relationship};
                        setEmergencyContactInfo(emergency);
                        toggleModal(false, emergency);
                    }} 
                    disabled={disabled}
                    style={!disabled ? {container:
                        [styles.searchButton]} : {container:
                            [styles.searchButtonDisabled]}}
                    title={`Confirm`}
                />
            </Screen>
        </Modal>
    );
};

export default EditModal;
