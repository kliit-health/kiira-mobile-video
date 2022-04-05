import { screenNames } from '~/utils/constants';

export default [
    {
        title: `healthHistory.basicInfo`,
        destination: screenNames.BasicInfo,
        dataKey: 'basicInfo',
    },
    {
        title: `healthHistory.pregnancy`,
        destination: screenNames.PregnancyAndChildren,
        dataKey: 'pregnancyHistory',
    },
    {
        title: `healthHistory.lifestyle`,
        destination: screenNames.LifeStyle,
        dataKey: 'lifestyle',
    },
    {
        title: `healthHistory.allergies`,
        destination: screenNames.Allergies,
        dataKey: 'allergies',
    },
    {
        title: `healthHistory.medications`,
        destination: screenNames.Medications,
        dataKey: 'medications',
    },
    {
        title: `healthHistory.medicalHistory`,
        destination: screenNames.MedicalHistory,
        dataKey: 'medicalHistory',
    },
];
