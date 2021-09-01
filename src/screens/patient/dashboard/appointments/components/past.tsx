import React from 'react';
import { View } from 'react-native';
import { Text, Row, Line, Column } from '~/components';
import styles from '../style';
import { default as globalStyles } from '~/components/styles';

const {
    pad_b,
    pad_h,
    pad_v,
    radius_md,
    large,
    xLarge,
    xxLarge,
    white,
    center,
    width_auto,
    white_bg,
    hide_overflow,
    gray_dark,
    light,
} = globalStyles;

export const Past = ({ visit, date }) => {
    const { uid, calendarID, reason, id, expert, prepaid } = visit;
    const { duration } = reason.sessionType;

    console.log('Visit: ', visit.locked);

    const VisitTime = () => {
        return (
            <View
                style={[
                    styles.appointment,
                    {
                        width: '20%',
                        paddingVertical: 30,
                        justifyContent: 'space-evenly',
                    },
                ]}
            >
                <Text options={[white, center]}>{date.month}</Text>
                <Text options={[white, center]}>{date.day}</Text>
                <Text options={[white, center]}>{date.year}</Text>
            </View>
        );
    };

    const ExpertDetails = () => {
        return (
            <Column>
                <Column options={[pad_h]}>
                    <Text options={[xxLarge, light]}>
                        {`${visit.expert.firstName} ${visit.expert.lastName}`}
                    </Text>
                    <Text options={[large]}>
                        {`${duration} min. Virtual List`}
                    </Text>
                </Column>
                <Column>
                    <Line />
                </Column>
                <Text options={[pad_h, pad_b, large, gray_dark]}>
                    {`Waiting for visit summary`}
                </Text>
            </Column>
        );
    };

    return (
        <Column options={[hide_overflow, radius_md]}>
            <Row
                options={[
                    width_auto,
                    pad_h,
                    white_bg,
                    pad_v,
                    hide_overflow,
                    radius_md,
                ]}
            >
                {VisitTime()}
                {ExpertDetails()}
            </Row>
        </Column>
    );
};

export default Past;
