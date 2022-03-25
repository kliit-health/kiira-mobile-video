import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/reducers';
import Header from '../../../../components/header'
import { Column, Screen, Tabs } from '~/components';
import { Show } from './components';
import { tabs } from './models';
import moment from 'moment';

const Appointments = ({ navigation }) => {
    const visitData:any= useSelector((state: RootState) => state.appointments);
    const [past, setPast] = useState([]);
    const [future, setFuture] = useState([]);
    const [pastSelected, setPastSelected] = useState(false);
    const { history } = visitData;

    useEffect(() => {
        let past = [];
        let future = [];
        if (history.length) {
            history.forEach(visit => {
                if(visit){
                    let appointment = moment(visit.time);
                    let now = moment(new Date());
                    if (appointment.diff(now, 'hours') >= -1) {
                        future.push(visit);
                    } else if (appointment.diff(now, 'hours') <= -1) {
                        past.push(visit);
                    }
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
        }
        setPast(past);
        setFuture(future);
    }, [history]);
    
    const handleTabSelect = () => {
        setPastSelected(!pastSelected);
    };

    return (
        <Screen test="Appointment Screen">
            <Column>
                <Header
                    title="Appointments"
                    onBack={() => navigation.navigate('Home')}
                />
                <Tabs
                    list={tabs}
                    active={pastSelected}
                    setActive={handleTabSelect}
                />
                <Show pastSelected={pastSelected} past={past} future={future} />
            </Column>
        </Screen>
    );
};

export default Appointments;
