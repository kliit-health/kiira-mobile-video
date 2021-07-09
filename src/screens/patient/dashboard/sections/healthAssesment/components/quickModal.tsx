import React from 'react';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';

import Agreements from '../../../getTreatment/agreements';
import Confirmation from './confirmation';
import ScheduleModal from './scheduleModal';
import { Conditional } from '~/components';

import styles from '../styles';

const QuickModal = ({ navigation }) => {
    const { consentAgreements, assessment } = useSelector(
        state => state.user.data,
    );
    const agreements = useSelector(state => state.agreements);
    const { showModal } = useSelector(state => state.assessment);
    const hasSigned = consentAgreements.length > 0;
    const notScheduled =
        assessment === undefined || assessment === null || showModal;

    return (
        <View style={styles.centeredView}>
            <Conditional if={agreements.data && !hasSigned && showModal}>
                <Agreements navigation={navigation} />
            </Conditional>
            <Conditional if={hasSigned && notScheduled && showModal}>
                <ScheduleModal />
            </Conditional>
            <Conditional if={assessment && assessment.complete === false}>
                <Confirmation />
            </Conditional>
        </View>
    );
};

export default withNavigation(QuickModal);
