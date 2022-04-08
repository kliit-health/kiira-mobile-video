import React, { useState, useEffect } from 'react';
import { View, Modal, TouchableOpacity, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import {Header} from '../../../components';
import { Screen, Button } from '~/components';
import CustomInputText from '~/components/customInputText';
import Constant from '~/utils/constants';
import BillModel from './billModel/billModel' 
import styles from './styles';

const EditModal = ({ show, lang, company, memberId, billDate, toggleModal}) => {
     
    const [insurance, setInsurance] = useState(company);
    const [member, setMember] = useState(memberId); 
    useEffect(() => {
         
    }, []);

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
                        title={lang.billingAndInsurance.title}
                        onBack={() => { 
                            toggleModal(false, null, null);
                        }}
                    />
                </View>
                <View style={styles.inputTextParentContainerStyle}>
                    <View style={styles.inputTextContainerStyle}>
                        <CustomInputText
                            autoCapitalize="words"
                            onChangeText={value =>{
                                setInsurance(value);
                            }
                            }
                            placeholder={lang.billingAndInsurance.insuranceCompany}
                            value={insurance}
                            style={
                                insurance
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
                            onChangeText={value =>{
                                setMember(value);
                            }
                            }
                            placeholder={lang.billingAndInsurance.memberIdHint}
                            value={member}
                            style={ 
                                member
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

                    <View style={styles.pastBillsContainerStyle}>
                        <Text style={styles.pastBillStyle}>{lang.billingAndInsurance.pastBills}</Text>
                        <Text style={styles.noBillStyle}>{lang.billingAndInsurance.noBills}</Text> 
                    </View>
                     
                </View>
                <Button 
                    onPress={() => { 
                        toggleModal(false, insurance, member);
                    }} 
                    style={{container: [styles.searchButton]}}
                    title={`Confirm`}
                />
            </Screen>
        </Modal>
    );
};

export default EditModal;
