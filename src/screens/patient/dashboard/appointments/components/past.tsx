import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NavigationService as navigation } from '~/navigation';
import { Text, Row, Line, Column, Conditional } from '~/components';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../style';
import { default as globalStyles } from '~/components/styles';
import { colors } from '~/utils/constants';

export const Past = ({ visit, date }) => {
    const { expert, appointmentType = null, reason, locked } = visit;
    const duration =
        typeof appointmentType !== 'string' && appointmentType
            ? appointmentType.duration
            : reason.sessionType.duration;

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
                <Text options={[globalStyles.white, globalStyles.center, globalStyles.text_space]}>
                    {date.month.toUpperCase()}
                </Text>
                <Text options={[globalStyles.white, globalStyles.center, globalStyles.xxLarge, globalStyles.sm_pad_v]}>
                    {date.day}
                </Text>
                <Text options={[globalStyles.white, globalStyles.center, globalStyles.text_space]}>{date.year}</Text>
            </View>
        );
    };

    const ExpertDetails = () => {
        return (
            <Column>
                <Column options={[globalStyles.pad_h]}>
                    <Text options={[globalStyles.xxLarge, globalStyles.light, globalStyles.sm_pad_v]}>
                        {`${expert.firstName} ${expert.lastName}`}
                    </Text>
                    <Text options={[globalStyles.large]}>
                        {`${duration} min. Virtual List`}
                    </Text>
                </Column>
                <Column options={[globalStyles.pad_h]}>
                    <Line />
                </Column>
                <Conditional if={!locked}>
                    <Text options={[globalStyles.pad_h, globalStyles.pad_b, globalStyles.large, globalStyles.gray_dark]}>
                        {`Waiting for visit summary`}
                    </Text>
                </Conditional>
                <Conditional if={locked}>
                    <TouchableOpacity onPress={handleVisitSummary}>
                        <Row options={[globalStyles.pad_h]}>
                            <Feather
                                style={[globalStyles.pad_b, globalStyles.blue]}
                                name="file-text"
                                color={colors.blue}
                                size={25}
                            />
                            <Text options={[globalStyles.sm_pad_h, globalStyles.pad_b, globalStyles.xLarge, globalStyles.blue]}>
                                {`View Visit Summary`}
                            </Text>
                        </Row>
                    </TouchableOpacity>
                </Conditional>
            </Column>
        );
    };

    return (
        <Column options={[globalStyles.hide_overflow, globalStyles.radius_md]}>
            <Row
                options={[
                    globalStyles.width_auto,
                    globalStyles.pad_h,
                    globalStyles.white_bg,
                    globalStyles.pad_v,
                    globalStyles.hide_overflow,
                    globalStyles.radius_md,
                    globalStyles.grey_br,
                ]}
            >
                <VisitTime />
                <ExpertDetails />
            </Row>
        </Column>
    );
};

export default Past;
