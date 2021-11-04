import React from 'react';
import { FlatList } from 'react-native';
import { Column, Question } from '~/components';
import { default as globalStyles } from '~/components/styles';

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

const ClosedQuestions = ({ data }) => {
    return (
        <Column options={[white_bg]}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Question
                        key={item.questionId}
                        {...item}
                        // onPress={handleNavigation}
                    />
                )}
            />
        </Column>
    );
};

export default ClosedQuestions;
