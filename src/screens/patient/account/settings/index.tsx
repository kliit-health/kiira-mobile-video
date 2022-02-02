import React, { PureComponent } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Text,

} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import CustomText from '~/components/customText';
import Constant, { colors } from '~/utils/constants';
import CustomInputText from '~/components/customInputText';
import { signOut, updateAccount } from '~/redux/reducers/account';
import { showOrHideModal } from '~/components/customModal/action';
import { Header, ListItem } from '~/components';
import { list, listItems } from './model';


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
    public email: any;
    public phoneNumber: any;
    public staticImages: any;

    constructor(props) {
        super(props);
        const { userData, lang } = this.props;
        this.state = {
            email: userData.profileInfo.email,
            phoneNumberLength: false,
            lang: 'en',
            phoneNumber: userData.profileInfo.phoneNumber,
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
            this.setState({ phoneNumberLength: true });
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
            3,
            6,
        )}-${phoneNumber.slice(6, 10)}`;
    };

    render() {
        const {
            navigation,
            lang,
            handleSignout,
            userData,
            updateUserData,
            getUser,
        } = this.props;
        const { phoneNumber, email, phoneNumberLength } = this.state;
        const { staticImages } = Constant.App;
        return (
            <View style={styles.container}>
                <ScrollView
                    style={{ backgroundColor: colors.babyBlue }}
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
                            <CustomInputText
                                editable={userData.email ? false : true}
                                autoCapitalize="words"
                                onChangeText={value =>
                                    this.setState({ email: value })
                                }
                                placeholder={'Enter your email'}
                                value={email}
                                style={[
                                    styles.emailInputEmptyTypeStyle,
                                    { fontWeight: '300' },
                                ]}
                                placeholderTextColor={'#868992'}
                            />
                        </View>
                        <View style={styles.inputTextContainerStyle}>
                            <CustomText style={styles.textStyle}>
                                Phone:{' '}
                            </CustomText>

                            <CustomInputText
                                keyboardType="phone-pad"
                                textContentType="telephoneNumber"
                                onChangeText={value => {
                                    const formattedPhoneNumber =
                                        this.formatPhoneNumber(value);
                                    this.setState({
                                        phoneNumber: formattedPhoneNumber,
                                    });
                                }}
                                placeholder={'Enter your number'}
                                value={phoneNumber}
                                style={[
                                    styles.phoneInputEmptyTypeStyle,
                                    { fontWeight: '300' },
                                ]}
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
                                                : ''
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
