import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { screenNames } from '~/utils/constants';
import styles from './styles';
import None from '../none';

const ResolvedQuestions = ({ data, navigation, visible }) => {
    const handleItemPress = questionData => {
        navigation.navigate(screenNames.expertChat, { questionData });
    };

    return visible ? (
        <FlatList
            data={data}
            keyExtractor={(item, index) => `${item.uid} ${index}`}
            contentContainerStyle={styles.list.listContainer}
            ListEmptyComponent={() => <Fallback />}
            showsVerticalScrollIndicator={false}
            style={styles.list.mainContainer}
            renderItem={({ item }) => (
                <ListItem {...item} onPress={handleItemPress} />
            )}
        />
    ) : (
        <View />
    );
};

const ListItem = props => {
    const { userInfo, lastMessage, modifiedDate, onPress } = props;
    const { firstName, lastName } = userInfo.profileInfo;
    const lang = useSelector((state: any) => state.language);
    const handlePress = () => {
        if (onPress) {
            onPress(props);
        }
    };
    const convertModifiedTime = date => {
        var dt = new Date(date * 1000);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        var hours = dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours();
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = Number(hours) % 12 || 12;
        var minutes =
            dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();
        var finalTime = hours + ':' + minutes + ' ' + AmOrPm;
        return dt === today
            ? finalTime
            : dt === yesterday
            ? 'Yesterday'
            : dt.toLocaleDateString();
    };

    const time = convertModifiedTime(modifiedDate);
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.item.card}
            onPress={handlePress}
        >
            <View style={styles.item.outerContainer}>
                <View>
                    <Text
                        style={styles.item.subtitle}
                    >{`${firstName} ${lastName}`}</Text>
                </View>
                <View style={styles.item.innerContainer}>
                    <Text numberOfLines={1} style={styles.item.message}>
                        {lastMessage}
                    </Text>
                </View>
            </View>
            <Text style={styles.item.time}>{time}</Text>
        </TouchableOpacity>
    );
};

const Fallback = () => {
    return (
        <View style={styles.fallBack.container}>
            <None />
        </View>
    );
};

export default ResolvedQuestions;
