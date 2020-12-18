export default {
  App: {
    Api: {
      BaseUrl: '',
      endPoints: {},
    },

    appLiveLink: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.kiira',
      appleStore: 'https://apps.apple.com/us/app/id1526336962',
    },

    asynckeys: 'kiiraLocalStorageKey',
    colors: {
      azureColor: 'rgb(0, 138, 252)',
      black4: 'rgba(0, 0, 0, 0.04)',
      blackColor: 'black',
      blackTwoColor: 'rgb(51,51,51)',
      blueColor: '#008AFC',
      blueColorCreditText: '#002272',
      blueGrey: '#8e8e93',
      bgChooseExpertColor: '#E1E7F3',
      bgSemiTransparentParentColor: 'rgba(0,0,0,0.70)',
      borderColorFilterModal: '#ECEBEB',
      brownGrey: '#999999',
      brownGreyTwo: '#979797',
      chatHighLightedBgColor: '#C3CBDE',
      dark40: 'rgba(33, 43, 54, 0.4)',
      darkishBlue21: '#00267d',
      grayColor: 'rgb(204, 204, 204)',
      greenColor: '#57d596',
      greyBgAsk: '#F0F0F0',
      greyColorText: '#B3B3B3',
      lightGrey: '#949394',
      modalBgSemiTransparentColor: 'rgba(0,0,0,0.5)',
      offWhiteColor: '#F9F9F9',
      orangeUnreadNotifcationCountColor: '#F49C20',
      paleLilac: '#e5e5ea',
      pinkColor: '#FE9FD8',
      pinkishGreyColor: 'rgb(206 ,206 ,206)',
      purple: 'red',
      redColor: 'red',
      redColorLogout: '#D41F08',
      redColorExpired: '#d92405',
      searchLightText: '#666666',
      sideMenuBgColor: 'rgb(87, 213, 150)',
      vendorDetailMenuTabItemsBorderColor: '#F0F0F0',
      vendorItemBackgroundColor: 'rgba(0,0,0,.45)',
      whiteColor: '#FFFFFF',
    },

    credits: 0,
    dateFormat: 'MM/DD/YYYY',
    dimensions: {
      btnPaddingGlobal: 12,
      btnBorderRadiusGlobal: 20,
    },

    disclaimerTextForChat:
      'By opening and reading this, you agree to be bound to the following terms and conditions: Kiira is not a healthcare provider and does not substitute for a primary care physician, medical advice or professional services. The information provided through <a target="_blank" href="https://www.kiira.io/">kiira.io</a> is made for educational and informational purposes only and should not be used as a professional diagnosis or a treatment plan. No physician-patient relationship is created by this site or its use. If you have or suspect you may have, a health condition, you should consult your healthcare provider for specific medical advice.',
    firebaseTableNames: {
      users: 'users',
      questions: 'questions',
      questionList: 'questionList',
      professions: 'professions',
      languages: 'languages',
      messages: 'messagesNew',
    },

    firebaseTableKeyValuesNames: {
      expertsConditionKey: 'role',
      expertsConditionValue: 'Expert',
      questionConditionKey: 'isResolved',
      questionUserConditionKey: 'userInfo.uid',
      questionExpertConditionKey: 'expertInfo.uid',
      filterConditionGenderKey: 'profileInfo.gender',
      filterConditionProfessionKey: 'profileInfo.profession.fullName',
    },

    fontFamily: {
      headerRegular: 'Poppins-Regular',
      headerBold: 'Poppins-Bold',
      bodyRegular: 'AvenirLTStd-Roman',
      headerSemiBold: 'Poppins-SemiBold',
      headerLight: 'Poppins-Light',
      headerMedium: 'Poppins-Medium',
      avenirMedium: 'Avenir-Medium',
      avenirBook: 'Avenir-Book',
      proximaNovaSemiBold: 'ProximaNova-SemiBold',
      avenirLight: 'Avenir-Light',
    },

    helpUrl: 'http://www.kiira.io',
    learnTabUrl: 'https://medium.com/get-kiira',
    logoutInterval: 1000 * 20 * 60,
    Modal: {
      gender: [
        {value: 'Male', code: 'M'},
        {value: 'Female', code: 'F'},
      ],
      states: [
        {
          value: 'Alabama',
          code: 'AL',
        },
        {
          value: 'Alaska',
          code: 'AK',
        },
        {
          value: 'American Samoa',
          code: 'AS',
        },
        {
          value: 'Arizona',
          code: 'AZ',
        },
        {
          value: 'Arkansas',
          code: 'AR',
        },
        {
          value: 'California',
          code: 'CA',
        },
        {
          value: 'Colorado',
          code: 'CO',
        },
        {
          value: 'Connecticut',
          code: 'CT',
        },
        {
          value: 'Delaware',
          code: 'DE',
        },
        {
          value: 'District Of Columbia',
          code: 'DC',
        },
        {
          value: 'Federated States Of Micronesia',
          code: 'FM',
        },
        {
          value: 'Florida',
          code: 'FL',
        },
        {
          value: 'Georgia',
          code: 'GA',
        },
        {
          value: 'Guam',
          code: 'GU',
        },
        {
          value: 'Hawaii',
          code: 'HI',
        },
        {
          value: 'Idaho',
          code: 'ID',
        },
        {
          value: 'Illinois',
          code: 'IL',
        },
        {
          value: 'Indiana',
          code: 'IN',
        },
        {
          value: 'Iowa',
          code: 'IA',
        },
        {
          value: 'Kansas',
          code: 'KS',
        },
        {
          value: 'Kentucky',
          code: 'KY',
        },
        {
          value: 'Louisiana',
          code: 'LA',
        },
        {
          value: 'Maine',
          code: 'ME',
        },
        {
          value: 'Marshall Islands',
          code: 'MH',
        },
        {
          value: 'Maryland',
          code: 'MD',
        },
        {
          value: 'Massachusetts',
          code: 'MA',
        },
        {
          value: 'Michigan',
          code: 'MI',
        },
        {
          value: 'Minnesota',
          code: 'MN',
        },
        {
          value: 'Mississippi',
          code: 'MS',
        },
        {
          value: 'Missouri',
          code: 'MO',
        },
        {
          value: 'Montana',
          code: 'MT',
        },
        {
          value: 'Nebraska',
          code: 'NE',
        },
        {
          value: 'Nevada',
          code: 'NV',
        },
        {
          value: 'New Hampshire',
          code: 'NH',
        },
        {
          value: 'New Jersey',
          code: 'NJ',
        },
        {
          value: 'New Mexico',
          code: 'NM',
        },
        {
          value: 'New York',
          code: 'NY',
        },
        {
          value: 'North Carolina',
          code: 'NC',
        },
        {
          value: 'North Dakota',
          code: 'ND',
        },
        {
          value: 'Northern Mariana Islands',
          code: 'MP',
        },
        {
          value: 'Ohio',
          code: 'OH',
        },
        {
          value: 'Oklahoma',
          code: 'OK',
        },
        {
          value: 'Oregon',
          code: 'OR',
        },
        {
          value: 'Palau',
          code: 'PW',
        },
        {
          value: 'Pennsylvania',
          code: 'PA',
        },
        {
          value: 'Puerto Rico',
          code: 'PR',
        },
        {
          value: 'Rhode Island',
          code: 'RI',
        },
        {
          value: 'South Carolina',
          code: 'SC',
        },
        {
          value: 'South Dakota',
          code: 'SD',
        },
        {
          value: 'Tennessee',
          code: 'TN',
        },
        {
          value: 'Texas',
          code: 'TX',
        },
        {
          value: 'Utah',
          code: 'UT',
        },
        {
          value: 'Vermont',
          code: 'VT',
        },
        {
          value: 'Virgin Islands',
          code: 'VI',
        },
        {
          value: 'Virginia',
          code: 'VA',
        },
        {
          value: 'Washington',
          code: 'WA',
        },
        {
          value: 'West Virginia',
          code: 'WV',
        },
        {
          value: 'Wisconsin',
          code: 'WI',
        },
        {
          value: 'Wyoming',
          code: 'WY',
        },
      ],
      sexuality: [
        {value: 'Asexual', code: 'Asexual'},
        {value: 'Bisexual', code: 'Bisexual'},
        {value: 'Gay', code: 'Gay'},
        {value: 'Lesbian', code: 'Lesbian'},
        {value: 'Pansexual', code: 'Pansexual'},
        {value: 'Straight', code: 'Straight'},
        {value: 'Queer', code: 'Queer'},
      ],
    },

    privacyPolicyurl: 'https://www.kliit.com/privacy-policy',
    questionCreditValue: 10,
    rateUsUrl: 'https://kliit-health-app.firebaseapp.com/devicedetection',
    referalCredits: 10,
    termsAndConditionsUrl: 'https://www.kliit.com/terms-and-conditions',

    screenNames: {
      AddChild: 'AddChild',
      AddCreditOrDebitCard: 'AddCreditOrDebitCard',
      AddProfileData: 'AddProfileData',
      Allergies: 'Allergies',
      Appointments: 'Appointments',
      AskUser: 'Ask',
      AskExpert: 'AskExpert',
      BasicInfo: 'BasicInfo',
      Birth: 'Birth',
      BottomTab: 'BottomTab',
      BottomTabExpert: 'BottomTabExpert',
      BuyingCredit: 'BuyingCredit',
      CareSquad: 'CareSquad',
      ChangePassword: 'ChangePassword',
      ChangePasswordExpert: 'ChangePasswordExpert',
      Chat: 'Chat',
      ChatExpert: 'ChatExpert',
      Children: 'Children',
      ChooseExpert: 'ChooseExpert',
      Dashboard: 'Dashboard',
      DueDate: 'DueDate',
      ExpertProfile: 'ExpertProfile',
      ExpertSchedule: 'ExpertSchedule',
      ForgotPassword: 'ForgotPassword',
      GetStarted: 'GetStarted',
      HealthHistory: 'HealthHistory',
      Help: 'Help',
      Insurance: 'Insurance',
      Learn: 'Learn',
      LearnExpert: 'LearnExpert',
      LifeStyle: 'Lifestyle',
      Login: 'Login',
      Loss: 'Loss',
      MedicalHistory: 'MedicalHistory',
      Medications: 'Medications',
      NeedsPresciption: 'NeedsPresciption',
      NewUser: 'NewUser',
      PaymentMethods: 'PaymentMethods',
      PayPalApproval: 'PayPalApproval',
      PreviousAppointmentsNotes: 'PreviousAppointmentsNotes',
      PregnancyCurrent: 'PregnancyCurrent',
      PregnancyHistory: 'PregnancyHistory',
      PregnancyAndChildren: 'PregnancyAndChildren',
      PrivacyPolicy: 'PrivacyPolicy',
      ReferFriend: 'ReferFriend',
      RescheduleVisit: 'RescheduleVisit',
      RequestVisit: 'RequestVisit',
      Setting: 'Setting',
      SettingExpert: 'SettingExpert',
      SignUp: 'SignUp',
      SOS: 'SOS',
      TermsAndConditions: 'TermsConditions',
      UpdateAvailablity: 'UpdateAvailablity',
      Verify: 'Verify',
      Visit: 'Visit',
      Welcome: 'Welcome',
    },

    stack: {
      AuthStack: 'Auth',
      AppStack: 'App',
      AppStackExpert: 'AppExpert',
      AuthLoading: 'AuthLoading',
    },

    staticImages: {
      addIcon: require('../../../assets/add_icon.png'),
      applePayIcon: require('../../../assets/apple_pay.png'),
      backIcon: require('../../../assets/back.png'),
      bandaid: require('../../../assets/bandaid.png'),
      bandaidGrey: require('../../../assets/bandaid_grey.png'),
      basket: require('../../../assets/basket.png'),
      cameraGreyIcon: require('../../../assets/camera_grey.png'),
      cameraWhiteImg: require('../../../assets/camera_white.png'),
      cardIcon: require('../../../assets/card.png'),
      chat: require('../../../assets/chat.png'),
      checkBoxIcon: require('../../../assets/uncheck.png'),
      checkBoxSelectedIcon: require('../../../assets/check.png'),
      checkGreenIcon: require('../../../assets/check_green.png'),
      checkGreyIcon: require('../../../assets/check_grey.png'),
      clipboard: require('../../../assets/clipboard.png'),
      creditCard: require('../../../assets/credit_card.png'),
      crossIcon: require('../../../assets/cross.png'),
      downArrow: require('../../../assets/down_arrow.png'),
      filterIcon: require('../../../assets/filter.png'),
      greyDownArrow: require('../../../assets/grey_down_arrow.png'),
      kliitCredit: require('../../../assets/kliit_credits.png'),
      lockIcon: require('../../../assets/npLock.png'),
      loginLogoImage: require('../../../assets/logo.png'),
      loginLogoImage2: require('../../../assets/logo2.png'),
      logoHorizontal: require('../../../assets/logo-sm.png'),
      menuDotIcon: require('../../../assets/menu_dot.png'),
      passwordVisibleIcon: require('../../../assets/eye.png'),
      passwordInvisibleIcon: require('../../../assets/eye_hide.png'),
      payPalIcon: require('../../../assets/paypal.png'),
      penguin: require('../../../assets/kiira_penguin.png'),
      plusIcon: require('../../../assets/plus.png'),
      profilePlaceholderImg: require('../../../assets/profile_img_placeholder.png'),
      radioCheckBlueIcon: require('../../../assets/check_blue.png'),
      radioUnCheckBlueIcon: require('../../../assets/uncheck_blue.png'),
      readMsgIcon: require('../../../assets/read_msg_icon.png'),
      reminders: require('../../../assets/reminders.png'),
      rightChevronIcon: require('../../../assets/right_chevron.png'),
      sendIcon: require('../../../assets/send.png'),
      shareIcon: require('../../../assets/share.png'),
      sos: require('../../../assets/sos.png'),
      squad: require('../../../assets/squad.png'),
      tutorialImageOneLarge: require('../../../assets/Onboarding-1.jpg'),
      tutorialImageTwoLarge: require('../../../assets/Onboarding-2.jpg'),
      tutorialImageThreeLarge: require('../../../assets/Onboarding-3.jpg'),
      tutorialImageFourLarge: require('../../../assets/Onboarding-4.jpg'),
      tutorialImageOne: require('../../../assets/Onboarding-1-1.jpg'),
      tutorialImageTwo: require('../../../assets/Onboarding-2-1.jpg'),
      tutorialImageThree: require('../../../assets/Onboarding-3-1.jpg'),
      tutorialImageFour: require('../../../assets/Onboarding-4-1.jpg'),
      unreadMsgIcon: require('../../../assets/unread_msg_icon.png'),
      xCloseIcon: require('../../../assets/xclose.png'),
    },

    Toast: {
      SHORT: 200,
      LONG: 2000,
    },

    textSize: {
      xSmall: 10,
      Small: 12,
      Medium: 14,
      Normal: 16,
      Large: 18,
      xLarge: 20,
      xxLarge: 24,
      xxxLarge: 28,
      xxxxLarge: 32,
      xxxxxLarge: 35,
    },
  },
};

