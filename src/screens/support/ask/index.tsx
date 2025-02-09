import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar, TextButton, Header, Container } from '~/components';
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

const AskSupport = ({ navigation }) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(true);
    const [searching, setSearching] = useState(false);
    const [value, setValue] = useState('');

    const lang = useSelector(state => state.language);
    const expertDetails = useSelector(state => state.user.data);
    const activeQuestions = useSelector(state => state.askExpert.active);
    const resolvedQuestions = useSelector(state => state.askExpert.resolved);
    const activeSearchResult = useSelector(
        state => state.askExpert.activeSearch,
    );
    const resolvedSearchResult = useSelector(
        state => state.askExpert.resolvedSearch,
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
        <Container themed unformatted>
            <StatusBar barStyle="light-content" translucent={true} />
            <Header themed title={'Support Chats'} />
            <SearchBar
                styles={modifiers.searchBar}
                onChange={handleSearch}
                placeholder={lang.expertChats.searchName}
            />
            <View style={styles.buttonsContainer}>
                <TextButton
                    styles={modifiers.button}
                    disabled={active}
                    activeOpacity={1}
                    onPress={toggleActive}
                >
                    {lang.expertChats.active}
                </TextButton>
                <TextButton
                    outlined
                    styles={modifiers.button}
                    disabled={!active}
                    activeOpacity={1}
                    onPress={toggleActive}
                >
                    {lang.expertChats.resolved}
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

export default AskSupport;
