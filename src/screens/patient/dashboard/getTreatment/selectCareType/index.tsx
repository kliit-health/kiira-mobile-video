import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './style';
import {ListItem, Conditional} from '~/components';
import {reasonForVisit} from '../expertSchedule/action';
import {Header, Container} from '~/components';
import {screenNames} from '~/utils/constants';
import {getDocumentFromCollection} from '~/utils/firebase';

const SelectCareType = ({navigation}) => {
  const dispatch = useDispatch();
  const {key} = navigation.state.params;
  const lang = useSelector((state) => state.language);
  const [sessionType, setSessionType] = useState(null);
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    (async () => {
      const {reasons} = await getDocumentFromCollection(`appointmentCategories/${key}`);
      setReasons([...reasons]);
    })() 
  },[])

  const handleNavigation = (title, type) => {
    (async () => {
      const sessionType = await getDocumentFromCollection(`appointmentTypes/${type}`);
      dispatch(reasonForVisit({title,sessionType}));
      navigation.navigate(screenNames.NeedsPresciption);
    })()  
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Container unformatted>
      <Header title={lang.getTreatment.title} onBack={handleBackPress} />
      <Conditional if={reasons.length}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={reasons}
          initialNumToRender={reasons.length}
          style={styles.list}
          keyExtractor={(index) => index.name}
          renderItem={({item: {name, type}}) => (
            <ListItem
              key={name}
              onPress={() => handleNavigation(name, type)}
              displayChevron>
              <Text style={styles.listItemTitle}>{name}</Text>
          </ListItem>
          )}
        />
      </Conditional>
    </Container>
  );
};

export default SelectCareType;
