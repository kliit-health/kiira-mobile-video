import React from 'react';
import {shape, object, string} from 'prop-types';
import {View, Text} from 'react-native';
import Clock from '../../svgs/clock.svg';
import defaultStyles from './styles';

const TimeDisplay = ({styles: customStyles, time}) => {
  const styles = {
    root: [defaultStyles.root, customStyles.root],
    text: [defaultStyles.text, customStyles.text],
    iconContainer: [defaultStyles.iconContainer, customStyles.iconContainer],
  };

  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        <Clock />
      </View>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

TimeDisplay.propTypes = {
  styles: shape({
    root: object,
  }),
  time: string,
};

TimeDisplay.defaultProps = {
  styles: {},
  time: undefined,
};

TimeDisplay.displayName = 'TimeDisplay';

export default TimeDisplay;
