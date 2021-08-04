import React, { Component } from 'react';
import ChatBot from '~/components/chatBot';
import Review from './Review';
import ChatModal from './chatModal';
import Header from './Header';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateUserDataToFirebase } from './action';
import Constant from '~/utils/constants';
import { showOrHideModal } from '~/components/customModal/action';
import { getOrganizationInfo } from '~/utils/firebase';

class ChatBotScreen extends Component {
    public state: any;
    public props: any;
    public setState: any;
    public userData: any;
    public navigation: any;
    public updateUserData: any;
    public first_name: any;
    public last_name: any;
    public dob: any;
    public gender: any;
    public pronouns: any;
    public sexuality: any;
    public insurance: any;
    public plan: any;
    public zipcode: any;
    public income: any;
    public enrollment: any;
    public housingSecure: any;
    public foodSecure: any;
    public ethnicity: any;
    public organization: any;
    public loadingOrg: any;

    constructor(props) {
        super(props);
        this.state = {
            stateSelected: '',
            organization: '',
            loadingOrg: true,
        };
    }

    componentDidMount() {
        (async () => {
            const { userData } = this.props;
            if (userData) {
                const org = await getOrganizationInfo(userData);
                this.setState({ organization: org, loadingOrg: false });
            } else {
                this.setState({ loadingOrg: false });
            }
        })();
    }

    setSelectedState = state => {
        this.setState({ stateSelected: state.value });
    };

    handleSubmit = userInfo => {
        const { navigation, updateUserData, userData } = this.props;

        const {
            first_name,
            last_name,
            dob,
            gender,
            pronouns,
            state,
            sexuality,
            insurance,
            plan,
            zipcode,
            income,
            enrollment,
            housingSecure,
            foodSecure,
            ethnicity,
        } = userInfo;

        if (!first_name.value.trim()) {
            showHideErrorModal(lang.addProfileData.emptyFirstNameMsg);
        } else if (!last_name.value.trim()) {
            showHideErrorModal(lang.addProfileData.emptyLastNameMsg);
        } else if (!state.value) {
            showHideErrorModal(lang.addProfileData.emptyStateSelectionMsg);
        } else if (!pronouns.value) {
            showHideErrorModal(lang.addProfileData.emptyPronounsMsg);
        } else {
            const payloadData = {
                userParams: {
                    ...(userData.address && { address: userData.address }),
                    chats: userData.chats,
                    ...(userData.customer && { customer: userData.customer }),
                    displayName: userData.displayName,
                    email: userData.email,
                    fcmToken: userData.fcmToken,
                    invitationDate: userData.invitationDate,
                    invitationDate: userData.invitationDate,
                    invitationId: userData.invitationId,
                    organizationId: userData.organizationId,
                    firstName: first_name.value.trim(),
                    lastName: last_name.value.trim(),
                    dob: dob.value ? dob.value : '',
                    gender: gender.value.trim(),
                    ...(userData.plan && { plan: userData.plan }),
                    pronouns: pronouns.value,
                    state: userInfo['update-state']
                        ? userInfo['update-state'].value
                        : state.value,
                    signUpDate: Date.now(),
                    sexuality: userInfo['update-sexuality']
                        ? userInfo['update-sexuality'].value
                        : sexuality.value,
                    ...(userData.subscription && {
                        subscription: { ...userData.subscription },
                    }),
                    prepaid: 0,
                    insurance: insurance.value,
                    insurancePlan: plan.value.trim(),
                    lang: 'en',
                    phoneNumber: userData.profileInfo.phoneNumber,
                    ...(zipcode && { zipcode: zipcode.value }),
                    ...(income && {
                        income: userInfo['update-income']
                            ? userInfo['update-income']
                            : income.value,
                    }),
                    ...(enrollment && { enrollment: enrollment.value }),
                    ...(housingSecure && { homeSecure: housingSecure }),
                    ...(foodSecure && { foodSecure: foodSecure }),
                    ...(ethnicity && {
                        ethnicity: userInfo['update-ethnicity']
                            ? userInfo['update-ethnicity']
                            : ethnicity.value,
                    }),
                    visits: userData.visits,
                },
                navigation,
            };
            updateUserData(payloadData);
        }
    };

    leave = () => {
        this.props.navigation.goBack();
    };

