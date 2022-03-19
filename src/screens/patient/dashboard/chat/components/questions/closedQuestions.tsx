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
    const experts = useSelector((state:any) => state.experts.data);
    const user = useSelector((state:any) => state.user.data);
    const handleNavigation = item => {
        var expertDetails = experts.find(
            expert => expert.uid === item.expertInfo.uid,
        );

        if(!user.test){
            expertDetails = expertDetails.filter(
            ({
                profileInfo: {
                    test: value,
                }
            }) => { 
                return !value
            });
        }
        
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
