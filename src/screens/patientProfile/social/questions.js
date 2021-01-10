export const questions = [
  {
    question: 'Does patient smoke?',
    textPrompt: 'How many years? How many packs a day? Quit when?',
    key: 'smoke',
  },
  {
    question: 'Does patient drink Alcohol?',
    textPrompt: 'How many drinks a day? drinks per week? Quit when?',
    key: 'alcohol',
  },
  {
    question: 'Does patient use any drugs?',
    textPrompt: 'How many years? What type of drugs? Quit when?',
    key: 'drugs',
  },
  {
    question: 'Does patient consume caffine?',
    textPrompt: 'How many cups per day? How many cups per week?',
    key: 'caffine',
  },
  {
    question: 'Does patient (not) feel safe at home?',
    textPrompt: 'Please enter details',
    key: 'safe',
  },
  {
    question: 'Does patient have history of domestic / sexual abuse?',
    textPrompt: 'Please enter details',
    key: 'abuse',
  },
  {
    question: 'Is patient currently being abused?',
    textPrompt: 'Please enter details',
    key: 'currentAbuse',
  },
  {
    question: 'What is patients marital status?',
    options: [
      {title: 'Married', key: 'married', section: 'status'},
      {title: 'Single', key: 'single', section: 'status'},
      {title: 'Divorced', key: 'divorced', section: 'status'},
      {title: 'Widowed', key: 'widowed', section: 'status'},
      {title: 'Significantly Involved', key: 'involved', section: 'status'},
      {title: 'Domestic Partner', key: 'partner', section: 'status'},
    ],
    key: 'status',
  },
  {
    question: 'What is patients education level?',
    options: [
      {title: 'High School', key: 'highSchool', section: 'education'},
      {title: 'College', key: 'college', section: 'education'},
      {title: 'Graduate degree', key: 'degree', section: 'education'},
      {title: 'Other', key: 'other', section: 'education'},
    ],
    key: 'education',
  },
  {
    question: 'Does patient exercise?',
    textPrompt: 'How often? What type of exercise?',
    key: 'exercise',
  },
  {
    question: 'Is patient on any special diet??',
    textPrompt: 'What type of diet?',
    key: 'diet',
  },
];
