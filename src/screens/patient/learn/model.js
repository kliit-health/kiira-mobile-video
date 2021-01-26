import intl from '../../../utils/localization';

const baseUrl = 'https://www.kiira.io/category';

const list = [
  {
    title: intl.en.learn.sexualHealth,
    url: `${baseUrl}/sexual-health`,
    image: require('../../../../assets/sexual-health.jpg'),
  },
  {
    title: intl.en.learn.mentalHealth,
    url: `${baseUrl}/mental-health`,
    image: require('../../../../assets/mental-health.jpg'),
  },
  {
    title: intl.en.learn.obstetrics,
    url: `${baseUrl}/obstetrics`,
    image: require('../../../../assets/obstetrics.jpg'),
  },
  {
    title: intl.en.learn.gynecology,
    url: `${baseUrl}/gynecology`,
    image: require('../../../../assets/gynecology.jpeg'),
  },
  {
    title: intl.en.learn.breastHealth,
    url: `${baseUrl}/breast-health`,
    image: require('../../../../assets/breast-health.jpeg'),
  },
  {
    title: intl.en.learn.wellness,
    url: `${baseUrl}/wellness`,
    image: require('../../../../assets/wellness.jpg'),
  },
  {
    title: intl.en.learn.newsAndNoteworthy,
    url: `${baseUrl}/news-and-noteworthy`,
    image: require('../../../../assets/news-and-noteworthy.jpg'),
  },
  {
    title: intl.en.learn.prevention,
    url: `${baseUrl}/prevention`,
    image: require('../../../../assets/prevention.jpg'),
  },
];

const model = {
  list,
};

export default model;
