import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './style';
import reasonsForVisit from '../../utils/constants/requestVisit';
import { ListItem } from '../../components';
import { reasonForVisit } from '../expertSchedule/action';
import { Header, Container } from '../../components';
import Agreements from '../agreements';
import { screenNames } from '../../utils/constants';
import intl from '../../utils/localization';

const RequestVisit = ({ navigation }) => {
  const dispatch = useDispatch();

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
      <Header title={intl.en.getTreatment.title} onBack={handleBackPress} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reasonsForVisit}
        keyExtractor={(index) => index.title}
        bounces={false}
        renderItem={({ item: { title } }) => (
          <ListItem
            key={title}
            onPress={() => handleNavigation(title)}
            displayChevron
          >
            <Text style={styles.listItemTitle}>{title}</Text>
          </ListItem>
        )}
      />
    </Container>
  );
};

export default RequestVisit;
