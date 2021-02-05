import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';
import {Header, ListItem, Container} from '../../../../components';
import {screenNames} from '../../../../utils/constants';
import styles from './styles';

const HealthHistory = ({navigation}) => {
  const language = useSelector((state) => state.language);
  const healthHistory = useSelector(
    (state) => state.healthHistory.data,
    shallowEqual,
  );

  const model = [
    {
      title: language.healthHistory.basicInfo,
      destination: screenNames.BasicInfo,
      dataKey: 'basicInfo',
    },
    {
      title: language.healthHistory.pregnancy,
      destination: screenNames.PregnancyAndChildren,
      dataKey: 'pregnancyHistory',
    },
    {
      title: language.healthHistory.lifestyle,
      destination: screenNames.LifeStyle,
      dataKey: 'lifestyle',
    },
    {
      title: language.healthHistory.allergies,
      destination: screenNames.Allergies,
      dataKey: 'allergies',
    },
    {
      title: language.healthHistory.medications,
      destination: screenNames.Medications,
      dataKey: 'medications',
    },
    {
      title: language.healthHistory.medicalHistory,
      destination: screenNames.MedicalHistory,
      dataKey: 'medicalHistory',
    },
  ];

  return (
    <Container unformatted>
      <Header
        title={language.healthHistory.title}
        onBack={() => navigation.goBack()}
      />
      <FlatList
        data={model}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        keyExtractor={({dataKey}, index) => `${dataKey} ${index}`}
        renderItem={({item: {title, destination, dataKey}}) => (
          <ListItem
            key={dataKey}
            displayChevron
            onPress={() => navigation.navigate(destination)}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>
                {healthHistory[dataKey] && healthHistory[dataKey].completed
                  ? 'Provided'
                  : ' Not Provided'}
              </Text>
            </View>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default HealthHistory;
