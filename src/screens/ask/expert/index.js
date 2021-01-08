import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar, TextButton, Header, Container} from '../../../components';
import {getActiveQuestions, getResolvedQuestions} from './action';
import {getTerms} from '../../termsAndConditions/action';
import {getPolicies} from '../../privacyPolicy/action';
import {ActiveQuestions, ResolvedQuestions} from './components';
import intl from '../../../utils/localization';

import styles, {modifiers} from './styles';

const AskExpert = ({navigation}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const expertDetails = useSelector(
    (state) => state.authLoadingReducer.userData,
  );
  const activeQuestions = useSelector((state) => state.askExpertReducer.active);
  const resolvedQuestions = useSelector(
    (state) => state.askExpertReducer.resolved,
  );

  useEffect(() => {
    dispatch(getTerms());
  }, []);

  useEffect(() => {
    dispatch(getPolicies());
  }, []);

  useEffect(() => {
    dispatch(
      getActiveQuestions({
        uid: expertDetails.uid,
      }),
    );
  }, []);

  useEffect(() => {
    dispatch(
      getResolvedQuestions({
        uid: expertDetails.uid,
      }),
    );
  }, []);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <Container themed unformatted>
      <Header themed title={intl.en.expertChats.title} />
      <SearchBar
        styles={modifiers.searchBar}
        // onChange={filterData}
        placeholder="Search"
      />
      <View style={styles.buttonsContainer}>
        <TextButton
          styles={modifiers.button}
          disabled={active}
          activeOpacity={1}
          onPress={toggleActive}>
          {intl.en.expertChats.active}
        </TextButton>
        <TextButton
          outlined
          styles={modifiers.button}
          disabled={!active}
          activeOpacity={1}
          onPress={toggleActive}>
          {intl.en.expertChats.resolved}
        </TextButton>
      </View>
      <ActiveQuestions
        visible={active}
        data={activeQuestions}
        navigation={navigation}
      />
      <ResolvedQuestions
        visible={!active}
        data={resolvedQuestions}
        navigation={navigation}
      />
    </Container>
  );
};

export default AskExpert;
