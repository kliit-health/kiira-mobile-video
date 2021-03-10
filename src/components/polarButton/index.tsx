import React from 'react';
import {shape, oneOf, object, bool, func} from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import Check from '../../svgs/check.svg';
import Cross from '../../svgs/cross.svg';
import {colors} from '../../utils/constants';
import {mergeStyles} from '../../utils/functions';
import defaultStyles, {modifiers} from './styles';

const PolarButton = ({
  styles: customStyles,
  variant,
  selected,
  onPress,
  ...rest
}) => {
  const defaultVariant = variant === 'yes';
  const color = selected ? colors.white : colors.blue;

  const handlePress = () => {
    onPress(defaultVariant ? true : false);
  };

  const styles = {
    root: mergeStyles([
      defaultStyles.root,
      [modifiers.root, selected],
      customStyles.root,
    ]),

    text: mergeStyles([
      defaultStyles.text,
      [modifiers.text, selected],
      customStyles.text,
    ]),
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.root}
      onPress={handlePress}
      {...rest}>
      {defaultVariant ? <Check color={color} /> : <Cross color={color} />}
      <Text style={styles.text}>{variant.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

PolarButton.propTypes = {
  variant: oneOf(['yes', 'no']),
  selected: bool,
  onPress: func.isRequired,
  styles: shape({
    root: object,
    text: object,
  }),
};

PolarButton.defaultProps = {
  variant: 'yes',
  styles: {},
  selected: false,
};

export default PolarButton;
