import React from 'react';
import { FlatList, View } from 'react-native';
import { Conditional } from '~/components';
import { None, Past, Future } from '.';
import { handleNavigation } from '~/utils/functions';
import { generateDateInfo } from '~/utils/helper';
import ErrorBoundary from 'react-native-error-boundary';

export const Show = ({ pastSelected, past, future }) => {
    const FallBack = () => <View></View>;
    const data = pastSelected ? past : future;

    const Visits = ({ data }) => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                extraData={pastSelected}
                renderItem={({ item }) => {
                    const date = generateDateInfo(item.time);
                    return (
                        <ErrorBoundary
                            FallbackComponent={() => <FallBack />}
                            onError={() => handleNavigation('Home')}
                        >
                            <Conditional if={pastSelected}>
                                <Past visit={item} date={date} />
                            </Conditional>
                            <Conditional if={!pastSelected}>
                                <Future visit={item} date={date} />
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
            <Conditional if={data.length}>
                <Visits data={data} />
            </Conditional>
            <Conditional if={!data.length}>
                <None />
            </Conditional>
        </>
    );
};
