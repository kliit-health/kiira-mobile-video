import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Random from 'random-id';
import {
  Dimensions,
  Keyboard,
  TextInput,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
import {CustomStep, OptionsStep, TextStep} from './steps/steps';
import schema from './schemas/schema';
import ChatBotContainer from './ChatBotContainer';
import InputView from './InputView';
import Footer from './Footer';
import Button from './Button';
import ButtonText from './ButtonText';
import {SafeAreaView} from 'react-navigation';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const {height, width} = Dimensions.get('window');

class ChatBot extends Component {
  public state: any;
  public keyboardDidShowListener: any;
  public keyboardDidHideListener: any;
  public props: any;
  public setState: any;
  public scrollView: any;
  public inputRef: any;
  public botDelay: any;
  public botAvatar: any;
  public botBubbleColor: any;
  public botFontColor: any;
  public customDelay: any;
  public customLoadingColor: any;
  public userDelay: any;
  public userAvatar: any;
  public userBubbleColor: any;
  public userFontColor: any;
  public optionBubbleColor: any;
  public optionFontColor: any;
  public message: any;
  public renderedSteps: any;
  public previousSteps: any;
  public inputValue: any;
  public defaultUserSettings: any;
  public currentStep: any;
  public id: any;
  public value: any;
  public metadata: any;
  public steps: any;
  public previousStep: any;
  public length: any;
  public avatarStyle: any;
  public avatarWrapperStyle: any;
  public bubbleStyle: any;
  public userBubbleStyle: any;
  public optionStyle: any;
  public optionElementStyle: any;
  public customStyle: any;
  public hideBotAvatar: any;
  public hideUserAvatar: any;
  public options: any;
  public component: any;
  public asMessage: any;
  public editable: any;
  public inputInvalid: any;
  public className: any;
  public contentStyle: any;
  public footerStyle: any;
  public headerComponent: any;
  public inputAttributes: any;
  public inputStyle: any;
  public keyboardVerticalOffset: any;
  public placeholder: any;
  public style: any;
  public submitButtonStyle: any;
  public submitButtonContent: any;
  public scrollViewProps: any;
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      renderedSteps: [],
      previousSteps: [],
      currentStep: {},
      previousStep: {},
      steps: {},
      editable: false,
      inputValue: '',
      inputInvalid: false,
      defaultUserSettings: {},
    };

    this.getStepMessage = this.getStepMessage.bind(this);
    this.getTriggeredStep = this.getTriggeredStep.bind(this);
    this.generateRenderedStepsById = this.generateRenderedStepsById.bind(this);
    this.renderStep = this.renderStep.bind(this);
    this.triggerNextStep = this.triggerNextStep.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.setContentRef = this.setContentRef.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
    this.setScrollViewScrollToEnd = this.setScrollViewScrollToEnd.bind(this);

    // instead of using a timeout on input focus/blur we can listen for the native keyboard events
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.setScrollViewScrollToEnd,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.setScrollViewScrollToEnd,
    );
  }

  componentWillMount() {
    const {
      botDelay,
      botAvatar,
      botBubbleColor,
      botFontColor,
      customDelay,
      customLoadingColor,
      userDelay,
      userAvatar,
      userBubbleColor,
      userFontColor,
      optionBubbleColor,
      optionFontColor,
    } = this.props;
    const steps = {};

    const defaultBotSettings = {
      delay: botDelay,
      avatar: botAvatar,
      bubbleColor: '#F0F0F0',
      fontColor: 'black',
      optionBubbleColor: optionBubbleColor,
      optionFontColor: optionFontColor,
    };
    const defaultUserSettings = {
      delay: userDelay,
      avatar: userAvatar,
      bubbleColor: '#3591F6',
      fontColor: userFontColor,
    };
    const defaultCustomSettings = {
      delay: customDelay,
      loadingColor: customLoadingColor,
    };

    for (let i = 0, len = this.props.steps.length; i < len; i += 1) {
      const step = this.props.steps[i];
      let settings = {};

      if (step.user) {
        settings = defaultUserSettings;
      } else if (step.message || step.asMessage || step.options) {
        settings = defaultBotSettings;
      } else if (step.component) {
        settings = defaultCustomSettings;
      }

      steps[step.id] = Object.assign({}, settings, schema.parse(step));
    }

    schema.checkInvalidIds(steps);

    const firstStep = this.props.steps[0];

    if (firstStep.message) {
      const {message} = firstStep;
      firstStep.message = typeof message === 'function' ? message() : message;
      steps[firstStep.id].message = firstStep.message;
    }

    const currentStep = firstStep;
    const renderedSteps = [steps[currentStep.id]];
    const previousSteps = [steps[currentStep.id]];

    this.setState({
      defaultUserSettings,
      steps,
      currentStep,
      renderedSteps,
      previousSteps,
    });
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onButtonPress() {
    const {renderedSteps, previousSteps, inputValue, defaultUserSettings} =
      this.state;
    let {currentStep} = this.state;

    const isInvalid = currentStep.validator && this.checkInvalidInput();

    if (!isInvalid) {
      const step = {
        message: inputValue,
        value: inputValue,
      };

      currentStep = Object.assign({}, defaultUserSettings, currentStep, step);

      renderedSteps.push(currentStep);
      previousSteps.push(currentStep);

      this.setState({
        currentStep,
        renderedSteps,
        previousSteps,
        editable: false,
        inputValue: '',
      });
    }
  }

  getStepMessage(message) {
    const {previousSteps} = this.state;
    const lastStepIndex =
      previousSteps.length > 0 ? previousSteps.length - 1 : 0;
    const steps = this.generateRenderedStepsById();
    const previousValue = previousSteps[lastStepIndex].value;
    return typeof message === 'function'
      ? message({previousValue, steps})
      : message;
  }

  getTriggeredStep(trigger, value?, selection?) {
    const steps = this.generateRenderedStepsById();
    return typeof trigger === 'function'
      ? trigger({value, steps, selection})
      : trigger;
  }

  setContentRef(c) {
    this.scrollView = c;
  }

  setInputRef(c) {
    this.inputRef = c;
  }

  setScrollViewScrollToEnd() {
    this.scrollView.scrollToEnd();
  }

  handleEnd() {
    const {previousSteps} = this.state;

    const renderedSteps = previousSteps.map(step => {
      const {id, message, value, metadata} = step;
      return {id, message, value, metadata};
    });

    const steps = [];

    for (let i = 0, len = previousSteps.length; i < len; i += 1) {
      const {id, message, value, metadata} = previousSteps[i];
      steps[id] = {id, message, value, metadata};
    }

    const values = previousSteps
      .filter(step => step.value)
      .map(step => step.value);

    if (this.props.handleEnd) {
      this.props.handleEnd({renderedSteps, steps, values});
    }
  }

  triggerNextStep(data) {
    const {renderedSteps, previousSteps, steps, defaultUserSettings} =
      this.state;
    let {currentStep, previousStep} = this.state;
    const isEnd = currentStep.end;

    if (data && data.value) {
      currentStep.value = data.value;
    }
    if (data && data.selection) {
      currentStep.selection = data.selection;
    }
    if (data && data.trigger) {
      currentStep.trigger = this.getTriggeredStep(
        data.trigger,
        data.value,
        data.selection,
      );
    }

    if (isEnd) {
      this.handleEnd();
    } else if (currentStep.options && data) {
      const option = currentStep.options.filter(o => o.value === data.value)[0];
      const trigger = this.getTriggeredStep(
        option.trigger,
        currentStep.value,
        currentStep.selection,
      );
      delete currentStep.options;

      currentStep = Object.assign(
        {},
        currentStep,
        option,
        defaultUserSettings,
        {
          user: true,
          message: option.label,
          trigger,
        },
      );

      renderedSteps.pop();
      previousSteps.pop();
      renderedSteps.push(currentStep);
      previousSteps.push(currentStep);

      this.setState({
        currentStep,
        renderedSteps,
        previousSteps,
      });
    } else if (currentStep.trigger) {
      const isReplace = currentStep.replace && !currentStep.option;

      if (isReplace) {
        renderedSteps.pop();
      }

      const trigger = this.getTriggeredStep(
        currentStep.trigger,
        currentStep.value,
        currentStep.selection,
      );
      let nextStep = Object.assign({}, steps[trigger]);

      if (nextStep.message) {
        nextStep.message = this.getStepMessage(nextStep.message);
      } else if (nextStep.update) {
        const updateStep = nextStep;
        nextStep = Object.assign({}, steps[updateStep.update]);

        if (nextStep.options) {
          for (let i = 0, len = nextStep.options.length; i < len; i += 1) {
            nextStep.options[i].trigger = updateStep.trigger;
          }
        } else {
          nextStep.trigger = updateStep.trigger;
        }
      }

      nextStep.key = Random(24);

      previousStep = currentStep;
      currentStep = nextStep;

      if (nextStep.user) {
        this.setState({editable: true});
        Platform.OS === 'ios'
          ? this.inputRef.focus()
          : setTimeout(() => this.inputRef.focus(), 50);
      } else {
        renderedSteps.push(nextStep);
        previousSteps.push(nextStep);
      }

      this.setState({
        renderedSteps,
        previousSteps,
        currentStep,
        previousStep,
      });

      // Keyboard.dismiss();
    }
  }

  generateRenderedStepsById() {
    const {previousSteps} = this.state;
    const steps = {};

    for (let i = 0, len = previousSteps.length; i < len; i += 1) {
      const {id, message, value, metadata} = previousSteps[i];
      steps[id] = {id, message, value, metadata};
    }

    return steps;
  }

  isLastPosition(step) {
    const {renderedSteps} = this.state;
    const {length} = renderedSteps;
    const stepIndex = renderedSteps.map(s => s.key).indexOf(step.key);

    if (length <= 1 || stepIndex + 1 === length) {
      return true;
    }

    const nextStep = renderedSteps[stepIndex + 1];
    const hasMessage = nextStep.message || nextStep.asMessage;

    if (!hasMessage) {
      return true;
    }

    const isLast = step.user !== nextStep.user;
    return isLast;
  }

  isFirstPosition(step) {
    const {renderedSteps} = this.state;
    const stepIndex = renderedSteps.map(s => s.key).indexOf(step.key);

    if (stepIndex === 0) {
      return true;
    }

    const lastStep = renderedSteps[stepIndex - 1];
    const hasMessage = lastStep.message || lastStep.asMessage;

    if (!hasMessage) {
      return true;
    }

    const isFirst = step.user !== lastStep.user;
    return isFirst;
  }

  handleKeyPress(event) {
    if (event.nativeEvent.key === 'Enter') {
      this.onButtonPress();
    }
  }

  checkInvalidInput() {
    const {currentStep, inputValue} = this.state;
    const result = currentStep.validator(inputValue);
    const value = inputValue;

    if (typeof result !== 'boolean' || !result) {
      this.setState({
        inputValue: result.toString(),
        inputInvalid: true,
        editable: false,
      });

      setTimeout(() => {
        this.setState({
          inputValue: value,
          inputInvalid: false,
          editable: true,
        });
        this.inputRef.focus();
      }, 2000);

      return true;
    }

    return false;
  }

  renderStep(step, index?) {
    const {renderedSteps, previousSteps} = this.state;
    const {
      avatarStyle,
      avatarWrapperStyle,
      bubbleStyle,
      userBubbleStyle,
      optionStyle,
      optionElementStyle,
      customStyle,
      customDelay,
      hideBotAvatar,
      hideUserAvatar,
    } = this.props;
    const {options, component, asMessage} = step;
    const steps = {};
    const stepIndex = renderedSteps.map(s => s.id).indexOf(step.id);
    const previousStep = stepIndex > 0 ? renderedSteps[index - 1] : {};

    for (let i = 0, len = previousSteps.length; i < len; i += 1) {
      const ps = previousSteps[i];

      steps[ps.id] = {
        id: ps.id,
        message: ps.message,
        value: ps.value,
      };
    }

    if (component && !asMessage) {
      return (
        <CustomStep
          key={index}
          delay={customDelay}
          step={step}
          steps={steps}
          style={customStyle}
          previousStep={previousStep}
          triggerNextStep={this.triggerNextStep}
        />
      );
    }

    if (options) {
      return (
        <OptionsStep
          key={index}
          step={step}
          triggerNextStep={this.triggerNextStep}
          optionStyle={optionStyle || bubbleStyle}
          optionElementStyle={optionElementStyle || bubbleStyle}
        />
      );
    }

    return (
      <TextStep
        key={index}
        step={step}
        steps={steps}
        previousValue={previousStep.value}
        triggerNextStep={this.triggerNextStep}
        avatarStyle={avatarStyle}
        avatarWrapperStyle={avatarWrapperStyle}
        bubbleStyle={bubbleStyle}
        userBubbleStyle={userBubbleStyle}
        hideBotAvatar={hideBotAvatar}
        hideUserAvatar={hideUserAvatar}
        isFirst={this.isFirstPosition(step)}
        isLast={this.isLastPosition(step)}
      />
    );
  }

  render() {
    const {currentStep, editable, inputInvalid, inputValue, renderedSteps} =
      this.state;

    const {
      botBubbleColor,
      botFontColor,
      className,
      contentStyle,
      footerStyle,
      headerComponent,
      inputAttributes,
      inputStyle,
      keyboardVerticalOffset,
      placeholder,
      style,
      submitButtonStyle,
      submitButtonContent,
      scrollViewProps,
    } = this.props;

    const styles = StyleSheet.create({
      input: {
        borderWidth: 0,
        color: inputInvalid ? '#E53935' : '#4a4a4a',
        fontSize: 14,
        opacity: !editable && !inputInvalid ? 0.5 : 1,
        paddingRight: 16,
        paddingLeft: 16,
        height: 50,
        width: width - 80,
      },
      content: {
        height: height - 50,
        backgroundColor: '#fff',
      },
    });

    const textInputStyle = Object.assign({}, styles.input, inputStyle);
    const scrollViewStyle = Object.assign({}, styles.content, contentStyle);
    const platformBehavior = Platform.OS === 'ios' ? 'padding' : 'height';
    const inputAttributesOverride =
      currentStep.inputAttributes || inputAttributes;

    return (
      <ChatBotContainer className={`rsc ${className}`} style={style}>
        {!!headerComponent && headerComponent}
        <ScrollView
          className="rsc-content"
          style={scrollViewStyle}
          ref={this.setContentRef}
          onContentSizeChange={this.setScrollViewScrollToEnd}
          {...scrollViewProps}>
          {_.map(renderedSteps, this.renderStep)}
        </ScrollView>
        <SafeAreaView>
          <InputView behavior={platformBehavior}>
            <Footer
              className="rsc-footer"
              style={footerStyle}
              disabled={!editable}
              invalid={inputInvalid}
              color={botBubbleColor}>
              <TextInput
                type="textarea"
                style={textInputStyle}
                className="rsc-input"
                placeholder={placeholder}
                ref={this.setInputRef}
                onKeyPress={this.handleKeyPress}
                onChangeText={text => this.setState({inputValue: text})}
                value={inputValue}
                underlineColorAndroid="transparent"
                invalid={inputInvalid}
                editable={editable}
                {...inputAttributesOverride}
              />
              <Button
                className="rsc-button"
                style={submitButtonStyle}
                disabled={!editable}
                onPress={this.onButtonPress}
                invalid={inputInvalid}
                backgroundColor={botBubbleColor}>
                <ButtonText
                  className="rsc-button-text"
                  invalid={inputInvalid}
                  fontColor={'white'}>
                  {submitButtonContent}
                </ButtonText>
              </Button>
            </Footer>
          </InputView>
          {Platform.OS === 'ios' && <KeyboardSpacer />}
        </SafeAreaView>
      </ChatBotContainer>
    );
  }
}

