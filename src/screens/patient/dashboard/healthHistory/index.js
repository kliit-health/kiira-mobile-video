import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';
import {get} from 'lodash';
import {Header, ListItem, Container} from '../../../../components';
import styles from './styles';

const HealthHistory = ({navigation}) => {
  const language = useSelector((state) => state.language, shallowEqual);
  const healthHistory = useSelector((state) => state.healthHistory.data);

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
              <Text style={styles.title}>{get(language, title)}</Text>
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
