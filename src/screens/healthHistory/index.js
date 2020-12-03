import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { Header, ListItem, Container } from '../../components';
import intl from '../../utils/localization';
import model from './model';
import styles from './styles';

const HealthHistory = ({ navigation }) => {
  const healthHistory = useSelector(
    (state) => state.healthHistory,
    shallowEqual,
  );

  return (
    <Container unformatted>
      <Header
        title={intl.en.healthHistory.title}
        onBack={() => navigation.goBack()}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {model.map(({ title, destination, dataKey }) => (
          <ListItem
            key={title}
            displayChevron
            onPress={() => navigation.navigate(destination)}
          >
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>
                {healthHistory[dataKey] && healthHistory[dataKey].completed
                  ? 'Provided'
                  : ' Not Provided'}
              </Text>
            </View>
          </ListItem>
        ))}
      </ScrollView>
    </Container>
  );
};

export default HealthHistory;
