import React, { PureComponent } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Platform,
    ScrollView,
    PermissionsAndroid,
    SafeAreaView,
    StatusBar,
    Text,
    Switch,
} from 'react-native';
import { connect } from 'react-redux';
import styles, { customStyles } from './styles';
import CustomText from '~/components/customText';
import Constant, { colors } from '~/utils/constants';
import { Avatar } from 'react-native-elements';
import CustomInputText from '~/components/customInputText';
import CustomSelectModal from '~/components/customselectModal';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ImagePicker from 'react-native-image-picker';
import { signOut, updateAccount } from '~/redux/reducers/account';
import { showOrHideModal } from '~/components/customModal/action';
import { Header, ListItem, Screen } from '~/components';
import { list, listItems } from './model';
import { getUser } from '~/redux/actions/user';

class Setting extends PureComponent {
    public props: any;
    public state: any;
    public setState: any;
    public userData: any;
    public lang: any;
    public navigation: any;
    public showHideErrorModal: any;
    public updateUserData: any;
    public handleSignout: any;
    public firstName: any;
    public lastName: any;
    public dob: any;
    public email: any;
    public pronounsArr: any;
    public imageUri: any;
    public file: any;
    public filepath: any;
    public selectedState: any;
    public selectedSexuality: any;
    public insurance: any;
    public insurancePlan: any;
    public getUser:any;
    public zipcode: any;
    public enrollment: any;
    public income: any;
    public homeSecure: any;
    public foodSecure: any;
    public ethnicity: any;
    public phoneNumber: any;
    public gender: any;
    public staticImages: any;
    public imageSrc: any;
    public showSelectStateModal: any;
    public showSelectSexualityModal: any;
    public enableText: string;

