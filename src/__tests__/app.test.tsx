import 'react-native';
import renderer from 'react-test-renderer';
import App from '../../App';
import Header from '../components/header';
import React from 'react';
import BillingAndInsurance from '../screens/common/billingAndInsurance'; 
import EmergencyContact from '../screens/common/emergencyContact';
import Pharmacy from '../screens/common/pharmacy';
import Appointment from '../screens/patient/dashboard/appointments'; 
import ExpertProfile from '../screens/patient/dashboard/appointments/expertProfile'; 
import RescheduleVisit from '../screens/patient/dashboard/appointments/rescheduleVisit'; 
import Visit from '../screens/patient/dashboard/appointments/visit'; 
import CareSquad from '../screens/patient/dashboard/careSquad'; 
import TreatmentHistory from '../screens/patient/dashboard/careSquad/treatmentHistory'; 
import PatientCard from '../screens/provider/appointments/patientProfile/components/patientCard'; 
import PreviousVisits from '../screens/provider/appointments/patientProfile/previousVisits';  
import VisitInfo from '../screens/provider/appointments/patientProfile/recap/components/visitInfo';  
import PatientDetails from '../screens/provider/appointments/visit/components/patientDetails';  
import AppointmentVisit from '../screens/provider/appointments/visit';  
import ASK from '../screens/provider/ask';  
import ChatExpert from '../screens/provider/ask/chat';  
import Appointments from '../screens/provider/appointments'; 
import PatientProfile from '../screens/provider/appointments/patientProfile';
import ExpertVisit from '../screens/provider/appointments/visit';
import VisitDetails from '../screens/provider/appointments/visit/components/visitDetails';
import ExpertTwillioLogin from '../screens/provider/appointments/twillio/Login';
import ExpertTwillioCalling from '../screens/provider/appointments/twillio/Callling';
import Visits from '../screens/provider/appointments/components/visit'; 
import VisitSummary from '../screens/patient/dashboard/careSquad/visitSummary';

// jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
//     default: () => ({getInitialState: {then: jest.fn()}}),
//     __esModule: true,
//   }));

