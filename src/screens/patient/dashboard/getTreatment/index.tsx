import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Container,
  Header,
  TextButton,
  Avatar,
  Ratings,
  Linking,
  Conditional
} from '~/components';
import Arrow from '../../../../svgs/arrow.svg';
import Phone from '../../../../svgs/phone.svg';
import {Prescriber} from '~/components/icons';
import {
  addHashtag,
  formatLanguages,
  calculateRating,
} from '~/utils/functions';
import {screenNames} from '~/utils/constants';
import styles, {modifiers} from './styles';

const GetTreatment = ({navigation}) => {
  const lang = useSelector((state) => state.language);

  const details = navigation.getParam('details');
  const navigator = navigation.getParam('navigator');

  const {rating, profileInfo, clinicInfo, isPrescriber} = details;
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
    <Container styles={modifiers.container} barStyle="dark-content" unformatted>
      <Header styles={modifiers.header} onBack={handleOnBackPress} />
      <View style={styles.profileContainer}>
        <Avatar border source={profileImageUrl} />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.titleText}>{fullName}</Text>
          {isPrescriber && <Prescriber />}
        </View>
        <Ratings styles={modifiers.ratings} value={calculateRating(rating)} />
      </View>
      <Conditional if={navigator}>
        <View style={styles.buttonsContainer}>
          <TextButton onPress={handleOnHistoryPress} outlined>
            {lang.getTreatment.seeHistory}
          </TextButton>
          <View style={styles.divider} />
          <TextButton onPress={handleOnBookPress}>
            {lang.getTreatment.bookVisit}
          </TextButton>
        </View>
      </Conditional>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tagsList}
          contentContainerStyle={styles.tagsContentContainer}>
          {addHashtag(specialities).map((tag) => (
            <Text key={tag} style={styles.tagsText}>
              {tag + " "}
            </Text>
          ))}
        </ScrollView>
      </View>
      <ScrollView contentContainerStyle={styles.detailsContentContainer}>
        <View style={styles.contactContainer}>
          <Linking
            title={`${city}, ${state.code}, ${zipcode}`}
            subtitle={name}
            styles={modifiers.linking}>
            <Arrow />
          </Linking>
          <Conditional if={phoneNumber.length > 1}>
            <Linking title={phoneNumber} phoneNumber={phoneNumber}>
              <Phone />
            </Linking>
          </Conditional>
        </View>
        <Text style={styles.sectionTitle}>{lang.getTreatment.about}</Text>
        <Text style={{...styles.sectionText, paddingBottom: 10}}>{bio}</Text>
        <Text style={styles.sectionTitle}>{lang.getTreatment.languages}</Text>
        <Text style={styles.sectionText}>{formatLanguages(languages)}</Text>
        <Text style={styles.sectionTitle}>{lang.getTreatment.specialties}</Text>
        {specialities.map(speciality => (
          <Text key={speciality} style={styles.sectionText}>{speciality + " "}</Text>
        ))}
      </ScrollView>
    </Container>
  );
};

export default GetTreatment;
