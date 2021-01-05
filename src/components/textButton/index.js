import React from 'react';
import {shape, node, object, bool, func, string, any, number} from 'prop-types';
import {TouchableOpacity, Text, View} from 'react-native';
import {colors} from '../../utils/constants';
import {mergeStyles} from '../../utils/functions';
import defaultStyles, {modifiers} from './styles';

const TextButton = ({
  styles: customStyles,
  children,
  id,
  outlined,
  onPress,
  disabled,
  hidden,
  secondary,
  link,
  icon: Icon,
  iconColor,
  activeOpacity,
  ...rest
}) => {
  const handlePress = () => {
    onPress(id);
  };

  const styles = {
    root: mergeStyles([
      defaultStyles.root,
      [modifiers.hidden.root, hidden],
      [modifiers.disabled.root, disabled],
      [modifiers.secondary.root, secondary],
      [modifiers.link.root, link],
      customStyles.root,
    ]),
    touchable: mergeStyles([
      defaultStyles.touchable,
      [modifiers.outlined.touchable, outlined],
      [modifiers.secondary.touchable, secondary],
      [modifiers.link.touchable, link],
      customStyles.touchable,
    ]),
    text: mergeStyles([
      defaultStyles.text,
      [modifiers.outlined.text, outlined],
      [modifiers.secondary.text, secondary],
      [modifiers.link.text, link],
      customStyles.text,
    ]),
    icon: [defaultStyles.icon],
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        disabled={disabled || hidden}
        style={styles.touchable}
        onPress={handlePress}
        {...rest}>
        {Icon && (
          <View style={styles.icon}>
            <Icon color={iconColor} />
          </View>
        )}
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

TextButton.displayName = 'TextButton';

TextButton.propTypes = {
  onPress: func,
  outlined: bool,
  children: node,
  disabled: bool,
  secondary: bool,
  hidden: bool,
  activeOpacity: number,
  id: string,
  icon: any,
  iconColor: string,
  link: bool,
  styles: shape({
    root: object,
    touchable: object,
    text: object,
  }),
};

TextButton.defaultProps = {
  onPress: () => {},
  outlined: false,
  disabled: false,
  secondary: false,
  activeOpacity: 0.8,
  icon: undefined,
  iconColor: colors.blueGrey,
  hidden: false,
  link: false,
  styles: {},
};

export default TextButton;
