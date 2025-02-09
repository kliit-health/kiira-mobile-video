import BillingAndInsurance from "~/screens/common/billingAndInsurance";

export default {
    account: {
        logout: 'Logout',
        settings: 'My Profile',
        billingAndInsurance: 'Billing & Insurance',
        addInsurance: 'Add Insurance',
        pharmacy: 'Pharmacy',
        pleaseSelect: 'Please Select',
        emergencyContact: 'Emergency Contact',
        myHealth: 'My Health', 
        pleaseAddAContact: 'Please Add a Contact',
        termsAndConditions: 'Terms & Conditions',
        privacyPolicies: 'Privacy Policies',
        help: 'Help',
        rate: 'Rate us',
        refer: 'Refer a Friend, Get 10 Credits',
        appointments: 'Appointments',
        healthHistory: 'Health History',
        availablity: 'Update Availablity',
        born: 'Born',
        pronouns: 'Pronouns',
        sexuality: 'Sexuality',
        cancelPlan: 'Cancel Plan',
        changePlan: 'Change Plan',
        cancelConfirm: 'Are you sure you want to cancel your membership?',
        planCanceled: 'Plan has been canceled. Service will end on ',
        canceling: '...canceling',
        emailUs: 'Please email us at kiira@support.io to get more information.',
    },
    requestVisit: {
        title: 'Request a Visit',
        goHome: 'Go Home',
        goBack: 'Go Back',
    },
    addCreditCardData: {
        cardNumber: 'Card number',
        securityCode: 'Security Code',
        expireDate: 'mm/yy',
        firstName: 'First Name',
        lastName: 'Last Name',
        saveCard: 'Save Card',
    },
    addCreditOrDebitCard: {
        title: 'Add Credit/Debit Card',
        footer: 'Your information is encrypted and processed by Stripe.',
    },
    personalInformation: {
        title: 'Personal Information',
        save: 'Save',
    },
    expertChatsHeaders:{
       providers: 'All Providers',
       yourSquad: 'Your Squad'
    },
    profileHeader:{
        profile:'Profile'
    },
    consent: {
        title: 'Consent Agreements',
        acceptanceDate: 'Acceptance Date',
    },
    agreementDetails: {
        title: 'Agreement Details',
    },
    medications: {
        title: 'Medications',
        save: 'Save',
    },
    labResults: {
        title: 'Lab Results', 
    },
    vaccines: {
        title: 'Vaccines',
    },
    healthHistory: {
        title: 'Health History',
    },
    pastVisits: {
        title: 'Past Visits',
    },
    pregnancy: {
        title: 'Pregnancy and Children',
    },
    pregnancyHistory: {
        title: 'Pregnancy History',
        save: 'Save',
    },
    pregnancyCurrent: {
        title: 'Current Pregnancy',
        addPregnancy: 'Add Pregnancy',
    },
    medicalHistory: {
        title: 'Medical History',
        save: 'Save',
    },
    allergies: {
        title: 'Allergies',
        header: 'All Allergies',
        noAllergies: 'You have no allergies on record with Kiira',
        previous: 'Previous',
        next: 'Next',
        finish: 'Finish',
    },
    medicalConditions:{
       title: 'History',
       header: 'Conditions and Diagnoses',
       noMedicalConditions: 'You have no conditions or procedures on record with Kiira'
    },
    insurance: {
        title: 'Insurance',
        save: 'Save',
    },
    previousAppointmentsNotes: {
        title: 'Previous Appointments Notes',
    },
    dueDate: {
        title: 'Due Date',
    },
    needsPrescription: {
        question: 'Do you need a prescription?',
        yes: 'Yes',
        no: 'No',
        notSure: `I'm not sure`,
    },
    loss: {
        title: 'I Have Experienced a Loss',
        confirm: 'Confirm',
        weAreSorry: "We're sorry to hear this.",
        youAreNotAlone: 'Many folks experience this. You are not alone.',
        expertsNetwork:
            'Kiira network of experts is available to support you throught this difficult time.',
    },
    birth: {
        title: 'I Have Given Birth',
        confirm: 'Confirm',
        congratulations: 'Congratulations!',
        help: 'Our experts are here to help with your new parenting needs, including lactation consultation and mental health support.',
    },
    children: {
        title: 'Children',
        addChild: 'Add Child',
    },
    addChild: {
        title: 'Birth Date',
        save: 'Save',
        sex: 'Sex',
        delete: 'Delete',
        name: 'Name',
    },
    careSquad: {
        title: 'Care Squad',
        search: 'Search Care Squad',
    },
    addProfileData: {
        title: 'Tell us more about you in your profile.',
        stateText: 'State of Residence',
        sexuality: 'Sexual Identity',
        save: 'Save',
        firstName: 'First Name',
        lastName: 'Last Name',
        yourBirthDay: 'Your Birthday',
        sheHer: 'She/Her',
        heHim: 'He/Him',
        theyThem: 'They/Them',
        pronounsTitle: 'Your preferred pronouns:',
        partnersTitle: 'Your partners (check all that apply)',
        emptyProfileImageMsg: 'Profile image is a required field',
        emptyFirstNameMsg: 'First name is a required field',
        emptyLastNameMsg: 'Last name is a required field',
        emptyDobMsg: 'Your birthday is a required field',
        emptyStateSelectionMsg: 'State of residence is a required field',
        emptyPronounsMsg: 'Your pronouns is a required field',
        insurance: 'Insurance',
        plan: 'Plan',
    },
    askUser: {
        headingText1: 'Hi',
        headingText2: 'What do you want to ask an expert?',
        headingTextAfterAskQuestion: 'you’re asking: ',
        textAfterEmptyCredit:
            'To ask a question to one of our experts, add Kiira credits to your account in the account tab.',
        placehorderText:
            'Ask your question to choose from our network of experts!',
        btnText: 'Ask An Expert',
        myPreviousQuestions: 'My previous questions',
        myRecentExperts: 'Our experts',
        answerBy: 'Answered by',
        credits: 'Credits',
        homeCreditsText: 'credits (per question)',
        questionsText: 'question(s) left this month',
        videoChatText: 'video session(s) left this month',
        asking: 'Asking',
        buyMoreCredits: 'Buy More Credits',
        selectTopic: 'Select Topic',
    },
    askExpert: {
        recent: 'Recent',
        resolved: 'Resolved',
        title: 'Kiira Chat',
    },
    apiLoader: {
        loadingText: 'Loading..',
    },
    buyingCredits: {
        title: 'Purchase a single consultation',
        kiira: 'Kiira',
        amountTitle: 'Amount',
        paymentTitle: 'Payment',
        addPaymentMethod: 'Add Payment Method',
        totalTitle: 'Total',
        buyCredits: 'Pay',
        applePayTitle: 'Apple Pay',
        payPalTitle: 'PayPal',
        googlePayTitle: 'G Pay',
        selectPaymentMethod: 'Please select a payment method first',
    },
    chat: {
        action: 'Actions',
        resolveQuestion: 'Resolve Question',
        cancel: 'Cancel',
        titleRateExpert: 'Your question has been resolved!',
        subTitleRateExpert: 'Rate your conversation with ',
        rate: 'Rate',
        enterMessage: 'Enter your Message',
        resolved:
            'This conversation has been resolved. To start a new question, return to the ask tab.',
        primaryCare: {
            title: 'Primary Care',
            description: 'General health questions',
        },
        womensHealth: {
            title: "Women's Health",
            description: 'OBGYN, fertility, pregnancy...',
        },
        mentalHealth: {
            title: 'Mental Health',
            description: 'Talk therapy, counseling...',
        },
        techSupport: {
            title: 'Tech Support',
            description: 'Mobile App, service, membership...',
        },
    },
    changePassword: {
        title: 'Change Password',
        cancel: 'Cancel',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        updatePassword: 'Update Password',
        emptyCurrent: 'Current Password is a required field.',
        emptyNew: 'New Password is a required field.',
        limitError: 'New Password should be at least 7 characters',
        error: 'New Password should have at least 1 special character',
        success: 'Password has been updated successfully',
    },
    chooseExpert: {
        questionTitle: 'Choose an Expert',
        edit: 'Edit',
        cancel: 'Cancel',
        save: 'Save',
        filterTitle: 'Discovery Settings',
        done: 'Done',
        languageFilterTitle: 'Show me experts who speak:',
        professionFilterTitle: 'Show me:',
        genderFilterTitle: 'Show me experts who are:',
    },
    errorMessage: {
        serverError: 'Something went wrong, please try again later.',
        noDataAvailable: 'No data available',
        userNotExist: 'User does not exist',
        invalidSecretKey: 'Invalid secret key.',
        invalidreferalCode: 'Invalid referral code.',
    },
    expertProfile: {
        title: 'Expert Profile',
        btnText: 'Ask This Expert',
        bio: 'Bio',
        specialties: 'Specialties',
        languages: 'Languages',
        clinicInfo: 'Clinic Info',
        hours: 'Hours',
        closed: 'Closed',
        prescriber: 'Prescriber',
    },
    forgotPassword: {
        Submit: 'Submit',
        Email: 'Your email',
        Title: 'Forgot Password',
        Subtitle: 'Please enter your registered email to reset your password',
        resetEmailSentMessage:
            'A password reset message has been sent to your email address. Please click the link in that message to reset your password.',
    },
    lifestyle: {
        title: 'Lifestyle',
        finish: 'Finish',
        next: 'Next',
        previous: 'Previous',
    },
    getTreatment: {
        title: 'Get Treatment',
        seeHistory: 'See History',
        bookVisit: 'Book a Visit',
        about: 'About',
        languages: 'Languages',
        specialties: 'Specialities',
    },
    treatmentHistory: {
        chatHistory: 'Chat History',
        videoHistory: 'Video History',
    },
    chatHistory: {
        empty: 'You have no chat history linked to this provider.',
        resolved: 'Resolved',
        unresolved: 'Unresolved',
    },
    videoHistory: {
        empty: 'You have no video history linked to this provider.',
        subject: 'Subject: ',
        visitId: 'Visit ID: ',
        viewDetails: 'View Details',
        videoWith: 'Video visit with',
        afterVisit:
            'Your after visit summary has not been provided by your expert. Please check back later.',
    },
    basicInfo: {
        title: 'Basic Information',
        save: 'Save',
    },
    healthHistory: {
        title: 'My Health History',
        basicInfo: 'Basic Information',
        pregnancy: 'Pregnancy and Children',
        lifestyle: 'Lifestyle',
        allergies: 'Allergies',
        medications: 'Medications',
        medicalHistory: 'Medical History',
        insurance: 'Insurance',
        notes: 'Previous Appointment Notes',
    },
    login: {
        ForgotPassword: 'Forgot your password?',
        Login: 'Log In',
        User: 'User',
        Expert: 'Expert',
        or: 'or',
        Email: 'Your email',
        EnterEmail: 'Enter email address here',
        Password: 'Password',
        EmptyEmailMsg: 'Email is a required field.',
        InvalidEmailMsg:
            'Enter a valid email address. For example abc@domain.com.',
        EmptyPasswordMsg: 'Password is a required field.',
        Verify: 'Activate Account',
        Member: 'Become a member',
        Activation: 'You should receive an email shortly.\n\nIf you do not receive an email, please contact hello@kiira.io',
        MemberHelp: 'Awesome!! If you are a member, you will receive an email to set your password shortly. If you’re not,  you need to select a plan to get started.',
        NoBiometrics: 'Please login with email and password to enable.',
        Welcome: 'Welcome back to Kiira!',
        Back: 'Back',
        HelloNewMember: 'Hello New Member!',
        ActivateBelow: 'To get started please activate your account below.',
        UseSameEmail: 'Please use the same email address you used when you became a member.',
        OrganizationPlan: 'If you are part of an organization sponsored plan i.e school or employer plan please use the email associated with your organization. example. _____.edu',

    },
    welcomeKiira:{
        welcomeKiira: 'Welcome to Kiira',
        oneStopTitle: 'Your one stop shop for care. On the Kiira app you can:',
        getVirtualAppointmentsInfo: 'Get virtual appointments, prescriptions, health resources, and answers to health questions via chat within 24 hours.',
        accessPersonalizedTeamInfo: 'Access a personalized team of health providers for women\'s health, mental health, and primary care on-demand.',
        takeKiiraEveryWhereInfo: 'Take Kiira with you everywhere you go and get answers specific to every stage of your life.',
        becomeMember: 'Become a member',
        back: 'Back'
    },
    paymentMethods: {
        title: 'Payment Methods',
        myPayment: 'My Payment Methods',
        addPayment: 'Add New Payment Method',
        addCard: 'Add Credit/Debit Card',
        addPaypal: 'Add PayPal',
    },
    referFriend: {
        title: 'Refer a Friend',
        subTitleText: 'Invite friends, get 10 credits',
        subTitleText2:
            'Get 10 credits for each friend who signs up with your referral code',
        yourreferalCode: 'Your Referral Code',
        btnText: 'Copy My Referral Code',
        moreWays: 'More ways to share',
        smsFb: 'SMS, Facebook, Twitter & More',
    },
    setting: {
        title: 'Settings',
        cancel: 'Cancel',
        done: 'Done',
        changePhoto: 'Change Profile Photo',
        changePassword: 'Change Password',
    },
    signUp: {
        titleText1: 'Hello!',
        titleText2: 'Sign up to get started.',
        signup: 'Sign Up',
        termsConditionsText1: 'By signing up, you agree to the Kiira ',
        termsConditionsText2: 'Terms and Conditions',
        termsConditionsText3: ' and ',
        termsConditionsText4: 'Privacy Policy',
        description:
            'IF YOU HAVE A MEDICAL EMERGENCY, IMMEDIATELY CALL YOUR DOCTOR OR DIAL 911.THIS SERVICE PROVIDES GENERAL HEALTH AND WELLNESS INFORMATION AND A MEANS TO INTERACT WITH PRACTITIONERS.IT DOES NOT REPLACE YOUR RELATIONSHIP WITH ANY PRACTITIONER OR SERVICE, AND KIIRA, ITSELF, DOES NOT PROVIDE MEDICAL OR HEALTH ADVICE, CARE, DIAGNOSIS, OR TREATMENT.NONE OF THE CONTENT SHOULD BE CONSIDERED MEDICAL ADVICE OR AN ENDORSEMENT, REPRESENTATION OR WARRANTY THAT ANY PARTICULAR MEDICATION OR TREATMENT IS SAFE, APPROPRIATE, OR EFFECTIVE FOR YOU.',
        passwordCharLimitValidMsg: 'At least 7 characters',
        passwordSpecialCharValidMsg: 'At least 1 special character',
        EmptyEmailMsg: 'Email is a required field.',
        InvalidEmailMsg:
            'Enter a valid email address. For example abc@domain.com.',
        EmptyPasswordMsg: 'Password is a required field.',
        passwordLimitErrorMsg: 'Password should be at least 7 characters.',
        passwordSpecialCharErrorMsg:
            'Password should have at least 1 special character.',
        secretreferalCodeErrorMsg: 'Please enter Referral code or Secret key.',
        referalCode: 'Referral code',
        sceretKey: 'Secret Key',
        or: 'OR',
    },
    successMessages: {
        visitAddedSuccessfully: 'Your payment was successful',
        cardAddedSuccessfully: 'Your card has been added successfully',
    },
    tabs: {
        account: 'Account',
        ask: 'Ask',
        learn: 'Learn',
    },
    tutorial: {
        signUp: 'Sign up',
        login: 'Log In',
        verify: 'Activate Account',
    },
    agreements: {
        getStarted: 'Get Started',
        agree: 'Agree',
        finish: 'Finish',
    },
    billingAndInsurance: {
        title: 'Billing & Insurance',
        insuranceCompany: 'Insurance Company',
        memberIdHint: 'Member ID',
        insurance: 'Insurance:',
        memberId: 'Member ID:',
        pastBills: 'Past Bills',
        noBills: 'You don\'t currently have any bills.'
    },
    pharmacy: {
        title: 'Pharmacy', 
        nameOfPharmacy: 'Name of Pharmacy',
        phoneNumber: 'Phone Number',
        address: 'Address',
        bartells: 'Bartells'        
    },
    emergencyContact: {
        title: 'Emergency Contact', 
        firstLastName: 'First & Last Name*',
        phoneNumber: 'Phone Number*',
        secondaryPhoneNumber: 'Secondary Phone Number',
        relationshipToYou: 'Relationship to You'
    },
    termsAndConditions: {
        title: 'Terms and Conditions',
    },
    privacyPolicy: {
        title: 'Privacy Policy',
    },
    help: {
        title: 'Help',
        ask: 'Ask',
        question: 'Have a question? Ask the Kiira support team!',
    },
    learn: {
        title: 'Kick it with Kiira',
        learnMore:
            'Want to know more about Kiira and Women Health? Read our articles!',
        seeArticles: 'See Articles',
        explore: 'Explore tips and content on Kick it with Kiira.',
        sexualHealth: 'Sexual Health',
        mentalHealth: 'Mental Health',
        obstetrics: 'Obstetrics',
        gynecology: 'Gynecology',
        breastHealth: 'Breast Health',
        wellness: 'Wellness',
        newsAndNoteworthy: 'News and Noteworthy',
        prevention: 'Prevention',
    },
    expertAppointments: {
        title: 'Appointments',
        future: 'Future Appointments',
        noVisitsToday:
            'You do not have any scheduled visits on the selected date. Upcoming visits will be listed here.',
        patientName: 'Patient Name',
        subject: 'CC',
        lockError:
            'There was an error saving the record, please retry shortly.',
    },
    expertAccount: {
        logout: 'Logout',
        settings: 'My Profile',
        billingAndInsurance: 'Billing & Insurance',
        termsAndConditions: 'Terms & Conditions',
        privacyPolicies: 'Privacy Policies',
        updateAvailability: 'Update Availability',
        rate: 'Rate us',
        refer: 'Refer a Friend, Get 10 Credits',
        appointments: 'Appointments',
        healthHistory: 'Health History',
        availablity: 'Update Availablity',
        born: 'Born',
        pronouns: 'Pronouns',
        location: 'Location',
    },
    appointments: {
        scheduleAppointment: 'Schedule Appointment',
        notify: "We'll notifiy you about upcoming appointments, new messages, and more",
        noVisits: 'You have no scheduled appointments',
        endVisit: 'Are you sure you want to end your visit?',
    },
    expertChats: {
        title: 'Chats',
        resolved: 'RESOLVED',
        active: 'OPEN CHATS',
        chats: 'Chats',
        patientName: 'Patient Name',
        noQuestions: 'You have no open chats.',
        subject: 'Subject',
        lastMessage: 'Last Message',
        searchName: 'Search ',
    },
    visitSummary: {
        title: 'Visit Summary',
        visitInformation: 'Visit Information',
        chiefComplaint: 'Chief Complaint',
        assessmentPlan: 'Assessment / Plan',
        afterVisitSummary: 'After Visit Summary',
        patientName: 'Patient Name',
        dateAndTime: 'Date and Time',
        provider: 'Provider',
        locked: 'Record Locked',
        none: 'None',
        reason: 'Reason',
    },
    changePlan: {
        title: 'Change Plan',
        confirm: 'Confirm',
        cancel: 'Cancel',
    },
    dashboard: {
        appointments: 'Appointments',
        book: 'Book Virtual Visit',
        bot: `Doctors and therapists (your Squad) are important folks, in sickness and in health! Are you feeling sick right now?`,
        buildTeam: 'Build your team of experts',
        chatExpert: 'Chat with an Expert',
        chatNotAvailable: 'Chat unavailable with current plan',
        getHelp: 'Get help with questions 24/7',
        getTreatment: 'Get Treatment',
        great: `That's great! If that changes let us know.`,
        hiName: 'Hi, ',
        kiira: 'Kiira',
        mySquad: 'My Squad',
        myHistory: 'My History',
        notFeelingSick: `I'm not feeling sick`,
        nowMention: 'Now that you mention it',
        provideInformation: 'Provide your past information',
        seeUpcoming: 'See upcoming visits',
        serviceUnavailable:
            'This Service is currently unavailable in your state',
        sos: 'Urgent',
        talk: 'Talk with providers',
        title: 'Dashboard',
        urgent: 'Call 911',
    },
    schedule: {
        schedule: 'Schedule your free 15 minute health assessment!',
        letsDoIt: `Let's do it!`,
    },
    book: {
        bookVisit: 'Book a visit to get treatment for:',
        primaryCare: `Primary\nCare`,
        mentalHealth: 'Mental\nHealth',
        womensHealth: `Women's\nHealth`,
    },
    reminder: {
        nexAppointment: 'Your next appointment is scheduled for:',
        view: 'View',
    },
};
