import React, { useState, useEffect } from 'react';
import { Container, Header, SearchBar } from '~/components';
import NoProviders from '~/components/noProviders';
import Conditional from '~/components/conditional';
import { useSelector, useDispatch } from 'react-redux';
import { screenNames } from '~/utils/constants';
import { updateFavoriteExperts } from '~/redux/actions';
import { getChatHistoryAsync } from './treatmentHistory/actions';
import { List, Favorites } from './sections';
import { modifiers } from './styles';

const CareSquad = ({ navigation }) => {
    const dispatch = useDispatch();

    const [deleteMode, setDeleteMode] = useState(false);
    const [isSearching, setSearching] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [availbleExperts, setAvailableExperts] = useState([]);

    const user = useSelector((state:any) => state.user.data);
    const experts = useSelector((state:any) => state.experts.data);
    const favorites = useSelector((state:any) => state.favoriteExperts.data);
    const currentRoute = useSelector((state:any) => state.navigator.currentRoute);
    const lang = useSelector((state:any) => state.language);

    useEffect(() => {
        dispatch(getChatHistoryAsync());
    }, []);

    useEffect(() => {
        if (experts.length && user) {
            const {
                profileInfo: { state },
            } = user;
            var stateAvailableExperts = experts.filter(({ profileInfo }) => {
                const supportedStates = profileInfo.license.states;
                return supportedStates.some(({ code }) => code === state.code);
            });

            if(!user.profileInfo.test){
                stateAvailableExperts = stateAvailableExperts.filter(
                ({
                    profileInfo: {
                        test: value,
                    }
                }) => { 
                    return !value
                });
            }

            setAvailableExperts(stateAvailableExperts);
        }
    }, [experts]);

    useEffect(() => {
        setDeleteMode(false);
    }, [currentRoute]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const filterObjectArray = (experts, key) => {
        return experts.filter(expert => {
            let { bio, profession } = expert.profileInfo;
            let specialities = profession.specialities.reduce(
                (acc, item) => (acc += `${item} `),
                '',
            );

            return bio.includes(key) || specialities.includes(key);
        });
    };

    const handleSearch = value => {
        const searching = Boolean(value);
        setSearching(searching);
        const searchResult = filterObjectArray(availbleExperts, value);
        setSearchData(searchResult);
    };

    const handleCardPress = details => {
        navigation.navigate(screenNames.getTreatment, {
            navigation,
            details,
        });
    };

    const handleAddPress = ({uid }) => {
        dispatch(
            updateFavoriteExperts({
                uid: user.uid,
                favorites: [...favorites, uid],
            }),
        );
    };

    const handleEditPress = () => {
        setDeleteMode(!deleteMode);
    };

    const handleFavoriteItemPress = details => {
        deleteMode
            ? dispatch(
                  updateFavoriteExperts({
                      uid: user.uid,
                      favorites: favorites.filter(uid => uid !== details.uid),
                  }),
              )
            : navigation.navigate(screenNames.getTreatment, {
                  navigation,
                  details,
              });
    };

    const getFavoriteExperts = (favorites, experts) => {
        if (favorites.length > 0 && experts.length > 0) {
            const fav = experts.filter(experts =>
                favorites.some(uid => experts.uid === uid),
            );
            return fav;
        }
        return [];
    };

    return (
        <Container unformatted>
            <Header
                title={lang.careSquad.title}
                onBack={handleBackPress}
                onEditPress={handleEditPress}
                editState={deleteMode}
                disableEdit={favorites && favorites.length == 0}
                styles={modifiers.header}
            />
            <Favorites
                onItemPress={handleFavoriteItemPress}
                data={getFavoriteExperts(favorites, experts)}
                deleteMode={deleteMode}
            />
            <SearchBar
                styles={{}}
                onChange={handleSearch}
                placeholder={lang.careSquad.search}
            />
            <Conditional if={availbleExperts.length}>
                <List
                    onCardPress={handleCardPress}
                    onAddPress={handleAddPress}
                    data={isSearching ? searchData : availbleExperts}
                    disabledItems={getFavoriteExperts(favorites, experts)}
                />
            </Conditional>
            <Conditional if={!availbleExperts.length}>
                <NoProviders />
            </Conditional>
        </Container>
    );
};

export default CareSquad;
