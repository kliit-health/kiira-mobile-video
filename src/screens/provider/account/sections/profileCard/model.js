import {getReduxState} from '../../../../../utils/helper';

const {language} = getReduxState();

export const cardDetails = [
  {
    title: language.expertAccount.born,
    dataKey: 'dob',
  },
  {
    title: language.expertAccount.pronouns,
    dataKey: 'pronouns',
  },
  {
    title: language.expertAccount.location,
    dataKey: 'state',
    secondaryKey: 'code',
  },
];
