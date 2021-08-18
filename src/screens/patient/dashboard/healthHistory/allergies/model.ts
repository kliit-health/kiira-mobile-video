export const types = {
    polar: 'polar',
    objective: 'objective',
};

export const initialQuestions = [
    {
        dataKey: 'medicationAllergic',
        question: 'Do you have any medication allergies?',
        link: '',
        type: types.polar,
    },
    {
        dataKey: 'foodAllergic',
        question: 'Do you have any food allergies?',
        link: '',
        type: types.polar,
    },
];

export const extraQuestions = [
    {
        question: 'Medication allergies:',
        dataKey: 'medicationAllergies',
        options: [
            'Aspirin',
            'Codeine',
            'Erythromycin, Biaxin, Zithromax',
            'NSAIDS (ie: Advil, Motrin)',
            'Penicillins  (ie: Amoxil, amoxicillin, ampicillin, Keflex, cephalexin)',
            'Sulfa drugs (ie: Septra®, Bactrim®, TMP/SMX) ',
            'Tetracycline antibiotics ',
        ],
        link: 'medicationAllergic',
        type: types.objective,
    },
    {
        question: 'Food Allergies:',
        dataKey: 'foodAllergies',
        options: [
            'Shellfish',
            'Wheat',
            'Soy',
            'Nuts',
            'Dairy',
            'Eggs',
            'Other',
        ],
        link: 'foodAllergic',
        type: types.objective,
    },
];
