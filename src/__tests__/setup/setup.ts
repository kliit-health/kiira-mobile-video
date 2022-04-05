import 'react-native-gesture-handler/jestSetup'; 
jest.mock('react-native-reanimated', () => { 
    const {View} = require('react-native');
    return {
        Value: jest.fn(),
        event: jest.fn(),
        add: jest.fn(),
        eq: jest.fn(),
        set: jest.fn(),
        cond: jest.fn(),
        interpolate: jest.fn(),
        View,
        Extrapolate: { CLAMP: jest.fn() },
        Transition: {
        Together: 'Together',
        Out: 'Out',
        In: 'In',
        },
        Easing: {  
            in: jest.fn(),
            out: jest.fn(),
            inOut: jest.fn(),
        }
};
});
  
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper'); 