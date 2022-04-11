import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { bool, func } from 'prop-types';
import { Modal, Header, TextButton } from '~/components';
import { useDidMount } from '~/utils/hooks';
import { PlanCard } from './sections';
import { getPlans, updatePlan } from '~/redux/actions';
import styles, { modifiers } from './styles';

const ChangePlan = ({
    visible,
    onClose,
    getPlans,
    updatePlan,
    loading,
    plans,
    plan,
    subscription,
}) => {
    const [selectedPlan, setSelectedPlan] = useState({ id: '' });
    const language = useSelector((state: any) => state.language);
    useDidMount(() => {
        getPlans();
    });

    const handleClose = () => {
        onClose();
    };

    const handleSelection = plan => {
        setSelectedPlan(plan);
    };

    const handlePlanChange = () => {
        updatePlan({
            subscriptionId: subscription.id,
            planId: selectedPlan.id,
        });
        handleClose();
    };

    return (
        <Modal visible={visible} styles={modifiers.modal} onBackdropPress={null}>
            <Header
                styles={modifiers.header}
                onClose={handleClose}
                title={language.changePlan.title}
            />
            <View style={styles.body}>
                {loading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <View style={styles.container}>
                        {plans.map(props => (
                            <PlanCard
                                key={props.id}
                                onPress={handleSelection}
                                selected={selectedPlan.id === props.id}
                                disabled={plan.id === props.id}
                                {...props}
                            />
                        ))}
                        <TextButton
                            onPress={handlePlanChange}
                            styles={modifiers.button}
                        >
                            {language.changePlan.confirm}
                        </TextButton>
                    </View>
                )}
            </View>
        </Modal>
    );
};

ChangePlan.propTypes = {
    visible: bool,
    onClose: func,
    loading: bool,
};

ChangePlan.defaultProps = {
    visible: false,
    onClose: () => {},
    loading: false,
};

const mapStateToProps = ({ plans, plan, subscription, language }) => ({
    plans: plans.data,
    loading: plans.loading,
    plan: plan.data,
    subscription: subscription.data,
    language: language,
});

const mapDispatchToProps = dispatch => ({
    getPlans: () => dispatch(getPlans()),
    updatePlan: details => dispatch(updatePlan(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePlan);
