import 'react-native';
import renderer from 'react-test-renderer';
import App from '../../App';
import React from 'react';
import BillingAndInsurance from '../screens/common/billingAndInsurance'; 
import EmergencyContact from '../screens/common/emergencyContact';
import Pharmacy from '../screens/common/pharmacy';

test('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toBeDefined();    
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
 


 