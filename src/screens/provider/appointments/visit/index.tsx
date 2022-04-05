import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ExpertHeader } from '~/components';
import { PatientDetails, VisitDetails } from './components';
import { getExpertsData } from '~/redux/reducers/appointments';
import Constant, { tables } from '~/utils/constants';

const ExpertVisit = ({ navigation }) => {
    const dispatch = useDispatch();
    const { visit, patientInfo } = navigation.state.params; 
    const params = {
        expertsParams: {
            tableName: tables.users,
            uid: visit.uid,
        },
    };

    useEffect(() => {
        dispatch(getExpertsData(params));
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ExpertHeader title="Appointment Details" />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1 }}>
                    <PatientDetails visit={visit} patientInfo={patientInfo} />
                    <VisitDetails visit={visit} />
                </View>
            </ScrollView>
        </View>
    );
};

export default withNavigation(ExpertVisit);
