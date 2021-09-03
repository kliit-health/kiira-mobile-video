import React from 'react';
import {
    Screen,
    Header,
    Heading,
    Column,
    Tabs,
    RadioGroup,
} from '~/components';
import { handleBack } from '~/utils/functions/handleNavigation';
import { tabs, reasons } from './model';
import { card } from '~/components/styles';
import { default as globalStyles } from '~/components/styles';

const { height_50, pad_v, pad } = globalStyles;

const Book = () => {
    return (
        <Screen>
            <Header title="Book Visit" onBack={handleBack} />
            <Heading>Please select the main reason for your visit:</Heading>

            <Column options={[card, { flex: 0, height: 330 }]}>
                <Tabs list={tabs} />
                <Column options={[{ flex: 0, height: 250 }, pad_v]}>
                    <RadioGroup data={reasons.primary} />
                </Column>
            </Column>
        </Screen>
    );
};

export default Book;
