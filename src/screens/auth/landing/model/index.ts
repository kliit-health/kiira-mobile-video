import {PageProps} from '../sections/page';

export const pages: PageProps[] = [
  {
    title: `Hi I’m Kiira, your personal health assistant`,
    description: `I’m here to help you find a clinician, set up appointments, and more. Start chatting with me to get help when you need it!`,
    imageUrl: require('~/assets/page-one.png'),
  },
  {
    title: `Easy access to care anytime, anywhere`,
    description: `Get virtual appointments, prescriptions, health resources, and answers to all your health questions within 24 hours.`,
    imageUrl: require('~/assets/page-two.png'),
  },
  {
    title: `Connect with your care squad`,
    description: `Access a personalized team of health providers for women’s health, mental health, and primary care on-demand.`,
    imageUrl: require('~/assets/page-three.png'),
  },
  {
    title: `Whole-person, whole-life care`,
    description: `Take Kiira with you everywhere you go and get answers specific to every stage of your life.`,
    imageUrl: require('~/assets/page-four.png'),
  },
];
