import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, ScrollView} from 'react-native';
import {ExpertHeader} from '../../../../components';
import {PatientDetails, VisitDetails} from './components';
import {getExpertsData} from '../../../patient/dashboard/getTreatment/expertSchedule/action';
import Constant from '../../../../utils/constants';

const ExpertVisit = () => {
  const dispatch = useDispatch();

  const medicalHistory = useSelector((state) => state.medicalHistory);
  const {
    appointment: {visit, patientInfo},
  } = medicalHistory;

  const params = {
    expertsParams: {
      tableName: Constant.App.firebaseTableNames.users,
      uid: visit.uid,
    },
  };

  useEffect(() => {
    dispatch(getExpertsData(params));
  }, []);

  return (
    <View style={{flex: 1}}>
      <ExpertHeader title="Appointment Details" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <PatientDetails visit={visit} patientInfo={patientInfo} />
          <VisitDetails visit={visit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExpertVisit;
