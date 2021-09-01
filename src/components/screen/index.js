import React from 'react';
import { SafeAreaView } from 'react-native';
import base from './styles';

const Screen = ({ children, options = null }) => {
    return (
        <SafeAreaView
            style={options ? [base.default, ...options] : base.default}
        >
            {children}
        </SafeAreaView>
    );
};

export default Screen;
