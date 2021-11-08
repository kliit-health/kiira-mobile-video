import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Column, Line, Question } from '~/components';
import { NavigationService as navigation } from '~/navigation';
import { screenNames } from '~/utils/constants';
import { default as globalStyles } from '~/components/styles';
import moment from 'moment';

const { white_bg } = globalStyles;

const OpenQuestions = ({ data }) => {
    const experts = useSelector(state => state.experts.data);
    const handleNavigation = item => {
        const expertDetails = experts.find(
            expert => expert.uid === item.expertInfo.uid,
        );

        navigation.navigate(screenNames.Messages, {
            expertDetails,
            questionData: item,
        });
    };

    const convertModifiedTime = item => {
        var dt = new Date(item.modifiedDate * 1000);
        return moment(dt).format('MM/D/YY h:mm a');
    };

    return (
        <Column options={[white_bg]}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    const time = convertModifiedTime(item);
                    return (
                        <Question
                            key={item.questionId}
                            {...item}
                            time={time}
                            onPress={() => handleNavigation(item)}
                        />
                    );
                }}
                ListFooterComponent={Line}
            />
        </Column>
    );
};

export default OpenQuestions;
