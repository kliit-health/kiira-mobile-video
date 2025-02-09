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
        title: `account.pharmacy`,
        destination: screenNames.pharmacy,
        icon: icons.pharmacy,
        content: `Please Select`,
    },
    {
        title: `account.emergencyContact`,
        destination: screenNames.emergencyContact,
        icon: icons.emergencyContact,
        content: `Please Add a Contact`,
    }, 
    {
        title: `account.myHealth`,     
        pane: true
    },
    // {
    //     title: `labResults.title`,
    //     destination: screenNames.termsAndConditions,
    //     icon: icons.labResults,
    //     noBorder: true
    // },
    // {
    //     title: `medications.title`,
    //     destination: screenNames.termsAndConditions,
    //     icon: icons.medications,  
    // },
    // {
    //     title: `vaccines.title`,
    //     destination: screenNames.termsAndConditions,
    //     icon: icons.vaccines,  
    // },

    {
        title: `allergies.title`,
        destination: screenNames.Allergies,
        icon: icons.allergies,  
    },
    {
        title: `healthHistory.title`,
        destination: screenNames.MedicalConditions,
        icon: icons.healthHistory, 
    },
];
