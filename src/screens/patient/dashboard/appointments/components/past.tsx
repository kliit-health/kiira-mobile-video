import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationService as navigation } from '~/navigation';
import { Text, Row, Line, Column, Conditional } from '~/components';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../style';
import { default as globalStyles } from '~/components/styles';
import { colors, screenNames } from '~/utils/constants';

const {
    pad_b,
    sm_pad_h,
    pad_h,
    sm_pad_v,
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
    blue,
    text_space,
    grey_br,
} = globalStyles;

export const Past = ({ visit, date }) => {
    const { expert, reason, locked } = visit;
    const { duration } = reason.sessionType;

    const handleVisitSummary = () => {
        navigation.navigate('VisitOverView', { visit });
    };

    const VisitTime = () => {
        return (
            <View
                style={[
                    styles.appointment,
                    {
                        width: '20%',
                        paddingVertical: 35,
                        justifyContent: 'space-evenly',
                    },
                ]}
            >
                <Text options={[white, center, text_space]}>
                    {date.month.toUpperCase()}
                </Text>
                <Text options={[white, center, xxLarge, sm_pad_v]}>
                    {date.day}
                </Text>
                <Text options={[white, center, text_space]}>{date.year}</Text>
            </View>
        );
    };

    const ExpertDetails = () => {
        return (
            <Column>
                <Column options={[pad_h]}>
                    <Text options={[xxLarge, light, sm_pad_v]}>
                        {`${expert.firstName} ${expert.lastName}`}
                    </Text>
                    <Text options={[large]}>
                        {`${duration} min. Virtual List`}
                    </Text>
                </Column>
                <Column options={[pad_h]}>
                    <Line />
                </Column>
                <Conditional if={!locked}>
                    <Text options={[pad_h, pad_b, large, gray_dark]}>
                        {`Waiting for visit summary`}
                    </Text>
                </Conditional>
                <Conditional if={locked}>
                    <TouchableOpacity onPress={handleVisitSummary}>
                        <Row options={[pad_h]}>
                            <Feather
                                style={[pad_b, blue]}
                                name="file-text"
                                color={colors.blue}
                                size={25}
                            />
                            <Text options={[sm_pad_h, pad_b, xLarge, blue]}>
                                {`View Visit Summary`}
                            </Text>
                        </Row>
                    </TouchableOpacity>
                </Conditional>
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
                    grey_br,
                ]}
            >
                <VisitTime />
                <ExpertDetails />
            </Row>
        </Column>
    );
};

export default Past;
