import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import {
    Screen,
    Header,
    Heading,
    Column,
    Tabs,
    RadioGroup,
    Line,
    Button,
    Conditional,
} from '~/components';
import { handleBack } from '~/utils/functions/handleNavigation';
import { tabs, sections } from './model';
import { card } from '~/components/styles';
import { default as globalStyles, h3 } from '~/components/styles';
import Expandable from '~/components/expandable';
import { getAllDocumentsFromCollection } from '~/utils/firebase';

const {
    width_10,
    grey_dark_br_t_md,
    pad_v,
    hide_overflow,
    no_pad_v,
    no_pad_h,
    grey_br_t_md,
    pad_h,
} = globalStyles;

const Book = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('primaryCare');
    const [data, setData] = useState(null);
    const [cardHeight, setCardHeight] = useState(330);
    const [shrinkCard, setShrinkCard] = useState(true);
    const [selection, setSelection] = useState(null);
    const [catagories, setCatagories] = useState(null);
    const [appointmentTypes, setAppointmentTypes] = useState(null);
    const [appointment, setAppointment] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const topics = await getAllDocumentsFromCollection(
                `appointmentCategories`,
            );

            if (Array.isArray(topics)) {
                const reasons = topics.reduce((acc, item) => {
                    acc[item.name] = item.reasons;
                    return acc;
                }, {});

                setCatagories(reasons);
                setData(reasons[activeTab]);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const types = await getAllDocumentsFromCollection(
                `appointmentTypes`,
            );

            if (Array.isArray(types)) {
                const result = types.reduce((acc, item) => {
                    acc[item.id] = item;
                    return acc;
                }, {});

                setAppointmentTypes(result);
            }
        })();
    }, []);

    const handleTabSelect = (label: string) => {
        setActiveTab(label);
        setData(catagories[label]);
    };

    const handleLinePress = () => {
        shrinkCard ? setCardHeight(50) : setCardHeight(330);
        setShrinkCard(!shrinkCard);
    };

    const handleSelection = item => {
        setLoading(true);
        setSelection(item);
        setAppointment({
            reason: item.label,
            details: appointmentTypes[item.type],
        });
        setLoading(false);
    };

    return (
        <Screen test="Book Screen">
            <Header title="Book Visit" onBack={handleBack} />
            <Heading>Please select the main reason for your visit:</Heading>
            <Column
                options={[card, hide_overflow, { flex: 0, height: cardHeight }]}
            >
                <Tabs list={tabs} active setActive={handleTabSelect} />
                <Column options={[{ flex: 0, height: 250 }, pad_v]}>
                    <RadioGroup onSelect={handleSelection} data={data} />
                </Column>
            </Column>
            <Column options={[card, hide_overflow, no_pad_v, no_pad_h]}>
                <ScrollView>
                    <Line options={[pad_v, width_10, grey_dark_br_t_md]} />
                    <Column options={[pad_h]}>
                        <Conditional if={loading && selection}>
                            <ActivityIndicator size="large" />
                        </Conditional>
                        <Conditional if={!loading && selection}>
                            {appointment && (
                                <Heading options={[h3]}>
                                    {`${appointment.details.title}: ${appointment.details.duration} min $${appointment.details.price}`}
                                </Heading>
                            )}
                        </Conditional>
                    </Column>
                    <Expandable onPress={handleLinePress} list={sections} />
                    <Column options={[pad_h, grey_br_t_md, { flex: 0 }]}>
                        <Conditional if={selection}>
                            <Button
                                testID="See Providers"
                                onPress={() =>
                                    navigation.navigate('SelectProvider', {
                                        appointment,
                                    })
                                }
                                style={{
                                    container: [{ marginTop: 10 }],
                                }}
                                title="See Providers"
                            />
                        </Conditional>
                    </Column>
                </ScrollView>
            </Column>
        </Screen>
    );
};

export default Book;
