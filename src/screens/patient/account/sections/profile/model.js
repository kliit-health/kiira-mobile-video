import {getReduxState} from '../../../../../utils/helper';

const {language} = getReduxState();

export const cardDetails = [
  {
    title: language.account.born,
    dataKey: 'dob',
  },
  {
    title: language.account.pronouns,
    dataKey: 'pronouns',
  },
  {
    title: language.account.sexuality,
    dataKey: 'sexuality',
    secondaryKey: 'value',
  },
];
