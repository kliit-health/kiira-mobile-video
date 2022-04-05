import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Header, Container } from '~/components';
import styles from './styles';

const initialState = {
    patient: {
        firstName: '',
        lastName: '',
    },
    visit: {
        date: new Date(),
        locked: '',
        summary: '',
        reason: '',
        assessment: '',
    },
    expert: {
        firstName: '',
        lastName: '',
    },
};

const VisitSummary = ({ navigation }) => {
    const { id } = navigation.state.params;
    const [summary, setSummary] = useState(initialState);
    const data = useSelector(state => state.clientMedicalHistory.data);
    const lang = useSelector(state => state.language);

    useEffect(() => {
        const { appointment, summary, plan } = data.find(
            item => item.appointment.visit.id === id,
        );
        setSummary({
            patient: {
                firstName: appointment.visit.firstName,
                lastName: appointment.visit.lastName,
            },
            visit: {
                date: appointment.visit.time,
                locked: appointment.visit.locked ? 'Yes' : 'No',
                summary: summary.notes || 'None',
                reason: appointment.visit.reason,
                assessment: plan.notes || 'None',
            },
            expert: {
                firstName: appointment.visit.expert.firstName,
                lastName: appointment.visit.expert.lastName,
            },
        });
    }, [data]);

    const handleOnBackPress = () => {
        navigation.goBack();
    };

    const {
        afterVisitSummary,
        visitInformation,
        chiefComplaint,
        assessmentPlan,
        patientName,
        dateAndTime,
        provider,
        locked,
        title,
    } = lang.visitSummary;

    const { patient, visit, expert } = summary;

    return (
        <Container unformatted>
            <Header onBack={handleOnBackPress} title={title} />
            <ScrollView bounces={false} style={styles.root}>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>{visitInformation}</Text>
                    <View style={styles.textContainer}>
                        <Text
                            style={styles.detailsTitle}
                        >{`${patientName}`}</Text>
                        <Text style={styles.detailsDescription}>
                            {`${patient.firstName} ${patient.lastName}`}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={styles.detailsTitle}
                        >{`${dateAndTime}`}</Text>
                        <Text style={styles.detailsDescription}>
                            {moment(visit.date).calendar(null, {
                                sameElse: 'MM/DD/YYYY',
                            })}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text
                            style={styles.detailsTitle}
                        >{`${provider}: `}</Text>
                        <Text
                            style={styles.detailsDescription}
                        >{`${expert.firstName} ${expert.lastName}`}</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.detailsTitle}>{`${locked}`}</Text>
                        <Text style={styles.detailsDescription}>
                            {visit.locked}
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>{chiefComplaint}</Text>
                    <Text style={styles.detailsDescription}>
                        {visit.reason ? visit.reason: ""}
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>{assessmentPlan}</Text>
                    <Text style={styles.detailsDescription}>
                        {visit.assessment}
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>{afterVisitSummary}</Text>
                    <Text style={styles.detailsDescription}>
                        {visit.summary}
                    </Text>
                </View>
            </ScrollView>
        </Container>
    );
};

export default VisitSummary;
