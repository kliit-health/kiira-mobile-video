import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  Container,
  Header,
  TextButton,
  Avatar,
  Ratings,
  Linking,
} from '../../../../components';
import Arrow from '../../../../svgs/arrow.svg';
import Phone from '../../../../svgs/phone.svg';
import {Prescriber} from '../../../../components/icons';
import intl from '../../../../utils/localization';
import {
  addHashtag,
  formatLanguages,
  calculateRating,
} from '../../../../utils/functions';
import {screenNames} from '../../../../utils/constants';
import styles, {modifiers} from './styles';

const GetTreatment = ({navigation}) => {
  const details = navigation.getParam('details');
  const navigator = navigation.getParam('navigator');

  const {rating, profileInfo, clinicInfo} = details;
  const {
    firstName,
    lastName,
    profileImageUrl,
    bio,
    profession,
    languages,
  } = profileInfo;
  const {specialities, fullName} = profession;
  const {name, city, zipcode, phoneNumber, state} = clinicInfo;

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  const handleOnBookPress = () => {
    navigation.navigate(screenNames.requestVisit);
  };

  const handleOnHistoryPress = () => {
    navigation.navigate(screenNames.treatmentHistory, {details});
  };

  return (
    <Container styles={modifiers.container} unformatted>
      <Header styles={modifiers.header} onBack={handleOnBackPress} />
      <View style={styles.profileContainer}>
        <Avatar border source={profileImageUrl} />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.titleText}>{fullName}</Text>
          <Prescriber />
        </View>
        <Ratings styles={modifiers.ratings} value={calculateRating(rating)} />
      </View>
      {navigator ? (
        <View style={styles.buttonsContainer}>
          <TextButton onPress={handleOnHistoryPress} outlined>
            {intl.en.getTreatment.seeHistory}
          </TextButton>
          <View style={styles.divider} />
          <TextButton onPress={handleOnBookPress}>
            {intl.en.getTreatment.bookVisit}
          </TextButton>
        </View>
      ) : (
        <View></View>
      )}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tagsList}
          contentContainerStyle={styles.tagsContentContainer}>
          {addHashtag(specialities).map((tag) => (
            <Text key={tag} style={styles.tagsText}>
              {tag}
            </Text>
          ))}
        </ScrollView>
      </View>
      <ScrollView contentContainerStyle={styles.detailsContentContainer}>
        <View style={styles.contactContainer}>
          <Linking
            title={`${city}, ${state.value} ${state.code}, ${zipcode}`}
            subtitle={name}
            styles={modifiers.linking}>
            <Arrow />
          </Linking>
          <Linking title={phoneNumber} phoneNumber={phoneNumber}>
            <Phone />
          </Linking>
        </View>
        <Text style={styles.sectionTitle}>{intl.en.getTreatment.about}</Text>
        <Text style={{...styles.sectionText, paddingBottom: 10}}>{bio}</Text>
        <Text style={styles.sectionTitle}>
          {intl.en.getTreatment.languages}
        </Text>
        <Text style={styles.sectionText}>{formatLanguages(languages)}</Text>
        <Text style={styles.sectionTitle}>
          {intl.en.getTreatment.specialties}
        </Text>
        <Text style={styles.sectionText}>{specialities}</Text>
      </ScrollView>
    </Container>
  );
};

export default GetTreatment;
