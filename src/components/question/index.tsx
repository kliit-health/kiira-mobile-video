import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { get } from 'lodash';
import { route, feature, colors, text } from '~/utils/constants';
import { ChevronRight } from '~/svgs';

const { fontFamily, size } = text;

export type QuestionProps = {
    question: string;
    questionId: string;
    resolvedDate: number;
    destination: route;
    onPress?: (destination: route) => void;
};

const Question = ({
    question,
    questionId,
    resolvedDate,
    destination,
    onPress,
}: QuestionProps) => {
    return (
        <TouchableOpacity
            testID={questionId}
            activeOpacity={0.8}
            style={styles.root}
            onPress={() => onPress(destination)}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{question}</Text>
                <Text style={styles.description}>{questionId}</Text>
            </View>
            <View style={styles.chevron}>
                <ChevronRight color={colors.gray} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    root: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderTopWidth: 0.4,
        borderColor: colors.gray,
        flexDirection: 'row',
        width: '100%',
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
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
    title: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '500',
        fontSize: text.size.regular,
        color: colors.black,
        lineHeight: 24,
    },
    description: {
        fontFamily: fontFamily.poppinsRegular,
        fontWeight: '400',
        fontSize: size.medium,
        color: colors.gray,
        lineHeight: 22,
    },
    chevron: {
        alignSelf: 'center',
        marginHorizontal: 'auto',
    },
});

export default Question;
