import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Column, Line, Question } from '~/components';
import { NavigationService as navigation } from '~/navigation';
import { screenNames } from '~/utils/constants';
import moment from 'moment';
import { default as globalStyles } from '~/components/styles';

const { white_bg } = globalStyles;

const ClosedQuestions = ({ data, readResolveData }) => {
    const experts = useSelector(state => state.experts.data);
    const handleNavigation = item => {
        const expertDetails = experts.find(
            expert => expert.uid === item.expertInfo.uid,
        );
        navigation.navigate(screenNames.Messages, {
            expertDetails,
            questionData: item,
            readResolveData: readResolveData,
        });
    };
    return (
        <Column options={[white_bg]}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <Question
                        key={item.questionId}
                        {...item}
                        time={moment.unix(item.resolvedDate).format('l')}
                        onPress={() => handleNavigation(item)}
                    />
                )}
                ListFooterComponent={Line}
            />
        </Column>
    );
};

export default ClosedQuestions;
