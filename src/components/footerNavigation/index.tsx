import React from 'react';
import { View } from 'react-native';
import { bool, func, string } from 'prop-types';
import TextButton from '../textButton';
import styles from './styles';

const FooterNavigation = ({
  leftButtonTitle,
  rightButtonTitle,
  hideLeftButton,
  hideRightButton,
  disableLeftButton,
  disableRightButton,
  onLeftButtonPress,
  onRightButotonPress,
}) => {
  return (
    <View style={styles.navigationContainer}>
      <TextButton
        outlined
        hidden={hideLeftButton}
        disabled={disableLeftButton}
        onPress={onLeftButtonPress}>
        {leftButtonTitle}
      </TextButton>
      <View style={styles.gap} />
      <TextButton
        hidden={hideRightButton}
        disabled={disableRightButton}
        onPress={onRightButotonPress}>
        {rightButtonTitle}
      </TextButton>
    </View>
  );
};

FooterNavigation.propTypes = {
  leftButtonTitle: string,
  rightButtonTitle: string,
  hideLeftButton: bool,
  hideRightButton: bool,
  disableLeftButton: bool,
  disableRightButton: bool,
  onLeftButtonPress: func,
  onRightButotonPress: func,
};

FooterNavigation.defaultProps = {
  leftButtonTitle: undefined,
  rightButtonTitle: undefined,
  hideLeftButton: false,
  hideRightButton: false,
  disableLeftButton: false,
  disableRightButton: false,
  onLeftButtonPress: () => {},
  onRightButotonPress: () => {},
};

export default FooterNavigation;
