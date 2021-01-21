import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';
import {Header, ListItem, Container} from '../../components';
import intl from '../../utils/localization';
import model from './model';
import styles from './styles';

const HealthHistory = ({navigation}) => {
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
