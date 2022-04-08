import React from 'react';
import { Screen, Text } from '~/components';
import { h2, default as globalStyles } from '~/components/styles';

export const None = ({ past }) => {
    return (
        <Screen options={[globalStyles.white_bg, globalStyles.justify_c]}>
            <Text options={[h2, globalStyles.center, globalStyles.gray_dark]}>
                {past ? 'You have no resolved chats' : 'You have no open chats'}
            </Text>
        </Screen>
    );
};
