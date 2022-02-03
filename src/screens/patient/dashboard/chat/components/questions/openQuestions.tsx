import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Column, Line, Question, Text, Icon } from '~/components';
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';
import { NavigationService as navigation } from '~/navigation';
import { screenNames, icons, colors, text } from '~/utils/constants';
import { resolveQuestion } from '~/redux/actions/chat';
import { default as globalStyles } from '~/components/styles';
import moment from 'moment';

const { white_bg } = globalStyles;

const OpenQuestions = ({ data }) => {
    const dispatch = useDispatch();
    const experts = useSelector(state => state.experts.data);

    const convertModifiedTime = item => {
        var dt = new Date(item.modifiedDate * 1000);
        return moment(dt).format('MM/D/YY h:mm a');
    };

    const handleNavigation = item => {
        const expertDetails = experts.find(
            expert => expert.uid === item.expertInfo.uid,
        );

        navigation.navigate(screenNames.Messages, {
            expertDetails: expertDetails,
            questionData: item,
        });
    };

    const resolve = item => {
        const question = Object.assign({}, item);
        question.isResolved = true;
        question.resolvedDate = moment().unix();
        question.isRated = false;

        const payloadData = {
            resolveQuestionParams: question,
            navigation,
        };
        dispatch(resolveQuestion(payloadData));
    };

    return (
        <Column options={[white_bg]}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    const time = convertModifiedTime(item);
                    console.log('THE ITEM', item);
                    return (
                        <SwipeItem
                            disableSwipeIfNoButton
                            style={styles.button}
                            swipeContainerStyle={
                                styles.swipeContentContainerStyle
                            }
                            rightButtons={
                                <SwipeButtonsContainer
                                    style={styles.rightButton}
                                >
                                    <TouchableOpacity
                                        onPress={() => resolve(item)}
                                    >
                                        <Icon
                                            options={[styles.resolve]}
                                            source={icons.resolve}
                                        />
                                        <Text options={[styles.label]}>
                                            Resolve
                                        </Text>
                                    </TouchableOpacity>
                                </SwipeButtonsContainer>
                            }
                        >
                            <Question
                                key={item.questionId}
                                {...item}
                                time={time}
                                onPress={() => handleNavigation(item)}
                            />
                        </SwipeItem>
                    );
                }}
                ListFooterComponent={Line}
            />
        </Column>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        backgroundColor: '#D41F08',
    },

    label: {
        alignSelf: 'center',
        color: colors.white,
        fontSize: text.size.xSmall,
    },

    resolve: {
        alignSelf: 'center',
    },

    rightButton: {
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: '#D41F08',
        paddingHorizontal: 12,
    },

    swipeContentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },
});

export default OpenQuestions;
