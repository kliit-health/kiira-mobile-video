import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import CustomStepContainer from './CustomStepContainer';

class CustomStep extends Component {
    public state: any;
    public props: any;
    public setState: any;
    public delay: any;
    public waitAction: any;
    public step: any;
    public steps: any;
    public previousStep: any;
    public triggerNextStep: any;
    public component: any;
    public loading: any;
    public style: any;
    /* istanbul ignore next */
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };

        this.renderComponent = this.renderComponent.bind(this);
    }

    componentDidMount() {
        const { delay } = this.props;
        const { waitAction } = this.props.step;
        setTimeout(() => {
            this.setState({ loading: false });
            if (!waitAction) {
                this.props.triggerNextStep();
            }
        }, delay);
    }

    renderComponent() {
        const { step, steps, previousStep, triggerNextStep } = this.props;
        const { component } = step;
        return React.cloneElement(component, {
            step,
            steps,
            previousStep,
            triggerNextStep,
        });
    }

    render() {
        const { loading } = this.state;
        const { style, step, delay } = this.props;

        return (
            <CustomStepContainer className="rsc-cs" style={style}>
                {this.renderComponent()}
            </CustomStepContainer>
        );
    }
}

CustomStep.propTypes = {
    delay: PropTypes.number.isRequired,
    step: PropTypes.object.isRequired,
    steps: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    previousStep: PropTypes.object.isRequired,
    triggerNextStep: PropTypes.func.isRequired,
};

export default CustomStep;