jest.mock('react-native-device-info', () => require('react-native-device-info/mock'));
jest.mock('react-native-permissions', () => require('react-native-permissions/mock'));
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('../../node_modules/@react-native-firebase/app/lib/internal/RNFBNativeEventEmitter.js', () => { 
    const { EventEmitter } = require('events'); 
    return EventEmitter; 
}); 
jest.mock('react-native-device-info', () => {
return {
    getVersion: () => 4
}
})
/*

test('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toBeDefined();    

    const headerTree = renderer.create(<Header/>);
    expect(headerTree).toBeDefined();

    
});  
 
 
describe('Testing my BillingAndInsurance', () => { 
    const billTree = renderer.create(<BillingAndInsurance navigation/>);
    test('billTree', () => {
        expect(billTree).toBeDefined();
    });

    const toggleModal = require('../screens/common/billingAndInsurance');  
    test('toggleModal', () => {
        expect(toggleModal(null, "insurance", "member")).toBeDefined();
    });

    const canConfirm = require('../screens/common/billingAndInsurance/editModal'); 
    test('canConfirm', () => {
        expect(canConfirm('first&last', 'last', '333-333-3333', '333-333-3333', 'Mother')).toBeTruthy();
        expect(canConfirm('&last', 'last', '333-333-3333', '333-333-3333', 'Mother')).toBeFalsy();
        expect(canConfirm('first&', 'last', '333-333-3333', '333-333-3333', 'Mother')).toBeFalsy();
        expect(canConfirm('first', 'last', '333-333-333', '333-33-3333', 'Mother')).toBeFalsy();
        expect(canConfirm('first', 'last', '333-333-333', '333-33-3333', '')).toBeFalsy();
    });
});

describe('Testing my EmergencyContact', () => {  
    const emergencyTree = renderer.create(<EmergencyContact navigation/>);
    test('emergencyTree', () => {
        expect(emergencyTree).toBeDefined();
    });

    const toggleModal = require('../screens/common/emergencyContact');   
    const emergencyContactInfo= {
        firstName: "firstName",
        lastName: "lastName",
        phoneNumber: "333-333-3333",
        secondNumber: "444-444-4444",
        relationship: "Mother",
    };
    test('toggleModal', () => {
        expect(toggleModal(null, emergencyContactInfo)).toBeDefined();
    });

    const phoneNumberValidation = require('../screens/common/emergencyContact'); 
    test('phoneNumberValidation', () => {
        expect(phoneNumberValidation('333-333-3333')).toBeTruthy();
        expect(phoneNumberValidation('33d-333-3333')).toBeFalsy();
        expect(phoneNumberValidation('333-333-333')).toBeFalsy();
        expect(phoneNumberValidation('333-333-333d')).toBeFalsy();
        expect(phoneNumberValidation('3333333333')).toBeFalsy();
    });

    const setValidPhoneNumber = require('../screens/common/emergencyContact'); 
    test('setValidPhoneNumber', () => {
        expect(setValidPhoneNumber('333-333-3333', true)).toBeTruthy();
        expect(setValidPhoneNumber('333-333-3333', false)).toBeTruthy();
        expect(setValidPhoneNumber('33d-333-3333', true)).toBeFalsy();
        expect(setValidPhoneNumber('33d-333-3333', false)).toBeFalsy();
        expect(setValidPhoneNumber('333-333-333', true)).toBeFalsy();
        expect(setValidPhoneNumber('333-333-333', false)).toBeFalsy();
        expect(setValidPhoneNumber('333-333-333d', true)).toBeFalsy();
        expect(setValidPhoneNumber('333-333-333d', false)).toBeFalsy();
        expect(setValidPhoneNumber('3333333333', true)).toBeFalsy();
        expect(setValidPhoneNumber('3333333333', false)).toBeFalsy();
    }); 

    const canConfirm = require('../screens/common/emergencyContact/editModal'); 
    test('canConfirm', () => {
        expect(canConfirm('first&last', 'last', '333-333-3333', '333-333-3333', 'Mother')).toBeTruthy();
        expect(canConfirm('&last', 'last', '333-333-3333', '333-333-3333', 'Mother')).toBeFalsy();
        expect(canConfirm('first&', 'last', '333-333-3333', '333-333-3333', 'Mother')).toBeFalsy();
        expect(canConfirm('first', 'last', '333-333-333', '333-33-3333', 'Mother')).toBeFalsy();
        expect(canConfirm('first', 'last', '333-333-333', '333-33-3333', '')).toBeFalsy();
    });
});

describe('Testing my Pharmacy', () => {  
    const pharmacyTree = renderer.create(<Pharmacy navigation/>);
    test('pharmacyTree', () => {
        expect(pharmacyTree).toBeDefined();
    });

    const handleOnBackPress = require('../screens/common/Pharmacy');  
    test('handleOnBackPress', () => {
        expect(handleOnBackPress()).toBeDefined();
    }); 
});
 
describe('Testing Appointment and Patient for 181', () => {  
    const appointmentTree = renderer.create(<Appointment navigation/>);
    test('appointment', () => {
        expect(appointmentTree).toBeDefined();
    }); 

    const expertProfileTree = renderer.create(<ExpertProfile navigation/>);
    test('expertProfile', () => {
        expect(expertProfileTree).toBeDefined();
    }); 

    const rescheduleVisitTree = renderer.create(<RescheduleVisit navigation/>);
    test('rescheduleVisit', () => {
        expect(rescheduleVisitTree).toBeDefined();
    }); 

    const visitTree = renderer.create(<Visit navigation/>);
    test('visit', () => {
        expect(visitTree).toBeDefined();
    });

    const CareSquadTree = renderer.create(<CareSquad navigation/>);
    test('careSquad', () => {
        expect(CareSquadTree).toBeDefined();
    });

    const TreatmentHistoryTree = renderer.create(<TreatmentHistory navigation/>);
    test('treatmentHistory', () => {
        expect(TreatmentHistoryTree).toBeDefined();
    });

    const PatientCardTree = renderer.create(<PatientCard visit patientInfo/>);
    test('patientCard', () => {
        expect(PatientCardTree).toBeDefined();
    });

    const PreviousVisitsTree = renderer.create(<PreviousVisits/>);
    test('previousVisits', () => {
        expect(PreviousVisitsTree).toBeDefined();
    });

    const VisitInfoTree = renderer.create(<VisitInfo visit lockTime/>);
    test('visitInfo', () => {
        expect(VisitInfoTree).toBeDefined();
    });

    const PatientDetailsTree = renderer.create(<PatientDetails visit patientInfo/>);
    test('patientDetails', () => {
        expect(PatientDetailsTree).toBeDefined();
    });
    
    const AppointmentVisitTree = renderer.create(<AppointmentVisit/>);
    test('appointmentVisit', () => {
        expect(AppointmentVisitTree).toBeDefined();
    }); 

});


describe('Testing Active Chat for 178', () => {  
    const AskTree = renderer.create(<ASK navigation/>);
    test('ask', () => {
        expect(AskTree).toBeDefined();
    });

    const ChatExpertTree = renderer.create(<ChatExpert path setState flatList navigation
         message imageUri filename staticImages showActionModal/>);
    test('chatExpert', () => {
        expect(ChatExpertTree).toBeDefined();
    });
 
}); 
*/
describe('Testing for reason type in appointment #195', () => {  
    const appointmentTree = renderer.create(<Appointments navigation/>);
    test('appointment', () => {
        expect(appointmentTree).toBeDefined();
        //expect(appointmentTree).toMatchSnapshot();
    }); 

    /*const patientProfileTree = renderer.create(<PatientProfile/>);
    test('patientProfile', () => {
        expect(patientProfileTree).toBeDefined();
    }); 

    const expertVisitTree = renderer.create(<ExpertVisit/>);
    test('expertVisit', () => {
        expect(expertVisitTree).toBeDefined();
    }); 

    const visitDetailsTree = renderer.create(<VisitDetails visit />);
    test('visitDetails', () => {
        expect(visitDetailsTree).toBeDefined();
    }); 
    
    const expertTwillioLoginTree = renderer.create(<ExpertTwillioLogin navigation/>);
    test('expertTwillioLogin', () => {
        expect(expertTwillioLoginTree).toBeDefined();
    }); 

    const expertTwillioCallingTree = renderer.create(<ExpertTwillioCalling navigation/>);
    test('expertTwillioCalling', () => {
        expect(expertTwillioCallingTree).toBeDefined();
    }); 
 
    const visitsTree = renderer.create(<Visits props/>);
    test('visits', () => {
        expect(visitsTree).toBeDefined(); 
    }); 

    const { reason } = require('../screens/provider/appointments/components/visit'); 
    test('reason_visit', () => { 
        expect(reason).toBeInstanceOf(String)
    });

    const { reason: reason_past } = require('../screens/patient/dashboard/appointments/components/past'); 
    test('reason_past', () => { 
        expect(reason_past).toBeInstanceOf(String)
    });

    const { reason: reason_payment } = require('../screens/patient/dashboard/book/screens/payment'); 
    test('reason_payment', () => { 
        expect(reason_payment).toBeInstanceOf(String)
    });

    const visitsSummaryTree = renderer.create(<VisitSummary navigation/>);
    test('visitsSummary', () => {
        expect(visitsSummaryTree).toBeDefined(); 
    });*/
    
}); 