import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {Header, Container, ListItem} from '../../../../../components';
import {screenNames} from '../../../../../utils/constants';
import moment from 'moment';
import styles from './styles';

const ConsentAgreements = ({navigation}) => {
  const lang = useSelector((state) => state.language);
  const consentAgreements = useSelector(
    (state) => state.medicalHistory.data.consentAgreements,
  );

  const handlePress = ({id}) => {
    navigation.navigate(screenNames.agreementDetails, {id});
  };

  return (
    <Container barStyle="light-content" unformatted themed>
      <Header
        title={lang.consent.title}
        onBack={() => navigation.goBack()}
        themed
      />
      <FlatList
        data={consentAgreements}
        renderItem={({item}) => {
          const {title, updatedAt} = item;
          return (
            <ListItem onPress={() => handlePress(item)} displayChevron>
              <View style={styles.itemContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {title}
                </Text>
                <Text style={styles.subtitle}>
                  {`${lang.consent.acceptanceDate}: ${moment(updatedAt).format(
                    'MM/DD/YYYY',
                  )}`}
                </Text>
              </View>
            </ListItem>
          );
        }}
      />
    </Container>
  );
};

export default ConsentAgreements;
