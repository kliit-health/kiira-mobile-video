import {screenNames} from '../../utils/constants';
import intl from '../../utils/localization';

export default [
  {
    title: intl.en.healthHistory.basicInfo,
    destination: screenNames.BasicInfo,
    dataKey: 'basicInfo',
  },
  {
    title: intl.en.healthHistory.pregnancy,
    destination: screenNames.PregnancyAndChildren,
    dataKey: 'pregnancyHistory',
  },
  {
    title: intl.en.healthHistory.lifestyle,
    destination: screenNames.LifeStyle,
    dataKey: 'lifestyle',
  },
  {
    title: intl.en.healthHistory.allergies,
    destination: screenNames.Allergies,
    dataKey: 'allergies',
  },
  {
    title: intl.en.healthHistory.medications,
    destination: screenNames.Medications,
    dataKey: 'medications',
  },
  {
    title: intl.en.healthHistory.medicalHistory,
    destination: screenNames.MedicalHistory,
    dataKey: 'medicalHistory',
  },
  // {
  //   title: intl.en.healthHistory.insurance,
  //   destination: screenNames.Insurance,
  //   dataKey: 'insurance',
  // },
  //   {
  //     title: intl.en.healthHistory.notes,
  //     destination: screenNames.PreviousAppointmentsNotes,
  //     dataKey: '',
  //   },
];