export const colors = {
  azure: 'rgb(0, 138, 252)',
  black: 'black',
  blue: '#0089FF',
  blueGrey: '#8e8e93',
  darkBlue: '#00267d',
  gray: '#aaaaaa',
  green: '#57d596',
  lightGrey: '#949394',
  offWhite: '#F9F9F9',
  orange: '#F49C20',
  paleLilac: '#e5e5ea',
  pink: '#FE9FD8',
  pinkGrey: 'rgb(206 ,206 ,206)',
  purple: '#8359FF',
  red: 'red',
  white: '#FFFFFF',
  yellow: '#F8C51E',
  charcoal: '#535A67',
  lightBlue: '#6AC5FF',
};

export const text = {
  size: {
    xSmall: 10,
    small: 12,
    medium: 14,
    regular: 16,
    large: 18,
    xLarge: 20,
    xxLarge: 24,
    xxxLarge: 28,
    xxxxLarge: 32,
    xxxxxLarge: 35,
  },
  fontFamily: {
    poppinsRegular: 'Poppins-Regular',
    poppinsBold: 'Poppins-Bold',
    poppinsSemiBold: 'Poppins-SemiBold',
    poppinsLight: 'Poppins-Light',
    poppinsMedium: 'Poppins-Medium',
    proximaNovaSemiBold: 'ProximaNova-SemiBold',
    avenirRegular: 'AvenirLTStd-Roman',
    avenirMedium: 'Avenir-Medium',
    avenirBook: 'Avenir-Book',
    avenirLight: 'Avenir-Light',
  },
};

