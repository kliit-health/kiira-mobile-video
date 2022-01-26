import React from 'react';
import { Screen, Text } from '~/components';
import { h1, default as globalStyles } from '~/components/styles';
import { images, screenNames } from '~/utils/constants';
import { Image } from 'react-native';

const { white_bg, center, justify_c, gray_dark, centerText, xxxLarge, poppins, sm_pad_h } = globalStyles; 

export const None = ({ isSearched, past }) => {
    return (
        <Screen options={[white_bg, justify_c]}>
            <Image
                style={{
                        width: 130,
                        height: 140, 
                        alignSelf: 'center', 
                    }
                }
                resizeMode="contain"
                source={images.penguin}
            />
            <Text options={[center, gray_dark, centerText, xxxLarge, poppins, sm_pad_h]}>
                {isSearched ? 'There are no chats matching your search' : (!past ? 'You have no open chats' : 'You have no resolved chats')}
            </Text>
        </Screen>
    );
};
