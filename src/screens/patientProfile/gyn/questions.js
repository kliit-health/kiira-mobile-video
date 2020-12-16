export const questions = [
  {
    question:
      'When was the first day of patients last menstrual period? \n\n An approximate date is fine',
    textPrompt: 'mm-dd-yyyy',
    key: 'lastPeriod',
    type: 'input',
  },
  {
    question: 'How long does it last?',
    key: 'periodLength',
    options: [
      {title: '7 days or less', key: 'lessThan', section: 'periodLength'},
      {title: 'More than 7 days', key: 'moreThan', section: 'periodLength'},
    ],
    type: 'objective',
  },
  {
    question: 'What is the patients cycle length?',
    key: 'cycleLength',
    options: [
      {title: 'Less than 21 days', key: 'lessThan', section: 'cycleLength'},
      {title: 'About 21-42 days', key: 'about', section: 'cycleLength'},
      {title: 'More than 43 days', key: 'moreThan', section: 'cycleLength'},
    ],
    type: 'objective',
  },
  {
    question: 'What was the patients age of menarche?',
    textPrompt: 'Type Answer',
    key: 'menarche',
    type: 'input',
  },
  {
    question: 'When was patients last PAP smear?',
    textPrompt: 'mm-dd-yyyy',
    key: 'papDate',
    type: 'input',
  },
  {
    question: 'Has patient had an abnormal Pap smear?',
    textPrompt: 'Type in details i.e when?, what abnormaility? etc.',
    key: 'abnormalPap',
    type: 'polar',
  },
  {
    question: 'Has patient ever been treated for:',
    options: [
      {title: 'Chlamydia', key: 'chlamydia', section: 'sti'},
      {title: 'Gonorrhea', key: 'gonorrhea', section: 'sti'},
      {title: 'Genital Warts', key: 'genitalWarts', section: 'sti'},
      {title: 'Herpes', key: 'herpes', section: 'sti'},
      {title: 'Trichomonas', key: 'trichomonas', section: 'sti'},
      {title: 'Syphilis', key: 'syphilis', section: 'sti'},
      {
        title: 'Patient has never had any of the conditions above',
        key: 'none',
        section: 'sti',
      },
    ],
    key: 'sti',
    type: 'objective',
  },
  {
    question: 'Has patient ever tested positive for HIV?',
    textPrompt: 'Type details',
    key: 'hiv',
    type: 'polar',
  },
  {
    question:
      'Did patients mother take the drug DES when she was pregnant with patient?',
    textPrompt: 'Type details',
    key: 'des',
    type: 'polar',
  },
  {
    question: 'Is patient Sexually Active?',
    key: 'sexuallyActive',
    type: 'polar',
  },
  {
    question: 'Did patient begin sexual activity before 16?',
    textPrompt: 'When did patient begin sexual activity?',
    key: 'underAge',
    type: 'polar',
  },
  {
    question: 'Has patient had > 5 partners in lifetime?',
    textPrompt: 'How many?',
    key: 'multiplePartners',
    type: 'polar',
  },
  {
    question:
      'Has patient been correctly and consistenly using a reliable form of contraception?',
    textPrompt: 'Please enter contraception methods used.',
    key: 'useContraception',
    type: 'polar',
  },
  {
    question: 'Do you currently use any form of birth control?',
    textPrompt: 'Please enter birth control used.',
    key: 'useBirthControl',
    type: 'polar',
  },
  {
    question: 'Past birth control methods:',
    options: [
      {title: 'Condoms', key: 'condoms', section: 'contraceptions'},
      {title: 'Birth Control Pills', key: 'thePill', section: 'contraceptions'},
      {title: 'Withdrawal', key: 'pullOut', section: 'contraceptions'},
      {title: 'Tubal Ligation', key: 'tubesTied', section: 'contraceptions'},
      {title: 'Diaphram', key: 'diaphram', section: 'contraceptions'},
      {title: 'Patch', key: 'patch', section: 'contraceptions'},
      {title: 'Vaginal Film', key: 'film', section: 'contraceptions'},
      {title: 'Other', key: 'other', section: 'contraceptions'},
    ],
    key: 'contraceptions',
    type: 'objective',
  },
  {
    question: 'Has patient been sexually active in the last year?',
    key: 'active',
    type: 'polar',
  },
  {
    question: 'Has patient had sexual intercourse since their last period?',
    textPrompt: 'Tell us more about this',
    key: 'currentlyActive',
    type: 'polar',
  },
  {
    question: 'Who do you have sex with?',
    options: [
      {title: 'Men', key: 'men', section: 'sexualPartners'},
      {title: 'Women', key: 'women', section: 'sexualPartners'},
      {title: 'Other', key: 'other', section: 'sexualPartners'},
    ],
    key: 'sexualPartners',
    type: 'objective',
  },
  {
    question: 'In the past 12 months, how many sexual partners have you had?',
    options: [
      {title: 'Men', key: 'male', section: 'numberOfPartners'},
      {title: 'Women', key: 'female', section: 'numberOfPartners'},
      {title: 'Other', key: 'other', section: 'numberOfPartners'},
    ],
    picker: true,
    key: 'numberOfPartners',
    type: 'picker',
  },
];
