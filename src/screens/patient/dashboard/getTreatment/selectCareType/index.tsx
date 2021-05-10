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

const SelectCareType = ({navigation}) => {
  const dispatch = useDispatch();
  const {key} = navigation.state.params;
  const lang = useSelector((state) => state.language);

  const handleNavigation = (title) => {
    dispatch(reasonForVisit(title));
    navigation.navigate(screenNames.NeedsPresciption);
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
        data={treatment[key]}
        style={styles.list}
        keyExtractor={(index) => index.title}
        renderItem={({item: {title}}) => (
          <ListItem
            key={title}
            onPress={() => handleNavigation(title)}
            displayChevron>
            <Text style={styles.listItemTitle}>{title}</Text>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default SelectCareType;
