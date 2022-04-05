import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Row, Column, Dot } from '~/components';
import { route, colors, text } from '~/utils/constants';

const { fontFamily, size } = text;

export type QuestionProps = {
    expertInfo: object;
    questionId: string;
    time: number;
    destination: route;
    lastMessage: string;
    onPress?: (destination: route) => void;
    userUnreadCount: number;
};

const Question = ({
    questionId,
    time,
    destination,
    lastMessage,
    onPress,
    expertInfo,
    userUnreadCount,
}: QuestionProps) => {
    return (
        <>
            <Row>
                <TouchableOpacity
                    testID={questionId}
                    activeOpacity={0.8}
                    style={styles.root}
                    onPress={() => onPress(destination)}
                >
                    {userUnreadCount > 0 && <Dot />}
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={{
                            uri: expertInfo.profileInfo.profileImageUrl
                                ? expertInfo.profileInfo.profileImageUrl
                                : '',
                        }}
                    />
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            {expertInfo.expertName || expertInfo.displayName}
                        </Text>
                        <Text numberOfLines={2} style={styles.description}>
                            {lastMessage}
                        </Text>
                    </View>
                    <Column options={[styles.date]}>
                        <Text style={styles.time}>{time}</Text>
                    </Column>
                </TouchableOpacity>
            </Row>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },

    chevron: {
        alignSelf: 'center',
        marginHorizontal: 'auto',
    },

    date: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginHorizontal: 20,
    },

    description: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '400',
        fontSize: size.medium,
        color: colors.gray,
        lineHeight: 22,
        width: '220%',
    },

    icon: {
        height: 44,
        width: 44,
        borderRadius: 22,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primaryBlue,
    },

    root: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopWidth: 0.4,
        borderColor: colors.gray,
        flexDirection: 'row',
        width: '100%',
    },

    title: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '500',
        fontSize: text.size.regular,
        color: colors.black,
        lineHeight: 24,
    },

    image: {
        height: 50,
        width: 50,
        paddingRight: 10,
        borderRadius: 100,
    },

    time: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '400',
        fontSize: size.medium,
        color: colors.gray,
        lineHeight: 22,
    },
});

export default Question;
