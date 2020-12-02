export const questions = [
  {
    question: 'Has patient had an abnormal Pap smear?',
    textPrompt: 'Type in details i.e when?, what abnormaility? etc.',
    key: 'abnormalPap',
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
  },
  {
    question: 'Has patient ever tested positive for HIV?',
    textPrompt: 'Type details',
    key: 'hiv',
  },
  {
    question:
      'Did patients mother take the drug DES when she was pregnant with patient?',
    textPrompt: 'Type details',
    key: 'des',
  },
  {
    question: 'Is patient Sexually Active?',
    key: 'sexuallyActive',
  },
  {
    question: 'Did patient begin sexual activity before 16?',
    textPrompt: 'When did patient begin sexual activity?',
    key: 'underAge',
  },
  {
    question: 'Has patient had > 5 partners in lifetime?',
    textPrompt: 'How many?',
    key: 'multiplePartners',
  },
  {
    question:
      'Has patient been correctly and consistenly using a reliable form of contraception?',
    textPrompt: 'Please enter contraception methods used.',
    key: 'useContraception',
  },
  {
    question: 'Do you currently use any form of birth control?',
    textPrompt: 'Please enter birth control used.',
    key: 'useBirthControl',
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
  },
  {
    question: 'Has patient been sexually active in the last year?',
    key: 'active',
  },
  {
    question: 'Has patient had sexual intercourse since their last period?',
    textPrompt: 'Tell us more about this',
    key: 'currentlyActive',
  },
  {
    question: 'Who do you have sex with?',
    options: [
      {title: 'Men', key: 'men', section: 'sexualPartners'},
      {title: 'Women', key: 'women', section: 'sexualPartners'},
      {title: 'Other', key: 'other', section: 'sexualPartners'},
    ],
  },
  {
    question: 'Has patient had sexual intercourse since their last period?',
    textPrompt: 'Tell us more about this',
    key: 'currentlyActive',
  },
];
