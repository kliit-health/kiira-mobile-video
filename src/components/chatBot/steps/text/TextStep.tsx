import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import Img from './Image';
import ImageContainer from './ImageContainer';
import Loading from '../common/Loading';
import TextStepContainer from './TextStepContainer';
import TextMessage from './TextMessage';

class TextStep extends Component {
    public state: any;
    public props: any;
    public setState: any;
    public step: any;
    public component: any;
    public delay: any;
    public waitAction: any;
    public previousValue: any;
    public message: any;
    public steps: any;
    public previousStep: any;
    public triggerNextStep: any;
    public isFirst: any;
    public isLast: any;
    public avatarStyle: any;
    public avatarWrapperStyle: any;
    public bubbleStyle: any;
    public userBubbleStyle: any;
    public hideBotAvatar: any;
    public hideUserAvatar: any;
    public avatar: any;
    public bubbleColor: any;
    public fontColor: any;
    public user: any;
    /* istanbul ignore next */
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };

        this.renderMessage = this.renderMessage.bind(this);
    }

    componentDidMount() {
        const { step } = this.props;
        const { component, delay, waitAction } = step;
        const isComponentWatingUser = component && waitAction;
        setTimeout(() => {
            // this.props.triggerNextStep();
            this.setState({ loading: false });
            if (!isComponentWatingUser) {
                this.props.triggerNextStep();
            }
        }, delay);
    }

    renderMessage() {
        const { previousValue, step } = this.props;
        const { component } = step;
        let { message } = step;

        if (component) {
            const { steps, previousStep, triggerNextStep } = this.props;
            return React.cloneElement(component, {
                step,
                steps,
                previousStep,
                triggerNextStep,
            });
        }

        message = message.replace(/{previousValue}/g, previousValue);

        return message;
    }

    render() {
        const {
            step,
            isFirst,
            isLast,
            avatarStyle,
            avatarWrapperStyle,
            bubbleStyle,
            userBubbleStyle,
            hideBotAvatar,
            hideUserAvatar,
        } = this.props;

        const { avatar, bubbleColor, fontColor, user } = step;
        const showAvatar = user ? !hideUserAvatar : !hideBotAvatar;

        return (
            <TextStepContainer className="rsc-ts" user={user}>
                {isFirst && showAvatar && (
                    <ImageContainer
                        className="rsc-ts-image-container"
                        borderColor={bubbleColor}
                        style={avatarWrapperStyle}
                        user={user}
                    >
                        <Img
                            className="rsc-ts-image"
                            style={avatarStyle}
                            showAvatar={showAvatar}
                            user={user}
                            source={{ uri: avatar }}
                            alt="avatar"
                        />
                    </ImageContainer>
                )}
                <Bubble
                    className="rsc-ts-bubble"
                    style={user ? userBubbleStyle || bubbleStyle : bubbleStyle}
                    user={user}
                    bubbleColor={bubbleColor}
                    showAvatar={showAvatar}
                    isFirst={isFirst}
                    isLast={isLast}
                >
                    {this.state.loading && (
                        <Loading user={user} color={fontColor} />
                    )}
                    {!this.state.loading && (
                        <TextMessage
                            className="rsc-ts-text"
                            fontColor={fontColor}
                        >
                            {this.renderMessage()}
                        </TextMessage>
                    )}
                </Bubble>
            </TextStepContainer>
        );
    }
}

TextStep.propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    step: PropTypes.object.isRequired,
    triggerNextStep: PropTypes.func.isRequired,
    avatarStyle: PropTypes.object.isRequired,
    avatarWrapperStyle: PropTypes.object,
    bubbleStyle: PropTypes.object.isRequired,
    userBubbleStyle: PropTypes.object.isRequired,
    hideBotAvatar: PropTypes.bool.isRequired,
    hideUserAvatar: PropTypes.bool.isRequired,
    previousStep: PropTypes.object,
    previousValue: PropTypes.any,
    steps: PropTypes.object,
};

TextStep.defaultProps = {
    previousStep: {},
    steps: {},
    previousValue: '',
    avatarWrapperStyle: {},
};

export default TextStep;
