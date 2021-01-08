import React from 'react';
import {View, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {Container, Header, TextButton} from '../../components';
import intl from '../../utils/localization';
import Image from 'react-native-fast-image';
import model from './model';
import styles, {modifiers} from './styles';
import {screenNames} from '../../utils/constants';

const Learn = ({navigation}) => {
  const handleOpenUrl = ({url, title}) => {
    navigation.navigate(screenNames.webView, {url, title});
  };

  return (
    <Container unformatted styles={modifiers.container}>
      <Header title={intl.en.learn.title} />
      <ScrollView>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerText}>{intl.en.learn.explore}</Text>
          </View>
          <Image
            style={styles.bannerImage}
            source={require('../../../assets/image_not_found.png')}
            resizeMode="cover"
          />
        </View>
        <FlatList
          scrollEnabled={false}
          data={model.list}
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
