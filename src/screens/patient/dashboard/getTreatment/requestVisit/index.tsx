import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';
import treatment from 'utils/constants/getTreatment';
import {ListItem} from 'components';
import {Header, Container} from 'components';
import Agreements from '../agreements';


const RequestVisit = ({navigation}) => {
  const lang = useSelector((state) => state.language);

  const handleNavigation = (key) => {
    navigation.navigate('SelectCareType', {key});
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container unformatted>
      <Agreements navigation={navigation} />
      <Header title={lang.getTreatment.title} onBack={handleBackPress} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={treatment.categories}
        style={styles.list}
        keyExtractor={(index) => index.title}
        renderItem={({item: {title, key}}) => (
          <ListItem
            key={title}
            onPress={() => handleNavigation(key)}
            displayChevron>
            <Text style={styles.listItemTitle}>{title}</Text>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default RequestVisit;