ChatBot.propTypes = {
  avatarStyle: PropTypes.object,
  avatarWrapperStyle: PropTypes.object,
  botAvatar: PropTypes.string,
  botBubbleColor: PropTypes.string,
  botDelay: PropTypes.number,
  botFontColor: PropTypes.string,
  bubbleStyle: PropTypes.object,
  optionStyle: PropTypes.object,
  optionBubbleColor: PropTypes.string,
  optionFontColor: PropTypes.string,
  optionElementStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  customStyle: PropTypes.object,
  customDelay: PropTypes.number,
  customLoadingColor: PropTypes.string,
  className: PropTypes.string,
  handleEnd: PropTypes.func,
  headerComponent: PropTypes.element,
  hideBotAvatar: PropTypes.bool,
  hideUserAvatar: PropTypes.bool,
  footerStyle: PropTypes.object,
  inputAttributes: PropTypes.objectOf(PropTypes.any),
  inputStyle: PropTypes.object,
  keyboardVerticalOffset: PropTypes.number,
  placeholder: PropTypes.string,
  steps: PropTypes.array.isRequired,
  style: PropTypes.object,
  submitButtonStyle: PropTypes.object,
  submitButtonContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  userAvatar: PropTypes.string,
  userBubbleStyle: PropTypes.object,
  userBubbleColor: PropTypes.string,
  userDelay: PropTypes.number,
  userFontColor: PropTypes.string,
  scrollViewProps: PropTypes.object,
};

