import {screenNames} from '../../../../utils/constants';
import {getReduxState} from '../../../../utils/helper';

const {language} = getReduxState();

export default [
  {
    title: language.healthHistory.basicInfo,
    destination: screenNames.BasicInfo,
    dataKey: 'basicInfo',
  },
  {
    title: language.healthHistory.pregnancy,
    destination: screenNames.PregnancyAndChildren,
    dataKey: 'pregnancyHistory',
  },
  {
    title: language.healthHistory.lifestyle,
    destination: screenNames.LifeStyle,
    dataKey: 'lifestyle',
  },
  {
    title: language.healthHistory.allergies,
    destination: screenNames.Allergies,
    dataKey: 'allergies',
  },
  {
    title: language.healthHistory.medications,
    destination: screenNames.Medications,
    dataKey: 'medications',
  },
  {
    title: language.healthHistory.medicalHistory,
    destination: screenNames.MedicalHistory,
    dataKey: 'medicalHistory',
  },
];
