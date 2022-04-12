'use strict';
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
import 'react-native';
import renderer, { act } from 'react-test-renderer';
import React, { useRef } from 'react'; 
import Appointments from '../screens/provider/appointments';  
import ExpertTwillioLogin from '../screens/provider/appointments/twillio/Login';
import Payment from '../screens/patient/dashboard/book/screens/payment';
import ExpertTwillioCalling from '../screens/provider/appointments/twillio/Callling';
import { TwilioVideo } from 'react-native-twilio-video-webrtc';

describe('Testing for reason type in appointment #195', () => {  
    const appointmentTree = renderer.create(<Appointments navigation/>);
    test('appointment', () => {
        expect(appointmentTree).toBeDefined();
        expect(appointmentTree.toJSON()).toMatchSnapshot();
    });  
 
    const expertTwillioLoginTree = renderer.create(<ExpertTwillioLogin navigation/>);
    test('expertTwillioLogin', () => {
        expect(expertTwillioLoginTree).toBeDefined();
        expect(expertTwillioLoginTree.toJSON()).toMatchSnapshot();
    }); 
   
    const paymentTree = renderer.create(<Payment />);
    test('payment', () => {
        expect(paymentTree).toBeDefined();
        expect(paymentTree.toJSON()).toMatchSnapshot();
    });
    
});  
 