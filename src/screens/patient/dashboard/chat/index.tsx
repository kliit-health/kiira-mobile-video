import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Show } from './components/questions';
import { Screen, Header, NavItem, Column, Text, Tabs } from '~/components';
import { chatTabs, navItems } from './model';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '~/redux/actions';
import { RootState } from '~/redux/reducers';
import { firebaseCollections, firebaseConditionals } from '~/utils/constants';
import {
    handleBack,
    handleNavigation,
} from '~/utils/functions/handleNavigation';
import {
    getExpertsData,
    clearChooseExpertState,
} from '~/redux/actions/chooseExpert';

import { default as globalStyles } from '~/components/styles';

const Chat = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.data);
    const { resolved, unresolved } = useSelector(
        (state: RootState) => state.questions,
    );

    const [pastQuestions, setPastQuestions] = useState(false);

    const handleTabSelect = () => {
        setPastQuestions(!pastQuestions);
    };

    const readResolveData = () => { 
        dispatch(actions.getResolvedQuestion({ uid: user.uid }));
        dispatch(actions.getUnresolvedQuestions({ uid: user.uid }));
    }

    useEffect(() => {
        readResolveData();
    }, []);

    useEffect(() => {
        const params = {
            expertsParams: {
                tableName: firebaseCollections.users,
                roleKey: firebaseConditionals.roleKey,
                roleValue: firebaseConditionals.roleExpert,
            },
        };
        dispatch(getExpertsData(params, dispatch));
        return () => {
            dispatch(clearChooseExpertState());
        };
    }, []);

    return (
        <Screen test="Chat Screen">
            <Header title="Chats" onBack={handleBack} />
            <Text options={[globalStyles.xxLarge, globalStyles.pad_h, globalStyles.sm_pad_v]}>
                Please select a category
            </Text>
            <Text options={[globalStyles.gray_dark, globalStyles.medium, globalStyles.pad_h, globalStyles.pad_b]}>
                Responses are typically recieved within 24 hours
            </Text>
            <Column options={[globalStyles.white_bg]}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={navItems}
                    renderItem={({ item }) => (
                        <NavItem
                            key={item.title}
                            {...item}
                            onPress={() =>
                                handleNavigation(item.destination, {
                                    type: item.type,
                                })
                            }
                        />
                    )}
                />
            </Column>
            <Column options={[globalStyles.white_bg]}>
                <Tabs
                    options={[globalStyles.blue_bg]}
                    list={chatTabs}
                    active={pastQuestions}
                    setActive={handleTabSelect}
                />
                <Show
                    pastSelected={pastQuestions}
                    resolved={resolved}
                    unresolved={unresolved}
                    readResolveData={readResolveData}
                />
            </Column>
        </Screen>
    );
};

export default Chat;
