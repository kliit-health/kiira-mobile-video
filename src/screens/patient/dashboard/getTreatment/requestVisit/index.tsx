import React from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import treatment from 'utils/constants/getTreatment';
import {ListItem} from 'components';
import {reasonForVisit} from '../expertSchedule/action';
import {Header, Container} from 'components';
import Agreements from '../agreements';
import {screenNames} from 'utils/constants';

const RequestVisit = ({navigation}) => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);

  const handleNavigation = (title,key) => {
    dispatch(reasonForVisit(title));
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
            onPress={() => handleNavigation(title, key)}
            displayChevron>
            <Text style={styles.listItemTitle}>{title}</Text>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default RequestVisit;