ChatBot.defaultProps = {
  avatarStyle: {},
  avatarWrapperStyle: {},
  botBubbleColor: '#6E48AA',
  botDelay: 1300,
  botFontColor: 'black',
  bubbleStyle: {},
  optionStyle: {
    borderWidth: 1,
    borderColor: '#509AEC',
    borderRadius: 20,
  },
  optionBubbleColor: '#fff',
  optionFontColor: '#509AEC',
  optionElementStyle: {},
  contentStyle: {},
  customStyle: {},
  customDelay: 0,
  customLoadingColor: '#4a4a4a',
  className: '',
  footerStyle: {},
  handleEnd: undefined,
  hideBotAvatar: false,
  hideUserAvatar: false,
  inputAttributes: {},
  inputStyle: {},
  keyboardVerticalOffset: Platform.OS === 'ios' ? 44 : 0,
  placeholder: 'Type the message ...',
  headerComponent: undefined,
  style: {},
  submitButtonStyle: {},
  submitButtonContent: 'SEND',
  userBubbleStyle: {},
  userBubbleColor: '#fff',
  userDelay: 500,
  userFontColor: '#fff',
  botAvatar:
    'data:image/png;base64,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',
  userAvatar:
    'data:image/png;base64,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',
  scrollViewProps: {},
};

export default ChatBot;
