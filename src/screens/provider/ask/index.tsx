import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar, Column, Header, Container, Tabs } from '~/components';
import {
    getActiveQuestions,
    getResolvedQuestions,
    searchQuestions,
} from './action';
import {
    getTermsAndConditions,
    getPrivacyPolicy,
    getUser,
} from '~/redux/actions'; 
import { Show } from './components/'
import { chatTabs } from './model';
import styles, { modifiers } from './styles'; 

const AskExpert = ({ navigation }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(true);
    const [searching, setSearching] = useState(false);
    const [value, setValue] = useState('');
    const [pastSelected, setPastSelected] = useState(false);
    const lang = useSelector((state:any) => state.language);
    const expertDetails = useSelector((state:any) => state.user.data);
    const activeQuestions = useSelector((state:any) => state.askExpert.active);
    const resolvedQuestions = useSelector((state:any) => state.askExpert.resolved);
    const activeSearchResult = useSelector(
        (state:any) => state.askExpert.activeSearch,
    );
    const resolvedSearchResult = useSelector(
        (state:any) => state.askExpert.resolvedSearch,
    );

    useEffect(() => {
        dispatch(getTermsAndConditions());
    }, []);

    useEffect(() => {
        dispatch(getPrivacyPolicy());
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

    useEffect(() => {
        dispatch(getUser());
    }, []);

    const handleSearch = value => {
        setValue(value);
        dispatch(
            searchQuestions({
                value,
                status: active ? 'active' : 'resolved',
            }),
        );
        setSearching(Boolean(value));
    };

    const handleTabSelect = () => {
        setPastSelected(!pastSelected);
    }; 

    return (
        <Container unformatted styles={modifiers.container}>
            <StatusBar barStyle="light-content" translucent={true} />
            <Header title={lang.expertChats.title}/>
            <SearchBar
                styles={modifiers.searchBar}
                onChange={handleSearch}
                placeholder={'Search'}
            />
            <Tabs 
                list={chatTabs}
                active={pastSelected}
                setActive={handleTabSelect}
                options={[styles.tabContainer]}
            />
            <Show 
                pastSelected={pastSelected} 
                activeData={searching ? activeSearchResult : activeQuestions}
                resolveData={searching ? resolvedSearchResult : resolvedQuestions}
                isSearched={searching}
                navigation={navigation}
            /> 
        </Container>
    );
};

export default AskExpert;
