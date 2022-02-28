import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import Constant, { colors, icons } from '~/utils/constants';
import styles from '../styles';
import CustomButton from '~/components/customButton';
import { CustomText, Icon } from '~/components';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CustomSelectModal from '~/components/customselectModal';
import { updateAccount } from '~/redux/reducers/account';
import { useDispatch } from 'react-redux';

const AdditionalInformation = ({ navigation }) => {
    const { userProfileData, filePath } = navigation.state.params;
    const dispatch = useDispatch();
    const { staticImages } = Constant.App;
    const [showSexualityModal, setShowSexualityModal] = useState(false);
    const [showPharmacyModal, setShowPharmacyModal] = useState(false);
    const [showInsuranceModal, setShowInsuranceModal] = useState(false);
    const [userProfileAdditionalData, setUserProfileAdditionalData] = useState({
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
                    setUserProfileAdditionalData({
                        ...userProfileAdditionalData,
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
                    setUserProfileAdditionalData({
                        ...userProfileAdditionalData,
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
                    setUserProfileAdditionalData({
                        ...userProfileAdditionalData,
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
                                userProfileAdditionalData.selectedSexuality
                                    .value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileAdditionalData.selectedSexuality.value
                                ? userProfileAdditionalData.selectedSexuality
                                      .value
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
                                userProfileAdditionalData.selectedPharmacy.value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileAdditionalData.selectedPharmacy.value
                                ? userProfileAdditionalData.selectedPharmacy
                                      .value
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
                        !userProfileAdditionalData.pharmacyAddress
                            ? styles.otherTextInput
                            : styles.OtherTextInputOnChange
                    }
                    placeholderTextColor={colors.greyDark}
                    placeholder="Pharmacy Address"
                    value={userProfileAdditionalData.pharmacyAddress}
                    onChangeText={e =>
                        setUserProfileAdditionalData({
                            ...userProfileAdditionalData,
                            pharmacyAddress: e,
                        })
                    }
                />
                <TextInput
                    testID="pharmacyPhoneNumber"
                    style={
                        !userProfileAdditionalData.pharmacyPhoneNumber
                            ? styles.otherTextInput
                            : styles.OtherTextInputOnChange
                    }
                    placeholderTextColor={colors.greyDark}
                    placeholder="Pharmacy Phone Number"
                    value={userProfileAdditionalData.pharmacyPhoneNumber}
                    onChangeText={value => {
                        const formattedPhoneNumber = formatPhoneNumber(value);
                        setUserProfileAdditionalData({
                            ...userProfileAdditionalData,
                            pharmacyPhoneNumber: formattedPhoneNumber,
                        });
                    }}
                />
                <View style={styles.stateDropDownContainerStyle}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={() => setShowInsuranceModal(true)}
                    >
                        <CustomText
                            style={
                                userProfileAdditionalData.selectedInsurance
                                    .value
                                    ? styles.selectedTextStyle
                                    : styles.stateDropDownTextStyle
                            }
                        >
                            {userProfileAdditionalData.selectedInsurance.value
                                ? userProfileAdditionalData.selectedInsurance
                                      .value
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
                        !userProfileAdditionalData.memberId
                            ? styles.otherTextInput
                            : styles.OtherTextInputOnChange
                    }
                    placeholderTextColor={colors.greyDark}
                    placeholder="Member ID"
                    value={userProfileAdditionalData.memberId}
                    onChangeText={e =>
                        setUserProfileAdditionalData({
                            ...userProfileAdditionalData,
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
                        !userProfileAdditionalData.pharmacyAddress &&
                        !userProfileAdditionalData.memberId &&
                        !userProfileAdditionalData.pharmacyPhoneNumber &&
                        !userProfileAdditionalData.selectedInsurance &&
                        !userProfileAdditionalData.selectedPharmacy &&
                        !userProfileAdditionalData.selectedSexuality
                    }
                    buttonStyle={
                        !(
                            disabled &&
                            !userProfileAdditionalData.pharmacyAddress &&
                            !userProfileAdditionalData.memberId &&
                            !userProfileAdditionalData.pharmacyPhoneNumber &&
                            !userProfileAdditionalData.selectedInsurance
                                .value &&
                            !userProfileAdditionalData.selectedPharmacy.value &&
                            !userProfileAdditionalData.selectedSexuality.value
                        )
                            ? styles.buttonContainer
                            : styles.disabledButton
                    }
                    textStyle={styles.buttonText}
                    onPress={() => {
                        let filename = null;
                        const payloadData = {
                            userParams: {
                                firstName: userProfileData.firstName.trim(),
                                lastName: userProfileData.lastName.trim(),
                                dob: userProfileData.birthday
                                    ? userProfileData.birthday
                                    : '',
                                gender: userProfileData.selectedGender.value,
                                pronouns: userProfileData.selectedPronoun.value,
                                state: userProfileData.selectedState,
                                imageUri: userProfileData.imageSrc
                                    ? userProfileData.imageSrc
                                    : '',
                                nickName: userProfileData.nickName
                                    ? userProfileData.nickName
                                    : '',
                                sexuality:
                                    userProfileAdditionalData.selectedSexuality
                                        ? userProfileAdditionalData.selectedSexuality
                                        : {},
                                pharmacy: userProfileAdditionalData
                                    .selectedPharmacy.value
                                    ? userProfileAdditionalData.selectedPharmacy
                                          .value
                                    : '',
                                pharmacyAddress:
                                    userProfileAdditionalData.pharmacyAddress
                                        ? userProfileAdditionalData.pharmacyAddress
                                        : '',
                                pharmacyPhone:
                                    userProfileAdditionalData.pharmacyPhoneNumber
                                        ? userProfileAdditionalData.pharmacyPhoneNumber
                                        : '',
                                insurance:
                                    userProfileAdditionalData.selectedInsurance
                                        ? userProfileAdditionalData
                                              .selectedInsurance.value
                                        : '',
                                insurancePlan:
                                    userProfileAdditionalData.memberId
                                        ? userProfileAdditionalData.memberId
                                        : '',
                                role: 'User',
                                signUpDate: Date.now(),
                            },
                            navigation,
                            imageParams: null,
                        };

                        if (userProfileData.imageSrc) {
                            let name = userProfileData.imageSrc.substring(
                                userProfileData.imageSrc.lastIndexOf('/') + 1,
                                userProfileData.imageSrc.length,
                            );
                            const ext = userProfileData.imageSrc
                                .split('/')
                                .pop(); // Extract image extension
                            filename =
                                Platform.OS === 'ios'
                                    ? `${Math.floor(Date.now())}${name}`
                                    : `${Math.floor(Date.now())}${name}.${ext}`;
                        }
                        if (filename) {
                            payloadData.imageParams = {
                                file:
                                    Platform.OS == 'ios'
                                        ? userProfileData.imageSrc
                                        : filePath,
                                filename,
                            };
                        }
                        dispatch(updateAccount(payloadData));
                        navigation.navigate('Home');
                    }}
                    text="Finish"
                />
            </View>
        </ScrollView>
    );
};

export default AdditionalInformation;
