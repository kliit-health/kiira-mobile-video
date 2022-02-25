import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Constant, { colors, icons } from '~/utils/constants';
import styles from '../styles';
import CustomButton from '~/components/customButton';
import { CustomText, Icon } from '~/components';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CustomSelectModal from '~/components/customselectModal';
import { updateAccount } from '~/redux/reducers/account';

const AdditionalInformation = ({ navigation,userProfileData }) => {
    const { staticImages, screenNames } = Constant.App;
    const [showSexualityModal, setShowSexualityModal] = useState(false);
    const [showPharmacyModal, setShowPharmacyModal] = useState(false);
    const [showInsuranceModal, setShowInsuranceModal] = useState(false);
    const [userProfileData1, setUserProfileData] = useState({
        pharmacyAddress: '',
        pharmacyPhoneNumber: '',
        memberId: '',
        selectedSexuality: { code: '', value: '' },
        selectedPharmacy: { value: '' },
        selectedInsurance: { value: '' },
    });
    const [disabled, setDisabled] = useState(true);
    const RenderSexualityModalView = () => {
        return (
            <CustomSelectModal
                data={Constant.App.Modal.sexuality}
                onSelection={item => {
                    console.log('---onSelection CustomSelectModal---', item);
                    setUserProfileData({
                        ...userProfileData1,
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
                        ...userProfileData1,
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
                        ...userProfileData1,
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
   const formatPhoneNumber = value => {
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;

        if (phoneNumberLength < 7) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
            3,
            6,
        )}-${phoneNumber.slice(6, 10)}`;
    };
    return (
        <ScrollView style={{ backgroundColor: colors.white }}>
            <View>
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
                    Finish filling out your basic profile information to make
                    things easier later on
                </Text>
            </View>
            <View style={{ margin: '6%' }}>
                <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => setShowSexualityModal(true)}
                    >
                        <CustomText
                            style={
                                userProfileData1.selectedSexuality.value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileData1.selectedSexuality.value
                                ? userProfileData1.selectedSexuality.value
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
                                userProfileData1.selectedPharmacy.value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileData1.selectedPharmacy.value
                                ? userProfileData1.selectedPharmacy.value
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
                        !userProfileData1.pharmacyAddress
                            ? styles.otherTextInput
                            : styles.OtherTextInputOnChange
                    }
                    placeholderTextColor={colors.greyDark}
                    placeholder="Pharmacy Address"
                    value={userProfileData1.pharmacyAddress}
                    onChangeText={e =>
                        setUserProfileData({
                            ...userProfileData1,
                            pharmacyAddress: e,
                        })
                    }
                />
                <TextInput
                    testID="pharmacyPhoneNumber"
                    style={
                        !userProfileData1.pharmacyPhoneNumber
                            ? styles.otherTextInput
                            : styles.OtherTextInputOnChange
                    }
                    placeholderTextColor={colors.greyDark}
                    placeholder="Pharmacy Phone Number"
                    value={userProfileData1.pharmacyPhoneNumber}
                    onChangeText={value => {
                        const formattedPhoneNumber =
                            formatPhoneNumber(value);
                            setUserProfileData({
                                        ...userProfileData1,
                                        pharmacyPhoneNumber: formattedPhoneNumber,
                                    })
                    }}
                />
                <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => setShowInsuranceModal(true)}
                    >
                        <CustomText
                            style={
                                userProfileData1.selectedInsurance.value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileData1.selectedInsurance.value
                                ? userProfileData1.selectedInsurance.value
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
                        !userProfileData1.memberId
                            ? styles.otherTextInput
                            : styles.OtherTextInputOnChange
                    }
                    placeholderTextColor={colors.greyDark}
                    placeholder="Member ID"
                    value={userProfileData1.memberId}
                    onChangeText={e =>
                        setUserProfileData({
                            ...userProfileData1,
                            memberId: e,
                        })
                    }
                />

                {showSexualityModal && <RenderSexualityModalView />}
                {showPharmacyModal && <RenderPharmacyModalView />}
                {showInsuranceModal && <RenderInsuranceModalView />}

                <CustomText style={styles.pageNumber}>2 of 2</CustomText>
                <TouchableOpacity
                    onPress={() => {
                        setDisabled(false);
                    }}
                >
                    <CustomText style={styles.skipText}>
                        Skip for now
                    </CustomText>
                </TouchableOpacity>
                <CustomButton
                    disabled={
                        disabled &&
                        !userProfileData.pharmacyAddress &&
                        !userProfileData.memberId &&
                        !userProfileData.pharmacyPhoneNumber &&
                        !userProfileData.selectedInsurance &&
                        !userProfileData.selectedPharmacy &&
                        !userProfileData.selectedSexuality
                    }
                    buttonStyle={
                        !(
                            disabled &&
                            !userProfileData.pharmacyAddress &&
                            !userProfileData.memberId &&
                            !userProfileData.pharmacyPhoneNumber &&
                            !userProfileData.selectedInsurance.value &&
                            !userProfileData.selectedPharmacy.value &&
                            !userProfileData.selectedSexuality.value
                        )
                            ? styles.buttonContainer
                            : styles.disabledButton
                    }
                    textStyle={styles.buttonText}
                    onPress={() => {
                        const payload = {
                            userParams: {
                                userProfileData,
                                imageParams: null,
                                navigation,
                            },
                        };
                    }}
                    text="Finish"
                />
            </View>
        </ScrollView>
    );
};

export default AdditionalInformation;