    render() {
        const { userData } = this.props;
        const { organization, loadingOrg } = this.state;

        const steps = {
            normal: [
                {
                    id: 'intro',
                    message:
                        "Hi, I'm Kiira, your personal health assistant. I'm here to help you navigate your health. \n \n Let's get to know each other shall we?",
                    trigger: '0',
                    color: 'green',
                },
                {
                    id: '0',
                    options: [
                        {
                            value: "Let's do it!",
                            label: "Let's do it!",
                            trigger: '1',
                        },
                        {
                            value: 'Go Back',
                            label: 'Go Back',
                            trigger: this.leave,
                        },
                    ],
                },
                {
                    id: '1',
                    message: `Awesome, ${userData.displayName}! At least... that's \n what I think your name is. What should I call you?`,
                    trigger: 'first_name',
                },
                {
                    id: 'first_name',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'What is your last name?',
                    trigger: 'last_name',
                },
                {
                    id: 'last_name',
                    user: true,
                    trigger: '5',
                },
                {
                    id: '5',
                    message: 'What is your preferred Pronouns?',
                    trigger: 'pronouns',
                },
                {
                    id: 'pronouns',
                    options: [
                        { value: 'She/Her', label: 'She/Her', trigger: '7' },
                        { value: 'He/Him', label: 'He/Him', trigger: '7' },
                        {
                            value: 'They/Them',
                            label: 'They/Them',
                            trigger: '7',
                        },
                    ],
                },
                {
                    id: '7',
                    message:
                        'When were you born? \n \nFormat should be MM/DD/YYYY',
                    trigger: 'dob',
                },
                {
                    id: 'dob',
                    user: true,
                    trigger: '22',
                    validator: value => {
                        if (moment(value, 'MM/DD/YYYY', true).isValid()) {
                            return true;
                        } else {
                            return 'Invalid Format';
                        }
                    },
                },
                {
                    id: '20',
                    message: 'What state are you located in?',
                    trigger: '21',
                },
                {
                    id: '21',
                    options: [
                        {
                            value: 'Select State',
                            label: 'Select State',
                            trigger: 'state',
                        },
                    ],
                },
                {
                    id: 'state',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.states}
                            trigger="23"
                        />
                    ),
                },
                {
                    id: '23',
                    message: 'How do you sexually identify?',
                    trigger: '24',
                },
                {
                    id: '24',
                    options: [
                        {
                            value: 'Select Sexuality',
                            label: 'Select Sexuality',
                            trigger: 'sexuality',
                        },
                    ],
                },
                {
                    id: 'sexuality',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.sexuality}
                            trigger="25"
                        />
                    ),
                },
                {
                    id: '25',
                    message: 'What is your current Insurance status?',
                    trigger: 'insurance',
                },
                {
                    id: 'insurance',
                    options: [
                        {
                            value: 'Aetna Health',
                            label: 'Aetna Health',
                            trigger: '26',
                        },
                        {
                            value: 'Blue Cross/Blue Shield',
                            label: 'Blue Cross/Blue Shield',
                            trigger: '26',
                        },
                        {
                            value: 'Cigna',
                            label: 'Cigna',
                            trigger: '26',
                        },
                        {
                            value: 'Kaiser',
                            label: 'Kaiser',
                            trigger: '26',
                        },
                        {
                            value: 'United Health',
                            label: 'United Health',
                            trigger: '26',
                        },
                        {
                            value: 'WellPoint',
                            label: 'WellPoint',
                            trigger: '26',
                        },
                        {
                            value: 'Other',
                            label: 'Other',
                            trigger: '26',
                        },
                        {
                            value: 'None',
                            label: 'None',
                            trigger: '26',
                        },
                    ],
                },
                {
                    id: '26',
                    message:
                        'If applicable, What is your plan, id, or group number. Otherwise press send',
                    trigger: 'plan',
                },
                {
                    id: 'plan',
                    user: true,
                    trigger: '9',
                },
                {
                    id: '22',
                    message: 'What is your gender?',
                    trigger: 'gender',
                },
                {
                    id: 'gender',
                    user: true,
                    trigger: '20',
                },
                {
                    id: '9',
                    message: 'Great! Check out your summary',
                    trigger: 'review',
                },
                {
                    id: 'review',
                    component: <Review custom={false} />,
                    trigger: 'update',
                },
                {
                    id: 'update',
                    message: 'Would you like to update something?',
                    trigger: 'update-question',
                },
                {
                    id: 'update-question',
                    options: [
                        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                        { value: 'no', label: 'No', trigger: 'end-message' },
                    ],
                },
                {
                    id: 'update-yes',
                    message: 'What field would you like to update?',
                    trigger: 'update-fields',
                },
                {
                    id: 'update-fields',
                    options: [
                        {
                            value: 'first_name',
                            label: 'First Name',
                            trigger: 'update-first-name',
                        },
                        {
                            value: 'last_name',
                            label: 'Last Name',
                            trigger: 'update-last-name',
                        },
                        {
                            value: 'pronouns',
                            label: 'Pronouns',
                            trigger: 'update-pronouns',
                        },
                        { value: 'dob', label: 'DOB', trigger: 'update-dob' },
                        {
                            value: 'gender',
                            label: 'Gender',
                            trigger: 'update-gender',
                        },
                        {
                            value: 'state',
                            label: 'State',
                            trigger: 'update-state',
                        },
                        {
                            value: 'sexuality',
                            label: 'Sexuality',
                            trigger: 'update-sexuality',
                        },
                        {
                            value: 'insurance',
                            label: 'Insurance',
                            trigger: 'update-insurance',
                        },
                    ],
                },
                {
                    id: 'update-first-name',
                    update: 'first_name',
                    trigger: '9',
                },
                {
                    id: 'update-last-name',
                    update: 'last_name',
                    trigger: '9',
                },
                {
                    id: 'update-pronouns',
                    update: 'pronouns',
                    trigger: '9',
                },
                {
                    id: 'update-dob',
                    update: 'age',
                    trigger: '9',
                },
                {
                    id: 'update-gender',
                    update: 'gender',
                    trigger: '9',
                },
                {
                    id: 'update-state',
                    update: 'state',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.states}
                            trigger="9"
                        />
                    ),
                },
                {
                    id: 'update-sexuality',
                    update: 'sexuality',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.sexuality}
                            trigger="9"
                        />
                    ),
                },
                {
                    id: 'update-insurance',
                    update: 'insurance',
                    trigger: 'plan-id',
                },
                {
                    id: 'plan-id',
                    message:
                        'If applicable, What is your plan, id, or group number. Otherwise press send',
                    trigger: 'update-plan',
                },
                {
                    id: 'update-plan',
                    update: 'plan',
                    trigger: '9',
                },
                {
                    id: 'end-message',
                    message: 'Thanks and welcome to Kiira!',
                    end: true,
                },
            ],

            custom: [
                {
                    id: 'intro',
                    message:
                        "Hi, I'm Kiira, your personal health assistant. I'm here to help you navigate your health. \n \n Let's get to know each other shall we?",
                    trigger: '0',
                },
                {
                    id: '0',
                    options: [
                        {
                            value: "Let's do it!",
                            label: "Let's do it!",
                            trigger: '1',
                        },
                        {
                            value: 'Go Back',
                            label: 'Go Back',
                            trigger: this.leave,
                        },
                    ],
                },
                {
                    id: '1',
                    message: `Awesome, ${userData.displayName}! At least... that's \n what I think your name is. What should I call you?`,
                    trigger: 'first_name',
                },
                {
                    id: 'first_name',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'What is your last name?',
                    trigger: 'last_name',
                },
                {
                    id: 'last_name',
                    user: true,
                    trigger: '5',
                },
                {
                    id: '5',
                    message: 'What is your preferred Pronouns?',
                    trigger: 'pronouns',
                },
                {
                    id: 'pronouns',
                    options: [
                        { value: 'She/Her', label: 'She/Her', trigger: '7' },
                        { value: 'He/Him', label: 'He/Him', trigger: '7' },
                        {
                            value: 'They/Them',
                            label: 'They/Them',
                            trigger: '7',
                        },
                    ],
                },
                {
                    id: '7',
                    message:
                        'When were you born? \n \nFormat should be MM/DD/YYYY',
                    trigger: 'dob',
                },
                {
                    id: 'dob',
                    user: true,
                    trigger: '22',
                    validator: value => {
                        if (moment(value, 'MM/DD/YYYY', true).isValid()) {
                            return true;
                        } else {
                            return 'Invalid Format';
                        }
                    },
                },
                {
                    id: '20',
                    message: 'What state are you located in?',
                    trigger: '21',
                },
                {
                    id: '21',
                    options: [
                        {
                            value: 'Select State',
                            label: 'Select State',
                            trigger: 'state',
                        },
                    ],
                },
                {
                    id: 'state',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.states}
                            trigger="23"
                        />
                    ),
                },
                {
                    id: '23',
                    message: 'How do you sexually identify?',
                    trigger: '24',
                },
                {
                    id: '24',
                    options: [
                        {
                            value: 'Select Sexuality',
                            label: 'Select Sexuality',
                            trigger: 'sexuality',
                        },
                    ],
                },
                {
                    id: 'sexuality',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.sexuality}
                            trigger="25"
                        />
                    ),
                },
                {
                    id: '25',
                    message: 'What is your current Insurance status?',
                    trigger: 'insurance',
                },
                {
                    id: 'insurance',
                    options: [
                        {
                            value: 'Aetna Health',
                            label: 'Aetna Health',
                            trigger: '26',
                        },
                        {
                            value: 'Blue Cross/Blue Shield',
                            label: 'Blue Cross/Blue Shield',
                            trigger: '26',
                        },
                        {
                            value: 'Cigna',
                            label: 'Cigna',
                            trigger: '26',
                        },
                        {
                            value: 'Kaiser',
                            label: 'Kaiser',
                            trigger: '26',
                        },
                        {
                            value: 'United Health',
                            label: 'United Health',
                            trigger: '26',
                        },
                        {
                            value: 'WellPoint',
                            label: 'WellPoint',
                            trigger: '26',
                        },
                        {
                            value: 'Other',
                            label: 'Other',
                            trigger: '26',
                        },
                        {
                            value: 'None',
                            label: 'None',
                            trigger: '26',
                        },
                    ],
                },
                {
                    id: '26',
                    message:
                        'If applicable, What is your plan, id, or group number. Otherwise press send',
                    trigger: 'plan',
                },
                {
                    id: 'plan',
                    user: true,
                    trigger: '27',
                },
                {
                    id: '27',
                    message: 'What is your zipcode?',
                    trigger: 'zipcode',
                },
                {
                    id: 'zipcode',
                    user: true,
                    trigger: '28',
                },
                {
                    id: '28',
                    message: 'Current Enrollment',
                    trigger: 'enrollment',
                },
                {
                    id: 'enrollment',
                    options: [
                        {
                            value: 'Full Time',
                            label: 'Full Time',
                            trigger: '29',
                        },
                        {
                            value: 'Part Time',
                            label: 'Part Time',
                            trigger: '29',
                        },
                    ],
                },
                {
                    id: '29',
                    message: 'What is your household income?',
                    trigger: '30',
                },
                {
                    id: '30',
                    options: [
                        {
                            value: 'Household Income',
                            label: 'Household Income',
                            trigger: 'income',
                        },
                    ],
                },
                {
                    id: 'income',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.income}
                            trigger="31"
                        />
                    ),
                },
                {
                    id: '22',
                    message: 'What is your gender?',
                    trigger: 'gender',
                },
                {
                    id: 'gender',
                    user: true,
                    trigger: '20',
                },
                {
                    id: '31',
                    message: 'Is your housing situation secure?',
                    trigger: 'housingSecure',
                },
                {
                    id: 'housingSecure',
                    options: [
                        { value: true, label: 'Yes', trigger: '32' },
                        { value: false, label: 'No', trigger: '32' },
                    ],
                },
                {
                    id: '32',
                    message: 'Do you have regular access to food?',
                    trigger: 'foodSecure',
                },
                {
                    id: 'foodSecure',
                    options: [
                        { value: true, label: 'Yes', trigger: '33' },
                        { value: false, label: 'No', trigger: '33' },
                    ],
                },
                {
                    id: '33',
                    message: 'What is your Race / Ethnicity?',
                    trigger: '34',
                },
                {
                    id: '34',
                    options: [
                        {
                            value: 'ethnicity',
                            label: 'Race / Ethnicity',
                            trigger: 'ethnicity',
                        },
                    ],
                },
                {
                    id: 'ethnicity',
                    component: (
                        <ChatModal data={Constant.App.Modal.race} trigger="9" />
                    ),
                },
                {
                    id: '9',
                    message: 'Great! Check out your summary',
                    trigger: 'review',
                },
                {
                    id: 'review',
                    component: <Review custom={true} />,
                    trigger: 'update',
                },
                {
                    id: 'update',
                    message: 'Would you like to update something?',
                    trigger: 'update-question',
                },
                {
                    id: 'update-question',
                    options: [
                        { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                        { value: 'no', label: 'No', trigger: 'end-message' },
                    ],
                },
                {
                    id: 'update-yes',
                    message: 'What field would you like to update?',
                    trigger: 'update-fields',
                },
                {
                    id: 'update-fields',
                    options: [
                        {
                            value: 'first_name',
                            label: 'First Name',
                            trigger: 'update-first-name',
                        },
                        {
                            value: 'last_name',
                            label: 'Last Name',
                            trigger: 'update-last-name',
                        },
                        {
                            value: 'pronouns',
                            label: 'Pronouns',
                            trigger: 'update-pronouns',
                        },
                        { value: 'dob', label: 'DOB', trigger: 'update-dob' },
                        {
                            value: 'gender',
                            label: 'Gender',
                            trigger: 'update-gender',
                        },
                        {
                            value: 'state',
                            label: 'State',
                            trigger: 'update-state',
                        },
                        {
                            value: 'sexuality',
                            label: 'Sexuality',
                            trigger: 'update-sexuality',
                        },
                        {
                            value: 'insurance',
                            label: 'Insurance',
                            trigger: 'update-insurance',
                        },
                        {
                            value: 'enrollment',
                            label: 'Enrollment',
                            trigger: 'update-enrollment',
                        },
                        {
                            value: 'zipcode',
                            label: 'Zipcode',
                            trigger: 'update-zipcode',
                        },
                        {
                            value: 'income',
                            label: 'Income',
                            trigger: 'update-income',
                        },
                        {
                            value: 'foodSecure',
                            label: 'Food Secure',
                            trigger: 'update-food-secure',
                        },
                        {
                            value: 'housingSecure',
                            label: 'Housing Secure',
                            trigger: 'update-housing-secure',
                        },
                        {
                            value: 'ethnicity',
                            label: 'Race / Ethnicity',
                            trigger: 'update-ethnicity',
                        },
                    ],
                },
                {
                    id: 'update-first-name',
                    update: 'first_name',
                    trigger: '9',
                },
                {
                    id: 'update-last-name',
                    update: 'last_name',
                    trigger: '9',
                },
                {
                    id: 'update-pronouns',
                    update: 'pronouns',
                    trigger: '9',
                },
                {
                    id: 'update-dob',
                    update: 'age',
                    trigger: '9',
                },
                {
                    id: 'update-gender',
                    update: 'gender',
                    trigger: '9',
                },
                {
                    id: 'update-state',
                    update: 'state',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.states}
                            trigger="9"
                        />
                    ),
                },
                {
                    id: 'update-sexuality',
                    update: 'sexuality',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.sexuality}
                            trigger="9"
                        />
                    ),
                },
                {
                    id: 'update-insurance',
                    update: 'insurance',
                    trigger: 'plan-id',
                },
                {
                    id: 'plan-id',
                    message:
                        'If applicable, What is your plan, id, or group number. Otherwise press send',
                    trigger: 'update-plan',
                },
                {
                    id: 'update-plan',
                    update: 'plan',
                    trigger: '9',
                },
                {
                    id: 'update-zipcode',
                    update: 'zipcode',
                    trigger: '9',
                },
                {
                    id: 'update-enrollment',
                    update: 'enrollment',
                    trigger: '9',
                },
                {
                    id: 'update-income',
                    update: 'income',
                    component: (
                        <ChatModal
                            data={Constant.App.Modal.income}
                            trigger="9"
                        />
                    ),
                },
                {
                    id: 'update-housing-secure',
                    update: 'housingSecure',
                    trigger: '9',
                },
                {
                    id: 'update-food-secure',
                    update: 'foodSecure',
                    trigger: '9',
                },
                {
                    id: 'update-ethnicity',
                    update: 'ethnicity',
                    component: (
                        <ChatModal data={Constant.App.Modal.race} trigger="9" />
                    ),
                },
                {
                    id: 'end-message',
                    message: 'Thanks and welcome to Kiira!',
                    end: true,
                },
            ],
        };

        {
            return !loadingOrg ? (
                <ChatBot
                    handleEnd={({ steps }) => {
                        this.handleSubmit(steps);
                    }}
                    headerComponent={<Header />}
                    steps={
                        organization && organization.name.includes('Redwood')
                            ? steps.custom
                            : steps.normal
                    }
                />
            ) : null;
        }
    }
}

const mapStateToProps = state => ({
    userData: state.user.data,
});

const mapDispatchToProps = dispatch => ({
    updateUserData: value => dispatch(updateUserDataToFirebase(value)),
    showHideErrorModal: value => dispatch(showOrHideModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBotScreen);
