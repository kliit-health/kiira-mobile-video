import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bool, func} from 'prop-types';
import {Modal, Header, TextButton} from '../../components';
import {useDidMount} from '../../utils/hooks';
import intl from '../../utils/localization';
import {PlanCard} from './sections';
import {getPlans, changePlan} from './actions';
import styles, {modifiers} from './styles';

const ChangePlan = ({
  visible,
  onClose,
  getPlans,
  changePlan,
  loading,
  plans,
  currentPlan,
  subscription,
}) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  useDidMount(() => {
    getPlans();
  });

  const handleClose = () => {
    onClose();
  };

  const handleSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePlanChange = () => {
    handleClose();
  };

  return (
    <Modal visible={visible} styles={modifiers.modal}>
      <Header
        styles={modifiers.header}
        onClose={handleClose}
        title={intl.en.changePlan.title}
      />
      <View style={styles.body}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={styles.container}>
            {plans.map((props) => (
              <PlanCard
                key={props.id}
                onPress={handleSelection}
                selected={selectedPlan.id === props.id}
                disabled={currentPlan.id === props.id}
                {...props}
              />
            ))}
            <TextButton onPress={handlePlanChange} styles={modifiers.button}>
              {intl.en.changePlan.confirm}
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

const mapStateToProps = ({changePlan, authLoadingReducer}) => ({
  plans: changePlan.plans,
  loading: changePlan.loading,
  currentPlan: authLoadingReducer.userData.plan,
  subscription: authLoadingReducer.userData.subscription,
});

const mapDispatchToProps = (dispatch) => ({
  getPlans: () => dispatch(getPlans()),
  changePlan: (details) => dispatch(changePlan(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePlan);
