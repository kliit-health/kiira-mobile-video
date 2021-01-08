import intl from '../../utils/localization';

const baseUrl = 'https://www.kiira.io/category';

const list = [
  {
    title: intl.en.learn.sexualHealth,
    url: `${baseUrl}/sexual-health`,
    image: require('../../../assets/image_not_found.png'),
  },
  {
    title: intl.en.learn.mentalHealth,
    url: `${baseUrl}/mental-health`,
    image: require('../../../assets/image_not_found.png'),
  },
  {
    title: intl.en.learn.obstetrics,
    url: `${baseUrl}/obstetrics`,
    image: require('../../../assets/image_not_found.png'),
  },
  {
    title: intl.en.learn.gynecology,
    url: `${baseUrl}/gynecology`,
    image: require('../../../assets/image_not_found.png'),
  },
  {
    title: intl.en.learn.breastHealth,
    url: `${baseUrl}/breast-health`,
    image: require('../../../assets/image_not_found.png'),
  },
  {
    title: intl.en.learn.wellness,
    url: `${baseUrl}/wellness`,
    image: require('../../../assets/image_not_found.png'),
  },
  {
    title: intl.en.learn.newsAndNoteworthy,
    url: `${baseUrl}/news-and-noteworthy`,
    image: require('../../../assets/image_not_found.png'),
  },
  {
    title: intl.en.learn.prevention,
    url: `${baseUrl}/prevention`,
    image: require('../../../assets/image_not_found.png'),
  },
];

const model = {
  list,
};

export default model;
