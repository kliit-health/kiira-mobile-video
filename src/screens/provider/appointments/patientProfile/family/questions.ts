export const questions = [
    {
        question: 'Has the patient had any of the following major illnesses?',
        options: [
            { title: 'Heart Disease', key: 'heartDisease', section: 'disease' },
            {
                title: 'High cholesterol',
                key: 'highChlesterol',
                section: 'disease',
            },
            { title: 'Hepatitis', key: 'hepatitis', section: 'disease' },
            {
                title: 'Liver problems',
                key: 'liverProblems',
                section: 'disease',
            },
            {
                title: 'Kidney Infections / Stones',
                key: 'kidney',
                section: 'disease',
            },
            { title: 'Arthritis', key: 'arthritis', section: 'disease' },
            { title: 'Joint Pain', key: 'jointPain', section: 'disease' },
            { title: 'Fracture', key: 'fracture', section: 'disease' },
            { title: 'Anxiety', key: 'anxiety', section: 'disease' },
            { title: 'Depression', key: 'depression', section: 'disease' },
            { title: 'Seizures', key: 'seizures', section: 'disease' },
            { title: 'Asthma', key: 'asthma', section: 'disease' },
            { title: 'Lung disease', key: 'lungDisease', section: 'disease' },
            { title: 'Tuberculosis', key: 'tuberculosis', section: 'disease' },
            {
                title: 'Thyroid disease',
                key: 'thyroidDisease',
                section: 'disease',
            },
            {
                title: 'Clotting disorder',
                key: 'clottingDisorder',
                section: 'disease',
            },
            { title: 'Diabetes', key: 'diabetes', section: 'disease' },
            {
                title: 'High Blood Pressure',
                key: 'highBloodPressure',
                section: 'disease',
            },
            {
                title: 'GI Reflux disease',
                key: 'refluxDisease',
                section: 'disease',
            },
            { title: 'Other GI disease', key: 'giDisease', section: 'disease' },
            { title: 'Fibroids', key: 'fibroids', section: 'disease' },
            {
                title: 'Endometriosos',
                key: 'endometriosos',
                section: 'disease',
            },
            { title: 'Osteopenia', key: 'osteopenia', section: 'disease' },
            { title: 'Osteoporosis', key: 'osteoporosis', section: 'disease' },
            {
                title: 'Patient has never had any of the conditions above',
                key: 'none',
                section: 'disease',
            },
        ],
    },
    {
        question:
            'Is there a family history of diseases or syndromes not previously mentioned?',
        textPrompt: 'Please Type details.',
        key: 'rareDisease',
    },
    {
        question: 'Has anyone in patients family been diagnosed with cancer?',
        textPrompt: 'Please Type cancer details.',
        key: 'cancer',
    },
];
