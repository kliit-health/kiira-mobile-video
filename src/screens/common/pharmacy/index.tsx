import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers'; 
import Header from '../../../components/header';  
import Screen from '~/components/screen';  
import EditModal from './editModal'; 
import * as actions from '~/redux/actions'; 
import styles from './styles';

const Pharmacy = ({ navigation }) => {
    const dispatch = useDispatch();
    const lang = useSelector((state: RootState) => state.language);
    const user:any = useSelector((state: RootState) => state.user.data);
    const [pharmacy, setPharmacy] = useState((user.profileInfo && user.profileInfo.pharmacy) ? user.profileInfo.pharmacy : '');
    const [phoneNumber, setPhoneNumber] = useState((user.profileInfo && user.profileInfo.phoneNumber) ? user.profileInfo.phoneNumber : '');
    const [address, setAddress] = useState((user.profileInfo && user.profileInfo.address) ? user.profileInfo.address : '');
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

    const toggleModal = (toggle, pharmacy, phoneNumber, address) =>{ 
        if(pharmacy == null){
            setShowEdit(false);
            return;
        } 

        if(!phoneNumberValidation(phoneNumber)){ 
            return;
        }
        setPharmacy(pharmacy);
        setPhoneNumber(phoneNumber); 
        setAddress(address); 

        const profileInfo = {
            ...user.profileInfo,
            pharmacy: pharmacy,
            phoneNumber: phoneNumber,
            address: address
        };

        dispatch(actions.updateUser({ profileInfo })); 
        setShowEdit(false);
    }

    return (
        <Screen test="Select Chat Expert"> 
            <View style={styles.headerStyle}>
                <Header 
                    onBack={handleOnBackPress}
                    title={lang.pharmacy.title}
                    onEditBilling={() => setShowEdit(true)}
                />
            </View>
            {showEdit && (
                <EditModal
                    show={showEdit}
                    lang={lang}
                    pharmacy={pharmacy}
                    phoneNumber={phoneNumber}
                    address={address}
                    toggleModal={toggleModal}  
                />
            )}
            {!showEdit && (<View style={styles.inputTextParentContainerStyle}>
                <View style={styles.bartellsStyle}> 
                    <View style={ pharmacy ? styles.inputTypeStyle : (phoneNumber ? styles.noStyle : styles.inputEmptyTypeStyle) }> 
                        <Text style={  pharmacy ? [styles.textStyle, {fontSize: 28}]: styles.textEmptyStyle }>
                            {pharmacy ? pharmacy : (phoneNumber ? "" : lang.pharmacy.nameOfPharmacy)}
                        </Text>
                    </View> 
                </View> 
                <View style={styles.inputTextContainerStyle}> 
                    <View style={ phoneNumber ? styles.inputTypeStyle : styles.inputEmptyTypeStyle }>
                        <Text style={  phoneNumber ? [styles.textStyle, {color:'#000B1E'} ]: styles.textEmptyStyle }>
                            {phoneNumber ? phoneNumber : lang.pharmacy.phoneNumber}
                        </Text>
                    </View>  
                </View> 
                <View style={styles.inputTextContainerStyle}> 
                    <View style={ address ? styles.inputTypeStyle : (phoneNumber ? styles.noStyle : styles.inputEmptyTypeStyle) }>
                        <Text style={  address ? [styles.textStyle, {color:'#000B1E'} ] : styles.textEmptyStyle }>
                            {address ? address : (phoneNumber ? "" : lang.pharmacy.address)}
                        </Text>
                    </View>  
                </View> 
            </View>
            
            )}
        </Screen>
    );
};

export default Pharmacy;
