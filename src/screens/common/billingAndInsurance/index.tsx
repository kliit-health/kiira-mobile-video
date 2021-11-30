import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/redux/reducers'; 
import Header from '../../../components/header';  
import Screen from '~/components/screen';  
import EditModal from './editModal';
import BillModel from './billModel/billModel' 
import * as actions from '~/redux/actions'; 
import styles from './styles';      
 
const BillingAndInsurance = ({ navigation }) => {
    const dispatch = useDispatch();
    const lang = useSelector((state: RootState) => state.language); 
    const user : any = useSelector((state: RootState) => state.user.data); 
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
                    {insurance ? <Text style={styles.titleTextStyle}>
                        {lang.billingAndInsurance.insurance}
                    </Text> : null}
                    <View style={ insurance ? styles.inputTypeStyle : styles.inputEmptyTypeStyle }> 
                        <Text style={  insurance ? styles.textStyle : styles.textEmptyStyle }>
                            {insurance ? insurance : lang.billingAndInsurance.insuranceCompany}
                        </Text>
                    </View> 
                </View>
                {insurance ? <View style={styles.underLineStyle}/> : null}
                <View style={styles.inputTextContainerStyle}>
                    {memberId ? <Text style={styles.titleTextStyle}
                        >
                            {lang.billingAndInsurance.memberId}
                    </Text> : null}
                    <View style={ memberId ? styles.inputTypeStyle : styles.inputEmptyTypeStyle }>
                        <Text style={  memberId ? styles.textStyle : styles.textEmptyStyle }>
                            {memberId ? memberId : lang.billingAndInsurance.memberIdHint}
                        </Text>
                    </View>  
                </View>
                {false ? <View style={styles.pastBillsContainerStyle}>
                        <Text style={styles.pastBillStyle}>{lang.billingAndInsurance.pastBills}</Text>
                        <BillModel billDate={billDate}/>
                    </View> :
                    <View style={styles.pastBillsContainerStyle}>
                        <Text style={styles.pastBillStyle}>{lang.billingAndInsurance.pastBills}</Text>
                        <Text style={styles.noBillStyle}>{lang.billingAndInsurance.noBills}</Text>
                    </View>
                }
            </View>
            
            )}
        </Screen>
    );
};

export default BillingAndInsurance;
