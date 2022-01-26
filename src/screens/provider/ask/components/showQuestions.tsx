import React from 'react';
import { Alert } from 'react-native';
import { View } from 'react-native-animatable';
import { Conditional } from '~/components';
import styles from '../styles';
import { None, ActiveQuestions, ResolvedQuestions } from '.'; 

export const Show = ({ pastSelected, activeData, isSearched, resolveData, navigation }) => {
    const questions = pastSelected ? activeData : resolveData; 
 
    return (
        <>
            <Conditional if={questions.length}>
                <Conditional if={!pastSelected}>
                    <ActiveQuestions 
                        data={activeData} 
                        visible={true}
                        navigation={navigation}
                    />
                </Conditional>
                <Conditional if={pastSelected}>
                    <ResolvedQuestions 
                        data={resolveData}
                        visible={true}
                        navigation={navigation}
                    />
                </Conditional>
            </Conditional>
            <Conditional if={!questions.length}>
                <None isSearched={isSearched} past={pastSelected}/>
            </Conditional>
        </>
    );
};