    constructor(props) {
        super(props);
        const { userData, lang, getUser } = this.props;
        this.state = {
            firstName: userData.profileInfo.firstName,
            lastName: userData.profileInfo.lastName,
            imageSrc: userData.profileInfo.profileImageUrl,
            email: userData.profileInfo.email,
            imageUri: '',
            filepath: '',
            file: '',
            phoneNumberLength: false,
            showIosDateModal: false,
            showSelectStateModal: false,
            showSelectSexualityModal: false,
            dob: userData.profileInfo.dob,
            gender: userData.profileInfo.gender,
            selectedState: userData.profileInfo.state,
            selectedSexuality: userData.profileInfo.sexuality,
            states: Constant.App.Modal.states,
            sexuality: Constant.App.Modal.sexuality,
            insurance: userData.profileInfo.insurance,
            insurancePlan: userData.profileInfo.insurancePlan,
            zipcode: userData.profileInfo.zipcode,
            enrollment: userData.profileInfo.enrollment,
            income: userData.profileInfo.income,
            homeSecure: userData.profileInfo.homeSecure,
            foodSecure: userData.profileInfo.foodSecure,
            ethnicity: userData.profileInfo.ethnicity,
            lang: 'en',
            phoneNumber: userData.profileInfo.phoneNumber,
            enableText: userData.profileInfo.enableText ?? true,
            pronounsArr: [
                {
                    title: lang.addProfileData.sheHer,
                    selected:
                        userData.profileInfo.pronouns &&
                        userData.profileInfo.pronouns ===
                            lang.addProfileData.sheHer
                            ? true
                            : false,
                },
                {
                    title: lang.addProfileData.heHim,
                    selected:
                        userData.profileInfo.pronouns &&
                        userData.profileInfo.pronouns ===
                            lang.addProfileData.heHim
                            ? true
                            : false,
                },
                {
                    title: lang.addProfileData.theyThem,
                    selected:
                        userData.profileInfo.pronouns &&
                        userData.profileInfo.pronouns ===
                            lang.addProfileData.theyThem
                            ? true
                            : false,
                },
            ],
        };
    }

   
    renderButtonView() {
        const { navigation, lang } = this.props;
        return (
            <TouchableOpacity
                style={styles.btnContainerStyle}
                onPress={() => {
                    navigation.navigate(
                        Constant.App.screenNames.ChangePassword,
                    );
                }}
            >
                <CustomText style={styles.btnTextStyle}>
                    {lang.setting.changePassword}
                </CustomText>
            </TouchableOpacity>
        );
    }
    formatPhoneNumber = value => {
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;

        if (phoneNumberLength < 7) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        if (phoneNumberLength === 10) {
           this.setState({phoneNumberLength: true})
        }  
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
            3,
            6,
        )}-${phoneNumber.slice(6, 10)}`;
          
    };

    render() {
        const { navigation, lang, handleSignout, userData,updateUserData,getUser } = this.props;
        const { phoneNumber, email, enableText,phoneNumberLength } = this.state;
        const { staticImages } = Constant.App;
        console.log('-----USERDATA----', userData);
       
        

      
        return (
            <View style={styles.container}>
                <ScrollView
                style={{backgroundColor:colors.babyBlue}}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.headerStyle}>
                    <Header
                    
                        onBack={() => navigation.goBack()}
                        title={'Settings'}
                    />
                </View>
                    <View style={styles.inputTextParentContainerStyle}>
                        <View style={[styles.inputTextFirstNameContainerStyle]}>
                            <CustomText style={styles.textStyle}>
                                Email:{' '}
                            </CustomText>
                            {/* <CustomText style={styles.emailText}>{userData.profileInfo.email}</CustomText> */}
                            <CustomInputText
                            editable={userData.email ? false : true}
                                autoCapitalize="words"
                                onChangeText={value =>
                                    this.setState({ email: value })
                                }
                                placeholder={'Enter your email'}
                                value={email}
                                style={
                                   
                                         [
                                              styles.emailInputEmptyTypeStyle,
                                              { fontWeight: '300' },
                                          ]
                                }
                                placeholderTextColor={'#868992'}
                            />
                        </View>
                        <View style={styles.inputTextContainerStyle}>
                            <CustomText style={styles.textStyle}>
                                Phone:{' '}
                            </CustomText>

                            <CustomInputText
                            keyboardType = 'phone-pad'
                            textContentType='telephoneNumber'
                                onChangeText={value => {
                                    const formattedPhoneNumber =
                                        this.formatPhoneNumber(value);
                                    this.setState({
                                        phoneNumber: formattedPhoneNumber,
                                    });
                                }}
                                placeholder={'Enter your number'}
                                value={phoneNumber}
                                style={
                                    [
                                              styles.phoneInputEmptyTypeStyle,
                                              { fontWeight: '300' },
                                          ]
                                }
                                placeholderTextColor={'#868992'}
                            />

                            <TouchableOpacity
                                key="Enable Text"
                                onPress={() => {
                                    // updateUserData({...userData,phoneNumber})
                                }}
                            >
                                <View style={styles.textContainerStyle}>
                                    <Image
                                        resizeMode="contain"
                                        source={
                                            phoneNumberLength
                                                ? staticImages.checkGreenIcon
                                                : ""
                                        }
                                        style={styles.pronounsChecboxIconStyle}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: '6%',
                            borderBottomColor: colors.greyAccent,
                            borderBottomWidth: 1,
                        }}
                    >
                        {listItems.map(({ title, destination, content }) => (
                            <ListItem
                                key={title}
                                id={destination}
                                onPress={() => navigation.navigate(destination)}
                                displayChevron={true}
                                displayBorder={true}
                            >
                                <View style={styles.listContainer}>
                                    <View style={styles.titleContainer}>
                                        {content == `HIPAA` && (
                                            <Text style={styles.content}>
                                                {content}
                                            </Text>
                                        )}
                                        {content == `Terms and Conditions` && (
                                            <Text style={styles.content}>
                                                {content}
                                            </Text>
                                        )}
                                        {content == `Privacy Policy` && (
                                            <Text style={styles.content}>
                                                {content}
                                            </Text>
                                        )}
                                    </View>
                                </View>
                            </ListItem>
                        ))}
                    </View>
                    <View style={{ marginTop: '6%' }}>
                        {list.map(({ title }) => (
                            <TouchableOpacity
                                style={[
                                    styles.versionListContainer,
                                    styles.borderStyle,
                                ]}
                                onPress={() => console.log('')}
                            >
                                <View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        {title == `App Version` && (
                                            <>
                                                <Text style={styles.content}>
                                                    {title}
                                                </Text>
                                                <Text style={styles.version}>
                                                    V 1.3
                                                </Text>
                                            </>
                                        )}
                                        {/* {title == `Face ID` && (
                                            <>
                                                <Text style={styles.content}>
                                                    {title}
                                                </Text>
                                                <Switch
                                                    style={{
                                                        marginLeft: '70%',
                                                    }}
                                                    trackColor={{
                                                        false: 'gray',
                                                        true: colors.primaryBlue,
                                                    }}
                                                    thumbColor="white"
                                                    ios_backgroundColor="gray"
                                                    onValueChange={value =>
                                                        this.setState({
                                                            toggle: value,
                                                        })
                                                    }
                                                    value={this.state.toggle}
                                                />
                                            </>
                                        )} */}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {this.renderButtonView()}
                    <TouchableOpacity
                        onPress={() => handleSignout({ navigation })}
                        style={styles.logoutView}
                    >
                        <Text style={styles.logoutTextStyle}>Log Out</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    userData: state.user.data,
    lang: state.language,
});

const mapDispatchToProps = dispatch => ({
    handleSignout: ({ value }) => dispatch(signOut({ value })),
    updateUserData: value => dispatch(updateAccount(value)),
    showHideErrorModal: value => dispatch(showOrHideModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
