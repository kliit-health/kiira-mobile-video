import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import Constant, { colors, icons } from '~/utils/constants';
import styles from '../styles';
import CustomButton from '~/components/customButton';
import { CustomText, Icon, } from '~/components';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CustomSelectModal from '~/components/customselectModal';



const AdditionalInformation = ({ navigation }) => {

    const { staticImages, screenNames } = Constant.App;

    const [showSexualityModal, setShowSexualityModal] = useState(false);
    const [showPharmacyModal, setShowPharmacyModal] = useState(false);
    const [showInsuranceModal, setShowInsuranceModal] = useState(false);
    const [userProfileData, setUserProfileData] = useState({
        pharmacyAddress: '',
        pharmacyPhoneNumber: '',
        memberId: '',
        selectedSexuality: { code: '', value: '' },
        selectedPharmacy: { value: '' },
        selectedInsurance: { value: '' },
    });
    const RenderSexualityModalView = () => {
        return (
            <CustomSelectModal
                data={Constant.App.Modal.sexuality}
                onSelection={item => {
                    console.log('---onSelection CustomSelectModal---', item);
                    setUserProfileData({
                        ...userProfileData,
                        selectedSexuality: item,
                    });
                    setShowSexualityModal(false);
                }}
                onClose={() => {
                    console.log('---onClose CustomSelectModal---');
                    setShowSexualityModal(false);
                }}
            />
        );
    };
    const RenderPharmacyModalView = () => {
        return (
            <CustomSelectModal
                data={Constant.App.Modal.pharmacy}
                onSelection={item => {
                    console.log('---onSelection CustomSelectModal---', item);
                    setUserProfileData({
                        ...userProfileData,
                        selectedPharmacy: item,
                    });
                    setShowPharmacyModal(false);
                }}
                onClose={() => {
                    console.log('---onClose CustomSelectModal---');
                    setShowPharmacyModal(false);
                }}
            />
        );
    };
    const RenderInsuranceModalView = () => {
        return (
            <CustomSelectModal
                data={Constant.App.Modal.insurance}
                onSelection={item => {
                    console.log('---onSelection CustomSelectModal---', item);
                    setUserProfileData({
                        ...userProfileData,
                        selectedInsurance: item,
                    });
                    setShowInsuranceModal(false);
                }}
                onClose={() => {
                    console.log('---onClose CustomSelectModal---');
                    setShowInsuranceModal(false);
                }}
            />
        );
    };


    return (
        <ScrollView style={{ backgroundColor: colors.white }}>
            <View >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        options={{
                            transform: [{ rotate: '180deg' }],
                            margin: 30,
                        }}
                        source={icons.chevron}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Additional Information</Text>
                <Text style={styles.AdditionalInformationText}>
                    Finish filling out your basic profile information to make things easier later on
                </Text>
            </View>
            <View style={{marginTop:'5%'}}>
            <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => setShowSexualityModal(true)}
                    >
                        <CustomText
                            style={
                                userProfileData.selectedSexuality.value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileData.selectedSexuality.value
                                ? userProfileData.selectedSexuality.value
                                : 'Sexuality'}
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
                        onPress={() => setShowPharmacyModal(true)}
                    >
                        <CustomText
                            style={
                                userProfileData.selectedPharmacy.value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileData.selectedPharmacy.value
                                ? userProfileData.selectedPharmacy.value
                                : 'Preferred Pharmacy'}
                        </CustomText>
                        <Image
                            resizeMode="contain"
                            source={staticImages.downArrow}
                            style={styles.dropDownIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                    <TextInput
                        testID="pharmacyAddress"
                        style={
                            !userProfileData.pharmacyAddress
                                ? styles.otherTextInput
                                : styles.nameTextInputOnChange
                        }
                        placeholderTextColor={colors.greyDark}
                        placeholder="Pharmacy Address"
                        value={userProfileData.pharmacyAddress}
                        onChangeText={e =>
                            setUserProfileData({
                                ...userProfileData,
                                pharmacyAddress: e,
                            })
                        }
                    />
                    <TextInput
                        testID="pharmacyPhoneNumber"
                        style={
                            !userProfileData.pharmacyPhoneNumber
                                ? styles.otherTextInput
                                : styles.nameTextInputOnChange
                        }
                        placeholderTextColor={colors.greyDark}
                        placeholder="Pharmacy Phone Number"
                        value={userProfileData.pharmacyPhoneNumber}
                        onChangeText={e =>
                            setUserProfileData({
                                ...userProfileData,
                                pharmacyPhoneNumber: e,
                            })
                        }
                    />
<View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => setShowInsuranceModal(true)}
                    >
                        <CustomText
                            style={
                                userProfileData.selectedInsurance.value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileData.selectedInsurance.value
                                ? userProfileData.selectedInsurance.value
                                : 'Insurance'}
                        </CustomText>
                        <Image
                            resizeMode="contain"
                            source={staticImages.downArrow}
                            style={styles.dropDownIconStyle}
                        />
                    </TouchableOpacity>
                </View>
                    <TextInput
                        testID="memberID"
                        style={
                            !userProfileData.memberId
                                ? styles.otherTextInput
                                : styles.OtherTextInputOnChange
                        }
                        placeholderTextColor={colors.greyDark}
                        placeholder="Member ID"
                        value={userProfileData.memberId}
                        onChangeText={e =>
                            setUserProfileData({
                                ...userProfileData,
                                memberId: e,
                            })
                        }
                    />
                    
               
                {showSexualityModal && <RenderSexualityModalView />}
                {showPharmacyModal && <RenderPharmacyModalView />}
                {showInsuranceModal && <RenderInsuranceModalView />}
                
                <CustomText style={styles.pageNumber}>2 of 2</CustomText>
                <CustomText
                        style={styles.skipText}
                        >
                          Skip for now
                        </CustomText>
                <CustomButton
                    buttonStyle={
                        styles.buttonContainer
                    }
                    textStyle={styles.buttonText}
                    onPress={() => console.log('')}
                    text="Finish"
                />
            </View>
        </ScrollView>
    );
};

export default AdditionalInformation;