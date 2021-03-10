const baseUrl = 'https://www.kiira.io/category';

const list = [
  {
    title: `learn.sexualHealth`,
    url: `${baseUrl}/sexual-health`,
    image: require('../../../../assets/sexual-health.jpg'),
  },
  {
    title: `learn.mentalHealth`,
    url: `${baseUrl}/mental-health`,
    image: require('../../../../assets/mental-health.jpg'),
  },
  {
    title: `learn.obstetrics`,
    url: `${baseUrl}/obstetrics`,
    image: require('../../../../assets/obstetrics.jpg'),
  },
  {
    title: `learn.gynecology`,
    url: `${baseUrl}/gynecology`,
    image: require('../../../../assets/gynecology.jpeg'),
  },
  {
    title: `learn.breastHealth`,
    url: `${baseUrl}/breast-health`,
    image: require('../../../../assets/breast-health.jpeg'),
  },
  {
    title: `learn.wellness`,
    url: `${baseUrl}/wellness`,
    image: require('../../../../assets/wellness.jpg'),
  },
  {
    title: `learn.newsAndNoteworthy`,
    url: `${baseUrl}/news-and-noteworthy`,
    image: require('../../../../assets/news-and-noteworthy.jpg'),
  },
  {
    title: `learn.prevention`,
    url: `${baseUrl}/prevention`,
    image: require('../../../../assets/prevention.jpg'),
  },
];

const model = {
  list,
};

export default model;
