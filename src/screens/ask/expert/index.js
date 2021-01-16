import React, {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar, TextButton, Header, Container} from '../../../components';
import {
  getActiveQuestions,
  getResolvedQuestions,
  searchQuestions,
} from './action';
import {getTerms} from '../../termsAndConditions/action';
import {getPolicies} from '../../privacyPolicy/action';
import {ActiveQuestions, ResolvedQuestions} from './components';
import intl from '../../../utils/localization';

import styles, {modifiers} from './styles';

const AskExpert = ({navigation}) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [searching, setSearching] = useState(false);
  const [value, setValue] = useState('');

  const expertDetails = useSelector(
    (state) => state.authLoadingReducer.userData,
  );
  const activeQuestions = useSelector((state) => state.askExpertReducer.active);
  const resolvedQuestions = useSelector(
    (state) => state.askExpertReducer.resolved,
  );
  const activeSearchResult = useSelector(
    (state) => state.askExpertReducer.activeSearch,
  );
  const resolvedSearchResult = useSelector(
    (state) => state.askExpertReducer.resolvedSearch,
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

  useEffect(() => {
    handleSearch(value);
  }, [active]);

  const toggleActive = () => {
    setActive(!active);
  };

  const handleSearch = (value) => {
    setValue(value);
    dispatch(
      searchQuestions({
        value,
        status: active ? 'active' : 'resolved',
      }),
    );
    setSearching(Boolean(value));
  };

  return (
    <Container themed unformatted>
      <StatusBar barStyle="light-content" translucent={true} />
      <Header themed title={intl.en.expertChats.title} />
      <SearchBar
        styles={modifiers.searchBar}
        onChange={handleSearch}
        placeholder={intl.en.expertChats.searchName}
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
        data={searching ? activeSearchResult : activeQuestions}
        navigation={navigation}
      />
      <ResolvedQuestions
        visible={!active}
        data={searching ? resolvedSearchResult : resolvedQuestions}
        navigation={navigation}
      />
    </Container>
  );
};

export default AskExpert;
