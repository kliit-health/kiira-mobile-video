import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Image from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {Header, Container} from '~/components';
import styles from './styles';

const PrivacyPolicy = ({navigation}) => {
  const sections = useSelector((state) => state.privacyPolicy.data.sections);
  const lang = useSelector((state) => state.language);

  const handleOnBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container unformatted>
      <Header onBack={handleOnBackPress} title={lang.privacyPolicy.title} />
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

export default PrivacyPolicy;