export const icons = {
  chevron: require('../../../assets/right_chevron.png'),
  prescriber: require('../../../assets/prescriber.png'),
  sample: require('../../../assets/sample.png'),
  addIcon: require('../../../assets/add_icon.png'),
  applePayIcon: require('../../../assets/apple_pay.png'),
  backIcon: require('../../../assets/back.png'),
  basket: require('../../../assets/basket.png'),
  camera: require('../../../assets/camera_grey.png'),
  cameraWhiteImg: require('../../../assets/camera_white.png'),
  cardIcon: require('../../../assets/card.png'),
  checkBoxIcon: require('../../../assets/uncheck.png'),
  checkBoxSelectedIcon: require('../../../assets/check.png'),
  checkGreenIcon: require('../../../assets/check_green.png'),
  checkGreyIcon: require('../../../assets/check_grey.png'),
  creditCard: require('../../../assets/credit_card.png'),
  cross: require('../../../assets/cross.png'),
  downArrow: require('../../../assets/down_arrow.png'),
  filterIcon: require('../../../assets/filter.png'),
  greyDownArrow: require('../../../assets/grey_down_arrow.png'),
  kliitCredit: require('../../../assets/kliit_credits.png'),
  lockIcon: require('../../../assets/npLock.png'),
  loginLogoImage: require('../../../assets/logo.png'),
  loginLogoImage2: require('../../../assets/logo2.png'),
  logoHorizontal: require('../../../assets/logo-sm.png'),
  menuDotIcon: require('../../../assets/menu_dot.png'),
  passwordVisibleIcon: require('../../../assets/eye.png'),
  passwordInvisibleIcon: require('../../../assets/eye_hide.png'),
  payPalIcon: require('../../../assets/paypal.png'),
  penguin: require('../../../assets/kiira_penguin.png'),
  plusIcon: require('../../../assets/plus.png'),
  profilePlaceholderImg: require('../../../assets/profile_img_placeholder.png'),
  radioCheckBlueIcon: require('../../../assets/check_blue.png'),
  radioUnCheckBlueIcon: require('../../../assets/uncheck_blue.png'),
  readMsgIcon: require('../../../assets/read_msg_icon.png'),
  rightChevronIcon: require('../../../assets/right_chevron.png'),
  send: require('../../../assets/send.png'),
  shareIcon: require('../../../assets/share.png'),
  tutorialImageOneLarge: require('../../../assets/Onboarding-1.jpg'),
  tutorialImageTwoLarge: require('../../../assets/Onboarding-2.jpg'),
  tutorialImageThreeLarge: require('../../../assets/Onboarding-3.jpg'),
  tutorialImageFourLarge: require('../../../assets/Onboarding-4.jpg'),
  tutorialImageOne: require('../../../assets/Onboarding-1-1.jpg'),
  tutorialImageTwo: require('../../../assets/Onboarding-2-1.jpg'),
  tutorialImageThree: require('../../../assets/Onboarding-3-1.jpg'),
  tutorialImageFour: require('../../../assets/Onboarding-4-1.jpg'),
  unreadMsgIcon: require('../../../assets/unread_msg_icon.png'),
  xCloseIcon: require('../../../assets/xclose.png'),
};

