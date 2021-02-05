import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {Container, Header} from '../../../components';
import Image from 'react-native-fast-image';
import styles, {modifiers} from './styles';
import {screenNames} from '../../../utils/constants';

const Learn = ({navigation}) => {
  const language = useSelector((state) => state.language);

  const handleOpenUrl = ({url, title}) => {
    navigation.navigate(screenNames.webView, {url, title});
  };

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

  return (
    <Container unformatted styles={modifiers.container}>
      <Header title={language.learn.title} />
      <ScrollView>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerText}>{language.learn.explore}</Text>
          </View>
          <Image
            style={styles.bannerImage}
            source={require('../../../../assets/banner.jpeg')}
            resizeMode="cover"
          />
        </View>
        <FlatList
          scrollEnabled={false}
          data={list}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item) => item.title}
          renderItem={({item: {url, title, image}, index}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              activeOpacity={0.9}
              onPress={() => handleOpenUrl({url, title})}>
              <Image
                resizeMode="cover"
                style={styles.itemImage}
                source={image}
              />
              <Text style={styles.itemTitle}>{title}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </Container>
  );
};

export default Learn;
