import {getReduxState} from '../../../utils/helper';

const {language} = getReduxState();

const baseUrl = 'https://www.kiira.io/category';

const list = [
  {
    title: language.learn.sexualHealth,
    url: `${baseUrl}/sexual-health`,
    image: require('../../../../assets/sexual-health.jpg'),
  },
  {
    title: language.learn.mentalHealth,
    url: `${baseUrl}/mental-health`,
    image: require('../../../../assets/mental-health.jpg'),
  },
  {
    title: language.learn.obstetrics,
    url: `${baseUrl}/obstetrics`,
    image: require('../../../../assets/obstetrics.jpg'),
  },
  {
    title: language.learn.gynecology,
    url: `${baseUrl}/gynecology`,
    image: require('../../../../assets/gynecology.jpeg'),
  },
  {
    title: language.learn.breastHealth,
    url: `${baseUrl}/breast-health`,
    image: require('../../../../assets/breast-health.jpeg'),
  },
  {
    title: language.learn.wellness,
    url: `${baseUrl}/wellness`,
    image: require('../../../../assets/wellness.jpg'),
  },
  {
    title: language.learn.newsAndNoteworthy,
    url: `${baseUrl}/news-and-noteworthy`,
    image: require('../../../../assets/news-and-noteworthy.jpg'),
  },
  {
    title: language.learn.prevention,
    url: `${baseUrl}/prevention`,
    image: require('../../../../assets/prevention.jpg'),
  },
];

const model = {
  list,
};

export default model;
