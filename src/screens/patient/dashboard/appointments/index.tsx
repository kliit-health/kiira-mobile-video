import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import styles, { modifiers } from './style';
import { Container, Header, TextButton } from '~/components';
import Conditional from '~/components/conditional';
import { screenNames } from '~/utils/constants';
import { getAppointmentsList } from '~/redux/reducers/appointments';
import Appointment from './components/appointment';
import { generateDateInfo } from '~/utils/helper';
import moment from 'moment';

const Appointments = ({ navigation }) => {
    const dispatch = useDispatch();

    const userData = useSelector((state: RootState) => state.user.data);
    const visitData = useSelector((state: RootState) => state.appointments);
    const lang = useSelector((state: RootState) => state.language);
    const [visits, setVisits] = useState(visitData);
    const { history } = visitData;

    useEffect(() => {
        dispatch(getAppointmentsList({ uid: userData.uid }));
    }, []);

    useEffect(() => {
        if (history.length) {
            let filtered = history.filter(visit => {
                let appointment = moment(visit.time);
                let now = moment(new Date());
                if (appointment.diff(now, 'hours') >= -1) {
                    return visit;
                }
            });

            filtered = filtered.sort((a, b) => {
                return (
                    parseInt(moment(a.time).format('x')) -
                    parseInt(moment(b.time).format('x'))
                );
            });

            setVisits(filtered);
        } else {
            setVisits([]);
        }
    }, [visitData]);

    const handleNavigation = destination => {
        navigation.navigate(destination);
    };

    const FallBack = () => <View></View>;

    return (
        <Container styles={{ root: { backgroundColor: '#ECFCFF' } }}>
            <Header
                title="Appointments"
                onBack={() => navigation.navigate('Home')}
            />

            <Conditional if={visits.length > 0}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyboardDismissMode={
                        Platform.OS === 'ios' ? 'none' : 'on-drag'
                    }
                    keyboardShouldPersistTaps={
                        Platform.OS === 'ios' ? 'never' : 'always'
                    }
                    data={visits}
                    extraData={visits}
                    decelerationRate={'fast'}
                    renderItem={({ item, index }) => {
                        const date = generateDateInfo(item.time);
                        return (
                            <ErrorBoundary
                                FallbackComponent={FallBack}
                                onError={() => navigation.navigate('Home')}
                            >
                                <Appointment
                                    visit={item}
                                    date={date}
                                    navigation={navigation}
                                />
                            </ErrorBoundary>
                        );
                    }}
                    keyExtractor={index => `${index.id}`}
                />
            </Conditional>

            <Conditional if={!visits.length}>
                <Container>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('../../../../../assets/bell.png')}
                    />
                    <Text style={styles.title}>
                        {lang.appointments.noVisits}
                    </Text>
                    <TextButton
                        styles={modifiers.button}
                        onPress={() =>
                            handleNavigation(screenNames.requestVisit)
                        }
                    >
                        {lang.appointments.scheduleAppointment}
                    </TextButton>
                </Container>
            </Conditional>
        </Container>
    );
};

export default Appointments;
