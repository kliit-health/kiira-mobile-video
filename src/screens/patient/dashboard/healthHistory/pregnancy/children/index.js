import React from 'react';
import {
  Container,
  Header,
  TextButton,
  ListItem,
} from '../../../../../../components';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import plus from '../../../../../../svgs/plus.svg';
import intl from '../../../../../../utils/localization';
import {screenNames} from '../../../../../../utils/constants';
import styles from './styles';

const formatDate = (date) => {
  const birthDate = moment(date).format('ll');
  const age = moment().diff(date, 'year');

  return `${age} year(s) old - ${birthDate}`;
};
const Children = ({navigation}) => {
  const {children} = useSelector(
    (state) => state.healthHistory.children.answers,
  );

  const handleAddChildren = () => {
    navigation.navigate(screenNames.AddChild);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleEdit = (index) => {
    navigation.navigate(screenNames.AddChild, {index});
  };

  return (
    <Container unformatted>
      <Header title={intl.en.children.title} onBack={handleBackPress} />
      {children.length > 0 ? (
        <View style={styles.mainContainer}>
          {children.map((child, index) => (
            <ListItem key={index} onPress={() => handleEdit(index)}>
              <View style={styles.itemContainer}>
                {Object.entries(child).map(([key, value]) => (
                  <Text key={key} style={styles.text}>
                    {key === 'dateOfBirth' ? formatDate(value) : value}
                  </Text>
                ))}
              </View>
            </ListItem>
          ))}
          <TextButton
            styles={{root: styles.button}}
            onPress={handleAddChildren}>
            {intl.en.children.addChild}
          </TextButton>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TextButton icon={plus} onPress={handleAddChildren} secondary>
            {intl.en.children.addChild}
          </TextButton>
        </View>
      )}
    </Container>
  );
};

export default Children;
