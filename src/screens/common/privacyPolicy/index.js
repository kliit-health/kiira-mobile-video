import React, {useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Image from 'react-native-fast-image';
import {useSelector, useDispatch} from 'react-redux';
import {Header, Container} from '../../../components';
import inlt from '../../../utils/localization';
import {getPolicies} from './action';
import styles from './styles';

const PrivacyPolicies = ({navigation}) => {
  const sections = useSelector((state) => state.privacyReducer.legal.sections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPolicies());
  }, []);

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container unformatted>
      <Header
        onBack={handleOnBackPress}
        title={inlt.en.privacyPolicies.title}
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

export default PrivacyPolicies;
