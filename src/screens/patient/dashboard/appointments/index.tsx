import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import { Column, Header, Screen, Tabs } from '~/components';
import { Show } from './components';
import { tabs } from './models';
import moment from 'moment';
import { default as globalStyles } from '~/components/styles';

const { blue_bg } = globalStyles;

const Appointments = ({ navigation }) => {
    const visitData = useSelector((state: RootState) => state.appointments);
    const [past, setPast] = useState([]);
    const [future, setFuture] = useState([]);
    const [pastSelected, setPastSelected] = useState(false);
    const { history } = visitData;

    useEffect(() => {
        let past = [];
        let future = [];
        if (history.length) {
            history.forEach(visit => {
                let appointment = moment(visit.time);
                let now = moment(new Date());
                if (appointment.diff(now, 'hours') >= -1) {
                    future.push(visit);
                } else if (appointment.diff(now, 'hours') <= -1) {
                    past.push(visit);
                }
            });

            past = past.sort((a, b) => {
                return (
                    parseInt(moment(a.time).format('x')) -
                    parseInt(moment(b.time).format('x'))
                );
            });

            future = future.sort((a, b) => {
                return (
                    parseInt(moment(a.time).format('x')) -
                    parseInt(moment(b.time).format('x'))
                );
            });
            console.log('Past: ', past);
            setPast(past);
            setFuture(future);
        }
    }, []);

    return (
        <Screen>
            <Column options={[blue_bg]}>
                <Header
                    title="Appointments"
                    onBack={() => navigation.navigate('Home')}
                />
                <Tabs
                    list={tabs}
                    pastSelected={pastSelected}
                    setPastSelected={setPastSelected}
                />
                <Show pastSelected={pastSelected} past={past} future={future} />
            </Column>
        </Screen>
    );
};

export default Appointments;
