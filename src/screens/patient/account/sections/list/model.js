import {screenNames} from '../../../../../utils/constants';
import {getReduxState} from '../../../../../utils/helper';

const {language} = getReduxState();

export default [
  {
    title: language.account.settings,
    destination: screenNames.settings,
  },
  {
    title: language.account.termsAndConditions,
    destination: screenNames.termsAndConditions,
  },
  {
    title: language.account.privacyPolicies,
    destination: screenNames.privacyPolicies,
  },
  {
    title: language.account.help,
    destination: screenNames.help,
  },
];
