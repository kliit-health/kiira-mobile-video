import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Image from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {Header, Container} from '../../../components';
import inlt from '../../../utils/localization';
import {getTerms} from './action';
import styles from './styles';

const TermsConditions = ({navigation}) => {
  const sections = useSelector((state) => state.termsReducer.legal.sections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTerms());
  }, []);

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container unformatted>
      <Header
        onBack={handleOnBackPress}
        title={inlt.en.termsAndConditions.title}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../../../assets/logo-sm.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        {sections.map(({title, body}, index) => (
          <View key={`${title} ${index}`} style={styles.sectionContainer}>
            {Boolean(title) && <Text style={styles.sectionTitle}>{title}</Text>}
            <Text style={styles.sectionContent}>
              {body.replace(/\\n/g, '\n')}
            </Text>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default TermsConditions;
