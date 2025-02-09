import React from 'react';
import { Conditional } from '~/components';
import { None, Closed, Open } from '.';

export const Show = ({ pastSelected, resolved, unresolved, readResolveData }) => {
    const questions = pastSelected ? resolved.data : unresolved.data;

    return (
        <>
            <Conditional if={questions.length}>
                <Conditional if={pastSelected}>
                    <Closed data={resolved.data} readResolveData={readResolveData} />
                </Conditional>
                <Conditional if={!pastSelected}>
                    <Open data={unresolved.data} readResolveData={readResolveData}/>
                </Conditional>
            </Conditional>
            <Conditional if={!questions.length}>
                <None past={pastSelected} />
            </Conditional>
        </>
    );
};
