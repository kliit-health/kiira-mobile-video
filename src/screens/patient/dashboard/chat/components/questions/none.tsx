import React from 'react';
import { Screen, Text } from '~/components';
import { h2, default as globalStyles } from '~/components/styles';

const { white_bg, center, justify_c, gray_dark } = globalStyles;

export const None = ({ past }) => {
  return (
    <Screen options={[white_bg, justify_c]}>
      <Text options={[h2, center, gray_dark]}>
        {past ? 'You have no resolved chats' : 'You have no open chats'}
      </Text>
    </Screen>
  );
};
