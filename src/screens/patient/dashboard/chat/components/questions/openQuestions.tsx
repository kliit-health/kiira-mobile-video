import React, {useRef,useEffect} from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Column, Line, Question, Text, Icon } from '~/components';
import { SwipeItem, SwipeButtonsContainer } from 'react-native-swipe-item';
import { NavigationService as navigation } from '~/navigation';
import { screenNames, icons, colors, text, days } from '~/utils/constants';
import { resolveQuestion } from '~/redux/actions/chat';
import { default as globalStyles } from '~/components/styles';
import moment from 'moment';

const { white_bg } = globalStyles;

const OpenQuestions = ({ data, readResolveData }) => {
    const dispatch = useDispatch();
    const experts = useSelector((state:any) => state.experts.data);
    const itemsRef = useRef([]);

    const convertModifiedTime = item => {
        var dt = new Date(item.modifiedDate * 1000);
        if(item.modifiedDate == ""){
            dt = new Date();
        }
        let today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1)
       return dt.toLocaleDateString() === today.toLocaleDateString()
            ? moment(dt).format('hh:mm a')
            : dt.toLocaleDateString() === yesterday.toLocaleDateString()
            ? days.yesterday
            : moment(dt).format('MM/D/YY h:mm a');     
    };

    const handleNavigation = item => {
        var expertDetails = experts.find(
            expert => expert.uid === item.expertInfo.uid,
        );

        navigation.navigate(screenNames.Messages, {
            expertDetails: expertDetails,
            questionData: item,
            readResolveData: readResolveData,
        });
    };

    const resolve = (item, index) => {
        const question = Object.assign({}, item);
        question.isResolved = true;
        question.resolvedDate = moment().unix();
        question.isRated = false;

        const payloadData = {
            resolveQuestionParams: question,
            navigation,
        };
        dispatch(resolveQuestion(payloadData));
        itemsRef.current[index].close();
    };

    const resolveButton = (item,index) => {
        return(<SwipeButtonsContainer
            style={styles.rightButton}
        >
            <TouchableOpacity
                onPress={() => resolve(item,index)}
            >
                <Icon
                    options={[styles.resolve]}
                    source={icons.resolve}
                />
                <Text options={[styles.label]}>
                    Resolve
                </Text>
            </TouchableOpacity>
        </SwipeButtonsContainer>)
    }
    useEffect(() => {
        if (!data.length) return;
        itemsRef.current = itemsRef.current.slice(0, data.length);
    }, [data, itemsRef]);

    return (
        <Column options={[white_bg]}>
            <FlatList
                data={data}
                renderItem={({ item,index }) => {
                    const time = convertModifiedTime(item);
                    return (
                        <SwipeItem
                       ref={el => (itemsRef.current[index] = el)}
                            disableSwipeIfNoButton
                            style={styles.button}
                            swipeContainerStyle={
                                styles.swipeContentContainerStyle
                            }
                            rightButtons={resolveButton(item,index)}
                        
                            
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
