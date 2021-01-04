import React, {useState, useEffect} from 'react';
import {Container, Header, SearchBar} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import intl from '../../utils/localization';
import {screenNames} from '../../utils/constants';
import {searchObject} from '../../utils/functions';
import {updateFavoriteExpertsAsync, getFavoriteExpertsAsync} from './actions';
import {getChatHistoryAsync} from '../treatmentHistory/actions';
import {List, Favorites} from './sections';
import {modifiers} from './styles';

const CareSquad = ({navigation}) => {
  const dispatch = useDispatch();

  const [deleteMode, setDeleteMode] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const {experts} = useSelector((state) => state.careSquad);
  const {favorites} = useSelector((state) => state.careSquad);
  const {currentRoute} = useSelector((state) => state.navigator);

  useEffect(() => {
    dispatch(getChatHistoryAsync());
  }, []);

  useEffect(() => {
    dispatch(getFavoriteExpertsAsync());
  }, []);

  useEffect(() => {
    setDeleteMode(false);
  }, [currentRoute]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const filterObjectArray = (experts, key) => {
    return experts.filter((expert) => searchObject(expert, key));
  };

  const handleSearch = (value) => {
    const searching = Boolean(value);
    setSearching(searching);
    const searchResult = filterObjectArray(experts, value);
    setSearchData(searchResult);
  };

  const handleCardPress = (details) => {
    navigation.navigate(screenNames.getTreatment, {
      navigator,
      details,
    });
  };

  const handleAddPress = (details) => {
    dispatch(updateFavoriteExpertsAsync([...favorites, details]));
  };

  const handleEditPress = () => {
    setDeleteMode(!deleteMode);
  };

  const handleFavoriteItemPress = (details) => {
    deleteMode
      ? dispatch(
          updateFavoriteExpertsAsync(
            favorites.filter((favorite) => favorite.uid !== details.uid),
          ),
        )
      : navigation.navigate(screenNames.getTreatment, {details});
  };

  return (
    <Container unformatted>
      <Header
        title={intl.en.careSquad.title}
        onBack={handleBackPress}
        onEditPress={handleEditPress}
        editState={deleteMode}
        disableEdit={favorites && favorites.length == 0}
        styles={modifiers.header}
      />
      <Favorites
        onItemPress={handleFavoriteItemPress}
        data={favorites}
        deleteMode={deleteMode}
      />
      <SearchBar
        onChange={handleSearch}
        placeholder={intl.en.careSquad.search}
      />
      <List
        onCardPress={handleCardPress}
        onAddPress={handleAddPress}
        data={isSearching ? searchData : experts}
        disabledItems={favorites}
      />
    </Container>
  );
};

export default CareSquad;
