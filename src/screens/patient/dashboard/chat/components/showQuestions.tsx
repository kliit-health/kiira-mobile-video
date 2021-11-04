import React from 'react';
import { FlatList, View } from 'react-native';
import { Conditional } from '~/components';
import { None, Closed, Open } from '.';
import { handleNavigation } from '~/utils/functions';

import ErrorBoundary from 'react-native-error-boundary';

export const Show = ({ pastSelected, resolved, unresolved }) => {
    const FallBack = () => <View></View>;
    const questions = pastSelected ? resolved.data : unresolved.data;

    const Questions = ({ data }) => {
        return (
            <FlatList
                testID="Questions List"
                showsVerticalScrollIndicator={false}
                data={data}
                extraData={pastSelected}
                renderItem={({ item }) => {
                    return (
                        <ErrorBoundary
                            FallbackComponent={() => <FallBack />}
                            onError={() => handleNavigation('Home')}
                        >
                            <Conditional if={pastSelected}>
                                <Closed data={data} />
                            </Conditional>
                            <Conditional if={!pastSelected}>
                                <Open data={data} />
                            </Conditional>
                        </ErrorBoundary>
                    );
                }}
                keyExtractor={index => `${index.id}`}
            />
        );
    };

    return (
        <>
            <Conditional if={questions.length}>
                <Questions data={questions} />
            </Conditional>
            <Conditional if={!questions.length}>
                <None />
            </Conditional>
        </>
    );
};