export const screenNames = {
  AddChild: 'AddChild',
  AddCreditOrDebitCard: 'AddCreditOrDebitCard',
  AddProfileData: 'AddProfileData',
  Allergies: 'Allergies',
  Appointments: 'Appointments',
  AskUser: 'Ask',
  AskExpert: 'AskExpert',
  BasicInfo: 'BasicInfo',
  Birth: 'Birth',
  BottomTab: 'BottomTab',
  BottomTabExpert: 'BottomTabExpert',
  BuyingCredit: 'BuyingCredit',
  CareSquad: 'CareSquad',
  ChangePassword: 'ChangePassword',
  ChangePasswordExpert: 'ChangePasswordExpert',
  Chat: 'Chat',
  ChatExpert: 'ChatExpert',
  Children: 'Children',
  ChooseExpert: 'ChooseExpert',
  Dashboard: 'DashBoard',
  DueDate: 'DueDate',
  ExpertProfile: 'ExpertProfile',
  ForgotPassword: 'ForgotPassword',
  GetStarted: 'GetStarted',
  HealthHistory: 'HealthHistory',
  Help: 'Help',
  Home: 'Home',
  Insurance: 'Insurance',
  Learn: 'Learn',
  LearnExpert: 'LearnExpert',
  LifeStyle: 'Lifestyle',
  Login: 'Login',
  Loss: 'Loss',
  MedicalHistory: 'MedicalHistory',
  Medications: 'Medications',
  NeedsPresciption: 'NeedsPresciption',
  NewUser: 'NewUser',
  PaymentMethods: 'PaymentMethods',
  PayPalApproval: 'PayPalApproval',
  PreviousAppointmentsNotes: 'PreviousAppointmentsNotes',
  PregnancyCurrent: 'PregnancyCurrent',
  PregnancyHistory: 'PregnancyHistory',
  PregnancyAndChildren: 'PregnancyAndChildren',
  PrivacyPolicy: 'PrivacyPolicy',
  ReferFriend: 'ReferFriend',
  RequestVisit: 'RequestVisit',
  Setting: 'Setting',
  SettingExpert: 'SettingExpert',
  SignUp: 'SignUp',
  SOS: 'SOS',
  TermsAndConditions: 'TermsConditions',
  Verify: 'Verify',
  Welcome: 'Welcome',
  GetTreatment: 'GetTreatment',
  TreatmentBot: 'TreatmentBot',
  TreatmentHistory: 'TreatmentHistory',
  UpdateAvailablity: 'UpdateAvailablity',
  Visit: 'Visit',
  VideoVisit: 'VideoVisit',
  personalInformation: 'PersonalInformation',
  consent: 'Consent',
  agreementDetails: 'AgreementDetails',
};

