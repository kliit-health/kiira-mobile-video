import { screenNames } from '~/utils/constants';
import { icons } from '../../../../../utils/constants';

export default [
    {
        title: `account.billingAndInsurance`,
        destination: screenNames.billingAndInsurance,
        icon: icons.billing,
        content: `Add Insurance`,
    },
    {
        title: `account.settings`,
        destination: screenNames.settings,
    },
    {
        title: `account.termsAndConditions`,
        destination: screenNames.termsAndConditions,
    },
    {
        title: `account.privacyPolicies`,
        destination: screenNames.privacyPolicies,
    },
    {
        title: `account.help`,
        destination: screenNames.help,
    },
];
