import React from 'react';
import { View } from 'react-native';
import { Screen, Header } from '~/components';
import { handleBack } from '~/utils/functions/handleNavigation';

const Payment = () => {
    return (
        <Screen>
            <Header onBack={handleBack} title="Book Visit" />
        </Screen>
    );
};

export default Payment;