export const units = {
  weight: [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '100',
    '101',
    '102',
    '103',
    '104',
    '105',
    '106',
    '107',
    '108',
    '109',
    '110',
    '111',
    '112',
    '113',
    '114',
    '115',
    '116',
    '117',
    '118',
    '119',
    '120',
    '121',
    '122',
    '123',
    '124',
    '125',
    '126',
    '127',
    '128',
    '129',
    '130',
    '131',
    '132',
    '133',
    '134',
    '135',
    '136',
    '137',
    '138',
    '139',
    '140',
    '141',
    '142',
    '143',
    '144',
    '145',
    '146',
    '147',
    '148',
    '149',
    '150',
    '151',
    '152',
    '153',
    '154',
    '155',
    '156',
    '157',
    '158',
    '159',
    '160',
    '161',
    '162',
    '163',
    '164',
    '165',
    '166',
    '167',
    '168',
    '169',
    '170',
    '171',
    '172',
    '173',
    '174',
    '175',
    '176',
    '177',
    '178',
    '179',
    '180',
    '181',
    '182',
    '183',
    '184',
    '185',
    '186',
    '187',
    '188',
    '189',
    '190',
    '191',
    '192',
    '193',
    '194',
    '195',
    '196',
    '197',
    '198',
    '199',
    '200',
    '201',
    '202',
    '203',
    '204',
    '205',
    '206',
    '207',
    '208',
    '209',
    '210',
    '211',
    '212',
    '213',
    '214',
    '215',
    '216',
    '217',
    '218',
    '219',
    '220',
    '221',
    '222',
    '223',
    '224',
    '225',
    '226',
    '227',
    '228',
    '229',
    '230',
    '231',
    '232',
    '233',
    '234',
    '235',
    '236',
    '237',
    '238',
    '239',
    '240',
    '241',
    '242',
    '243',
    '244',
    '245',
    '246',
    '247',
    '248',
    '249',
    '250',
    '251',
    '252',
    '253',
    '254',
    '255',
    '256',
    '257',
    '258',
    '259',
    '260',
    '261',
    '262',
    '263',
    '264',
    '265',
    '266',
    '267',
    '268',
    '269',
    '270',
    '271',
    '272',
    '273',
    '274',
    '275',
    '276',
    '277',
    '278',
    '279',
    '280',
    '281',
    '282',
    '283',
    '284',
    '285',
    '286',
    '287',
    '288',
    '289',
    '290',
    '291',
    '292',
    '293',
    '294',
    '295',
    '296',
    '297',
    '298',
    '299',
    '300',
    '301',
    '302',
    '303',
    '304',
    '305',
    '306',
    '307',
    '308',
    '309',
    '310',
    '311',
    '312',
    '313',
    '314',
    '315',
    '316',
    '317',
    '318',
    '319',
    '320',
    '321',
    '322',
    '323',
    '324',
    '325',
    '326',
    '327',
    '328',
    '329',
    '330',
    '331',
    '332',
    '333',
    '334',
    '335',
    '336',
    '337',
    '338',
    '339',
    '340',
    '341',
    '342',
    '343',
    '344',
    '345',
    '346',
    '347',
    '348',
    '349',
    '350',
    '351',
    '352',
    '353',
    '354',
    '355',
    '356',
    '357',
    '358',
    '359',
    '360',
    '361',
    '362',
    '363',
    '364',
    '365',
    '366',
    '367',
    '368',
    '369',
    '370',
    '371',
    '372',
    '373',
    '374',
    '375',
    '376',
    '377',
    '378',
    '379',
    '380',
    '381',
    '382',
    '383',
    '384',
    '385',
    '386',
    '387',
    '388',
    '389',
    '390',
    '391',
    '392',
    '393',
    '394',
    '395',
    '396',
    '397',
    '398',
    '399',
    '400',
    '401',
    '402',
    '403',
    '404',
    '405',
    '406',
    '407',
    '408',
    '409',
    '410',
    '411',
    '412',
    '413',
    '414',
    '415',
    '416',
    '417',
    '418',
    '419',
    '420',
    '421',
    '422',
    '423',
    '424',
    '425',
    '426',
    '427',
    '428',
    '429',
    '430',
    '431',
    '432',
    '433',
    '434',
    '435',
    '436',
    '437',
    '438',
    '439',
    '440',
    '441',
    '442',
    '443',
    '444',
    '445',
    '446',
    '447',
    '448',
    '449',
    '450',
    '451',
    '452',
    '453',
    '454',
    '455',
    '456',
    '457',
    '458',
    '459',
    '460',
    '461',
    '462',
    '463',
    '464',
    '465',
    '466',
    '467',
    '468',
    '469',
    '470',
    '471',
    '472',
    '473',
    '474',
    '475',
    '476',
    '477',
    '478',
    '479',
    '480',
    '481',
    '482',
    '483',
    '484',
    '485',
    '486',
    '487',
    '488',
    '489',
    '490',
    '491',
    '492',
    '493',
    '494',
    '495',
    '496',
    '497',
    '498',
    '499',
    '500',
    '501',
    '502',
    '503',
    '504',
    '505',
    '506',
    '507',
    '508',
    '509',
    '510',
    '511',
    '512',
    '513',
    '514',
    '515',
    '516',
    '517',
    '518',
    '519',
    '520',
    '521',
    '522',
    '523',
    '524',
    '525',
    '526',
    '527',
    '528',
    '529',
    '530',
    '531',
    '532',
    '533',
    '534',
    '535',
    '536',
    '537',
    '538',
    '539',
    '540',
    '541',
    '542',
    '543',
    '544',
    '545',
    '546',
    '547',
    '548',
    '549',
    '550',
    '551',
    '552',
    '553',
    '554',
    '555',
    '556',
    '557',
    '558',
    '559',
    '560',
    '561',
    '562',
    '563',
    '564',
    '565',
    '566',
    '567',
    '568',
    '569',
    '570',
    '571',
    '572',
    '573',
    '574',
    '575',
    '576',
    '577',
    '578',
    '579',
    '580',
    '581',
    '582',
    '583',
    '584',
    '585',
    '586',
    '587',
    '588',
    '589',
    '590',
    '591',
    '592',
    '593',
    '594',
    '595',
    '596',
    '597',
    '598',
    '599',
    '600',
    '601',
    '602',
    '603',
    '604',
    '605',
    '606',
    '607',
    '608',
    '609',
    '610',
    '611',
    '612',
    '613',
    '614',
    '615',
    '616',
    '617',
    '618',
    '619',
    '620',
    '621',
    '622',
    '623',
    '624',
    '625',
    '626',
    '627',
    '628',
    '629',
    '630',
    '631',
    '632',
    '633',
    '634',
    '635',
    '636',
    '637',
    '638',
    '639',
    '640',
    '641',
    '642',
    '643',
    '644',
    '645',
    '646',
    '647',
    '648',
    '649',
    '650',
    '651',
    '652',
    '653',
    '654',
    '655',
    '656',
    '657',
    '658',
    '659',
    '660',
    '661',
    '662',
    '663',
    '664',
    '665',
    '666',
    '667',
    '668',
    '669',
    '670',
    '671',
    '672',
    '673',
    '674',
    '675',
    '676',
    '677',
    '678',
    '679',
    '680',
    '681',
    '682',
    '683',
    '684',
    '685',
    '686',
    '687',
    '688',
    '689',
    '690',
    '691',
    '692',
    '693',
    '694',
    '695',
    '696',
    '697',
    '698',
    '699',
    '700',
    '701',
    '702',
    '703',
    '704',
    '705',
    '706',
    '707',
    '708',
    '709',
    '710',
    '711',
    '712',
    '713',
    '714',
    '715',
    '716',
    '717',
    '718',
    '719',
    '720',
    '721',
    '722',
    '723',
    '724',
    '725',
    '726',
    '727',
    '728',
    '729',
    '730',
    '731',
    '732',
    '733',
    '734',
    '735',
    '736',
    '737',
    '738',
    '739',
    '740',
    '741',
    '742',
    '743',
    '744',
    '745',
    '746',
    '747',
    '748',
    '749',
    '750',
    '751',
    '752',
    '753',
    '754',
    '755',
    '756',
    '757',
    '758',
    '759',
    '760',
    '761',
    '762',
    '763',
    '764',
    '765',
    '766',
    '767',
    '768',
    '769',
    '770',
    '771',
    '772',
    '773',
    '774',
    '775',
    '776',
    '777',
    '778',
    '779',
    '780',
    '781',
    '782',
    '783',
    '784',
    '785',
    '786',
    '787',
    '788',
    '789',
    '790',
    '791',
    '792',
    '793',
    '794',
    '795',
    '796',
    '797',
    '798',
    '799',
    '800',
    '801',
    '802',
    '803',
    '804',
    '805',
    '806',
    '807',
    '808',
    '809',
    '810',
    '811',
    '812',
    '813',
    '814',
    '815',
    '816',
    '817',
    '818',
    '819',
    '820',
    '821',
    '822',
    '823',
    '824',
    '825',
    '826',
    '827',
    '828',
    '829',
    '830',
    '831',
    '832',
    '833',
    '834',
    '835',
    '836',
    '837',
    '838',
    '839',
    '840',
    '841',
    '842',
    '843',
    '844',
    '845',
    '846',
    '847',
    '848',
    '849',
    '850',
    '851',
    '852',
    '853',
    '854',
    '855',
    '856',
    '857',
    '858',
    '859',
    '860',
    '861',
    '862',
    '863',
    '864',
    '865',
    '866',
    '867',
    '868',
    '869',
    '870',
    '871',
    '872',
    '873',
    '874',
    '875',
    '876',
    '877',
    '878',
    '879',
    '880',
    '881',
    '882',
    '883',
    '884',
    '885',
    '886',
    '887',
    '888',
    '889',
    '890',
    '891',
    '892',
    '893',
    '894',
    '895',
    '896',
    '897',
    '898',
    '899',
    '900',
    '901',
    '902',
    '903',
    '904',
    '905',
    '906',
    '907',
    '908',
    '909',
    '910',
    '911',
    '912',
    '913',
    '914',
    '915',
    '916',
    '917',
    '918',
    '919',
    '920',
    '921',
    '922',
    '923',
    '924',
    '925',
    '926',
    '927',
    '928',
    '929',
    '930',
    '931',
    '932',
    '933',
    '934',
    '935',
    '936',
    '937',
    '938',
    '939',
    '940',
    '941',
    '942',
    '943',
    '944',
    '945',
    '946',
    '947',
    '948',
    '949',
    '950',
    '951',
    '952',
    '953',
    '954',
    '955',
    '956',
    '957',
    '958',
    '959',
    '960',
    '961',
    '962',
    '963',
    '964',
    '965',
    '966',
    '967',
    '968',
    '969',
    '970',
    '971',
    '972',
    '973',
    '974',
    '975',
    '976',
    '977',
    '978',
    '979',
    '980',
    '981',
    '982',
    '983',
    '984',
    '985',
    '986',
    '987',
    '988',
    '989',
    '990',
    '991',
    '992',
    '993',
    '994',
    '995',
    '996',
    '997',
    '998',
    '999',
    '1000',
  ],
  height: [
    '2\' 8"',
    '2\' 9"',
    '2\' 10"',
    '2\' 11"',
    '2\' 12"',
    '3\' 0"',
    '3\' 1"',
    '3\' 2"',
    '3\' 3"',
    '3\' 4"',
    '3\' 5"',
    '3\' 6"',
    '3\' 7"',
    '3\' 8"',
    '3\' 9"',
    '3\' 10"',
    '3\' 11"',
    '4\' 0"',
    '4\' 1"',
    '4\' 2"',
    '4\' 3"',
    '4\' 4"',
    '4\' 5"',
    '4\' 6"',
    '4\' 7"',
    '4\' 8"',
    '4\' 9"',
    '4\' 10"',
    '4\' 11"',
    '5\' 0"',
    '5\' 1"',
    '5\' 2"',
    '5\' 3"',
    '5\' 4"',
    '5\' 5"',
    '5\' 6"',
    '5\' 7"',
    '5\' 8"',
    '5\' 9"',
    '5\' 10"',
    '5\' 11"',
    '6\' 0"',
    '6\' 1"',
    '6\' 2"',
    '6\' 3"',
    '6\' 4"',
    '6\' 5"',
    '6\' 6"',
    '6\' 7"',
    '6\' 8"',
    '6\' 9"',
    '6\' 10"',
    '6\' 11"',
    '7\' 0"',
    '7\' 1"',
    '7\' 2"',
    '7\' 3"',
    '7\' 4"',
    '7\' 5"',
    '7\' 6"',
    '7\' 7"',
    '7\' 8"',
    '7\' 9"',
    '7\' 10"',
    '7\' 11"',
    '8\' 0"',
    '8\' 1"',
    '8\' 2"',
    '8\' 3"',
    '8\' 4"',
    '8\' 5"',
    '8\' 6"',
    '8\' 7"',
    '8\' 8"',
    '8\' 9"',
    '8\' 10"',
    '8\' 11"',
  ],
};

export const collections = {
  questions: 'questions',
  users: 'users',
  healthHistory: 'healthHistory',
  careSquad: 'careSquad',
  appointments: 'appointments',
};
