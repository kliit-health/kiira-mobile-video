import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
    Screen,
    Header,
    Heading,
    NavItem,
    Column,
    Text,
    Tabs,
} from '~/components';
import {
    handleBack,
    handleNavigation,
} from '~/utils/functions/handleNavigation';
import { default as globalStyles } from '~/components/styles';
import { chatTabs, navItems } from './model';

const {
    blue_bg,
    gray_dark,
    pad_b,
    sm_pad_v,
    pad_h,
    medium,
    white_bg,
    xxLarge,
} = globalStyles;

const Chat = () => {
    const [pastSelected, setPastSelected] = useState(false);

    return (
        <Screen>
            <Header title="Chats" onBack={handleBack} />
            <Heading>Please select a category</Heading>
            <Text options={[gray_dark, medium, pad_h, pad_b]}>
                Responses are typically with 24 hours
            </Text>
            <Column options={[white_bg]}>
                <FlatList
                    data={navItems}
                    renderItem={({ item }) => (
                        <NavItem
                            key={item.title}
                            {...item}
                            onPress={handleNavigation}
                        />
                    )}
                />
            </Column>
            <Tabs
                options={[blue_bg]}
                list={chatTabs}
                pastSelected={pastSelected}
                setPastSelected={setPastSelected}
            />
            <Column options={[white_bg]}>
                <FlatList
                    data={navItems}
                    renderItem={({ item }) => (
                        <NavItem
                            key={item.title}
                            {...item}
                            onPress={handleNavigation}
                        />
                    )}
                />
            </Column>
        </Screen>
    );
};

export default Chat;
