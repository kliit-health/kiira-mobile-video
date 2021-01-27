import {screenNames} from '../../../utils/constants';
import {getReduxState} from '../../../utils/helper';

const {language} = getReduxState();

export const list = [
  {
    title: language.expertAccount.settings,
    destination: screenNames.expertSettings,
  },
  {
    title: language.expertAccount.updateAvailability,
    destination: screenNames.updateAvailability,
  },
  {
    title: language.expertAccount.termsAndConditions,
    destination: screenNames.termsAndConditions,
  },
  {
    title: language.expertAccount.privacyPolicies,
    destination: screenNames.privacyPolicies,
  },
];
