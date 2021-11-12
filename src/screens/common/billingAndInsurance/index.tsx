import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import Image from 'react-native-fast-image'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers'; 
import { Header, Screen } from '~/components';
import { icons } from '~/utils/constants';
import CustomInputText from '~/components/customInputText';
import Constant from '~/utils/constants';
import EditModal from './editModal';
import BillModel from './billModel/billModel' 
import * as actions from '~/redux/actions';
import moment from 'moment'; 
import styles from './styles';

const BillingAndInsurance = ({ navigation }) => {
    const dispatch = useDispatch();
    const lang = useSelector((state: RootState) => state.language);
    const user = useSelector((state: RootState) => state.user.data);
    const [insurance, setInsurance] = useState((user.profileInfo && user.profileInfo.insurance) ? user.profileInfo.insurance : '');
    const [memberId, setMemberId] = useState((user.profileInfo && user.profileInfo.insurancePlan) ? user.profileInfo.insurancePlan : '');
    const [billDate, setBillDate] = useState((user.profileInfo && user.profileInfo.billDate) ? user.profileInfo.billDate : new Date());
    const [showEdit, setShowEdit] = useState(false);
 
    const sections = useSelector(
        (state: RootState) => state.termsAndConditions.data.sections,
    );
 
    const handleOnBackPress = () => {
        navigation.goBack();
    }; 

    const toggleModal = (toggle, insurance, member) =>{
        if(insurance != null){
            setMemberId(member);
            setInsurance(insurance); 

            var date = new Date();
            var billDate = date.getTime();
            const profileInfo = {
                ...user.profileInfo,
                insurance: insurance,
                insurancePlan: member,
                billDate: billDate
            };
 
            dispatch(actions.updateUser({ profileInfo }));
        }
         
        setShowEdit(false);
    }

    return (
        <Screen test="Select Chat Expert"> 
            <View style={styles.headerStyle}>
                <Header 
                    onBack={handleOnBackPress}
                    title={lang.billingAndInsurance.title}
                    onEditBilling={() => setShowEdit(true)}
                />
            </View>
            {showEdit && (
                <EditModal
                    show={showEdit}
                    lang={lang}
                    company={insurance}
                    memberId={memberId}
                    billDate={billDate}
                    toggleModal={toggleModal}  
                />
            )}
            {!showEdit && (<View style={styles.inputTextParentContainerStyle}>
                <View style={styles.inputTextContainerStyle}>
                    <Text style={
                        insurance
                            ? styles.titleTextStyle
                            : [
                                styles.titleTextStyle,
                                { width: 0 },
                            ]}>
                        {lang.billingAndInsurance.insurance}
                    </Text>
                    <Text style={ 
                            insurance
                            ? styles.inputTypeStyle
                            : [
                                styles.inputEmptyTypeStyle,
                                { fontWeight: '100' },
                            ]
                        }>
                        {insurance ? insurance : lang.billingAndInsurance.insuranceCompany}
                    </Text> 
                </View>
                {insurance ? <View style={styles.underLineStyle}/> : null}
                <View style={styles.inputTextContainerStyle}>
                    <Text style={
                        insurance
                        ? styles.titleTextStyle
                        : [
                            styles.titleTextStyle,
                            { width: 0 },
                        ]}
                        >
                            {lang.billingAndInsurance.memberId}
                    </Text>
                    <Text style={ 
                            memberId
                            ? styles.inputTypeStyle
                            : [
                                styles.inputEmptyTypeStyle,
                                { fontWeight: '100' },
                            ]
                        }
                    >
                        {memberId ? memberId : lang.billingAndInsurance.memberId}
                    </Text> 
                </View>
                <View style={styles.pastBillsContainerStyle}>
                    <Text style={styles.pastBillStyle}>{lang.billingAndInsurance.pastBills}</Text>
                    <Text style={styles.noBillStyle}>{(insurance == null || insurance == '') ? lang.billingAndInsurance.noBills : ''}</Text>
                    {(insurance != null && insurance != '') && <BillModel billDate={billDate}/>}
                </View>
            </View>
            
            )}
        </Screen>
    );
};

export default BillingAndInsurance;
