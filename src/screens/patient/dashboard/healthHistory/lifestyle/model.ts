export const types = {
    polar: 'polar',
    objective: 'objective',
    picker: 'picker',
};

const { polar, objective, picker } = types;
const numbers = [...Array(11).keys()];

export const initialQuestions = [
    {
        dataKey: 'sexuallyActive',
        question: 'Have you been sexually active in the last year?',
        options: [],
        type: polar,
        extra: undefined,
    },
    {
        dataKey: 'partnersGender',
        question: 'Who do you have sex with?',
        options: ['Men', 'Women', 'Other'],
        type: objective,
        extra: undefined,
    },
];

export const extraQuestions = [
    {
        dataKey: 'malePartners',
        question:
            'In the past 12 months, how many sexual partners have you had who were men?',
        options: numbers,
        type: picker,
        extra: 'Number of Partners(Men)',
        link: 'Men',
    },
    {
        dataKey: 'femalePartners',
        question:
            'In the past 12 months, how many sexual partners have you had who were women?',
        options: numbers,
        type: picker,
        extra: 'Number of Partners(Women)',
        link: 'Women',
    },
    {
        dataKey: 'otherPartners',
        question:
            'In the past 12 months, how many sexual partners have you had who do not identify as men or women?',
        options: numbers,
        type: picker,
        extra: 'Number of Partners(Other)',
        link: 'Other',
    },
];
