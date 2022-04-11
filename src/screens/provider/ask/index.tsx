import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    SearchBar,
    Header,
    Container,
    Tabs,
} from '~/components';
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
import { ActiveQuestions, ResolvedQuestions } from './components';
import styles, { modifiers } from './styles';
import { chatTabs } from './chat/model';
import { default as globalStyles } from '~/components/styles';

const AskExpert = ({ navigation }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(true);
    const [searching, setSearching] = useState(false);
    const [value, setValue] = useState('');

    const lang = useSelector((state: any) => state.language);
    const expertDetails = useSelector((state: any) => state.user.data);
    const activeQuestions = useSelector((state: any) => state.askExpert.active);
    const resolvedQuestions = useSelector(
        (state: any) => state.askExpert.resolved,
    );
    const activeSearchResult = useSelector(
        (state: any) => state.askExpert.activeSearch,
    );
    const resolvedSearchResult = useSelector(
        (state: any) => state.askExpert.resolvedSearch,
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

    return (
        <Container unformatted>
            <StatusBar barStyle="light-content" translucent={true} />
            <Header
                title={lang.expertChats.title}
                onBack={() => navigation.goBack()}
            />
            <SearchBar
                styles={modifiers.searchBar}
                style={styles.searchBar}
                onChange={handleSearch}
                placeholder={lang.expertChats.searchName}
            />
            <Tabs
                options={[globalStyles.blue_bg]}
                list={chatTabs}
                active={active}
                setActive={toggleActive}
            />
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
